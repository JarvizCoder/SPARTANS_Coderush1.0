import pandas as pd
from xgboost import XGBClassifier
from sklearn.ensemble import RandomForestClassifier
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MultiLabelBinarizer, LabelEncoder
import joblib

# Load the sample dataset
df = pd.read_csv('symptom_disease_sample.csv')

import pandas as pd
import numpy as np
from xgboost import XGBClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MultiLabelBinarizer, LabelEncoder
import joblib

# ---------- Load Dataset ----------
df = pd.read_csv("symptom_disease_sample.csv")

# Identify symptom columns
symptom_cols = [col for col in df.columns if col.lower().startswith("symptom")]

# Target column
y = df["disease"]

# Drop classes with only one sample to enable stratified splitting
class_counts = y.value_counts()
valid_classes = class_counts[class_counts > 1].index
mask = y.isin(valid_classes)
df = df[mask].reset_index(drop=True)
y = df["disease"]

# ---------- Feature Engineering ----------
# Combine symptoms into a list per row
X_symptoms = df[symptom_cols].values.tolist()
X_symptoms = [[str(s).strip().lower() for s in row if str(s) != "nan" and str(s).strip() != ""] for row in X_symptoms]

# Encode symptoms using MultiLabelBinarizer
mlb = MultiLabelBinarizer()
X = mlb.fit_transform(X_symptoms)

# Encode disease labels
le = LabelEncoder()
y_encoded = le.fit_transform(y)

# ✅ Ensure labels are continuous 0..n_classes-1
classes = np.unique(y_encoded)
class_mapping = {old: new for new, old in enumerate(classes)}
y_encoded = np.array([class_mapping[label] for label in y_encoded])

# ---------- Train/Test Split ----------
n_classes = len(np.unique(y_encoded))
min_test_size = n_classes / len(y_encoded)
test_size = max(0.2, min_test_size)
X_train, X_test, y_train, y_test = train_test_split(
    X, y_encoded, test_size=test_size, random_state=42, stratify=y_encoded
)

# ---------- Train Models ----------
# XGBoost needs all possible classes explicitly
classes = np.unique(y_encoded)

xgb_model = XGBClassifier(use_label_encoder=False, eval_metric="mlogloss")
xgb_model.fit(X_train, y_train, eval_set=[(X_test, y_test)], verbose=False)

rf_model = RandomForestClassifier(n_estimators=200, random_state=42)
rf_model.fit(X_train, y_train)

# ---------- Save Models ----------
joblib.dump(xgb_model, "disease_xgb_model.pkl")
joblib.dump(rf_model, "disease_rf_model.pkl")
joblib.dump(mlb, "symptom_mlb.pkl")
joblib.dump(le, "disease_label_encoder.pkl")

print("✅ Models and encoders saved successfully!")


