// Symptom database with categories and descriptions
const symptomsData = [
  {
    id: 'fever',
    name: 'Fever',
    nameHi: 'बुखार',
    category: 'general',
    description: 'Body temperature above the normal range (98.6°F or 37°C)',
    descriptionHi: 'शरीर का तापमान सामान्य से अधिक (98.6°F या 37°C)'
  },
  {
    id: 'cough',
    name: 'Cough',
    nameHi: 'खांसी',
    category: 'chest',
    description: 'A sudden, forceful expulsion of air from the lungs',
    descriptionHi: 'फेफड़ों से हवा का अचानक, जोरदार निकलना'
  },
  {
    id: 'headache',
    name: 'Headache',
    nameHi: 'सिर दर्द',
    category: 'head',
    description: 'Pain or discomfort in the head or face area',
    descriptionHi: 'सिर या चेहरे के क्षेत्र में दर्द या बेचैनी'
  },
  {
    id: 'fatigue',
    name: 'Fatigue',
    nameHi: 'थकान',
    category: 'general',
    description: 'Persistent feeling of tiredness or weakness',
    descriptionHi: 'थकान या कमजोरी का लगातार एहसास'
  },
  {
    id: 'nausea',
    name: 'Nausea',
    nameHi: 'मतली',
    category: 'stomach',
    description: 'Feeling of sickness with an inclination to vomit',
    descriptionHi: 'उल्टी करने की इच्छा के साथ बीमारी का एहसास'
  },
  {
    id: 'dizziness',
    name: 'Dizziness',
    nameHi: 'चक्कर आना',
    category: 'head',
    description: 'Sensation of spinning or lightheadedness',
    descriptionHi: 'घूमने या हल्का सिरदर्द का एहसास'
  },
  {
    id: 'chest_pain',
    name: 'Chest Pain',
    nameHi: 'छाती में दर्द',
    category: 'chest',
    description: 'Discomfort or pain in the chest area',
    descriptionHi: 'छाती के क्षेत्र में बेचैनी या दर्द'
  },
  {
    id: 'shortness_of_breath',
    name: 'Shortness of Breath',
    nameHi: 'सांस लेने में तकलीफ',
    category: 'chest',
    description: 'Difficulty breathing or feeling breathless',
    descriptionHi: 'सांस लेने में कठिनाई या सांस फूलना'
  },
  {
    id: 'abdominal_pain',
    name: 'Abdominal Pain',
    nameHi: 'पेट दर्द',
    category: 'stomach',
    description: 'Pain or discomfort in the stomach area',
    descriptionHi: 'पेट के क्षेत्र में दर्द या बेचैनी'
  },
  {
    id: 'muscle_ache',
    name: 'Muscle Ache',
    nameHi: 'मांसपेशियों में दर्द',
    category: 'limbs',
    description: 'Pain or discomfort in muscles',
    descriptionHi: 'मांसपेशियों में दर्द या बेचैनी'
  },
  {
    id: 'sore_throat',
    name: 'Sore Throat',
    nameHi: 'गला खराब होना',
    category: 'head',
    description: 'Pain, scratchiness or irritation of the throat',
    descriptionHi: 'गले में दर्द, खराश या जलन'
  },
  {
    id: 'runny_nose',
    name: 'Runny Nose',
    nameHi: 'नाक बहना',
    category: 'head',
    description: 'Excess drainage from the nose',
    descriptionHi: 'नाक से अधिक पानी निकलना'
  }
];

// Category translations
const categories = {
  all: { en: 'All', hi: 'सभी' },
  general: { en: 'General', hi: 'सामान्य' },
  head: { en: 'Head', hi: 'सिर' },
  chest: { en: 'Chest', hi: 'छाती' },
  stomach: { en: 'Stomach', hi: 'पेट' },
  limbs: { en: 'Limbs', hi: 'अंग' }
};
