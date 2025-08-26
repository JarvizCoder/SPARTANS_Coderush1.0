import pandas as pd
import xgboost as xgb
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MultiLabelBinarizer, LabelEncoder
import joblib
import os

# Define file paths
DATASET_PATH = 'symptom_disease_augmented.csv'
RF_MODEL_PATH = 'disease_rf_model.pkl'
XGB_MODEL_PATH = 'disease_xgb_model.pkl'
MLB_PATH = 'symptom_mlb.pkl'
LE_PATH = 'disease_label_encoder.pkl'

# ---------- Load Dataset ----------
print(f"Loading dataset from {DATASET_PATH}...")
df = pd.read_csv(DATASET_PATH)

# Identify symptom columns (handles symptom1, symptom2, etc.)
symptom_cols = [col for col in df.columns if col.lower().startswith('symptom')]

# Target column
y = df["disease"]

# ---------- Feature Engineering ----------
# Combine symptoms into a list per row
print("Processing features...")
X_symptoms = df[symptom_cols].values.tolist()
X_symptoms = [[str(s).strip().lower() for s in row if pd.notna(s) and str(s).strip() != ""] for row in X_symptoms]

# Encode symptoms using MultiLabelBinarizer
mlb = MultiLabelBinarizer()
X = mlb.fit_transform(X_symptoms)

# Encode disease labels
le = LabelEncoder()
y_encoded = le.fit_transform(y)

# ---------- Train/Test Split ----------
print("Splitting data into training and testing sets...")
X_train, X_test, y_train, y_test = train_test_split(
    X, y_encoded, test_size=0.2, random_state=42, stratify=y_encoded
)

# ---------- Train Model ----------
print("Training RandomForest model...")
rf_model = RandomForestClassifier(random_state=42)
rf_model.fit(X_train, y_train)

print("Training XGBoost model...")
xgb_model = xgb.XGBClassifier(random_state=42, use_label_encoder=False, eval_metric='mlogloss')
xgb_model.fit(X_train, y_train)

# ---------- Save Model and Encoders ----------
print(f"Saving RandomForest model to {RF_MODEL_PATH}...")
joblib.dump(rf_model, RF_MODEL_PATH)

print(f"Saving XGBoost model to {XGB_MODEL_PATH}...")
joblib.dump(xgb_model, XGB_MODEL_PATH)
joblib.dump(mlb, MLB_PATH)
joblib.dump(le, LE_PATH)

print("\n✅ Model and encoders saved successfully!")
