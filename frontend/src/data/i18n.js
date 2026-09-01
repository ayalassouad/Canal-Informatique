import { SERVICES, PRODUCT_CATEGORIES, PRODUCTS, STATS, ENGAGEMENTS, TESTIMONIALS, FAQS } from "./mockData";

const text = {
  en: {
    "NOS SERVICES SUR-MESURE": "TAILORED IT SERVICES",
    "Des Solutions Informatiques Clé en Main": "Complete IT Solutions, Ready to Deploy",
    "Une gamme complète de prestations pour installer, sécuriser et maintenir la totalité de votre parc informatique.": "A complete range of services to install, secure and maintain your entire IT environment.",
    "Découvrir la prestation": "Discover the service", "Engagements & Inclus dans cette prestation :": "What's included in this service:", "Fermer": "Close", "Demander un devis pour ce service": "Request a quote for this service",
    "EQUIPEMENT & MATÉRIEL PRO": "PRO EQUIPMENT & HARDWARE", "Catalogue de Matériel Informatique": "IT Hardware Catalogue", "Une sélection rigoureuse d'équipements récents et fiables pour doter votre entreprise du meilleur matériel.": "A carefully selected range of recent, reliable equipment for your business.", "Rechercher un matériel (ex: i7, Serveur, Écran, Switch...)": "Search equipment (e.g. i7, Server, Screen, Switch...)", "Garantie & SAV inclus": "Warranty & after-sales service included", "Devis": "Quote", "Aucun produit ne correspond à votre recherche": "No product matches your search",
    "À PROPOS DE CANAL INFORMATIQUE": "ABOUT CANAL INFORMATIQUE", "30 Ans de Savoir-Faire & d'Engagement IT au Maroc": "30 Years of IT Expertise in Morocco", "Planifier un audit informatique": "Schedule an IT audit", "Nous contacter": "Contact us",
    "CONFIANCE & RETOURS CLIENTS": "TRUST & CLIENT FEEDBACK", "Ce que nos clients disent de nous": "What our clients say", "Découvrez les témoignages des entreprises et professionnels qui nous font confiance pour la gestion de leur infrastructure.": "Hear from companies and professionals who trust us with their infrastructure.",
    "DES RÉPONSES À VOS QUESTIONS": "ANSWERS TO YOUR QUESTIONS", "Foire Aux Questions (FAQ)": "Frequently Asked Questions (FAQ)", "Retrouvez les réponses aux interrogations les plus fréquentes concernant nos contrats, garanties et interventions.": "Find answers to the most common questions about our contracts, warranties and services.",
    "PRENDRE CONTACT": "GET IN TOUCH", "Discutons de Votre Projet IT": "Let's discuss your IT project", "Écrire sur WhatsApp": "Write on WhatsApp", "Envoyez-nous un Message": "Send us a message", "Remplissez ce formulaire et recevez une réponse sous 24 heures maximum.": "Complete this form and receive a reply within 24 hours.", "Nom complet *": "Full name *", "Adresse Email *": "Email address *", "Numéro de téléphone": "Phone number", "Sujet de votre demande *": "Subject of your request *", "Message ou détails du besoin *": "Message or request details *", "Envoyer mon message": "Send my message", "Envoi en cours...": "Sending...", "Zone d'Intervention": "Service area", "Horaires d'Ouverture": "Opening hours", "Téléphone Direct": "Direct phone", "Adresse Email": "Email address",
    "Simulateur de Devis Informatique": "IT Quote Simulator", "Étape": "Step", "sur": "of", "Précédent": "Previous", "Suivant": "Next", "Transmission...": "Sending...", "Envoyer ma demande de devis": "Send my quote request", "Nombre de postes informatiques :": "Number of workstations:", "Délai souhaité :": "Desired timeframe:", "Nom de l'entreprise": "Company name", "Adresse email professionnelle *": "Business email *", "Précisions sur votre projet (Optionnel)": "Project details (Optional)",
    "Navigation": "Navigation", "Nos Services": "Our Services", "Catalogue Produits": "Product Catalogue", "À propos de nous": "About us", "Services Pro": "Professional Services", "Vente de Matériel": "Hardware Sales", "Contrat de Maintenance": "Maintenance Contract", "Installation & Réseaux": "Installation & Networks", "Assistance Hotline 24/7": "24/7 Hotline Support", "Simulateur de Devis": "Quote Simulator", "Contact & Accès": "Contact & Access", "Tous droits réservés.": "All rights reserved.", "Admin Dashboard": "Admin Dashboard",
    "EXPERT IT AU MAROC DEPUIS": "IT EXPERTS IN MOROCCO SINCE", "Solutions IT & Maintenance": "Tailored IT solutions & maintenance", "sur-mesure": "for your business", "Simuler un devis": "Get a quote", "Nos services": "Our services", "30+ ans": "30+ years", "d'expérience certifiée": "of certified experience", "Intervention sur site": "On-site intervention", "Matériel garanti": "Guaranteed hardware", "Support": "Support", "téléphonique & télémaintenance": "phone & remote maintenance", "Serveurs & Cloud": "Servers & Cloud", "Réseaux Wi-Fi & Câblage": "Wi-Fi Networks & Cabling", "Contrats de Maintenance": "Maintenance Contracts", "Support Hotline Réactif": "Responsive Hotline Support", "INFRASTRUCTURE CANAL IT": "CANAL IT INFRASTRUCTURE", "99.8% de Disponibilité": "99.8% uptime", "Partenaire IT de +1000 clients": "IT partner to 1000+ clients"
  },
  ar: {
    "NOS SERVICES SUR-MESURE": "خدمات تكنولوجيا المعلومات المخصصة", "Des Solutions Informatiques Clé en Main": "حلول معلوماتية جاهزة للاستخدام", "Une gamme complète de prestations pour installer, sécuriser et maintenir la totalité de votre parc informatique.": "مجموعة متكاملة لتركيب وتأمين وصيانة بنيتكم المعلوماتية.", "Découvrir la prestation": "اكتشف الخدمة", "Engagements & Inclus dans cette prestation :": "ما تتضمنه هذه الخدمة:", "Fermer": "إغلاق", "Demander un devis pour ce service": "اطلب عرض سعر لهذه الخدمة",
    "EQUIPEMENT & MATÉRIEL PRO": "المعدات والتجهيزات الاحترافية", "Catalogue de Matériel Informatique": "كتالوج المعدات المعلوماتية", "Une sélection rigoureuse d'équipements récents et fiables pour doter votre entreprise du meilleur matériel.": "اختيار دقيق لأحدث المعدات الموثوقة لتجهيز شركتكم.", "Rechercher un matériel (ex: i7, Serveur, Écran, Switch...)": "ابحث عن معدات (مثال: i7، خادم، شاشة، محول...)", "Garantie & SAV inclus": "الضمان وخدمة ما بعد البيع مشمولان", "Devis": "عرض سعر", "Aucun produit ne correspond à votre recherche": "لا يوجد منتج يطابق بحثكم",
    "À PROPOS DE CANAL INFORMATIQUE": "عن كانال للمعلوماتية", "30 Ans de Savoir-Faire & d'Engagement IT au Maroc": "30 عاماً من الخبرة والالتزام المعلوماتي في المغرب", "Planifier un audit informatique": "حدد موعداً لتدقيق معلوماتي", "Nous contacter": "اتصل بنا",
    "CONFIANCE & RETOURS CLIENTS": "ثقة وآراء العملاء", "Ce que nos clients disent de nous": "ماذا يقول عملاؤنا عنا", "Découvrez les témoignages des entreprises et professionnels qui nous font confiance pour la gestion de leur infrastructure.": "اكتشف شهادات الشركات والمهنيين الذين يثقون بنا لإدارة بنيتهم المعلوماتية.", "DES RÉPONSES À VOS QUESTIONS": "إجابات على أسئلتكم", "Foire Aux Questions (FAQ)": "الأسئلة الشائعة", "Retrouvez les réponses aux interrogations les plus fréquentes concernant nos contrats, garanties et interventions.": "تجدون إجابات عن أكثر الأسئلة شيوعاً حول عقودنا وضماناتنا وخدماتنا.",
    "PRENDRE CONTACT": "تواصل معنا", "Discutons de Votre Projet IT": "لنتحدث عن مشروعكم المعلوماتي", "Écrire sur WhatsApp": "راسلنا عبر واتساب", "Envoyez-nous un Message": "أرسلوا لنا رسالة", "Remplissez ce formulaire et recevez une réponse sous 24 heures maximum.": "املأوا النموذج وستتلقون رداً خلال 24 ساعة كحد أقصى.", "Nom complet *": "الاسم الكامل *", "Adresse Email *": "البريد الإلكتروني *", "Numéro de téléphone": "رقم الهاتف", "Sujet de votre demande *": "موضوع طلبكم *", "Message ou détails du besoin *": "الرسالة أو تفاصيل الطلب *", "Envoyer mon message": "أرسل رسالتي", "Envoi en cours...": "جار الإرسال...", "Zone d'Intervention": "منطقة التدخل", "Horaires d'Ouverture": "ساعات العمل", "Téléphone Direct": "الهاتف المباشر", "Adresse Email": "البريد الإلكتروني",
    "Simulateur de Devis Informatique": "محاكي عروض الأسعار المعلوماتية", "Étape": "الخطوة", "sur": "من", "Précédent": "السابق", "Suivant": "التالي", "Transmission...": "جار الإرسال...", "Envoyer ma demande de devis": "أرسل طلب عرض السعر", "Nombre de postes informatiques :": "عدد أجهزة الكمبيوتر:", "Délai souhaité :": "المدة المطلوبة:", "Nom de l'entreprise": "اسم الشركة", "Adresse email professionnelle *": "البريد المهني *", "Précisions sur votre projet (Optionnel)": "تفاصيل المشروع (اختياري)",
    "Navigation": "التنقل", "Nos Services": "خدماتنا", "Catalogue Produits": "كتالوج المنتجات", "À propos de nous": "من نحن", "Services Pro": "الخدمات المهنية", "Vente de Matériel": "بيع المعدات", "Contrat de Maintenance": "عقد الصيانة", "Installation & Réseaux": "التركيب والشبكات", "Assistance Hotline 24/7": "الدعم على مدار الساعة", "Simulateur de Devis": "محاكي عروض الأسعار", "Contact & Accès": "الاتصال والوصول", "Tous droits réservés.": "جميع الحقوق محفوظة.", "Admin Dashboard": "لوحة الإدارة",
    "EXPERT IT AU MAROC DEPUIS": "خبراء المعلوماتية في المغرب منذ", "Solutions IT & Maintenance": "حلول وصيانة معلوماتية", "sur-mesure": "مخصصة لشركتكم", "Simuler un devis": "احصل على عرض سعر", "Nos services": "خدماتنا", "30+ ans": "أكثر من 30 عاماً", "d'expérience certifiée": "من الخبرة المعتمدة", "Intervention sur site": "تدخل في الموقع", "Matériel garanti": "معدات مضمونة", "Support": "دعم", "téléphonique & télémaintenance": "هاتفـي وعن بعد", "Serveurs & Cloud": "الخوادم والسحابة", "Réseaux Wi-Fi & Câblage": "شبكات Wi-Fi والكابلات", "Contrats de Maintenance": "عقود الصيانة", "Support Hotline Réactif": "دعم سريع", "INFRASTRUCTURE CANAL IT": "بنية كانال المعلوماتية", "99.8% de Disponibilité": "توفر بنسبة 99.8%", "Partenaire IT de +1000 clients": "شريك معلوماتي لأكثر من 1000 عميل"
  }
};

const itemTranslations = {
  en: {
    serviceBadges: ["Hardware Sales", "Preventive Support", "Deployment", "Infrastructure", "24/7 Support", "SME Solutions"],
    serviceTitles: ["Professional IT hardware sales", "Maintenance & Annual Contract", "Installation & Configuration", "Networks & Wi-Fi Security", "Support & Helpdesk", "Business & Cloud Solutions"],
    categories: ["All products", "Computers & Laptops", "Screens & Peripherals", "Printing & Supplies", "Servers & Networks"],
    productTitles: ["High-End Professional Laptop", "Professional Desktop Workstation", "Business Rack / Tower Server", "NAS Storage & Backup System", "Ergonomic Professional Monitor", "Professional Network Multifunction Printer", "24-Port Managed PoE+ Switch", "1500VA Line-Interactive UPS"],
    badges: ["In Stock", "Popular", "On Order", "Recommended", "In Stock", "In Stock", "Network", "Security"],
    stats: [["Years of Experience", "Since 1992 in Morocco"], ["Satisfied Clients", "SMEs, organizations & individuals"], ["Satisfaction Rate", "Consistent service quality"], ["Response Time", "Fast emergency response"]]
  },
  ar: {
    serviceBadges: ["بيع المعدات", "دعم وقائي", "النشر", "البنية التحتية", "دعم 24/7", "حلول الشركات"],
    serviceTitles: ["بيع معدات معلوماتية احترافية", "الصيانة والعقد السنوي", "التركيب والإعداد", "الشبكات وأمن Wi-Fi", "الدعم ومكتب المساعدة", "حلول الشركات والسحابة"],
    categories: ["جميع المنتجات", "أجهزة الكمبيوتر والمحمولة", "الشاشات والملحقات", "الطباعة واللوازم", "الخوادم والشبكات"],
    productTitles: ["حاسوب محمول احترافي متطور", "محطة عمل مكتبية احترافية", "خادم شركات Rack / Tower", "نظام تخزين ونسخ احتياطي NAS", "شاشة احترافية مريحة", "طابعة شبكية متعددة الوظائف", "محوّل PoE+ مُدار بـ 24 منفذاً", "مزود طاقة احتياطي 1500VA"],
    badges: ["متوفر", "الأكثر طلباً", "حسب الطلب", "موصى به", "متوفر", "متوفر", "شبكة", "حماية"],
    stats: [["سنوات من الخبرة", "منذ 1992 في المغرب"], ["عميل راضٍ", "شركات وأفراد"], ["نسبة الرضا", "جودة خدمة ثابتة"], ["وقت الاستجابة", "استجابة سريعة للطوارئ"]]
  }
};

const extended = {
  en: {
    services: ["Professional IT equipment selected from the world's leading brands.", "Preventive and corrective maintenance to protect your IT fleet's performance.", "End-to-end deployment of your professional systems, devices and software.", "Design, cabling and security for your business networks.", "Dedicated, responsive technical support to solve daily incidents.", "End-to-end support for transforming and managing your IT infrastructure."],
    testimonialRoles: ["Managing Director - Accounting Firm", "Operations Manager - Logistics Group", "Manager - Engineering Company"],
    testimonialTexts: ["Canal Informatique has managed our entire IT fleet for over 8 years. Their responsiveness and equipment quality keep our business secure every day.", "Complete network and server installation for our new headquarters, with no business interruption. A professional and highly skilled team.", "Outstanding maintenance service. Whenever an issue occurs, support takes control remotely and solves it within minutes."],
    faqQuestions: ["What areas do you cover for maintenance?", "Do you offer IT maintenance contracts for businesses?", "Is the equipment sold covered by a warranty?", "How can I get a free quote?", "Do you provide data backup and recovery?"],
    faqAnswers: ["We mainly cover Casablanca, Rabat, Sale, Kenitra and nearby industrial areas. Business contracts can cover other regions of Morocco.", "Yes. Our annual contracts include preventive visits, unlimited phone support, remote maintenance and priority emergency visits.", "Yes. New equipment includes the official manufacturer's warranty, and we also provide after-sales support.", "Use our online quote simulator, contact form, or call us directly.", "Yes. We implement secure automatic backups on local NAS and encrypted cloud servers, and offer data recovery services."]
  },
  ar: {
    services: ["معدات معلوماتية احترافية مختارة من أكبر العلامات العالمية.", "صيانة وقائية وعلاجية للحفاظ على أداء بنيتكم المعلوماتية.", "نشر متكامل لأنظمتكم وأجهزتكم وبرامجكم المهنية.", "تصميم وتمديد وتأمين شبكات الشركات.", "دعم تقني سريع ومخصص لحل أعطالكم اليومية.", "مرافقة شاملة لتحويل وإدارة بنيتكم المعلوماتية."],
    testimonialRoles: ["المدير العام - مكتب محاسبة", "مسؤول العمليات - مجموعة لوجستية", "المدير - شركة هندسية"],
    testimonialTexts: ["تدير كانال للمعلوماتية بنيتنا المعلوماتية منذ أكثر من 8 سنوات. سرعتهم وجودة معداتهم تؤمن نشاطنا يومياً.", "تركيب كامل للشبكة والخوادم بمقرنا الجديد دون أي توقف للنشاط. فريق محترف وكفء جداً.", "خدمة صيانة ممتازة. عند حدوث أي مشكلة، يتدخل الدعم عن بعد ويحلها خلال دقائق."],
    faqQuestions: ["ما هي مناطق تدخل الصيانة؟", "هل تقدمون عقود صيانة معلوماتية للشركات؟", "هل المعدات المباعة مضمونة؟", "كيف أحصل على عرض سعر مجاني؟", "هل تقدمون نسخاً احتياطية واستعادة للبيانات؟"],
    faqAnswers: ["نتدخل أساساً في الدار البيضاء والرباط وسلا والقنيطرة والمناطق الصناعية المجاورة.", "نعم، تشمل عقودنا زيارات وقائية ودعماً هاتفياً وصيانة عن بعد وتدخلاً استعجالياً.", "نعم، تستفيد المعدات الجديدة من ضمان المصنع الرسمي وخدمة ما بعد البيع.", "استخدموا محاكي عرض السعر أو نموذج الاتصال أو اتصلوا بنا مباشرة.", "نعم، نوفر نسخاً احتياطية آمنة محلياً وعلى السحابة وخدمات استعادة البيانات."]
  }
};

export function t(language, value) {
  return text[language]?.[value] || value;
}

export function localizedData(language) {
  if (language === "fr") return { SERVICES, PRODUCT_CATEGORIES, PRODUCTS, STATS, ENGAGEMENTS, TESTIMONIALS, FAQS };
  const translated = itemTranslations[language];
  return {
    SERVICES: SERVICES.map((item, index) => ({ ...item, badge: translated.serviceBadges[index], title: translated.serviceTitles[index], shortText: extended[language].services[index] })),
    PRODUCT_CATEGORIES: PRODUCT_CATEGORIES.map((item, index) => ({ ...item, label: translated.categories[index] })),
    PRODUCTS: PRODUCTS.map((item, index) => ({ ...item, title: translated.productTitles[index], badge: translated.badges[index] })),
    STATS: STATS.map((item, index) => ({ ...item, label: translated.stats[index][0], sub: translated.stats[index][1] })),
    ENGAGEMENTS,
    TESTIMONIALS: TESTIMONIALS.map((item, index) => ({ ...item, role: extended[language].testimonialRoles[index], text: extended[language].testimonialTexts[index] })),
    FAQS: FAQS.map((item, index) => ({ ...item, q: extended[language].faqQuestions[index], a: extended[language].faqAnswers[index] }))
  };
}
