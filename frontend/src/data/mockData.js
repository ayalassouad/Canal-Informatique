import {
  Monitor, Wrench, Settings, Network, Headphones, Building2,
  Laptop, Server, Printer, ShieldCheck, Cpu, HardDrive,
  Wifi, ShieldAlert, Cloud, Clock, Award, CheckCircle, Zap
} from "lucide-react";

export const COMPANY_INFO = {
  name: "Canal Informatique",
  tagline: "Votre partenaire informatique de confiance depuis 1992",
  phone: "0620155466",
  phoneFormatted: "+212 6 20 15 54 66",
  whatsappNumber: "212620155466",
  email: "contact@canal-informatique.ma",
  address: "Casablanca & Région Rabat-Salé-Kénitra, Maroc",
  experienceYears: 32,
  creationYear: 1992,
  hours: "Lun - Ven: 08:30 - 19:00 | Sam: 09:00 - 13:00"
};

export const SERVICES = [
  {
    id: "vente",
    icon: Monitor,
    badge: "Vente Matériel",
    title: "Vente de matériel informatique",
    shortText: "Équipements informatiques professionnels sélectionnés parmi les plus grandes marques mondiales.",
    fullText: "Fourniture d'ordinateurs fixes et portables, serveurs, composants réseau, imprimantes et accessoires. Nous garantissons du matériel authentique avec garantie constructeur et assistance au choix selon votre budget.",
    features: ["Garantie pièces & main d'œuvre", "Matériel neuf & reconditionné certifié", "Conseil sur-mesure d'équipement", "Livraison & pré-configuration"]
  },
  {
    id: "maintenance",
    icon: Wrench,
    badge: "Support Preventif",
    title: "Maintenance & Contrat Annuel",
    shortText: "Maintenance préventive et curative pour préserver la performance de votre parc informatique.",
    fullText: "Contrats de maintenance personnalisés pour PME et grandes entreprises. Diagnostic complet, nettoyage système, mises à jour critiques, protection antivirus et intervention rapide en cas de panne.",
    features: ["Contrats de maintenance sur-mesure", "Interventions sur site sous 2h", "Telemaintenance sécurisée à distance", "Nettoyage & optimisation matérielle"]
  },
  {
    id: "installation",
    icon: Settings,
    badge: "Déploiement",
    title: "Installation & Configuration",
    shortText: "Déploiement clé en main de vos systèmes, périphériques et logiciels professionnels.",
    fullText: "Mise en service de vos postes de travail, configuration d'imprimantes réseau, déploiement d'OS (Windows / Linux / macOS), migration de données et installation de logiciels de gestion métiers.",
    features: ["Migration sans perte de données", "Configuration postes & serveurs", "Masterisation d'images système", "Formation des utilisateurs"]
  },
  {
    id: "reseaux",
    icon: Network,
    badge: "Infrastructure",
    title: "Réseaux & Sécurité Wi-Fi",
    shortText: "Conception, câblage et sécurisation de vos réseaux informatiques d'entreprise.",
    fullText: "Câblage structuré RJ45 / Fibre optique, installation de switchs administrables, routeurs pro, baies de brassage, bornes Wi-Fi maillées et pare-feu (Firewall) pour une protection maximale.",
    features: ["Audit & certification réseau", "Réseaux filaires Gigabit / Fibre", "Wi-Fi d'entreprise sécurisé", "Pare-feu & VPN accès distant"]
  },
  {
    id: "assistance",
    icon: Headphones,
    badge: "Support 24/7",
    title: "Assistance & Helpdesk",
    shortText: "Un support technologique dédié et réactif pour résoudre vos pannes au quotidien.",
    fullText: "Assistance téléphonique et prise en main à distance immédiate. Nos techniciens qualifiés résolvent vos pannes logicielles, ralentissements, problèmes d'impression et erreurs système sans attente.",
    features: ["Hotline dédiée réactive", "Prise en main à distance sécurisée", "Gestion des tickets d'incidents", "Suivi en temps réel"]
  },
  {
    id: "entreprises",
    icon: Building2,
    badge: "Solutions PME",
    title: "Solutions Entreprises & Cloud",
    shortText: "Accompagnement global dans la transformation et la gestion de vos infrastructures IT.",
    fullText: "Audit informatique complet, conseil en architecture réseau, solutions de sauvegarde automatisée (NAS / Cloud), virtualisation et continuité d'activité (PCA/PRA) pour assurer la sécurité de vos données.",
    features: ["Sauvegarde automatique locale & Cloud", "Virtualisation de serveurs (Hyper-V / VMware)", "Audit de sécurité informatique", "Conseil & schémas directeur IT"]
  }
];

export const PRODUCT_CATEGORIES = [
  { id: "all", label: "Tous les produits" },
  { id: "ordinateurs", label: "Ordinateurs & Portables" },
  { id: "ecrans", label: "Écrans & Périphériques" },
  { id: "impression", label: "Impression & Consommables" },
  { id: "serveurs", label: "Serveurs & Réseaux" }
];

export const PRODUCTS = [
  {
    id: 1,
    category: "ordinateurs",
    title: "PC Portable Professionnel High-End",
    specs: "Intel Core i7 / 16 Go RAM / 512 Go SSD NVMe / Ecran 15.6'' FHD",
    badge: "En Stock",
    tag: "Pro",
    icon: Laptop,
    priceEst: "Devis rapide"
  },
  {
    id: 2,
    category: "ordinateurs",
    title: "Station de Travail Bureau Pro",
    specs: "Intel Core i5 / 16 Go RAM / 1 TB SSD / Carte Graphique Dédiée",
    badge: "Populaire",
    tag: "PME",
    icon: Cpu,
    priceEst: "Devis rapide"
  },
  {
    id: 3,
    category: "serveurs",
    title: "Serveur Rack / Tour Entreprise",
    specs: "Intel Xeon / 32 Go RAM ECC / Double Alim Redondante / RAID 5",
    badge: "Sur Commande",
    tag: "Serveur",
    icon: Server,
    priceEst: "Devis rapide"
  },
  {
    id: 4,
    category: "serveurs",
    title: "Baie de Stockage NAS & Backup",
    specs: "NAS 4 Baies / 16 TB Bruts / Sauvegarde Automatisée & Cloud Sync",
    badge: "Recommandé",
    tag: "Stockage",
    icon: HardDrive,
    priceEst: "Devis rapide"
  },
  {
    id: 5,
    category: "ecrans",
    title: "Écran Professionnel Ergonomique",
    specs: "27 Pouces IPS / 4K UHD / Hub USB-C intégré / Filtre Lumière Bleue",
    badge: "En Stock",
    tag: "Écran",
    icon: Monitor,
    priceEst: "Devis rapide"
  },
  {
    id: 6,
    category: "impression",
    title: "Imprimante Multifonction Réseau Pro",
    specs: "Laser Recto-Verso Automatique / Réseau Wi-Fi & Ethernet / 40 ppm",
    badge: "En Stock",
    tag: "Impression",
    icon: Printer,
    priceEst: "Devis rapide"
  },
  {
    id: 7,
    category: "serveurs",
    title: "Switch Administrable 24 Ports PoE+",
    specs: "Gigabit Ethernet / 24 Ports PoE+ 370W / 4 Ports SFP+ 10G",
    badge: "Réseau",
    tag: "Réseau",
    icon: Wifi,
    priceEst: "Devis rapide"
  },
  {
    id: 8,
    category: "serveurs",
    title: "Onduleur Line-Interactive 1500VA",
    specs: "Protection Surtension / Batterie de Secours / Ecran LCD",
    badge: "Securité",
    tag: "Protection",
    icon: ShieldAlert,
    priceEst: "Devis rapide"
  }
];

export const STATS = [
  { value: "30+", label: "Années d'Expérience", sub: "Depuis 1992 au Maroc" },
  { value: "1000+", label: "Clients Satisfaits", sub: "PME, PMO & Particuliers" },
  { value: "99.8%", label: "Taux de Satisfaction", sub: "Qualité de service constante" },
  { value: "< 2h", label: "Temps de Réponse", sub: "Intervention d'urgence réactive" }
];

export const ENGAGEMENTS = [
  {
    icon: Award,
    title: "Expertise de 30+ ans",
    text: "Une présence historique garantissant une connaissance approfondie des besoins technologiques du marché."
  },
  {
    icon: ShieldCheck,
    title: "Matériel 100% Authentique",
    text: "Tous nos équipements proviennent directement des constructeurs officiels avec garantie fabricant."
  },
  {
    icon: Clock,
    title: "Réactivité et Proximité",
    text: "Des équipes mobiles prêtes à intervenir rapidement sur Casablanca, Rabat et toute la région."
  },
  {
    icon: Zap,
    title: "Accompagnement Sur-Mesure",
    text: "Du conseil avant-vente au suivi sous contrat, nous sommes le partenaire unique de votre SI."
  }
];

export const TESTIMONIALS = [
  {
    name: "Karim Benjelloun",
    role: "Directeur Général — Cabinet Fiduciaire",
    text: "Canal Informatique gère l'intégralité de notre parc informatique depuis plus de 8 ans. Leur réactivité lors des pannes et la qualité de leur matériel ont sécurisé notre activité au quotidien.",
    rating: 5
  },
  {
    name: "Sarah Alami",
    role: "Responsable Opérations — Groupe Logistique",
    text: "Installation complète du réseau et des serveurs de notre nouveau siège réalisée sans aucune interruption d'activité. Une équipe pro, transparente et très compétente.",
    rating: 5
  },
  {
    name: "Youssef El Amrani",
    role: "Gérant — Société d'Ingénierie",
    text: "Un service de maintenance irréprochable. Dès qu'un problème survient, le support prend la main à distance et résout le souci dans les minutes qui suivent.",
    rating: 5
  }
];

export const FAQS = [
  {
    q: "Quelles sont vos zones d'intervention pour la maintenance ?",
    a: "Nous intervenons principalement sur Grand Casablanca, Rabat, Salé, Kénitra et les zones industrielles environnantes. Pour les contrats d'entreprise, nous couvrons également d'autres régions du Maroc."
  },
  {
    q: "Proposez-vous des contrats de maintenance informatique pour les entreprises ?",
    a: "Oui ! Nous proposons des contrats annuels modulables comprenant des visites préventives régulières, le support téléphonique illimité, la télémaintenance à distance et des interventions d'urgence prioritaires sur site."
  },
  {
    q: "Le matériel vendu est-il garanti ?",
    a: "Absolument. Tout notre matériel neuf bénéficie de la garantie constructeur officielle (1 à 3 ans selon les gammes). Nous assurons également le SAV et le remplacement rapide en cas de défaillance."
  },
  {
    q: "Comment obtenir un devis gratuit pour un équipement ou une installation ?",
    a: "Vous pouvez utiliser notre calculateur de devis en ligne sur ce site, nous envoyer un message via le formulaire de contact, ou nous appeler directement au 0620155466."
  },
  {
    q: "Faites-vous la sauvegarde et la récupération de données ?",
    a: "Oui, nous mettons en place des solutions de sauvegarde automatique sécurisées sur NAS local et/ou serveur Cloud crypté, et nous proposons des prestations de récupération de données en cas de panne de disque."
  }
];

export const DEVIS_OPTIONS = {
  serviceTypes: [
    { id: "vente", label: "Achat / Renouvellement de Matériel Informatique" },
    { id: "maintenance", label: "Contrat de Maintenance Informatique & Parc" },
    { id: "reseau", label: "Installation Réseau, Wi-Fi & Câblage" },
    { id: "serveur", label: "Installation Serveur, Stockage & Sauvegarde" },
    { id: "assistance", label: "Dépannage & Assistance Ponctuelle" }
  ],
  sizeOptions: [
    { id: "1-5", label: "1 à 5 Postes (TPE / Indépendant)" },
    { id: "6-20", label: "6 à 20 Postes (PME)" },
    { id: "21-50", label: "21 à 50 Postes (Moyenne Entreprise)" },
    { id: "50+", label: "Plus de 50 Postes (Grande Structure)" }
  ],
  urgencies: [
    { id: "standard", label: "Normal (Sous 7 jours)" },
    { id: "urgent", label: "Urgent (Sous 48h)" },
    { id: "immediate", label: "Projet immédiat / Urgence" }
  ]
};
