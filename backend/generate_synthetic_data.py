import pandas as pd
import numpy as np
from itertools import combinations

# Load the original dataset
df = pd.read_csv('symptom_disease_sample.csv')

# Group by disease to find all possible symptoms for each
disease_symptoms = df.groupby('disease').apply(lambda x: set(x.iloc[:, 1:].values.ravel()))
disease_symptoms = disease_symptoms.apply(lambda x: {s for s in x if pd.notna(s) and str(s).strip()})

augmented_data = []
num_samples_per_disease = 100  # Target number of samples per disease

for disease, symptoms in disease_symptoms.items():
    symptoms = list(symptoms)
    if len(symptoms) < 2:
        continue

    generated_count = 0
    while generated_count < num_samples_per_disease:
        # Generate combinations of 2, 3, or 4 symptoms
        num_symptoms_to_combine = np.random.randint(2, min(5, len(symptoms) + 1))
        
        # Get a random combination of symptoms
        symptom_combination = np.random.choice(symptoms, num_symptoms_to_combine, replace=False)
        
        # Create a new row
        new_row = {'disease': disease}
        for i, symptom in enumerate(symptom_combination):
            new_row[f'symptom{i+1}'] = symptom
        
        augmented_data.append(new_row)
        generated_count += 1

# Create a new DataFrame from the augmented data
augmented_df = pd.DataFrame(augmented_data)

# Fill NaN values for consistent column structure
max_symptoms = augmented_df.shape[1] - 1
for i in range(1, max_symptoms + 1):
    if f'symptom{i}' not in augmented_df.columns:
        augmented_df[f'symptom{i}'] = np.nan

# Reorder columns to be disease, symptom1, symptom2, ...
final_columns = ['disease'] + [f'symptom{i}' for i in range(1, max_symptoms + 1)]
augmented_df = augmented_df[final_columns]

# Save to a new CSV file
augmented_df.to_csv('symptom_disease_augmented.csv', index=False)

print(f"✅ Successfully generated {len(augmented_df)} synthetic data points.")
print("New dataset saved to 'symptom_disease_augmented.csv'")
