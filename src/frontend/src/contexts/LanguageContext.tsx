import { type ReactNode, createContext, useContext, useState } from "react";

export type Language = "en" | "hi" | "mr";

export interface Translations {
  // Navbar
  nav: {
    home: string;
    about: string;
    indiaStats: string;
    schemes: string;
    tools: string;
    quiz: string;
    tips: string;
    retire: string;
    contact: string;
    learn: string;
    banking: string;
    digitalPayments: string;
    savingInvesting: string;
    creditLoans: string;
    fraudSecurity: string;
    taxes: string;
    login: string;
  };
  // Home
  home: {
    heroTitle: string;
    heroSubtitle: string;
    faqTitle: string;
    faqSubtitle: string;
    govResourcesTitle: string;
    govResourcesSubtitle: string;
    realStoryTitle: string;
    ctaTitle: string;
    ctaSubtitle: string;
    takeQuiz: string;
    viewSchemes: string;
  };
  // Schemes
  schemes: {
    title: string;
    subtitle: string;
    realTipTitle: string;
    realTipDesc: string;
    searchPlaceholder: string;
  };
  // Banking
  banking: {
    title: string;
    subtitle: string;
    accountTypesTitle: string;
    howToOpenTitle: string;
    cardsTitle: string;
    netBankingTitle: string;
    realStoryTitle: string;
    realStoryDesc: string;
    tryTodayLabel: string;
    tryTodayDesc: string;
  };
  // Financial Tips
  tips: {
    title: string;
    subtitle: string;
    tryTodayLabel: string;
    ctaTitle: string;
  };
  // Savings & Investing
  savings: {
    title: string;
    subtitle: string;
    savingVsInvestingTitle: string;
    investmentTypesTitle: string;
    riskLadderTitle: string;
    compoundingTitle: string;
    realStoryTitle: string;
    realStoryDesc: string;
    tryTodayLabel: string;
    tryTodayDesc: string;
  };
  // Common
  common: {
    officialSite: string;
    tryThisToday: string;
    realLifeStory: string;
    govLinks: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      indiaStats: "India Stats",
      schemes: "Schemes",
      tools: "Tools",
      quiz: "Quiz",
      tips: "Tips",
      retire: "Retire",
      contact: "Contact",
      learn: "Learn",
      banking: "Banking System",
      digitalPayments: "Digital Payments",
      savingInvesting: "Saving & Investing",
      creditLoans: "Credit & Loans",
      fraudSecurity: "Fraud & Security",
      taxes: "Taxes",
      login: "Login",
    },
    home: {
      heroTitle: "Master Your Money. Secure Your Future.",
      heroSubtitle:
        "India's most comprehensive financial literacy platform — learn budgeting, investing, government schemes, and more.",
      faqTitle: "Frequently Asked Questions",
      faqSubtitle: "Quick answers to common financial questions",
      govResourcesTitle: "Trusted Government Resources",
      govResourcesSubtitle:
        "Official links to India's top financial regulators and portals",
      realStoryTitle: "Real Stories, Real Results",
      ctaTitle: "Ready to Test Your Financial Knowledge?",
      ctaSubtitle:
        "Take our 15-question quiz covering banking, investments, insurance, and government schemes.",
      takeQuiz: "Take the Quiz",
      viewSchemes: "View Schemes",
    },
    schemes: {
      title: "Government Financial Schemes",
      subtitle:
        "Explore and bookmark India's key government-backed financial schemes for every citizen",
      realTipTitle: "Real Tip: These schemes can save your family lakhs!",
      realTipDesc:
        "A family in Pune enrolled in PMJJBY (₹436/year) + PMSBY (₹20/year) + APY. When the breadwinner met with an accident, they received ₹2 lakh within 30 days — with zero paperwork hassle. Total annual cost: under ₹500.",
      searchPlaceholder: "Search schemes by name, category...",
    },
    banking: {
      title: "Banking System in India",
      subtitle:
        "Understanding bank accounts, cards, interest rates, and digital banking — your gateway to financial inclusion",
      accountTypesTitle: "Types of Bank Accounts",
      howToOpenTitle: "How to Open a Bank Account",
      cardsTitle: "ATM, Debit Card & Credit Card",
      netBankingTitle: "Net Banking & Mobile Banking",
      realStoryTitle: "Real Story: From Cash to Digital in 30 Minutes",
      realStoryDesc:
        "Ramesh (age 42, vegetable vendor, Nagpur) had never used a bank. Under PMJDY, he opened a zero-balance account with just his Aadhaar card. Within a week, his son set up BHIM UPI. He now receives payments directly to his phone and saves ₹1,200/month in commissions he used to pay to middlemen.",
      tryTodayLabel: "Try This Today",
      tryTodayDesc:
        "Visit your nearest bank branch with your Aadhaar card. Ask specifically for a Jan Dhan (PMJDY) account — it's free, zero-balance, and comes with a RuPay debit card. Takes under 30 minutes.",
    },
    tips: {
      title: "Pro Financial Tips",
      subtitle:
        "Expert-curated, actionable tips tailored for Indian investors and earners — from building your first emergency fund to optimising your tax filing.",
      tryTodayLabel: "Try This Today",
      ctaTitle: "Put These Tips Into Practice",
    },
    savings: {
      title: "Saving & Investment Basics",
      subtitle:
        "Know the difference between saving and investing, types of investments, and the power of starting early",
      savingVsInvestingTitle: "Saving vs Investing — What's the Difference?",
      investmentTypesTitle: "Types of Investments",
      riskLadderTitle: "Risk vs Return — The Investment Ladder",
      compoundingTitle: "Power of Compounding",
      realStoryTitle: "Real Story: Priya's ₹500/month Journey",
      realStoryDesc:
        "Priya (nurse, Pune, age 26) started a ₹500/month SIP in a Nifty 50 index fund after reading about compounding. 8 years later, she had invested ₹48,000 but her portfolio was worth ₹92,000 — nearly double. She increased her SIP every year. At 60, her projected corpus: ₹1.8 crore from just ₹500/month.",
      tryTodayLabel: "Try This Today",
      tryTodayDesc:
        "Open the Groww or Paytm Money app. Complete your KYC with PAN + Aadhaar. Start a ₹500/month SIP in the Nifty 50 Index Fund. Takes under 15 minutes and you'll thank yourself in 10 years.",
    },
    common: {
      officialSite: "Official Site",
      tryThisToday: "Try This Today",
      realLifeStory: "Real Life Story",
      govLinks: "Government Links",
    },
  },
  hi: {
    nav: {
      home: "होम",
      about: "परिचय",
      indiaStats: "भारत सांख्यिकी",
      schemes: "योजनाएं",
      tools: "टूल्स",
      quiz: "क्विज़",
      tips: "टिप्स",
      retire: "रिटायरमेंट",
      contact: "संपर्क",
      learn: "सीखें",
      banking: "बैंकिंग सिस्टम",
      digitalPayments: "डिजिटल पेमेंट",
      savingInvesting: "बचत और निवेश",
      creditLoans: "क्रेडिट और लोन",
      fraudSecurity: "धोखाधड़ी और सुरक्षा",
      taxes: "टैक्स",
      login: "लॉगिन",
    },
    home: {
      heroTitle: "अपने पैसे को समझें। भविष्य को सुरक्षित करें।",
      heroSubtitle:
        "भारत का सबसे व्यापक वित्तीय साक्षरता मंच — बजट, निवेश, सरकारी योजनाएं और बहुत कुछ सीखें।",
      faqTitle: "अक्सर पूछे जाने वाले सवाल",
      faqSubtitle: "सामान्य वित्तीय प्रश्नों के त्वरित उत्तर",
      govResourcesTitle: "विश्वसनीय सरकारी संसाधन",
      govResourcesSubtitle:
        "भारत के शीर्ष वित्तीय नियामकों और पोर्टलों के आधिकारिक लिंक",
      realStoryTitle: "असली कहानियां, असली नतीजे",
      ctaTitle: "अपनी वित्तीय जानकारी परखें?",
      ctaSubtitle:
        "बैंकिंग, निवेश, बीमा और सरकारी योजनाओं पर हमारी 15 सवालों की क्विज़ लें।",
      takeQuiz: "क्विज़ दें",
      viewSchemes: "योजनाएं देखें",
    },
    schemes: {
      title: "सरकारी वित्तीय योजनाएं",
      subtitle:
        "हर नागरिक के लिए भारत की प्रमुख सरकारी वित्तीय योजनाओं को खोजें और बुकमार्क करें",
      realTipTitle: "असली टिप: ये योजनाएं आपके परिवार को लाखों बचा सकती हैं!",
      realTipDesc:
        "पुणे के एक परिवार ने PMJJBY (₹436/साल) + PMSBY (₹20/साल) + APY में नामांकन कराया। जब परिवार के मुखिया का एक्सीडेंट हुआ, तो 30 दिनों के भीतर ₹2 लाख मिले — बिना किसी परेशानी के। कुल वार्षिक खर्च: ₹500 से कम।",
      searchPlaceholder: "योजनाओं को नाम, श्रेणी से खोजें...",
    },
    banking: {
      title: "भारत में बैंकिंग सिस्टम",
      subtitle:
        "बैंक खाते, कार्ड, ब्याज दरें और डिजिटल बैंकिंग को समझें — वित्तीय समावेश का आपका प्रवेश द्वार",
      accountTypesTitle: "बैंक खातों के प्रकार",
      howToOpenTitle: "बैंक खाता कैसे खोलें",
      cardsTitle: "ATM, डेबिट कार्ड और क्रेडिट कार्ड",
      netBankingTitle: "नेट बैंकिंग और मोबाइल बैंकिंग",
      realStoryTitle: "असली कहानी: 30 मिनट में नकद से डिजिटल",
      realStoryDesc:
        "रमेश (उम्र 42, सब्जी विक्रेता, नागपुर) ने कभी बैंक का उपयोग नहीं किया था। PMJDY के तहत, उन्होंने केवल अपने आधार कार्ड से जीरो-बैलेंस खाता खोला। एक हफ्ते में, उनके बेटे ने BHIM UPI सेट किया। अब वे सीधे फोन पर भुगतान प्राप्त करते हैं और हर महीने ₹1,200 बचाते हैं।",
      tryTodayLabel: "आज ही करें",
      tryTodayDesc:
        "अपने आधार कार्ड के साथ नजदीकी बैंक शाखा जाएं। विशेष रूप से जन धन (PMJDY) खाते के लिए पूछें — यह मुफ्त है, जीरो-बैलेंस है, और रुपे डेबिट कार्ड के साथ आता है। 30 मिनट से कम समय लगता है।",
    },
    tips: {
      title: "प्रो वित्तीय टिप्स",
      subtitle:
        "भारतीय निवेशकों के लिए विशेषज्ञ-क्यूरेटेड, क्रियाशील टिप्स — पहले इमरजेंसी फंड बनाने से लेकर टैक्स फाइलिंग तक।",
      tryTodayLabel: "आज ही करें",
      ctaTitle: "इन टिप्स को व्यवहार में लाएं",
    },
    savings: {
      title: "बचत और निवेश की मूल बातें",
      subtitle:
        "बचत और निवेश के बीच का अंतर, निवेश के प्रकार, और जल्दी शुरुआत करने की शक्ति जानें",
      savingVsInvestingTitle: "बचत बनाम निवेश — क्या फर्क है?",
      investmentTypesTitle: "निवेश के प्रकार",
      riskLadderTitle: "जोखिम बनाम रिटर्न — निवेश की सीढ़ी",
      compoundingTitle: "चक्रवृद्धि ब्याज की शक्ति",
      realStoryTitle: "असली कहानी: प्रिया की ₹500/महीने की यात्रा",
      realStoryDesc:
        "प्रिया (नर्स, पुणे, उम्र 26) ने चक्रवृद्धि के बारे में पढ़ने के बाद Nifty 50 इंडेक्स फंड में ₹500/महीने SIP शुरू की। 8 साल बाद, उन्होंने ₹48,000 निवेश किया था लेकिन पोर्टफोलियो ₹92,000 था — लगभग दोगुना।",
      tryTodayLabel: "आज ही करें",
      tryTodayDesc:
        "Groww या Paytm Money ऐप खोलें। PAN + Aadhaar से KYC पूरा करें। Nifty 50 Index Fund में ₹500/महीने SIP शुरू करें। 15 मिनट से कम समय लगता है।",
    },
    common: {
      officialSite: "आधिकारिक साइट",
      tryThisToday: "आज ही करें",
      realLifeStory: "असली कहानी",
      govLinks: "सरकारी लिंक",
    },
  },
  mr: {
    nav: {
      home: "मुख्यपृष्ठ",
      about: "परिचय",
      indiaStats: "भारत आकडेवारी",
      schemes: "योजना",
      tools: "साधने",
      quiz: "क्विझ",
      tips: "टिप्स",
      retire: "निवृत्ती",
      contact: "संपर्क",
      learn: "शिका",
      banking: "बँकिंग प्रणाली",
      digitalPayments: "डिजिटल पेमेंट",
      savingInvesting: "बचत आणि गुंतवणूक",
      creditLoans: "क्रेडिट आणि कर्ज",
      fraudSecurity: "फसवणूक आणि सुरक्षा",
      taxes: "कर",
      login: "लॉगिन",
    },
    home: {
      heroTitle: "आपले पैसे समजून घ्या. भविष्य सुरक्षित करा.",
      heroSubtitle:
        "भारताचे सर्वात सर्वसमावेशक आर्थिक साक्षरता व्यासपीठ — बजेट, गुंतवणूक, सरकारी योजना आणि बरेच काही शिका.",
      faqTitle: "वारंवार विचारले जाणारे प्रश्न",
      faqSubtitle: "सामान्य आर्थिक प्रश्नांची त्वरित उत्तरे",
      govResourcesTitle: "विश्वसनीय सरकारी संसाधने",
      govResourcesSubtitle: "भारतातील शीर्ष आर्थिक नियामक आणि पोर्टल्सचे अधिकृत दुवे",
      realStoryTitle: "खऱ्या कथा, खरे परिणाम",
      ctaTitle: "आपले आर्थिक ज्ञान तपासायचे आहे?",
      ctaSubtitle:
        "बँकिंग, गुंतवणूक, विमा आणि सरकारी योजनांवर आमची 15 प्रश्नांची क्विझ घ्या.",
      takeQuiz: "क्विझ द्या",
      viewSchemes: "योजना पहा",
    },
    schemes: {
      title: "सरकारी आर्थिक योजना",
      subtitle:
        "प्रत्येक नागरिकासाठी भारताच्या प्रमुख सरकारी आर्थिक योजना शोधा आणि बुकमार्क करा",
      realTipTitle: "खरी टीप: या योजना तुमच्या कुटुंबाचे लाख रुपये वाचवू शकतात!",
      realTipDesc:
        "पुण्यातील एका कुटुंबाने PMJJBY (₹436/वर्ष) + PMSBY (₹20/वर्ष) + APY मध्ये नोंदणी केली. जेव्हा कर्त्याला अपघात झाला, तेव्हा 30 दिवसांत ₹2 लाख मिळाले — कोणत्याही त्रासाशिवाय. एकूण वार्षिक खर्च: ₹500 पेक्षा कमी.",
      searchPlaceholder: "नाव, श्रेणीनुसार योजना शोधा...",
    },
    banking: {
      title: "भारतातील बँकिंग प्रणाली",
      subtitle:
        "बँक खाती, कार्ड, व्याजदर आणि डिजिटल बँकिंग समजून घ्या — आर्थिक समावेशनाचे प्रवेशद्वार",
      accountTypesTitle: "बँक खात्यांचे प्रकार",
      howToOpenTitle: "बँक खाते कसे उघडावे",
      cardsTitle: "ATM, डेबिट कार्ड आणि क्रेडिट कार्ड",
      netBankingTitle: "नेट बँकिंग आणि मोबाइल बँकिंग",
      realStoryTitle: "खरी कथा: 30 मिनिटांत रोखीपासून डिजिटलकडे",
      realStoryDesc:
        "रमेश (वय 42, भाजी विक्रेता, नागपूर) यांनी कधीही बँक वापरली नव्हती. PMJDY अंतर्गत, त्यांनी फक्त आधार कार्डने शून्य-शिल्लक खाते उघडले. एका आठवड्यात, त्यांच्या मुलाने BHIM UPI सेट केले. आता ते थेट फोनवर पेमेंट प्राप्त करतात.",
      tryTodayLabel: "आजच करा",
      tryTodayDesc:
        "आधार कार्डसह जवळच्या बँकेच्या शाखेत जा. विशेषतः जन धन (PMJDY) खात्यासाठी विचारा — ते मोफत, शून्य-शिल्लक आहे आणि रुपे डेबिट कार्डसह येते. 30 मिनिटांपेक्षा कमी वेळ लागतो.",
    },
    tips: {
      title: "प्रो आर्थिक टिप्स",
      subtitle:
        "भारतीय गुंतवणूकदारांसाठी तज्ञांनी क्युरेट केलेल्या, कृतीयोग्य टिप्स — पहिला इमर्जन्सी फंड तयार करण्यापासून कर भरण्यापर्यंत.",
      tryTodayLabel: "आजच करा",
      ctaTitle: "या टिप्स अमलात आणा",
    },
    savings: {
      title: "बचत आणि गुंतवणुकीच्या मूलभूत गोष्टी",
      subtitle:
        "बचत आणि गुंतवणूक यातील फरक, गुंतवणुकीचे प्रकार आणि लवकर सुरुवात करण्याची शक्ती जाणून घ्या",
      savingVsInvestingTitle: "बचत विरुद्ध गुंतवणूक — काय फरक आहे?",
      investmentTypesTitle: "गुंतवणुकीचे प्रकार",
      riskLadderTitle: "जोखीम विरुद्ध परतावा — गुंतवणुकीची शिडी",
      compoundingTitle: "चक्रवाढ व्याजाची शक्ती",
      realStoryTitle: "खरी कथा: प्रियाची ₹500/महिना प्रवास",
      realStoryDesc:
        "प्रिया (नर्स, पुणे, वय 26) ने Nifty 50 इंडेक्स फंडमध्ये ₹500/महिना SIP सुरू केली. 8 वर्षांनंतर, तिने ₹48,000 गुंतवले होते पण पोर्टफोलिओ ₹92,000 होता — जवळपास दुप्पट.",
      tryTodayLabel: "आजच करा",
      tryTodayDesc:
        "Groww किंवा Paytm Money अ‍ॅप उघडा. PAN + Aadhaar ने KYC पूर्ण करा. Nifty 50 Index Fund मध्ये ₹500/महिना SIP सुरू करा. 15 मिनिटांपेक्षा कमी वेळ लागतो.",
    },
    common: {
      officialSite: "अधिकृत साइट",
      tryThisToday: "आजच करा",
      realLifeStory: "खरी कथा",
      govLinks: "सरकारी दुवे",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem("finlit-lang");
    return (stored as Language) || "en";
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("finlit-lang", lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be inside LanguageProvider");
  return ctx;
}
