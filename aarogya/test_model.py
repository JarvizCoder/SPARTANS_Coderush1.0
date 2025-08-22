import pandas as pd
import joblib
import os
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score

print("--- Running test_model.py ---")

# Define file paths
DATASET_PATH = 'symptom_disease_augmented.csv'
MODEL_PATH = 'disease_model.pkl'
MLB_PATH = 'symptom_mlb.pkl'
LE_PATH = 'disease_label_encoder.pkl'

# ---------- Check if files exist ----------
print("Checking for required files...")
for path in [DATASET_PATH, MODEL_PATH, MLB_PATH, LE_PATH]:
    if not os.path.exists(path):
        print(f"❌ ERROR: File not found at {path}. Please run train_disease_model.py first.")
        exit()
print("✅ All required files found.")

# ---------- Load Model and Encoders ----------
print("Loading model and encoders...")
model = joblib.load(MODEL_PATH)
mlb = joblib.load(MLB_PATH)
le = joblib.load(LE_PATH)
print("✅ Model and encoders loaded.")

# ---------- Load Dataset for Testing ----------
print(f"Loading dataset from {DATASET_PATH}...")
df = pd.read_csv(DATASET_PATH)
print(f"✅ Dataset loaded. Shape: {df.shape}")

# Identify symptom columns
symptom_cols = [col for col in df.columns if col.lower().startswith('symptom')]

# Target column
y = df["disease"]

# ---------- Preprocess Data to Get Test Set ----------
print("Processing features to regenerate test set...")
X_symptoms = df[symptom_cols].values.tolist()
X_symptoms = [[str(s).strip().lower() for s in row if pd.notna(s) and str(s).strip() != ""] for row in X_symptoms]

print("Transforming symptoms and labels...")
# Instead of transforming with the loaded mlb, use the entire dataset for evaluation
X = mlb.transform(X_symptoms)
y_encoded = le.transform(y)
print(f"✅ Data transformed. X shape: {X.shape}, y_encoded shape: {y_encoded.shape}")

# Check for feature mismatch
n_features_model = model.n_features_in_ if hasattr(model, 'n_features_in_') else None
print(f"Model expects {n_features_model} features, data has {X.shape[1]} features")

if n_features_model is not None and X.shape[1] != n_features_model:
    print("⚠️ Feature mismatch detected! Adjusting feature matrix...")
    # Option 1: Use only the first n_features_model features
    X = X[:, :n_features_model]
    print(f"✅ Adjusted X shape: {X.shape}")

# ---------- Evaluate Model ----------
print("Evaluating model on the entire dataset...")
y_pred = model.predict(X)
print("✅ Prediction complete.")

# Calculate metrics
print("Calculating metrics...")
accuracy = accuracy_score(y_encoded, y_pred)
precision = precision_score(y_encoded, y_pred, average='weighted', zero_division=0)
recall = recall_score(y_encoded, y_pred, average='weighted', zero_division=0)
f1 = f1_score(y_encoded, y_pred, average='weighted', zero_division=0)
print("✅ Metrics calculated.")

print("\n---------- Evaluation Metrics ----------")
print(f"Accuracy: {accuracy:.4f}")
print(f"Precision (Weighted): {precision:.4f}")
print(f"Recall (Weighted): {recall:.4f}")
print(f"F1-Score (Weighted): {f1:.4f}")
print("\n✅ Evaluation complete.")
