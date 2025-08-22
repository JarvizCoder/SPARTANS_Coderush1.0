// Language management
let currentLanguage = 'en'; // Default to English

const translations = {
    hi: {
        brandName: 'स्वास्थ्य साथी',
        titleMain: 'गाँव का डॉक्टर',
        titleSub: 'वर्चुअल डॉक्टर सहायक',
        heroDesc: 'अपने गाँव में ही डॉक्टर की सलाह पाएं',
        startChatText: 'बात करें',
        quickHelpTitle: 'जल्दी मदद',
        quickFever: 'बुखार',
        quickStomach: 'पेट दर्द',
        quickHeadache: 'सिर दर्द',
        quickMedicine: 'दवा',
        quickCough: 'खांसी/जुकाम',
        quickGI: 'उल्टी/दस्त',
        quickChest: 'छाती दर्द',
        quickBack: 'पीठ दर्द',
        quickSkin: 'त्वचा संक्रमण',
        quickPeriods: 'पीरियड समस्या',
        chatWithDoctorTitle: 'डॉक्टर से बात करें',
        speakText: 'बोलें',
        typeText: 'लिखें',
        userInputPlaceholder: 'अपने लक्षण बताएं...',
        emTitle: 'आपातकालीन स्थिति?',
        emLine: 'तुरंत डॉक्टर से बात करें या अस्पताल जाएं',
        callNowText: 'तुरंत कॉल',
        footerBrand: 'गाँव का डॉक्टर',
        footerTagline: 'हर गाँव में स्वास्थ्य सेवा',
        contactTitle: 'संपर्क',
        documentTitle: 'गाँव का डॉक्टर - Virtual Doctor Assistant',
        greet: 'नमस्ते! मैं आपकी कैसे मदद कर सकती हूं? आप अपने लक्षण बता सकते हैं या ऊपर के बटन का उपयोग कर सकते हैं।',
        voiceStart: 'बोलना शुरू करें...',
        voiceErr: 'आवाज पहचानने में समस्या। कृपया लिखकर बताएं।',
        voiceUnsupported: 'आपके ब्राउज़र में आवाज की सुविधा नहीं है।',
        // Suggestion chips
        chipFever: 'बुखार है',
        chipStomach: 'पेट दर्द',
        chipHeadache: 'सिर दर्द',
        chipCough: 'खांसी',
        langChanged: 'भाषा बदल दी गई है। अब मैं इसी भाषा में जवाब दूँगी।',
        // Features section
        featuresTitle: 'हमारी सेवाएं',
        feature1Title: 'लक्षण जांच',
        feature1Desc: 'आपके लक्षणों के आधार पर बीमारी का पता लगाएं',
        feature2Title: 'AI डॉक्टर',
        feature2Desc: 'कंप्यूटर डॉक्टर से तुरंत सलाह पाएं',
        feature3Title: 'वीडियो कॉल',
        feature3Desc: 'असली डॉक्टर से वीडियो पर बात करें',
        feature4Title: 'मेडिकल रिकॉर्ड',
        feature4Desc: 'आपकी बीमारी का रिकॉर्ड सेव करें',
        // How it works
        howTitle: 'कैसे काम करता है',
        step1Title: 'लक्षण बताएं',
        step1Desc: 'चैट या बोलकर अपने लक्षण बताएं',
        step2Title: 'AI जांच',
        step2Desc: 'कंप्यूटर आपकी बीमारी का पता लगाएगा',
        step3Title: 'डॉक्टर से मिलें',
        step3Desc: 'वीडियो कॉल पर डॉक्टर से बात करें',
        step4Title: 'रिकॉर्ड सेव करें',
        step4Desc: 'आपकी जानकारी सुरक्षित रखी जाएगी',
        // Doctors section
        doctorsTitle: 'गाँव के डॉक्टरों के लिए',
        benefit1Title: 'मरीजों का रिकॉर्ड',
        benefit1Desc: 'सभी मरीजों की जानकारी एक जगह',
        benefit2Title: 'बड़े डॉक्टरों से जुड़ें',
        benefit2Desc: 'मुश्किल केस में मदद लें',
        benefit3Title: 'मोबाइल ऐप',
        benefit3Desc: 'कहीं भी मरीजों की देखभाल करें'
    },
    en: {
        brandName: 'Health Companion',
        titleMain: 'Village Doctor',
        titleSub: 'Virtual Doctor Assistant',
        heroDesc: "Get doctor's advice right in your village",
        startChatText: 'Start Chat',
        quickHelpTitle: 'Quick Help',
        quickFever: 'Fever',
        quickStomach: 'Stomach Pain',
        quickHeadache: 'Headache',
        quickMedicine: 'Medicine',
        quickCough: 'Cough/Cold',
        quickGI: 'Vomiting/Diarrhea',
        quickChest: 'Chest Pain',
        quickBack: 'Back Pain',
        quickSkin: 'Skin Infection',
        quickPeriods: 'Period Issues',
        chatWithDoctorTitle: 'Chat with Doctor',
        speakText: 'Speak',
        typeText: 'Type',
        userInputPlaceholder: 'Describe your symptoms...',
        emTitle: 'Emergency?',
        emLine: 'Talk to a doctor immediately or go to hospital',
        callNowText: 'Call Now',
        footerBrand: 'Village Doctor',
        footerTagline: 'Healthcare in every village',
        contactTitle: 'Contact',
        documentTitle: 'Village Doctor - Virtual Doctor Assistant',
        greet: "Hello! How can I help? Describe your symptoms or use the quick buttons above.",
        voiceStart: 'Start speaking...',
        voiceErr: 'Problem recognizing voice. Please type your message.',
        voiceUnsupported: 'Voice feature is not available in your browser.',
        // Suggestion chips
        chipFever: 'I have fever',
        chipStomach: 'Stomach pain',
        chipHeadache: 'Headache',
        chipCough: 'Cough',
        langChanged: 'Language changed. I will respond in this language.',
        // Features section
        featuresTitle: 'Our Services',
        feature1Title: 'Symptom Check',
        feature1Desc: 'Identify illness based on your symptoms',
        feature2Title: 'AI Doctor',
        feature2Desc: 'Get instant advice from the computer doctor',
        feature3Title: 'Video Call',
        feature3Desc: 'Talk to a real doctor on a video call',
        feature4Title: 'Medical Record',
        feature4Desc: 'Save your illness record',
        // How it works
        howTitle: 'How It Works',
        step1Title: 'Tell Symptoms',
        step1Desc: 'Describe symptoms via chat or voice',
        step2Title: 'AI Check',
        step2Desc: 'Computer will identify your illness',
        step3Title: 'Meet Doctor',
        step3Desc: 'Talk to a doctor on a video call',
        step4Title: 'Save Record',
        step4Desc: 'Your information will be kept safe',
        // Doctors section
        doctorsTitle: 'For Village Doctors',
        benefit1Title: 'Patient Records',
        benefit1Desc: 'All patient info in one place',
        benefit2Title: 'Connect with Experts',
        benefit2Desc: 'Get help on difficult cases',
        benefit3Title: 'Mobile App',
        benefit3Desc: 'Care for patients from anywhere'
    },
    mr: {
        brandName: 'आरोग्य सोबती',
        titleMain: 'गावचा डॉक्टर',
        titleSub: 'व्हर्च्युअल डॉक्टर सहाय्यक',
        heroDesc: 'तुमच्या गावातच डॉक्टरांचा सल्ला मिळवा',
        startChatText: 'चॅट सुरू करा',
        quickHelpTitle: 'जलद मदत',
        quickFever: 'ताप',
        quickStomach: 'पोटदुखी',
        quickHeadache: 'डोकेदुखी',
        quickMedicine: 'औषध',
        quickSkin: 'त्वचा संसर्ग',
        chatWithDoctorTitle: 'डॉक्टरांशी बोला',
        speakText: 'बोला',
        typeText: 'टाइप करा',
        userInputPlaceholder: 'तुमची लक्षणे सांगा...',
        emTitle: 'आपत्कालीन स्थिती?',
        emLine: 'तात्काळ डॉक्टरांशी बोला किंवा हॉस्पिटलला जा',
        callNowText: 'आता कॉल करा',
        footerBrand: 'गावचा डॉक्टर',
        footerTagline: 'प्रत्येक गावात आरोग्य सेवा',
        contactTitle: 'संपर्क',
        documentTitle: 'गावचा डॉक्टर - व्हर्च्युअल डॉक्टर सहाय्यक',
        greet: 'नमस्कार! मी कशी मदत करू? तुमची लक्षणे सांगा किंवा वरचे बटण वापरा.',
        voiceStart: 'बोलायला सुरू करा...',
        voiceErr: 'आवाज ओळखण्यात समस्या. कृपया टाइप करा.',
        voiceUnsupported: 'तुमच्या ब्राऊजरमध्ये आवाज सुविधा उपलब्ध नाही.',
        // Suggestion chips
        chipFever: 'मला ताप आहे',
        chipStomach: 'पोटदुखी',
        chipHeadache: 'डोकेदुखी',
        chipCough: 'खोकला',
        // Features section (placeholder translations)
        featuresTitle: 'Our Services',
        feature1Title: 'Symptom Check',
        feature1Desc: 'Identify illness based on your symptoms',
        feature2Title: 'AI Doctor',
        feature2Desc: 'Get instant advice from the computer doctor',
        feature3Title: 'Video Call',
        feature3Desc: 'Talk to a real doctor on a video call',
        feature4Title: 'Medical Record',
        feature4Desc: 'Save your illness record',
        // How it works
        howTitle: 'How It Works',
        step1Title: 'Tell Symptoms',
        step1Desc: 'Describe symptoms via chat or voice',
        step2Title: 'AI Check',
        step2Desc: 'Computer will identify your illness',
        step3Title: 'Meet Doctor',
        step3Desc: 'Talk to a doctor on a video call',
        step4Title: 'Save Record',
        step4Desc: 'Your information will be kept safe',
        // Doctors section
        doctorsTitle: 'For Village Doctors',
        benefit1Title: 'Patient Records',
        benefit1Desc: 'All patient info in one place',
        benefit2Title: 'Connect with Experts',
        benefit2Desc: 'Get help on difficult cases',
        benefit3Title: 'Mobile App',
        benefit3Desc: 'Care for patients from anywhere'
    },
    gu: {
        brandName: 'આરોગ્ય સાથી',
        titleMain: 'ગામનો ડોક્ટર',
        titleSub: 'વર્ચ્યુઅલ ડોક્ટર સહાયક',
        heroDesc: 'તમારા ગામમાં જ ડોક્ટરની સલાહ મેળવો',
        startChatText: 'ચેટ શરૂ કરો',
        quickHelpTitle: 'ઝડપી મદદ',
        quickFever: 'તાવ',
        quickStomach: 'પેટમાં દુખાવો',
        quickHeadache: 'માથાનો દુખાવો',
        quickMedicine: 'દવા',
        quickSkin: 'ત્વચાનો ચેપ',
        chatWithDoctorTitle: 'ડોક્ટર સાથે વાત કરો',
        speakText: 'બોલો',
        typeText: 'ટાઈપ કરો',
        userInputPlaceholder: 'તમારા લક્ષણો બતાવો...',
        emTitle: 'આપાતકાલીન સ્થિતિ?',
        emLine: 'તુરંત ડોક્ટર સાથે વાત કરો અથવા હોસ્પિટલ જાઓ',
        callNowText: 'હમણાં જ કોલ કરો',
        footerBrand: 'ગામનો ડોક્ટર',
        footerTagline: 'દરેક ગામમાં આરોગ્ય સેવા',
        contactTitle: 'સંપર્ક',
        documentTitle: 'ગામનો ડોક્ટર - વર્ચ્યુઅલ ડોક્ટર સહાયક',
        greet: 'નમસ્તે! હું કેવી રીતે મદદ કરી શકું? તમારા લક્ષણો لکھો અથવા ઉપરના બટનો વાપરો.',
        voiceStart: 'બોલવાનું શરૂ કરો...',
        voiceErr: 'આવાજ ઓળખવામાં સમસ્યા. કૃપા કરીને લખો.',
        voiceUnsupported: 'તમારા બ્રાઉઝરમાં અવાજ સુવિધા ઉપલબ્ધ નથી.',
        // Suggestion chips
        chipFever: 'મને તાવ છે',
        chipStomach: 'પેટમાં દુખાવો',
        chipHeadache: 'માથાનો દુખાવો',
        chipCough: 'ખાંસી',
        // Features section
        featuresTitle: 'અમારી સેવાઓ',
        feature1Title: 'લક્ષણ તપાસ',
        feature1Desc: 'તમારા લક્ષણોના આધારે બીમારી ઓળખો',
        feature2Title: 'AI ડોક્ટર',
        feature2Desc: 'કંપનીટર ડોક્ટર પાસેથી તરત સલાહ મેળવો',
        feature3Title: 'વિડિયો કોલ',
        feature3Desc: 'અસલી ડોક્ટર સાથે વિડિયો પર વાત કરો',
        feature4Title: 'મેડિકલ રેકોર્ડ',
        feature4Desc: 'તમારી બીમારીનો રેકોર્ડ સાચવો',
        // How it works
        howTitle: 'કેવી રીતે કામ કરે છે',
        step1Title: 'લક્ષણ કહો',
        step1Desc: 'ચેટ અથવા અવાજથી તમારા લક્ષણ જણાવો',
        step2Title: 'AI તપાસ',
        step2Desc: 'કમ્પ્યુટર તમારી બીમારી ઓળખશે',
        step3Title: 'ડોક્ટરને મલો',
        step3Desc: 'વિડિયો કોલ પર ડોક્ટર સાથે વાત કરો',
        step4Title: 'રેકોર્ડ સાચવો',
        step4Desc: 'તમારી માહિતી સુરક્ષિત રહેશે',
        // Doctors section
        doctorsTitle: 'ગામના ડોક્ટરો માટે',
        benefit1Title: 'પેશન્ટ રેકોર્ડ',
        benefit1Desc: 'બધા પેશન્ટની માહિતી એક જગ્યાએ',
        benefit2Title: 'એકસ્પર્ટ્સ સાથે જોડાવો',
        benefit2Desc: 'મુશ્કેલ કેસમાં મદદ મેળવો',
        benefit3Title: 'મોબાઈલ એપ',
        benefit3Desc: 'ક્યાંયથી પણ પેશન્ટની સંભાળ લો'
    },
    bn: {
        brandName: 'স্বাস্থ্য সাথী',
        titleMain: 'গ্রামের ডাক্তার',
        titleSub: 'ভার্চুয়াল ডক্টর সহায়ক',
        heroDesc: 'নিজের গ্রামেই ডাক্তারি পরামর্শ পান',
        startChatText: 'চ্যাট শুরু করুন',
        quickHelpTitle: 'দ্রুত সহায়তা',
        quickFever: 'জ্বর',
        quickStomach: 'পেটব্যথা',
        quickHeadache: 'মাথাব্যথা',
        quickMedicine: 'ওষুধ',
        quickSkin: 'ত্বকের সংক্রমণ',
        chatWithDoctorTitle: 'ডাক্তারকে বলুন',
        speakText: 'বলুন',
        typeText: 'টাইপ করুন',
        userInputPlaceholder: 'আপনার লক্ষণ লিখুন...',
        emTitle: 'জরুরি অবস্থা?',
        emLine: 'তৎক্ষণাৎ ডাক্তারের সঙ্গে কথা বলুন বা হাসপাতালে যান',
        callNowText: 'এখনই কল করুন',
        footerBrand: 'গ্রামের ডাক্তার',
        footerTagline: 'প্রতি গ্রামে স্বাস্থ্যসেবা',
        contactTitle: 'যোগাযোগ',
        documentTitle: 'গ্রামের ডাক্তার - ভার্চুয়াল ডক্টর সহায়ক',
        greet: 'নমস্কার! কীভাবে সাহায্য করতে পারি? আপনার লক্ষণ লিখুন বা উপরের বোতামগুলি ব্যবহার করুন।',
        voiceStart: 'বলতে শুরু করুন...',
        voiceErr: 'ভয়েস চিনতে সমস্যা হয়েছে। অনুগ্রহ করে লিখে জানান।',
        voiceUnsupported: 'আপনার ব্রাউজারে ভয়েস সুবিধা নেই।',
        // Suggestion chips
        chipFever: 'আমার জ্বর হয়েছে',
        chipStomach: 'পেট ব্যথা',
        chipHeadache: 'মাথাব্যথা',
        chipCough: 'কাশি',
        // Features section (placeholders)
        featuresTitle: 'Our Services',
        feature1Title: 'Symptom Check',
        feature1Desc: 'Identify illness based on your symptoms',
        feature2Title: 'AI Doctor',
        feature2Desc: 'Get instant advice from the computer doctor',
        feature3Title: 'Video Call',
        feature3Desc: 'Talk to a real doctor on a video call',
        feature4Title: 'Medical Record',
        feature4Desc: 'Save your illness record',
        // How it works
        howTitle: 'How It Works',
        step1Title: 'Tell Symptoms',
        step1Desc: 'Describe symptoms via chat or voice',
        step2Title: 'AI Check',
        step2Desc: 'Computer will identify your illness',
        step3Title: 'Meet Doctor',
        step3Desc: 'Talk to a doctor on a video call',
        step4Title: 'Save Record',
        step4Desc: 'Your information will be kept safe',
        // Doctors section
        doctorsTitle: 'For Village Doctors',
        benefit1Title: 'Patient Records',
        benefit1Desc: 'All patient info in one place',
        benefit2Title: 'Connect with Experts',
        benefit2Desc: 'Get help on difficult cases',
        benefit3Title: 'Mobile App',
        benefit3Desc: 'Care for patients from anywhere'
    },
    ta: {
        brandName: 'ஆரோக்கிய துணை',
        titleMain: 'கிராம மருத்துவர்',
        titleSub: 'மெய்நிகர் மருத்துவர் உதவியாளர்',
        heroDesc: 'உங்கள் கிராமத்திலேயே மருத்துவரின் ஆலோசனை பெறுங்கள்',
        startChatText: 'அரட்டை தொடங்குங்கள்',
        quickHelpTitle: 'விரைவு உதவி',
        quickFever: 'காய்ச்சல்',
        quickStomach: 'வயிற்று வலி',
        quickHeadache: 'தலைவலி',
        quickMedicine: 'மருந்து',
        quickSkin: 'தோல் தொற்று',
        chatWithDoctorTitle: 'மருத்துவருடன் பேசுங்கள்',
        speakText: 'பேசவும்',
        typeText: 'தட்டச்சு செய்யவும்',
        userInputPlaceholder: 'உங்கள் அறிகுறிகளை எழுதுங்கள்...',
        emTitle: 'அவசர நிலை?',
        emLine: 'உடனே மருத்துவரை தொடர்பு கொள்ளுங்கள் அல்லது மருத்துவமனைக்கு செல்லுங்கள்',
        callNowText: 'இப்போதே அழைக்கவும்',
        footerBrand: 'கிராம மருத்துவர்',
        footerTagline: 'ஒவ்வொரு கிராமத்திலும் சுகாதாரம்',
        contactTitle: 'தொடர்பு',
        documentTitle: 'கிராம மருத்துவர் - மெய்நிகர் மருத்துவர் உதவியாளர்',
        greet: 'வணக்கம்! எப்படி உதவலாம்? உங்கள் அறிகுறிகளை எழுதுங்கள் அல்லது மேலுள்ள பொத்தான்களைப் பயன்படுத்துங்கள்.',
        voiceStart: 'பேசத் தொடங்குங்கள்...',
        voiceErr: 'குரல் அடையாளத்தில் சிக்கல். தயவுசெய்து எழுதுங்கள்.',
        voiceUnsupported: 'உங்கள் உலாவியில் குரல் வசதி இல்லை.',
        // Suggestion chips
        chipFever: 'எனக்கு காய்ச்சல்',
        chipStomach: 'வயிற்று வலி',
        chipHeadache: 'தலைவலி',
        chipCough: 'இருமல்',
        // Features section (placeholders)
        featuresTitle: 'Our Services',
        feature1Title: 'Symptom Check',
        feature1Desc: 'Identify illness based on your symptoms',
        feature2Title: 'AI Doctor',
        feature2Desc: 'Get instant advice from the computer doctor',
        feature3Title: 'Video Call',
        feature3Desc: 'Talk to a real doctor on a video call',
        feature4Title: 'Medical Record',
        feature4Desc: 'Save your illness record',
        howTitle: 'How It Works',
        step1Title: 'Tell Symptoms',
        step1Desc: 'Describe symptoms via chat or voice',
        step2Title: 'AI Check',
        step2Desc: 'Computer will identify your illness',
        step3Title: 'Meet Doctor',
        step3Desc: 'Talk to a doctor on a video call',
        step4Title: 'Save Record',
        step4Desc: 'Your information will be kept safe',
        doctorsTitle: 'For Village Doctors',
        benefit1Title: 'Patient Records',
        benefit1Desc: 'All patient info in one place',
        benefit2Title: 'Connect with Experts',
        benefit2Desc: 'Get help on difficult cases',
        benefit3Title: 'Mobile App',
        benefit3Desc: 'Care for patients from anywhere'
    },
    te: {
        brandName: 'ఆరోగ్య సహాయి',
        titleMain: 'గ్రామ డాక్టర్',
        titleSub: 'వర్చువల్ డాక్టర్ సహాయకుడు',
        heroDesc: 'మీ గ్రామంలోనే డాక్టర్ సలహా పొందండి',
        startChatText: 'చాట్ ప్రారంభించండి',
        quickHelpTitle: 'త్వరిత సహాయం',
        quickFever: 'జ్వరము',
        quickStomach: 'కడుపునొప్పి',
        quickHeadache: 'తలనొప్పి',
        quickMedicine: 'ఔషధం',
        quickSkin: 'చర్మ ఇన్ఫెక్షన్',
        chatWithDoctorTitle: 'డాక్టరుతో మాట్లాడండి',
        speakText: 'మాట్లాడండి',
        typeText: 'టైప్ చేయండి',
        userInputPlaceholder: 'మీ లక్షణాలను వ్రాయండి...',
        emTitle: 'అత్యవసరమా?',
        emLine: 'వెంటనే డాక్టరుతో మాట్లాడండి లేదా ఆసుపత్రికి వెళ్లండి',
        callNowText: 'ఇప్పుడే కాల్ చేయండి',
        footerBrand: 'గ్రామ డాక్టర్',
        footerTagline: 'ప్రతి గ్రామంలో ఆరోగ్య సేవ',
        contactTitle: 'సంప్రదించండి',
        documentTitle: 'గ్రామ డాక్టర్ - వర్చువల్ డాక్టర్ సహాయకుడు',
        greet: 'నమస్తే! నేను ఎలా సహాయం చేయగలను? మీ లక్షణాలను వ్రాయండి లేదా పై బటన్‌లను ఉపయోగించండి.',
        voiceStart: 'మాట్లాడటం ప్రారంభించండి...',
        voiceErr: 'వాయిస్ గుర్తింపులో సమస్య. దయచేసి టైప్ చేయండి.',
        voiceUnsupported: 'మీ బ్రౌజర్‌లో వాయిస్ సపోర్ట్ లేదు.',
        // Suggestion chips
        chipFever: 'నాకు జ్వరం ఉంది',
        chipStomach: 'కడుపునొప్పి',
        chipHeadache: 'తలనొప్పి',
        chipCough: 'దగ్గు',
        // Features section (placeholders)
        featuresTitle: 'Our Services',
        feature1Title: 'Symptom Check',
        feature1Desc: 'Identify illness based on your symptoms',
        feature2Title: 'AI Doctor',
        feature2Desc: 'Get instant advice from the computer doctor',
        feature3Title: 'Video Call',
        feature3Desc: 'Talk to a real doctor on a video call',
        feature4Title: 'Medical Record',
        feature4Desc: 'Save your illness record',
        howTitle: 'How It Works',
        step1Title: 'Tell Symptoms',
        step1Desc: 'Describe symptoms via chat or voice',
        step2Title: 'AI Check',
        step2Desc: 'Computer will identify your illness',
        step3Title: 'Meet Doctor',
        step3Desc: 'Talk to a doctor on a video call',
        step4Title: 'Save Record',
        step4Desc: 'Your information will be kept safe',
        doctorsTitle: 'For Village Doctors',
        benefit1Title: 'Patient Records',
        benefit1Desc: 'All patient info in one place',
        benefit2Title: 'Connect with Experts',
        benefit2Desc: 'Get help on difficult cases',
        benefit3Title: 'Mobile App',
        benefit3Desc: 'Care for patients from anywhere'
    },
    kn: {
        brandName: 'ಆರೋಗ್ಯ ಸಂಗಾತಿ',
        titleMain: 'ಗ್ರಾಮ ವೈದ್ಯ',
        titleSub: 'ವರ್ಚುವಲ್ ವೈದ್ಯ ಸಹಾಯಕ',
        heroDesc: 'ನಿಮ್ಮ ಗ್ರಾಮದಲ್ಲೇ ವೈದ್ಯರ ಸಲಹೆ ಪಡೆಯಿರಿ',
        startChatText: 'ಚಾಟ್ ಪ್ರಾರಂಭಿಸಿ',
        quickHelpTitle: 'ತ್ವರಿತ ಸಹಾಯ',
        quickFever: 'ಜ್ವರ',
        quickStomach: 'ಹೊಟ್ಟೆ ನೋವು',
        quickHeadache: 'ತಲೆನೋವು',
        quickMedicine: 'ಔಷಧಿ',
        quickSkin: 'ಚರ್ಮದ ಸೋಂಕು',
        chatWithDoctorTitle: 'ವೈದ್ಯರೊಂದಿಗೆ ಮಾತನಾಡಿ',
        speakText: 'ಮಾತನಾಡಿ',
        typeText: 'ಟೈಪ್ ಮಾಡಿ',
        userInputPlaceholder: 'ನಿಮ್ಮ ಲಕ್ಷಣಗಳನ್ನು ಬರೆಯಿರಿ...',
        emTitle: 'ತುರ್ತು ಪರಿಸ್ಥಿತಿ?',
        emLine: 'ತಕ್ಷಣ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ ಅಥವಾ ಆಸ್ಪತ್ರೆಗೆ ಹೋಗಿ',
        callNowText: 'ಇಗಲೇ ಕರೆ ಮಾಡಿ',
        footerBrand: 'ಗ್ರಾಮ ವೈದ್ಯ',
        footerTagline: 'ಪ್ರತಿ ಗ್ರಾಮದಲ್ಲೂ ಆರೋಗ್ಯ ಸೇವೆ',
        contactTitle: 'ಸಂಪರ್ಕ',
        documentTitle: 'ಗ್ರಾಮ ವೈದ್ಯ - ವರ್ಚುವಲ್ ವೈದ್ಯ ಸಹಾಯಕ',
        greet: 'ನಮಸ್ಕಾರ! ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು? ನಿಮ್ಮ ಲಕ್ಷಣಗಳನ್ನು ಬರೆಯಿರಿ ಅಥವಾ ಮೇಲಿನ ಬಟನ್‌ಗಳನ್ನು ಬಳಸಿ.',
        voiceStart: 'ಮಾತನಾಡಲು ಪ್ರಾರಂಭಿಸಿ...',
        voiceErr: 'ವಾಯ್ಸ್ ಗುರುತಿಸುವಿಕೆಯಲ್ಲಿ ಸಮಸ್ಯೆ. ದಯವಿಟ್ಟು ಟೈಪ್ ಮಾಡಿ.',
        voiceUnsupported: 'ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ವಾಯ್ಸ್ ಸೌಲಭ್ಯವಿಲ್ಲ.'
    },
    ml: {
        brandName: 'ആരോഗ്യ കൂട്ടായി',
        titleMain: 'ഗ്രാമ ഡോക്ടർ',
        titleSub: 'വർച്വൽ ഡോക്ടർ അസിസ്റ്റന്റ്',
        heroDesc: 'നിങ്ങളുടെ ഗ്രാമത്തിലുതന്നെ ഡോക്ടറുടെ ഉപദേശം നേടൂ',
        startChatText: 'ചാറ്റ് ആരംഭിക്കുക',
        quickHelpTitle: 'ദ്രുതസഹായം',
        quickFever: 'ജ്വരം',
        quickStomach: 'വയറുവേദന',
        quickHeadache: 'തലവേദന',
        quickMedicine: 'മരുന്നു',
        quickSkin: 'ത്വക്ക് അണുബാധ',
        chatWithDoctorTitle: 'ഡോക്ടറുമായി സംസാരിക്കുക',
        speakText: 'സംസാരിക്കുക',
        typeText: 'ടൈപ്പ് ചെയ്യുക',
        userInputPlaceholder: 'നിങ്ങളുടെ ലക്ഷണങ്ങൾ എഴുതുക...',
        emTitle: 'അടിയന്തരാവസ്ഥ?',
        emLine: 'ഉടൻ ഡോക്ടറുമായി സംസാരിക്കുകയോ ആശുപത്രിയിൽ പോകുകയോ ചെയ്യുക',
        callNowText: 'ഇപ്പോൾ തന്നെ വിളിക്കുക',
        footerBrand: 'ഗ്രാമ ഡോക്ടർ',
        footerTagline: 'ഓരോ ഗ്രാമത്തിലും ആരോഗ്യ സേവനം',
        contactTitle: 'ബന്ധപ്പെടുക',
        documentTitle: 'ഗ്രാമ ഡോക്ടർ - വർച്വൽ ഡോക്ടർ അസിസ്റ്റന്റ്',
        greet: 'നമസ്കാരം! എങ്ങനെ സഹായിക്കാം? നിങ്ങളുടെ ലക്ഷണങ്ങൾ എഴുതുക അല്ലെങ്കിൽ മുകളിലെ ബട്ടണുകൾ ഉപയോഗിക്കുക.',
        voiceStart: 'സംസാരിക്കാൻ തുടങ്ങുക...',
        voiceErr: 'വോയ്സ് തിരിച്ചറിയുന്നതിൽ പ്രശ്നം. ദയവായി ടൈപ്പ് ചെയ്യുക.',
        voiceUnsupported: 'താങ്കളുടെ ബ്രൗസറിൽ വോയ്സ് സൗകര്യം ലഭ്യമല്ല.'
    },
    pa: {
        brandName: 'ਸਿਹਤ ਸਾਥੀ',
        titleMain: 'ਪਿੰਡ ਦਾ ਡਾਕਟਰ',
        titleSub: 'ਵਰਚੁਅਲ ਡਾਕਟਰ ਸਹਾਇਕ',
        heroDesc: 'ਆਪਣੇ ਪਿੰਡ ਵਿੱਚ ਹੀ ਡਾਕਟਰੀ ਸਲਾਹ ਲਵੋ',
        startChatText: 'ਚੈਟ ਸ਼ੁਰੂ ਕਰੋ',
        quickHelpTitle: 'ਤੁਰੰਤ ਮਦਦ',
        quickFever: 'ਬੁਖਾਰ',
        quickStomach: 'ਪੇਟ ਦਰਦ',
        quickHeadache: 'ਸਿਰ ਦਰਦ',
        quickMedicine: 'ਦਵਾ',
        quickSkin: 'ਚਮੜੀ ਦਾ ਸੰਕਰਮਣ',
        chatWithDoctorTitle: 'ਡਾਕਟਰ ਨਾਲ ਗੱਲ ਕਰੋ',
        speakText: 'ਬੋਲੋ',
        typeText: 'ਲਿਖੋ',
        userInputPlaceholder: 'ਆਪਣੇ ਲੱਛਣ ਲਿਖੋ...',
        emTitle: 'ਐਮਰਜੈਂਸੀ?',
        emLine: 'ਤੁਰੰਤ ਡਾਕਟਰ ਨਾਲ ਗੱਲ ਕਰੋ ਜਾਂ ਹਸਪਤਾਲ ਜਾਓ',
        callNowText: 'ਹੁਣੇ ਕਾਲ ਕਰੋ',
        footerBrand: 'ਪਿੰਡ ਦਾ ਡਾਕਟਰ',
        footerTagline: 'ਹਰ ਪਿੰਡ ਵਿੱਚ ਸਿਹਤ ਸੇਵਾ',
        contactTitle: 'ਸੰਪਰਕ',
        documentTitle: 'ਪਿੰਡ ਦਾ ਡਾਕਟਰ - ਵਰਚੁਅਲ ਡਾਕਟਰ ਸਹਾਇਕ',
        greet: 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ? ਆਪਣੇ ਲੱਛਣ ਲਿਖੋ ਜਾਂ ਉੱਪਰਲੇ ਬਟਨ ਵਰਤੋ.',
        voiceStart: 'ਬੋਲਣਾ ਸ਼ੁਰੂ ਕਰੋ...',
        voiceErr: 'ਆਵਾਜ਼ ਪਛਾਣ ਵਿੱਚ ਸਮੱਸਿਆ। ਕਿਰਪਾ ਕਰਕੇ ਲਿਖੋ.',
        voiceUnsupported: 'ਤੁਹਾਡੇ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਆਵਾਜ਼ ਦੀ ਸੁਵਿਧਾ ਨਹੀਂ ਹੈ.'
    }
};

const riskQuestions = [
    { key: 'hypertension', q: 'क्या आपको हाई ब्लड प्रेशर है? / Do you have high blood pressure? (yes/no)' },
    { key: 'pregnancy', q: 'क्या आप गर्भवती हैं? (यदि लागू) / Are you pregnant? (if applicable) (yes/no)' },
    { key: 'kidney', q: 'क्या आपको किडनी की समस्या है? / Any kidney disease? (yes/no)' },
    { key: 'liver', q: 'क्या आपको लिवर की समस्या है? / Any liver disease? (yes/no)' },
    { key: 'allergy', q: 'क्या आपको दवाओं से एलर्जी है? / Any drug allergies? (yes/no)' },
    { key: 'bloodThinners', q: 'क्या आप खून पतला करने की दवा लेते हैं (जैसे Aspirin/Clopidogrel/Warfarin)? / Are you on blood thinners? (yes/no)' },
    { key: 'vulnerableAge', q: 'मरीज की उम्र 5 वर्ष से कम या 60 से अधिक है? / Age <5 or >60? (yes/no)' }
];

const riskState = {
    needed: false,
    askedIndex: -1,
    answers: {}
};

function parseYesNo(msg) {
    const m = msg.toLowerCase();
    const yesList = ['yes', 'haan', 'ha', 'h', 'हाँ', 'हा', 'जी', 'yes.', 'y'];
    const noList = ['no', 'na', 'nahi', 'नहीं', 'नहि', 'no.', 'n'];
    if (yesList.some(w => m.includes(w))) return true;
    if (noList.some(w => m.includes(w))) return false;
    return null;
}

function startRiskScreening() {
    riskState.needed = true;
    riskState.askedIndex = -1;
    riskState.answers = {};
    return askNextRiskQuestion();
}

function askNextRiskQuestion() {
    riskState.askedIndex += 1;
    if (riskState.askedIndex >= riskQuestions.length) {
        // Completed
        riskState.needed = false;
        return followUpAskDuration();
    }
    return riskQuestions[riskState.askedIndex].q;
}

function recordRiskAnswer(message) {
    const yn = parseYesNo(message);
    if (yn === null) {
        return 'कृपया हां/ना में बताएं। / Please answer yes or no.';
    }
    const q = riskQuestions[riskState.askedIndex];
    riskState.answers[q.key] = yn;
    return askNextRiskQuestion();
}

function hasHighRisk() {
    const r = riskState.answers;
    return !!(r.diabetes || r.hypertension || r.pregnancy || r.kidney || r.liver || r.allergy || r.bloodThinners || r.vulnerableAge);
}

function applyTranslations(lang) {
    const t = translations[lang] || translations.hi;
    const setText = (id, text) => { const el = document.getElementById(id); if (el && typeof text === 'string') el.textContent = text; };
    setText('brandName', t.brandName);
    setText('title-main', t.titleMain);
    setText('title-sub', t.titleSub);
    setText('hero-desc', t.heroDesc);
    setText('startChatText', t.startChatText);
    setText('quickHelpTitle', t.quickHelpTitle);
    setText('quick-fever', t.quickFever);
    setText('quick-stomach', t.quickStomach);
    setText('quick-headache', t.quickHeadache);
    setText('quick-medicine', t.quickMedicine);
    setText('quick-skin', t.quickSkin);
    setText('chatWithDoctorTitle', t.chatWithDoctorTitle);
    setText('speakText', t.speakText);
    setText('typeText', t.typeText);
    setText('emTitle', t.emTitle);
    setText('emLine', t.emLine);
    setText('callNowText', t.callNowText);
    setText('footerBrand', t.footerBrand);
    setText('footerTagline', t.footerTagline);
    setText('contactTitle', t.contactTitle);

    // Suggestion chips
    setText('chip-fever', t.chipFever);
    setText('chip-stomach', t.chipStomach);
    setText('chip-headache', t.chipHeadache);
    setText('chip-cough', t.chipCough);
    setText('chip-skin', t.chipSkin);

    // Features section
    setText('featuresTitle', t.featuresTitle);
    setText('feature1Title', t.feature1Title);
    setText('feature1Desc', t.feature1Desc);
    setText('feature2Title', t.feature2Title);
    setText('feature2Desc', t.feature2Desc);
    setText('feature3Title', t.feature3Title);
    setText('feature3Desc', t.feature3Desc);
    setText('feature4Title', t.feature4Title);
    setText('feature4Desc', t.feature4Desc);

    // How it works section
    setText('howTitle', t.howTitle);
    setText('step1Title', t.step1Title);
    setText('step1Desc', t.step1Desc);
    setText('step2Title', t.step2Title);
    setText('step2Desc', t.step2Desc);
    setText('step3Title', t.step3Title);
    setText('step3Desc', t.step3Desc);
    setText('step4Title', t.step4Title);
    setText('step4Desc', t.step4Desc);

    // For Village Doctors section
    setText('doctorsTitle', t.doctorsTitle);
    setText('benefit1Title', t.benefit1Title);
    setText('benefit1Desc', t.benefit1Desc);
    setText('benefit2Title', t.benefit2Title);
    setText('benefit2Desc', t.benefit2Desc);
    setText('benefit3Title', t.benefit3Title);
    setText('benefit3Desc', t.benefit3Desc);

    // Nearby Hospitals & Clinics section (optional translations)
    setText('nearbyTitle', t.nearbyTitle);
    setText('nearbyDesc', t.nearbyDesc);
    setText('findNearbyBtnText', t.findNearbyBtnText);

    const userInput = document.getElementById('userInput');
    if (userInput) userInput.placeholder = t.userInputPlaceholder;

    document.title = t.documentTitle;

    // Update selector value to reflect current language
    const sel = document.getElementById('langSelect');
    if (sel && sel.value !== lang) sel.value = lang;
}

function changeLanguage(lang) {
    currentLanguage = lang;
    applyTranslations(lang);
    // Reset conversation state and restart chat with localized greeting only
    try { resetConversation(); } catch (e) {}
    const cw = document.getElementById('chat-window');
    if (cw) cw.innerHTML = '';
    const t = translations[lang] || translations.hi;
    try { addMessage(t.greet || '', 'bot'); } catch (e) {}
}

// --- Simple conversation state machine ---
const conversationState = {
    currentSymptom: null,      // 'fever' | 'stomach' | 'headache' | 'cough' | null
    durationDays: null,        // number
    severity: null,            // 'mild' | 'moderate' | 'severe' | null
};

const symptomKeywords = {
    fever: ['बुखार', 'fever', 'ताप', 'ज्वर'],
    stomach: ['पेट', 'stomach', ' पेट दर्द', 'गैस', 'दस्त', 'उल्टी', 'vomit', 'diarrhea'],
    headache: ['सिर', 'headache', ' माइग्रेन'],
    cough: ['खांसी', 'कफ', 'cough', 'cold', 'जुकाम'],
    chest: ['छाती', 'सीने', 'chest'],
    back: ['पीठ', 'कमर', 'back'],
    periods: ['पीरियड', 'मासिक', 'period', 'mens', 'menstrual'],
    skin: [
        'त्वचा', 'खुजली', 'दाने', 'लाल', 'फोड़ा', 'चर्म',
        'skin', 'rash', 'itch', 'itching', 'redness', 'boil', 'pimple', 'fungal', 'ringworm'
    ]
};

const severityKeywords = {
    mild: ['हल्का', 'थोड़ा', 'mild', 'little'],
    moderate: ['मध्यम', 'moderate', 'ठीक-ठाक'],
    severe: ['ज्यादा', 'बहुत', 'तेज', 'severe', 'high'],
};

function resetConversation() {
    conversationState.currentSymptom = null;
    conversationState.durationDays = null;
    conversationState.severity = null;
    riskState.needed = false;
    riskState.askedIndex = -1;
    riskState.answers = {};
}

// Chat functionality
function sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();
    if (message === '') return;

    addMessage(message, 'user');
    userInput.value = '';

    // Generate a contextual response
    setTimeout(() => {
        const response = handleConversationFlow(message);
        addMessage(response, 'bot');
    }, 500);
}

function addMessage(text, sender) {
    const chatWindow = document.getElementById('chat-window');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-bubble ${sender}`;
    
    if (sender === 'bot') {
        messageDiv.innerHTML = `
            <div class="bot-avatar">👩‍⚕️</div>
            <div class="message-content">
                <div class="message-text">${text.replace(/\n/g, '<br>')}</div>
            </div>
        `;
    } else {
        messageDiv.innerHTML = `
            <div class="bot-avatar user-avatar">👤</div>
            <div class="message-content">
                <div class="message-text">${text.replace(/\n/g, '<br>')}</div>
            </div>
        `;
    }
    
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// --- NLP helpers ---
function detectSymptom(message) {
    const m = message.toLowerCase();
    for (const key in symptomKeywords) {
        if (symptomKeywords[key].some(k => m.includes(k.toLowerCase()))) {
            return key;
        }
    }
    return null;
}

function parseDurationDays(message) {
    // Matches: "2 दिन", "3 days", "day", "2din"
    const normalized = message.replace(/दिन|din|days?|day/gi, ' day ');
    const match = normalized.match(/(\d{1,3})\s*day/);
    if (match) return parseInt(match[1], 10);
    // Hindi number words (basic)
    const words = { 'एक':1,'दो':2,'तीन':3,'चार':4,'पांच':5,'छह':6,'सात':7,'आठ':8,'नौ':9,'दस':10 };
    for (const w in words) {
        if (message.includes(w) && message.includes('दिन')) return words[w];
    }
    return null;
}

function detectSeverity(message) {
    const m = message.toLowerCase();
    if (severityKeywords.severe.some(k => m.includes(k.toLowerCase()))) return 'severe';
    if (severityKeywords.moderate.some(k => m.includes(k.toLowerCase()))) return 'moderate';
    if (severityKeywords.mild.some(k => m.includes(k.toLowerCase()))) return 'mild';
    return null;
}

function followUpAskDuration() {
    return 'कब से यह समस्या है? कितने दिन से है?\nHow long have you had this? For how many days?';
}

function followUpAskSeverity() {
    return 'लक्षण कितने तेज हैं? हल्का / मध्यम / ज्यादा?\nHow severe is it? Mild / Moderate / Severe?';
}

function adviceFor(symptom, days, severity) {
    const common = 'पर्याप्त पानी पीएं, आराम करें। यदि सांस में तकलीफ, तेज बुखार, बेहोशी, या खून दिखे तो तुरंत अस्पताल जाएं।\nDrink water and rest. If there is breathlessness, very high fever, fainting, or bleeding, go to hospital immediately.';
    let specific = '';
    if (symptom === 'fever') {
        specific = 'पैरासिटामोल 500mg 6-8 घंटे में (यदि एलर्जी/लिवर समस्या नहीं)। ठंडी पट्टी।';
    } else if (symptom === 'stomach') {
        specific = 'ORS घोल, हल्का भोजन। उल्टी में Ondansetron (यदि उपलब्ध) डॉक्टर सलाह से।';
    } else if (symptom === 'headache') {
        specific = 'आराम, पानी, आंखों पर ठंडी पट्टी। बार-बार सिरदर्द में जांच कराएं।';
    } else if (symptom === 'cough') {
        specific = 'गर्म पानी/भाप लें। लंबे समय तक खांसी या खून आने पर जांच जरूरी है।';
    } else if (symptom === 'chest') {
        specific = 'यदि छाती में दबाव जैसा दर्द, पसीना, मतली, या बाईं बांह/जबड़े में दर्द – यह आपातकाल हो सकता है: तुरंत 108/इमरजेंसी।';
    } else if (symptom === 'back') {
        specific = 'गरम सिकाई, हल्की स्ट्रेचिंग, भारी वजन से बचें। न्यूरो लक्षण (कमजोरी/सुन्नपन) पर डॉक्टर दिखाएं।';
    } else if (symptom === 'periods') {
        specific = 'दर्द में गर्म सिकाई, हाइड्रेशन। अत्यधिक/लंबा ब्लीडिंग या चक्कर में तुरंत डॉक्टर से मिलें।';
    } else if (symptom === 'skin') {
        specific = 'त्वचा संक्रमण के लिए: प्रभावित जगह साफ और सूखी रखें, खरोंचें नहीं। हल्की खुजली/दाने हों तो क्लोट्रिमाजोल जैसी एंटी-फंगल क्रीम दिन में 2 बार 1-2 हफ्ते लगाएं। पस, तेज दर्द, तेजी से फैलना, चेहरा/आंख प्रभावित, तेज बुखार या मधुमेह हो तो डॉक्टर से मिलें।\nFor skin infections: keep area clean and dry, avoid scratching. For mild itchy rash, use an antifungal cream (e.g., clotrimazole) twice daily for 1-2 weeks. If pus, severe pain, rapid spread, face/eye involvement, high fever, or diabetes, see a doctor.';
    }
    const dayText = days ? `अवधि: ${days} दिन / Duration: ${days} days.\n` : '';
    const sevText = severity ? `तीव्रता: ${severity} / Severity: ${severity}.\n` : '';
    let caution = '';
    if (hasHighRisk()) {
        caution = 'सावधानी: आपकी बताई स्थितियों के कारण स्वयं दवा लेने से पहले डॉक्टर से सलाह लें। दर्द में NSAIDs (जैसे Ibuprofen) से बचें यदि किडनी/लिवर/ब्लड थिनर/एलर्जी है।\nCaution: Due to your conditions, consult a doctor before taking medicines. Avoid NSAIDs if kidney/liver issues, blood thinners, or allergies.\n';
    }
    return `${dayText}${sevText}${caution}${specific}\n${common}`;
}

function handleConversationFlow(userMessage) {
    // 0) If risk screening in progress
    if (riskState.needed && riskState.askedIndex >= 0) {
        return recordRiskAnswer(userMessage);
    }

    // 1) Set or detect current symptom
    if (!conversationState.currentSymptom) {
        const s = detectSymptom(userMessage);
        if (s) {
            conversationState.currentSymptom = s;
            // Start risk screening first
            return startRiskScreening();
        }
        // If no symptom detected, default generic
        return generateAIResponse(userMessage);
    }

    // If risk screening is required but not started (e.g., via quick button)
    if (!riskState.askedIndex && riskState.needed) {
        return startRiskScreening();
    }

    // 2) If duration not captured, try to parse
    if (conversationState.durationDays == null) {
        const days = parseDurationDays(userMessage);
        if (days != null) {
            conversationState.durationDays = days;
            return followUpAskSeverity();
        }
        return 'लक्षण कब से हैं? कितने दिन? / Since when? How many days?';
    }

    // 3) If severity not captured, detect
    if (!conversationState.severity) {
        const sev = detectSeverity(userMessage);
        if (sev) {
            conversationState.severity = sev;
            const msg = adviceFor(
                conversationState.currentSymptom,
                conversationState.durationDays,
                conversationState.severity
            );
            // Reset for next conversation thread
            resetConversation();
            return msg;
        }
        return followUpAskSeverity();
    }

    // 4) Fallback
    return adviceFor(conversationState.currentSymptom, conversationState.durationDays, conversationState.severity);
}

function generateAIResponse(userMessage) {
    const message = userMessage.toLowerCase();
    if (message.includes('बुखार') || message.includes('fever')) {
        conversationState.currentSymptom = 'fever';
        return startRiskScreening();
    } else if (message.includes('पेट') || message.includes('stomach') || message.includes('दस्त') || message.includes('vomit') || message.includes('diarrhea')) {
        conversationState.currentSymptom = 'stomach';
        return startRiskScreening();
    } else if (message.includes('सिर') || message.includes('head')) {
        conversationState.currentSymptom = 'headache';
        return startRiskScreening();
    } else if (message.includes('खांसी') || message.includes('cough') || message.includes('cold') || message.includes('जुकाम')) {
        conversationState.currentSymptom = 'cough';
        return startRiskScreening();
    } else if (message.includes('छाती') || message.includes('chest')) {
        conversationState.currentSymptom = 'chest';
        return startRiskScreening();
    } else if (message.includes('पीठ') || message.includes('back') || message.includes('कमर')) {
        conversationState.currentSymptom = 'back';
        return startRiskScreening();
    } else if (message.includes('पीरियड') || message.includes('period') || message.includes('mens')) {
        conversationState.currentSymptom = 'periods';
        return startRiskScreening();
    } else if (message.includes('त्वचा') || message.includes('skin') || message.includes('rash') || message.includes('itch')) {
        conversationState.currentSymptom = 'skin';
        return startRiskScreening();
    } else {
        return 'कृपया अपने लक्षण सरल शब्दों में बताएं (जैसे: बुखार, पेट दर्द, सिर दर्द, खांसी)।\nPlease describe your symptoms simply (e.g., fever, stomach pain, headache, cough).';
    }
}

// Suggestion chips
function useSuggestion(text) {
    document.getElementById('userInput').value = text;
    sendMessage();
}

// Quick access buttons
function showSymptomChecker(evt) {
    // Smoothly scroll to chat interface when a quick option is clicked
    try { startConsultation(); } catch (e) {}
    const ev = evt || window.event;
    const target = ev && ev.currentTarget ? ev.currentTarget : null;
    const labelEl = target ? target.querySelector('.quick-text') : null;
    const label = labelEl ? labelEl.textContent : 'लक्षण';
    const id = labelEl ? labelEl.id : '';
    const isMedicine = id === 'quick-medicine';

    if (isMedicine) {
        const meds = [
            { name: 'पैरासिटामोल (Paracetamol)', use: 'बुखार और शरीर दर्द / Fever and body pain' },
            { name: 'ORS', use: 'डिहाइड्रेशन में पानी-नमक संतुलन / Dehydration rehydration salts' },
            { name: 'सेटिरीज़िन (Cetirizine)', use: 'एलर्जी, छींक, बहती नाक / Allergy, sneezing, runny nose' },
            { name: 'डेक्सट्रोमिथॉर्फ़ैन (Dextromethorphan)', use: 'सूखी खांसी / Dry cough' },
            { name: 'एंटासिड (Antacid)', use: 'एसिडिटी, सीने में जलन / Acidity, heartburn' },
            { name: 'पैन्टोप्राज़ोल (Pantoprazole)', use: 'एसिडिटी, GERD / Acidity, GERD' },
            { name: 'आइबुप्रोफेन (Ibuprofen)', use: 'दर्द और सूजन / Pain and inflammation' },
            { name: 'अमॉक्सिसिलिन (Amoxicillin)', use: 'बैक्टीरियल इंफेक्शन (केवल डॉक्टर की सलाह से) / Bacterial infections (doctor’s advice only)' }
        ];
        let msg = 'कुछ सामान्य दवाएं और उनके उपयोग:\nCommon medicines and their uses:\n';
        meds.forEach(m => {
            msg += `• ${m.name} — ${m.use}\n`;
        });
        msg += '\nकृपया अपनी समस्या बताएं। गलत दवा न लें। If unsure, consult a doctor.';
        showMessage(msg, 'bot');
        return;
    }

    let symptomList = [];
    if (id === 'quick-fever') {
        symptomList = ['हल्का बुखार', 'तेज बुखार', 'कांपना'];
        conversationState.currentSymptom = 'fever';
        riskState.needed = true;
    } else if (id === 'quick-stomach') {
        symptomList = ['ऊपर का पेट', 'नीचे का पेट', 'पूरा पेट'];
        conversationState.currentSymptom = 'stomach';
        riskState.needed = true;
    } else if (id === 'quick-headache') {
        symptomList = ['आधा सिर', 'पूरा सिर', 'आंखों के आसपास'];
        conversationState.currentSymptom = 'headache';
        riskState.needed = true;
    } else if (id === 'quick-cough') {
        symptomList = ['सूखी खांसी', 'बलगम वाली खांसी', 'जुकाम/नज़ला'];
        conversationState.currentSymptom = 'cough';
        riskState.needed = true;
    } else if (id === 'quick-gi') {
        symptomList = ['उल्टी', 'दस्त', 'पेट में मरोड़'];
        conversationState.currentSymptom = 'stomach';
        riskState.needed = true;
    } else if (id === 'quick-chest') {
        symptomList = ['दबाव जैसा', 'चुभने वाला दर्द', 'सांस फूलना'];
        conversationState.currentSymptom = 'chest';
        riskState.needed = true;
    } else if (id === 'quick-back') {
        symptomList = ['ऊपरी पीठ', 'निचली पीठ', 'एक तरफ'];
        conversationState.currentSymptom = 'back';
        riskState.needed = true;
    } else if (id === 'quick-periods') {
        symptomList = ['देर से पीरियड', 'बहुत ज्यादा ब्लीडिंग', 'दर्द'];
        conversationState.currentSymptom = 'periods';
        riskState.needed = true;
    } else if (id === 'quick-skin') {
        conversationState.currentSymptom = 'skin';
        riskState.needed = true;
    }
    let message = `${label} के लिए कुछ सामान्य विकल्प:\n`;
    symptomList.forEach(symptom => {
        message += `• ${symptom}\n`;
    });
    message += '\nकृपया अपने लक्षण बताएं।';
    showMessage(message, 'bot');
    if (riskState.needed) {
        setTimeout(() => showMessage(startRiskScreening(), 'bot'), 300);
    }
}

// Navigation functions
function startConsultation() {
    const target = document.querySelector('#chatbot-section .chat-container') || document.getElementById('chatbot-section');
    const header = document.querySelector('.header');
    let offset = 24; // desired visible gap above chat card
    if (header) {
        const pos = window.getComputedStyle(header).position;
        if (pos === 'fixed' || pos === 'sticky') {
            offset += header.offsetHeight;
        }
    }
    const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    setTimeout(() => document.getElementById('userInput').focus(), 450);
}

function showDemo() {
    showMessage('यह एक डेमो है। आप अपने लक्षण बता सकते हैं और मैं आपकी मदद करूंगी।', 'bot');
}

function registerDoctor() {
    showMessage('डॉक्टर पंजीकरण के लिए कृपया हमें ईमेल करें: doctors@gaonkadoctor.com', 'bot');
}

function callEmergency() {
    showMessage('🚨 आपातकालीन नंबर: 108\n🚑 एम्बुलेंस: 102\n👨‍⚕️ डॉक्टर: 1800-123-4567', 'bot');
}

// Nearby Hospitals & Clinics
async function findNearbyFacilities() {
    const statusEl = document.getElementById('nearbyStatus');
    const listEl = document.getElementById('nearbyResults');
    if (listEl) listEl.innerHTML = '';
    const t = translations[currentLanguage] || translations.hi;
    const locating = t.nearbyLocating || 'Locating you...';
    const denied = t.nearbyDenied || 'Location permission denied.';
    const errText = t.nearbyError || 'Could not fetch nearby facilities.';
    if (statusEl) statusEl.textContent = locating;

    if (!navigator.geolocation) {
        if (statusEl) statusEl.textContent = t.nearbyNoGeo || 'Geolocation is not supported by your browser.';
        return;
    }

    navigator.geolocation.getCurrentPosition(async (pos) => {
        const { latitude: lat, longitude: lon } = pos.coords;
        // Store for directions links
        window.__userLocation = { lat, lon };

        // Reverse geocode user's location for exact address (best-effort)
        try {
            const rev = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`);
            const revData = await rev.json();
            const addr = revData && revData.display_name ? revData.display_name : '';
            if (statusEl) {
                const coords = `${lat.toFixed(5)}, ${lon.toFixed(5)}`;
                statusEl.textContent = `${t.yourLocation || 'Your location'}: ${addr ? addr + ' ' : ''}(${coords})\n${t.nearbyFetching || 'Finding facilities near you...'}`;
            }
        } catch (e) {
            if (statusEl) {
                const coords = `${lat.toFixed(5)}, ${lon.toFixed(5)}`;
                statusEl.textContent = `${t.yourLocation || 'Your location'}: (${coords})\n${t.nearbyFetching || 'Finding facilities near you...'}`;
            }
        }

        try {
            // Overpass query: hospitals, clinics, doctors, healthcare facilities within 5km
            const radius = 5000;
            const query = `[
                out:json
            ];
            (
              node["amenity"~"hospital|clinic|doctors"](around:${radius},${lat},${lon});
              way["amenity"~"hospital|clinic|doctors"](around:${radius},${lat},${lon});
              node["healthcare"](around:${radius},${lat},${lon});
              way["healthcare"](around:${radius},${lat},${lon});
            );
            out center 30;`;

            const resp = await fetch('https://overpass-api.de/api/interpreter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({ data: query })
            });
            const data = await resp.json();
            const elements = Array.isArray(data.elements) ? data.elements : [];

            const items = elements.map(el => {
                const center = el.center || { lat: el.lat, lon: el.lon };
                const tags = el.tags || {};
                const name = (tags.name || tags["name:en"]) || 'Unnamed facility';
                const type = (tags.amenity || tags.healthcare) || 'facility';
                const dist = center && typeof center.lat === 'number' && typeof center.lon === 'number'
                    ? haversineDistanceKm(lat, lon, center.lat, center.lon)
                    : null;
                const address = formatAddress(tags);
                return { name, type, dist, lat: center.lat, lon: center.lon, address };
            })
            .filter(it => it.dist !== null)
            .sort((a, b) => a.dist - b.dist)
            .slice(0, 20);

            if (items.length === 0) {
                if (statusEl) statusEl.textContent = t.nearbyNone || 'No nearby facilities found within 5 km.';
                return;
            }

            if (statusEl) statusEl.textContent = '';
            renderNearbyList(items);
        } catch (e) {
            if (statusEl) statusEl.textContent = errText;
            console.error(e);
        }
    }, (err) => {
        if (statusEl) statusEl.textContent = denied;
    }, { enableHighAccuracy: true, timeout: 10000 });
}

function formatAddress(tags) {
    if (!tags) return '';
    const parts = [];
    if (tags['addr:housename']) parts.push(tags['addr:housename']);
    if (tags['addr:housenumber']) parts.push(tags['addr:housenumber']);
    if (tags['addr:street']) parts.push(tags['addr:street']);
    if (tags['addr:neighbourhood']) parts.push(tags['addr:neighbourhood']);
    if (tags['addr:suburb']) parts.push(tags['addr:suburb']);
    if (tags['addr:city']) parts.push(tags['addr:city']);
    if (tags['addr:district']) parts.push(tags['addr:district']);
    if (tags['addr:state']) parts.push(tags['addr:state']);
    if (tags['addr:postcode']) parts.push(tags['addr:postcode']);
    return parts.join(', ');
}

function haversineDistanceKm(lat1, lon1, lat2, lon2) {
    const toRad = d => d * Math.PI / 180;
    const R = 6371; // km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat/2)**2 + Math.cos(toRad(lat1))*Math.cos(toRad(lat2))*Math.sin(dLon/2)**2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return +(R * c).toFixed(2);
}

function renderNearbyList(items) {
    const listEl = document.getElementById('nearbyResults');
    if (!listEl) return;
    listEl.innerHTML = '';
    const origin = window.__userLocation || null;
    items.forEach(it => {
        const li = document.createElement('li');
        li.className = 'nearby-item';
        const coords = (typeof it.lat === 'number' && typeof it.lon === 'number') ? `${it.lat.toFixed(5)}, ${it.lon.toFixed(5)}` : '';
        const mapsLink = (typeof it.lat === 'number' && typeof it.lon === 'number')
            ? `https://www.google.com/maps?q=${it.lat},${it.lon}`
            : '#';
        const dirLink = origin && typeof it.lat === 'number' && typeof it.lon === 'number'
            ? `https://www.google.com/maps/dir/?api=1&origin=${origin.lat},${origin.lon}&destination=${it.lat},${it.lon}`
            : mapsLink;
        const addrLine = it.address ? `<div style="color:#64748b;margin-top:2px;">${it.address}</div>` : '';
        const coordLine = coords ? `<div style="color:#64748b; font-size: 0.9rem;">(${coords})</div>` : '';
        const actions = `<div class="nearby-actions" style="margin-top:6px; display:flex; gap:8px; flex-wrap:wrap;">
            <a class="nearby-link" href="#" onclick="openInlineMap(${it.lat},${it.lon}, '${(it.name||'').replace(/'/g, "\'")}'); return false;">Open Map</a>
            <a class="nearby-link" href="${dirLink}" target="_blank" rel="noopener">Directions</a>
        </div>`;
        li.innerHTML = `<strong>${it.name}</strong><br><span style="color:#496;">${it.type}</span> · <span>${it.dist} km</span>${addrLine}${coordLine}${actions}`;
        listEl.appendChild(li);
    });
}

function openInlineMap(lat, lon, name) {
    const frame = document.getElementById('nearbyMapFrame');
    if (!frame || typeof lat !== 'number' || typeof lon !== 'number') return;
    const safeName = encodeURIComponent(name || 'Location');
    // Use Google Maps embed
    const url = `https://www.google.com/maps?q=${lat},${lon}(${safeName})&z=15&output=embed`;
    frame.src = url;
    // On small screens, scroll map into view
    try {
        const mapWrap = frame.closest('.nearby-map') || frame;
        mapWrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } catch (e) {}
}

// Utility function to show messages
function showMessage(text, sender) {
    addMessage(text, sender);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Apply UI language once DOM is ready
    applyTranslations(currentLanguage);
    setTimeout(() => {
        showMessage(translations[currentLanguage].greet, 'bot');
    }, 800);
    document.getElementById('userInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Add some interactive animations
function addHoverEffects() {
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

document.addEventListener('DOMContentLoaded', addHoverEffects);

// Accessibility improvements
function improveAccessibility() {
    document.querySelectorAll('button').forEach(button => {
        if (!button.getAttribute('aria-label')) {
            button.setAttribute('aria-label', button.textContent.trim());
        }
    });
    document.querySelectorAll('button, input, a').forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '3px solid #2c5aa0';
            this.style.outlineOffset = '2px';
        });
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
}

document.addEventListener('DOMContentLoaded', improveAccessibility);
