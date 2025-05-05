// Données des produits pour la section Khaliji Hi-Tech

export interface TechProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  imageUrl?: string;
  rating: number;
  reviewCount: number;
  platform: 'amazon' | 'noon' | 'sharafdg' | 'virginmegastore' | 'other';
  category: 'smartphone' | 'audio' | 'wearable' | 'gadget' | 'computer' | 'gaming';
  brand: string;
  bestSeller?: boolean;
  monthlyBuyers?: number;
  specifications?: {
    [key: string]: string;
  };
  features?: string[];
  colors?: string[];
}

export const techProducts: TechProduct[] = [
  {
    id: "HT001",
    title: "Samsung Galaxy S23 Ultra",
    description: "Le smartphone phare de Samsung avec un appareil photo exceptionnel de 200MP, un écran AMOLED dynamique de 6,8 pouces et le S Pen intégré pour une productivité maximale.",
    price: 4200.00,
    originalPrice: 4599.00,
    discountPercentage: 9,
    imageUrl: "/images/khaliji-hitech/samsung-s23-ultra.jpg",
    rating: 4.8,
    reviewCount: 1245,
    platform: 'amazon',
    category: 'smartphone',
    brand: 'Samsung',
    bestSeller: true,
    monthlyBuyers: 320,
    specifications: {
      "Processeur": "Snapdragon 8 Gen 2",
      "RAM": "12GB",
      "Stockage": "512GB",
      "Écran": "6.8\" Dynamic AMOLED 2X",
      "Caméra principale": "200MP",
      "Batterie": "5000mAh"
    },
    features: ["S Pen intégré", "Zoom optique 10x", "Résistant à l'eau IP68", "Charge rapide 45W"],
    colors: ["Noir Phantom", "Crème", "Vert", "Lavande"]
  },
  {
    id: "HT002",
    title: "iPhone 14 Pro Max",
    description: "L'iPhone le plus avancé avec la puce A16 Bionic, un système photo professionnel et la nouvelle fonctionnalité Dynamic Island qui transforme l'expérience iPhone.",
    price: 5100.00,
    imageUrl: "/images/khaliji-hitech/iphone-14-pro-max.jpg",
    rating: 4.9,
    reviewCount: 1876,
    platform: 'noon',
    category: 'smartphone',
    brand: 'Apple',
    bestSeller: true,
    monthlyBuyers: 450,
    specifications: {
      "Processeur": "A16 Bionic",
      "RAM": "6GB",
      "Stockage": "256GB",
      "Écran": "6.7\" Super Retina XDR",
      "Caméra principale": "48MP",
      "Batterie": "4323mAh"
    },
    features: ["Dynamic Island", "Always-On display", "Mode Action vidéo", "Détection d'accident"],
    colors: ["Noir Spatial", "Argent", "Or", "Violet Intense"]
  },
  {
    id: "HT003",
    title: "Honor Magic 7 Pro",
    description: "Le smartphone le plus innovant de Honor avec des performances exceptionnelles, une charge ultra-rapide et un système de caméra avancé co-développé avec Leica.",
    price: 3800.00,
    originalPrice: 4200.00,
    discountPercentage: 10,
    imageUrl: "/images/khaliji-hitech/honor-magic-7-pro.jpg",
    rating: 4.7,
    reviewCount: 685,
    platform: 'noon',
    category: 'smartphone',
    brand: 'Honor',
    bestSeller: true,
    monthlyBuyers: 280,
    specifications: {
      "Processeur": "Snapdragon 8 Gen 3",
      "RAM": "12GB",
      "Stockage": "512GB",
      "Écran": "6.8\" OLED incurvé",
      "Caméra principale": "50MP Leica",
      "Batterie": "5600mAh"
    },
    features: ["Charge 100W", "Caméra Leica", "IA avancée", "Refroidissement liquide"],
    colors: ["Noir Cosmos", "Vert Émeraude", "Titane"]
  },
  {
    id: "HT004",
    title: "Bose QuietComfort Ultra Headphones",
    description: "Le nec plus ultra des casques à réduction de bruit avec un son immersif, un confort exceptionnel et une autonomie de 24 heures pour une expérience d'écoute inégalée.",
    price: 1600.00,
    imageUrl: "/images/khaliji-hitech/bose-qc-ultra.jpg",
    rating: 4.8,
    reviewCount: 942,
    platform: 'sharafdg',
    category: 'audio',
    brand: 'Bose',
    bestSeller: true,
    monthlyBuyers: 210,
    specifications: {
      "Type": "Circum-aural",
      "Connectivité": "Bluetooth 5.3, Jack 3.5mm",
      "Autonomie": "24 heures",
      "Réduction de bruit": "Adaptative",
      "Microphones": "8 microphones"
    },
    features: ["Réduction de bruit leader", "Son spatial", "Mode Aware", "Multipoint"],
    colors: ["Noir", "Blanc", "Bleu Minuit"]
  },
  {
    id: "HT005",
    title: "Sony WH-1000XM5",
    description: "Le casque sans fil premium de Sony avec une qualité sonore exceptionnelle, une réduction de bruit adaptative et une autonomie de 30 heures pour une immersion totale.",
    price: 1400.00,
    originalPrice: 1599.00,
    discountPercentage: 12,
    imageUrl: "/images/khaliji-hitech/sony-wh1000xm5.jpg",
    rating: 4.7,
    reviewCount: 1320,
    platform: 'amazon',
    category: 'audio',
    brand: 'Sony',
    bestSeller: false,
    monthlyBuyers: 180,
    specifications: {
      "Type": "Circum-aural",
      "Connectivité": "Bluetooth 5.2, Jack 3.5mm",
      "Autonomie": "30 heures",
      "Réduction de bruit": "Processeur V1",
      "Microphones": "8 microphones"
    },
    features: ["LDAC haute résolution", "Speak-to-Chat", "Détection de port", "Charge rapide"],
    colors: ["Noir", "Argent"]
  },
  {
    id: "HT006",
    title: "Apple Watch Ultra 2",
    description: "La montre connectée la plus robuste et polyvalente d'Apple, conçue pour l'aventure avec un boîtier en titane, un GPS de précision et une autonomie exceptionnelle.",
    price: 3200.00,
    imageUrl: "/images/khaliji-hitech/apple-watch-ultra-2.jpg",
    rating: 4.9,
    reviewCount: 756,
    platform: 'noon',
    category: 'wearable',
    brand: 'Apple',
    bestSeller: true,
    monthlyBuyers: 150,
    specifications: {
      "Boîtier": "Titane 49mm",
      "Écran": "Retina Always-On",
      "Étanchéité": "100m",
      "GPS": "Double fréquence",
      "Autonomie": "36 heures"
    },
    features: ["Bouton Action", "Sirène 86dB", "Mode Nuit", "Température de l'eau"],
    colors: ["Titane Naturel"]
  },
  {
    id: "HT007",
    title: "Samsung Galaxy Watch6 Classic",
    description: "Une montre connectée élégante avec un design intemporel, une lunette rotative et des fonctionnalités avancées de suivi de santé pour les utilisateurs Android.",
    price: 1700.00,
    originalPrice: 1899.00,
    discountPercentage: 10,
    imageUrl: "/images/khaliji-hitech/samsung-watch6-classic.jpg",
    rating: 4.6,
    reviewCount: 890,
    platform: 'amazon',
    category: 'wearable',
    brand: 'Samsung',
    bestSeller: false,
    monthlyBuyers: 120,
    specifications: {
      "Boîtier": "Acier inoxydable 47mm",
      "Écran": "Super AMOLED",
      "Étanchéité": "5ATM",
      "Processeur": "Exynos W930",
      "Autonomie": "40 heures"
    },
    features: ["Lunette rotative", "BioActive Sensor", "Analyse du sommeil", "ECG"],
    colors: ["Noir", "Argent"]
  },
  {
    id: "HT008",
    title: "DJI Mini 3 Pro",
    description: "Un drone ultra-léger et portable avec une caméra 4K exceptionnelle, un système d'évitement d'obstacles et une autonomie de vol de 34 minutes pour des prises de vue aériennes spectaculaires.",
    price: 2400.00,
    imageUrl: "/images/khaliji-hitech/dji-mini-3-pro.jpg",
    rating: 4.8,
    reviewCount: 645,
    platform: 'virginmegastore',
    category: 'gadget',
    brand: 'DJI',
    bestSeller: true,
    monthlyBuyers: 90,
    specifications: {
      "Poids": "< 249g",
      "Caméra": "4K/60fps",
      "Capteur": "1/1.3\"",
      "Autonomie": "34 minutes",
      "Transmission": "O3+"
    },
    features: ["Évitement d'obstacles tri-directionnel", "MasterShots", "FocusTrack", "Vidéo verticale"],
    colors: ["Gris"]
  },
  {
    id: "HT009",
    title: "Dyson V15 Detect Absolute",
    description: "L'aspirateur sans fil le plus avancé de Dyson avec technologie laser pour révéler la poussière invisible, capteurs intelligents et une puissance d'aspiration exceptionnelle.",
    price: 2900.00,
    originalPrice: 3200.00,
    discountPercentage: 9,
    imageUrl: "/images/khaliji-hitech/dyson-v15-detect.jpg",
    rating: 4.7,
    reviewCount: 520,
    platform: 'sharafdg',
    category: 'gadget',
    brand: 'Dyson',
    bestSeller: false,
    monthlyBuyers: 75,
    specifications: {
      "Puissance": "230 AW",
      "Autonomie": "60 minutes",
      "Filtration": "HEPA",
      "Capacité": "0.76L",
      "Poids": "3.1kg"
    },
    features: ["Technologie laser", "Compteur de particules", "Brosse anti-emmêlement", "Écran LCD"],
    colors: ["Nickel/Jaune"]
  },
  {
    id: "HT010",
    title: "MacBook Pro 16\" M3 Max",
    description: "L'ordinateur portable le plus puissant d'Apple avec la puce M3 Max, un écran Liquid Retina XDR et une autonomie exceptionnelle pour les professionnels les plus exigeants.",
    price: 12500.00,
    imageUrl: "/images/khaliji-hitech/macbook-pro-m3-max.jpg",
    rating: 4.9,
    reviewCount: 340,
    platform: 'noon',
    category: 'computer',
    brand: 'Apple',
    bestSeller: true,
    monthlyBuyers: 60,
    specifications: {
      "Processeur": "M3 Max 16 cœurs",
      "RAM": "64GB",
      "Stockage": "2TB SSD",
      "Écran": "16\" Liquid Retina XDR",
      "Autonomie": "22 heures",
      "Ports": "3x Thunderbolt 4, HDMI, SD, MagSafe"
    },
    features: ["Puce M3 Max", "ProMotion 120Hz", "Six haut-parleurs", "Caméra 1080p"],
    colors: ["Noir Spatial", "Argent"]
  },
  {
    id: "HT011",
    title: "Sony WF-1000XM5",
    description: "Les écouteurs sans fil haut de gamme de Sony avec une réduction de bruit exceptionnelle, une qualité sonore immersive et un design compact pour un confort optimal.",
    price: 1100.00,
    originalPrice: 1299.00,
    discountPercentage: 15,
    imageUrl: "/images/khaliji-hitech/sony-wf1000xm5.jpg",
    rating: 4.8,
    reviewCount: 780,
    platform: 'amazon',
    category: 'audio',
    brand: 'Sony',
    bestSeller: true,
    monthlyBuyers: 200,
    specifications: {
      "Type": "Intra-auriculaires",
      "Connectivité": "Bluetooth 5.3",
      "Autonomie": "8h + 16h (boîtier)",
      "Réduction de bruit": "Processeur V2",
      "Résistance": "IPX4"
    },
    features: ["LDAC haute résolution", "Speak-to-Chat", "Multipoint", "Charge sans fil"],
    colors: ["Noir", "Argent", "Or"]
  },
  {
    id: "HT012",
    title: "PlayStation 5 Pro",
    description: "La console de jeu la plus puissante de Sony avec des graphismes 8K, un SSD ultra-rapide et une rétrocompatibilité complète pour une expérience de jeu immersive.",
    price: 2800.00,
    imageUrl: "/images/khaliji-hitech/ps5-pro.jpg",
    rating: 4.9,
    reviewCount: 1250,
    platform: 'virginmegastore',
    category: 'gaming',
    brand: 'Sony',
    bestSeller: true,
    monthlyBuyers: 180,
    specifications: {
      "CPU": "AMD Zen 2 amélioré",
      "GPU": "RDNA 3 23 TFLOPS",
      "Stockage": "2TB SSD",
      "Résolution": "Jusqu'à 8K",
      "Audio": "Tempest 3D AudioTech"
    },
    features: ["Ray Tracing avancé", "Chargement ultra-rapide", "Manette DualSense", "Rétrocompatibilité PS4"],
    colors: ["Blanc"]
  }
];

// Produits populaires (sélection des meilleurs vendeurs)
export const popularTechProducts = techProducts.filter(product => product.bestSeller || product.monthlyBuyers > 150);

// Produits par catégorie
export const getProductsByCategory = (category: 'smartphone' | 'audio' | 'wearable' | 'gadget' | 'computer' | 'gaming') => {
  return techProducts.filter(product => product.category === category);
};

// Produits par marque
export const getProductsByBrand = (brand: string) => {
  return techProducts.filter(product => product.brand === brand);
};

// Produits par gamme de prix
export const getProductsByPriceRange = (minPrice: number, maxPrice: number) => {
  return techProducts.filter(product => 
    product.price >= minPrice && product.price <= maxPrice
  );
};

// Produits en promotion
export const getDiscountedProducts = () => {
  return techProducts.filter(product => product.discountPercentage);
};

// Produits les mieux notés
export const getTopRatedProducts = (minRating: number = 4.8) => {
  return techProducts.filter(product => product.rating >= minRating);
};
