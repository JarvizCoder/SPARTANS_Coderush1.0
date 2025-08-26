import os
from typing import List, Dict, Tuple
import streamlit as st
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import joblib
import difflib
import requests

# Load ML models and encoders
XGB_PATH = 'disease_xgb_model.pkl'
RF_PATH = 'disease_rf_model.pkl'
MLB_PATH = 'symptom_mlb.pkl'
LE_PATH = 'disease_label_encoder.pkl'
xgb_model = None
rf_model = None
mlb = None
le = None
all_symptoms = []
if os.path.exists(XGB_PATH) and os.path.exists(RF_PATH) and os.path.exists(MLB_PATH) and os.path.exists(LE_PATH):
    xgb_model = joblib.load(XGB_PATH)
    rf_model = joblib.load(RF_PATH)
    mlb = joblib.load(MLB_PATH)
    le = joblib.load(LE_PATH)
    all_symptoms = list(mlb.classes_)

app = FastAPI()

# Allow CORS for all origins (for development)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to your FastAPI app!"}

@app.post("/analyze_symptoms")
async def analyze_symptoms(request: Request):
    data = await request.json()
    symptoms = data.get("symptoms", "")
    lang = data.get("lang", "en")
    level, matched, assessment, possible_diseases = triage_rules(symptoms)
    base = format_advice(level, matched)
    final_text = call_llm(symptoms, base, lang=lang)

    # Real-life info block
    real_life_info = ""
    if "cough" in symptoms.lower():
        real_life_info = (
            "A cough can be caused by a variety of conditions including viral infections (like the common cold or flu), allergies, asthma, or even throat irritation. "
            "Most coughs are not serious and improve within a week or two. Drink plenty of fluids, rest, and avoid irritants like smoke. "
            "If your cough lasts more than 3 weeks, is severe, or is accompanied by blood, high fever, shortness of breath, or chest pain, see a doctor immediately."
        )
    elif "fever" in symptoms.lower():
        real_life_info = (
            "Fever is a temporary increase in your body temperature, often due to an illness. Most fevers are caused by infections. "
            "Drink fluids, rest, and take paracetamol if needed. If fever is very high, lasts more than 3 days, or is accompanied by severe symptoms, consult a doctor."
        )
    elif "headache" in symptoms.lower():
        real_life_info = (
            "Headaches can be caused by stress, dehydration, eye strain, or infections. Most headaches are not serious. "
            "Rest, drink water, and avoid loud noises. If your headache is sudden, severe, or accompanied by vision changes, weakness, or vomiting, seek medical help."
        )
    else:
        real_life_info = "No specific real-life info for these symptoms. Please consult a doctor for persistent or worrying symptoms."

    return {
        "level": level,
        "advice": final_text,
        "possible_diseases": possible_diseases,
        "real_life_info": real_life_info
    }

@app.get("/diseases")
def list_diseases():
    return {"diseases": list(DISEASE_DATABASE.keys())}

@app.get("/disease_info")
def disease_info():
    # Add real-life explanations for each disease
    explanations = {
        "diabetes": "Diabetes is a chronic condition where the body cannot properly process sugar. Symptoms include frequent urination, thirst, and fatigue. It can be managed with diet, exercise, and medication. Untreated, it can cause serious complications.",
        "hypertension": "Hypertension (high blood pressure) is when the force of blood against artery walls is too high. It often has no symptoms but can cause headaches or dizziness. Long-term, it increases risk of heart disease and stroke. Management includes lifestyle changes and medication.",
        "flu": "The flu (influenza) is a contagious respiratory illness caused by influenza viruses. It can cause mild to severe illness, and at times can lead to hospitalization or death. Common symptoms include fever, cough, sore throat, runny nose, muscle aches, and fatigue. Prevention includes vaccination and good hygiene.",
        "cold": "The common cold is a viral infection of your nose and throat. Symptoms are usually mild and include runny nose, sore throat, cough, congestion, and sneezing. Most people recover in 7-10 days. Treatment focuses on symptom relief.",
        "malaria": "Malaria is a serious disease transmitted by mosquitoes. It causes fever, chills, and flu-like illness. Without treatment, it can cause severe complications and death. Prevention includes mosquito control and antimalarial drugs.",
        "typhoid": "Typhoid fever is a bacterial infection due to Salmonella typhi. It spreads through contaminated food and water. Symptoms include prolonged fever, headache, nausea, loss of appetite, and sometimes rash. Vaccination and improved sanitation help prevent it.",
        "tuberculosis": "Tuberculosis (TB) is a potentially serious infectious disease that mainly affects the lungs. Symptoms include a persistent cough, chest pain, and coughing up blood. TB spreads through the air when an infected person coughs or sneezes.",
        "asthma": "Asthma is a condition in which your airways narrow and swell and may produce extra mucus. This can make breathing difficult and trigger coughing, wheezing, and shortness of breath. Asthma can often be managed with inhalers and avoiding triggers."
    }
    info = {}
    for disease, data in DISEASE_DATABASE.items():
        info[disease] = {
            "explanation": explanations.get(disease, "No info available."),
            "symptoms": data.get("symptoms", []),
            "risk_factors": data.get("risk_factors", []),
            "treatment": data.get("treatment", []),
            "emergency_signs": data.get("emergency_signs", [])
        }
    return info

@app.post("/predict_disease")
async def predict_disease(request: Request):
    if xgb_model is None or rf_model is None or mlb is None or le is None:
        return {"error": "ML models or encoders not loaded"}
    data = await request.json()
    symptoms = data.get("symptoms", [])
    if not isinstance(symptoms, list):
        return {"error": "Symptoms must be a list"}
    # Fuzzy match input symptoms to known symptoms
    matched_symptoms = []
    for s in symptoms:
        match = difflib.get_close_matches(s, all_symptoms, n=1, cutoff=0.7)
        if match:
            matched_symptoms.append(match[0])
    if not matched_symptoms:
        return {"predicted_disease": None, "confidence": 0.0, "note": "No close symptom matches found."}
    X_input = mlb.transform([matched_symptoms])
    # Get prediction probabilities from both models
    xgb_probs = xgb_model.predict_proba(X_input)[0]
    rf_probs = rf_model.predict_proba(X_input)[0]
    avg_probs = (xgb_probs + rf_probs) / 2
    best_idx = avg_probs.argmax()
    pred_disease = le.inverse_transform([best_idx])[0]
    confidence = float(avg_probs[best_idx])
    return {"predicted_disease": pred_disease, "confidence": confidence, "matched_symptoms": matched_symptoms}

@app.post("/emergency_check")
async def emergency_check(request: Request):
    data = await request.json()
    symptoms = data.get("symptoms", "")
    t = normalize(symptoms)
    is_emergency = any_in(t, EMERGENCY_KEYWORDS)
    return {"emergency": is_emergency}

FASTAPI_URL = "http://127.0.0.1:8000"


# ---------- Language and Translation ----------
LANGUAGES = {
    "English": "en",
    "हिंदी": "hi"
}

TRANSLATIONS = {
    "en": {
        "title": "🩺 Virtual Doctor Assistant",
        "subtitle": "Your friendly health companion for rural areas. Get instant medical guidance.",
        "select_language": "Select Language",
        "disclaimer": "This is a virtual assistant and not a substitute for a real doctor. Please consult a doctor for any serious medical conditions.",
        "symptom_input_label": "💬 Please describe your symptoms in detail (e.g., 'I have a fever and a headache')",
        "analyze_button": "Analyze Symptoms",
        "medical_analysis_tab": "🏥 Medical Analysis",
        "health_assessment_tab": "📊 Health Assessment",
        "telemedicine_tab": "🔗 Telemedicine",
        "summary_tab": "📋 Visit Summary"
    },
    "hi": {
        "title": "🩺 वर्चुअल डॉक्टर असिस्टेंट",
        "subtitle": "ग्रामीण क्षेत्रों के लिए आपका स्वास्थ्य साथी। तुरंत चिकित्सा मार्गदर्शन प्राप्त करें।",
        "select_language": "भाषा चुनें",
        "disclaimer": "यह एक वर्चुअल असिस्टेंट है और वास्तविक डॉक्टर का विकल्प नहीं है। किसी भी गंभीर चिकित्सा स्थिति के लिए कृपया डॉक्टर से सलाह लें।",
        "symptom_input_label": "💬 कृपया अपने लक्षणों का विस्तार से वर्णन करें (जैसे, 'मुझे बुखार और सिरदर्द है')",
        "analyze_button": "लक्षणों का विश्लेषण करें",
        "medical_analysis_tab": "🏥 चिकित्सा विश्लेषण",
        "health_assessment_tab": "📊 स्वास्थ्य मूल्यांकन",
        "telemedicine_tab": "🔗 टेलीमेडिसिन",
        "summary_tab": "📋 सारांश"
    }
}

def get_text(lang_code, key):
    return TRANSLATIONS[lang_code][key]

# ---------- Optional: OpenAI (LLM) ----------
USE_OPENAI = False
try:
    from openai import OpenAI
    # Ensure the API key is set in your environment variables
    if "OPENAI_API_KEY" in os.environ and os.environ["OPENAI_API_KEY"]:
        client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))
        USE_OPENAI = True
        print(f"✅ AI Features: ENABLED (Enhanced Medical Assistant)")
    else:
        print("OPENAI_API_KEY not found or is empty in environment variables. AI features disabled.")
except ImportError:
    print("OpenAI library not found. AI features disabled.")
except Exception as e:
    print(f"❌ OpenAI API connection failed: {e}")
    USE_OPENAI = False

# ---------- Comprehensive Medical Knowledge Base ----------
EMERGENCY_KEYWORDS = [
    "chest pain", "severe chest pain", "unconscious", "fainting", "one side weakness",
    "facial droop", "slurred speech", "heavy bleeding", "severe breathlessness",
    "seizure", "stiff neck with fever", "confusion sudden", "bluish lips",
    "snake bite", "dog bite", "severe burn", "electric shock", "poisoning",
    "severe allergic reaction", "difficulty swallowing", "severe abdominal pain",
    "blood vomiting", "black stool", "severe dehydration", "high fever seizure"
]

DISEASE_DATABASE = {
    "diabetes": {
        "symptoms": ["frequent urination", "excessive thirst", "increased hunger", "weight loss", "fatigue", "blurred vision", "slow healing wounds"],
        "risk_factors": ["family history", "obesity", "sedentary lifestyle", "age over 45", "gestational diabetes"],
        "treatment": ["blood sugar monitoring", "diet control", "exercise", "medication (metformin, insulin)", "regular checkups"],
        "emergency_signs": ["very high blood sugar", "ketoacidosis symptoms", "severe dehydration", "confusion"]
    },
    "hypertension": {
        "symptoms": ["headache", "dizziness", "shortness of breath", "chest pain", "irregular heartbeat", "vision problems"],
        "risk_factors": ["high salt diet", "obesity", "stress", "alcohol", "smoking", "family history"],
        "treatment": ["lifestyle changes", "medication (ACE inhibitors, beta blockers)", "diet modification", "stress management"],
        "emergency_signs": ["severe headache", "chest pain", "difficulty breathing", "vision changes", "confusion"]
    }
}

RULES = [
    {
        "name": "Viral Fever / Influenza",
        "if_any": ["fever", "high temperature", "hot body", "chills", "sweating"],
        "advice": "*FEVER TREATMENT:*\n- Take paracetamol.\n- Drink plenty of fluids.\n- Rest.",
        "level": "self-care"
    },
    {
        "name": "Gastroenteritis / Food Poisoning",
        "if_any": ["diarrhea", "loose stools", "vomiting"],
        "advice": "*DIARRHEA TREATMENT:*\n- Drink ORS solution.\n- Eat a bland diet (BRAT diet).\n- Avoid dairy and spicy food.",
        "level": "priority"
    }
]

def normalize(text: str) -> str:
    return (text or "").lower().strip()

def any_in(text: str, keys: List[str]) -> bool:
    return any(k in text for k in keys)

def all_in(text: str, keys: List[str]) -> bool:
    return all(k in text for k in keys)

class PatientAssessment:
    def __init__(self):
        self.symptoms = []
        self.risk_level = "low"

    def add_symptom(self, symptom: str):
        self.symptoms.append(symptom.lower())

    def assess_risk(self) -> str:
        return self.risk_level

    def get_differential_diagnosis(self) -> List[Dict]:
        possible_diseases = []
        for disease, info in DISEASE_DATABASE.items():
            symptom_match = sum(1 for symptom in self.symptoms if any_in(symptom, info["symptoms"]))
            if symptom_match > 0:
                confidence = (symptom_match / len(info["symptoms"])) * 100
                if confidence >= 20:
                    possible_diseases.append({"disease": disease, "confidence": round(confidence, 1), "info": info})
        possible_diseases.sort(key=lambda x: x["confidence"], reverse=True)
        return possible_diseases[:3]

def extract_medical_info(text: str) -> PatientAssessment:
    assessment = PatientAssessment()
    text_lower = normalize(text)
    symptom_keywords = ["fever", "pain", "cough", "headache", "nausea", "vomiting", "diarrhea"]
    for symptom in symptom_keywords:
        if symptom in text_lower:
            assessment.add_symptom(symptom)
    return assessment

def triage_rules(user_text: str) -> Tuple[str, List[Dict], PatientAssessment, List[Dict]]:
    t = normalize(user_text)
    if any_in(t, EMERGENCY_KEYWORDS):
        return "emergency", [{"name": "Emergency Warning", "advice": "URGENT MEDICAL ATTENTION REQUIRED", "level": "emergency"}], None, None

    assessment = extract_medical_info(user_text)
    possible_diseases = assessment.get_differential_diagnosis()
    matched = []
    for rule in RULES:
        if any_in(t, rule.get("if_any", [])):
            matched.append(rule)

    overall = "self-care"
    if any(r["level"] == "priority" for r in matched):
        overall = "priority"

    return overall, matched, assessment, possible_diseases

def format_advice(level: str, rules: List[Dict]) -> str:
    if not rules:
        return "No specific advice generated. Please consult a doctor."
    return "\n".join([f"{r['name']}\n{r['advice']}" for r in rules])

def call_llm(symptoms: str, base_advice: str, lang: str = 'en') -> str:
    if not USE_OPENAI:
        return base_advice
    try:
        prompt = f"Translate and rephrase the following medical advice for a patient in a rural area. Make it simple, empathetic, and clear. Language: {lang}.\n\nSymptoms reported: '{symptoms}'\n\nMedical Advice:\n{base_advice}"
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "system", "content": "You are a helpful medical assistant."}, {"role": "user", "content": prompt}]
        )
        return response.choices[0].message.content
    except Exception as e:
        print(f"LLM call failed: {e}")
        return base_advice

def main():
    st.set_page_config(
        page_title="🩺 Virtual Doctor Assistant",
        page_icon="🏥",
        layout="centered",
        initial_sidebar_state="collapsed"
    )
    st.sidebar.header("Language / भाषा")
    lang_choice = st.sidebar.selectbox(
        label=get_text("en", "select_language") + " / " + get_text("hi", "select_language"),
        options=list(LANGUAGES.keys()),
    )
    lang_code = LANGUAGES[lang_choice]

    # Fetch all disease info from FastAPI
    try:
        disease_info_response = requests.get(f"{FASTAPI_URL}/disease_info")
        if disease_info_response.status_code == 200:
            all_disease_info = disease_info_response.json()
        else:
            all_disease_info = {}
    except Exception as e:
        all_disease_info = {}

    # Display all diseases and real info
    if all_disease_info:
        st.sidebar.subheader("All Supported Diseases:")
        for disease, info in all_disease_info.items():
            st.sidebar.markdown(f"**{disease.title()}**")
            st.sidebar.write(f"{info['explanation']}")
            st.sidebar.write(f"**Symptoms:** {', '.join(info['symptoms'])}")
            st.sidebar.write(f"**Risk factors:** {', '.join(info['risk_factors'])}")
            st.sidebar.write(f"**Treatment:** {', '.join(info['treatment'])}")
            st.sidebar.write(f"**Emergency signs:** {', '.join(info['emergency_signs'])}")
            st.sidebar.markdown("---")
    else:
        st.sidebar.info("Could not fetch diseases from API.")

    st.title(get_text(lang_code, "title"))
    st.markdown(f"##### {get_text(lang_code, 'subtitle')}")
    st.markdown("---")

    all_symptoms_text = st.text_area(
        get_text(lang_code, "symptom_input_label"),
        height=150,
        placeholder="Type here..."
    )

    # --- ML Model UI Section ---
    st.markdown('---')
    st.subheader('🤖 ML Disease Prediction (Advanced)')
    st.markdown('''<div style="background-color:#f0f2f6;padding:10px;border-radius:8px;">
    <b>How it works:</b> Select symptoms from the checklist or type them below. Our advanced model (XGBoost, multi-symptom support) predicts the most likely disease and offers detailed explanations for rural healthcare.
    </div>''', unsafe_allow_html=True)

    # Use locally loaded symptoms instead of trying to fetch from API
    available_symptoms = []
    if all_symptoms:  # Use symptoms loaded from the model at the top of the file
        available_symptoms = sorted(all_symptoms)
    else:
        # Fallback to a predefined list if model symptoms aren't available
        available_symptoms = [
            "fever", "cough", "fatigue", "difficulty breathing", "headache", 
            "sore throat", "body ache", "runny nose", "nausea", "vomiting", 
            "diarrhea", "chest pain", "abdominal pain", "rash", "joint pain"
        ]

    selected_symptoms = st.multiselect('✔️ Select your symptoms:', available_symptoms)
    symptoms_input = st.text_input('Or type symptoms separated by commas (e.g., fever, cough, headache)')

    # Merge selected and typed symptoms
    symptoms_list = selected_symptoms.copy()
    if symptoms_input:
        symptoms_list += [s.strip() for s in symptoms_input.split(',') if s.strip() and s.strip() not in symptoms_list]

    def run_local_prediction(symptoms_list):
        if xgb_model is not None and rf_model is not None and mlb is not None and le is not None:
            # Fuzzy match input symptoms to known symptoms
            matched_symptoms = []
            for s in symptoms_list:
                match = difflib.get_close_matches(s, all_symptoms, n=1, cutoff=0.7)
                if match:
                    matched_symptoms.append(match[0])
            
            if not matched_symptoms:
                st.info("No close symptom matches found.")
                return

            X_input = mlb.transform([matched_symptoms])
            # Get prediction probabilities from both models
            xgb_probs = xgb_model.predict_proba(X_input)[0]
            rf_probs = rf_model.predict_proba(X_input)[0]
            avg_probs = (xgb_probs + rf_probs) / 2
            best_idx = avg_probs.argmax()
            pred_disease = le.inverse_transform([best_idx])[0]
            confidence = float(avg_probs[best_idx])
            
            st.success(f'Predicted Disease: **{pred_disease}**')
            st.info(f"Confidence Score: {confidence:.2%}")
            st.write(f"Matched Symptoms: {', '.join(matched_symptoms)}")
            
            # Display disease info from local database
            with st.expander('Show Detailed Disease Info', expanded=False):
                if pred_disease in DISEASE_DATABASE:
                    info = DISEASE_DATABASE[pred_disease]
                    st.markdown(f"### {pred_disease.title()} - Details")
                    st.write(f"**Symptoms:** {', '.join(info['symptoms'])}")
                    st.write(f"**Risk factors:** {', '.join(info['risk_factors'])}")
                    st.write(f"**Treatment:** {', '.join(info['treatment'])}")
                    st.write(f"**Emergency signs:** {', '.join(info['emergency_signs'])}")
                else:
                    st.info('No detailed info found for this disease.')
        else:
            st.error("ML models not loaded. Cannot make local predictions.")

    if st.button('🔍 Predict Disease', type="primary"):
        if not symptoms_list:
            st.warning('Please select or enter at least one symptom.')
        else:
            try:
                # Try API first
                response = requests.post(
                    f"{FASTAPI_URL}/predict_disease",
                    json={"symptoms": symptoms_list}
                )
                response.raise_for_status()  # Raise an exception for bad status codes (4xx or 5xx)
                result = response.json()
                # Process API result
                pred = result.get('predicted_disease')
                confidence = result.get('confidence')
                matched = result.get('matched_symptoms', [])
                note = result.get('note', None)
                
                if pred is not None and pred != "":
                    st.success(f'Predicted Disease: **{pred}**')
                    if confidence is not None:
                        st.info(f"Confidence Score: {confidence:.2%}")
                    if matched:
                        st.write(f"Matched Symptoms: {', '.join(matched)}")
                    with st.expander('Show Detailed Disease Info', expanded=False):
                        if pred in DISEASE_DATABASE:
                            info = DISEASE_DATABASE[pred]
                            st.markdown(f"### {pred.title()} - Details")
                            st.write(f"**Symptoms:** {', '.join(info['symptoms'])}")
                            st.write(f"**Risk factors:** {', '.join(info['risk_factors'])}")
                            st.write(f"**Treatment:** {', '.join(info['treatment'])}")
                            st.write(f"**Emergency signs:** {', '.join(info['emergency_signs'])}")
                        else:
                            st.info('No detailed info found for this disease.')
                elif note:
                    st.info(note)
                else:
                    st.info('No prediction could be made. Please try selecting different symptoms.')

            except requests.exceptions.RequestException as e:
                st.warning(f'Could not connect to API: {e}. Using local prediction instead.')
                run_local_prediction(symptoms_list)

    if st.button(get_text(lang_code, "analyze_button"), type="primary"):
        if not all_symptoms_text.strip():
            st.warning("Please describe your symptoms first.")
        else:
            # Call FastAPI endpoint instead of local function
            try:
                response = requests.post(
                    f"{FASTAPI_URL}/analyze_symptoms",
                    json={"symptoms": all_symptoms_text, "lang": lang_code}
                )
                if response.status_code == 200:
                    result = response.json()
                    final_text = result.get("advice", "No advice returned.")
                    possible_diseases = result.get("possible_diseases", [])
                else:
                    final_text = f"API error: {response.status_code}"
                    possible_diseases = []
            except Exception as e:
                final_text = f"Could not connect to API: {e}"
                possible_diseases = []

            # Emergency check via FastAPI
            try:
                emergency_response = requests.post(
                    f"{FASTAPI_URL}/emergency_check",
                    json={"symptoms": all_symptoms_text}
                )
                if emergency_response.status_code == 200:
                    emergency_result = emergency_response.json().get("emergency", False)
                else:
                    emergency_result = None
            except Exception as e:
                emergency_result = None

            tab1, tab2, tab3, tab4 = st.tabs([
                get_text(lang_code, "medical_analysis_tab"),
                get_text(lang_code, "health_assessment_tab"),
                get_text(lang_code, "telemedicine_tab"),
                get_text(lang_code, "summary_tab")
            ])

            with tab1:
                st.markdown(final_text)
                # Show real-life info from FastAPI
                real_life_info = result.get("real_life_info", "")
                if real_life_info:
                    st.info(f"**Real-life info:** {real_life_info}")
                if emergency_result is not None:
                    if emergency_result:
                        st.error("🚨 Emergency detected! Please seek urgent medical attention.")
                    else:
                        st.success("No emergency detected.")
                else:
                    st.info("Could not check emergency status.")
            with tab2:
                st.write("Possible diseases:")
                st.json(possible_diseases)
            with tab3:
                st.write("Telemedicine options here.")
            with tab4:
                st.write("Visit summary here.")

if __name__ == "__main__":
    main()
    st.sidebar.markdown("---")
    st.sidebar.info(get_text("en", "disclaimer"))
    st.sidebar.info(get_text("hi", "disclaimer"))
