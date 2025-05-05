// Données des produits pour la section Khaliji Model

export interface FashionProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  imageUrl?: string;
  rating: number;
  reviewCount: number;
  platform: 'farfetch' | 'ounass' | 'themodist' | 'namshi' | 'other';
  category: 'abaya' | 'kaftan' | 'kandura' | 'modest' | 'accessory' | 'menswear';
  gender: 'women' | 'men' | 'unisex';
  size?: string[];
  brand: string;
  bestSeller?: boolean;
  monthlyBuyers?: number;
  material?: string[];
  occasion?: string[];
  color?: string[];
}

export const fashionProducts: FashionProduct[] = [
  {
    id: "KM001",
    title: "Abaya Brodée Luxe",
    description: "Une abaya élégante avec des broderies délicates sur les manches et l'ourlet. Confectionnée en crêpe de haute qualité pour un drapé parfait et un confort optimal.",
    price: 350.00,
    originalPrice: 450.00,
    discountPercentage: 22,
    imageUrl: "/images/khaliji-model/abaya-brodee-luxe.jpg",
    rating: 4.8,
    reviewCount: 156,
    platform: 'ounass',
    category: 'abaya',
    gender: 'women',
    size: ['S', 'M', 'L', 'XL'],
    brand: 'D\'La Modest',
    bestSeller: true,
    monthlyBuyers: 45,
    material: ['Crêpe', 'Fils métalliques'],
    occasion: ['Soirée', 'Eid', 'Réception'],
    color: ['Noir', 'Bleu marine']
  },
  {
    id: "KM002",
    title: "Kaftan en Soie Imprimée",
    description: "Un kaftan somptueux en soie pure avec un imprimé exclusif inspiré des motifs traditionnels du Moyen-Orient. Idéal pour les occasions spéciales et les célébrations.",
    price: 520.00,
    imageUrl: "/images/khaliji-model/kaftan-soie-imprimee.jpg",
    rating: 4.7,
    reviewCount: 89,
    platform: 'themodist',
    category: 'kaftan',
    gender: 'women',
    size: ['S', 'M', 'L'],
    brand: 'Hessa Falasi',
    bestSeller: true,
    monthlyBuyers: 30,
    material: ['Soie'],
    occasion: ['Mariage', 'Eid', 'Réception formelle'],
    color: ['Turquoise', 'Or']
  },
  {
    id: "KM003",
    title: "Kandura Premium",
    description: "Une kandura traditionnelle confectionnée dans un coton égyptien de la plus haute qualité. Coupe parfaite et finitions impeccables pour un confort et une élégance inégalés.",
    price: 280.00,
    originalPrice: 320.00,
    discountPercentage: 12,
    imageUrl: "/images/khaliji-model/kandura-premium.jpg",
    rating: 4.9,
    reviewCount: 210,
    platform: 'namshi',
    category: 'kandura',
    gender: 'men',
    size: ['48', '50', '52', '54', '56'],
    brand: 'Emirati Heritage',
    bestSeller: true,
    monthlyBuyers: 75,
    material: ['Coton égyptien'],
    occasion: ['Quotidien', 'Prière', 'Réunions'],
    color: ['Blanc', 'Beige clair']
  },
  {
    id: "KM004",
    title: "Ensemble Modest Contemporain",
    description: "Un ensemble deux pièces alliant tradition et modernité. La tunique longue et le pantalon assorti offrent une silhouette élégante tout en respectant les codes de la modestie.",
    price: 420.00,
    originalPrice: 500.00,
    discountPercentage: 16,
    imageUrl: "/images/khaliji-model/ensemble-modest-contemporain.jpg",
    rating: 4.6,
    reviewCount: 124,
    platform: 'themodist',
    category: 'modest',
    gender: 'women',
    size: ['XS', 'S', 'M', 'L', 'XL'],
    brand: 'Kaafmeem',
    monthlyBuyers: 40,
    material: ['Viscose', 'Polyester'],
    occasion: ['Travail', 'Sorties', 'Événements décontractés'],
    color: ['Bleu pétrole', 'Crème']
  },
  {
    id: "KM005",
    title: "Sac à Main Louis Vuitton Capucines",
    description: "Le sac Capucines incarne l'essence du savoir-faire de Louis Vuitton avec sa silhouette structurée et ses finitions raffinées. Un accessoire de luxe intemporel.",
    price: 4800.00,
    imageUrl: "/images/khaliji-model/sac-lv-capucines.jpg",
    rating: 4.9,
    reviewCount: 67,
    platform: 'farfetch',
    category: 'accessory',
    gender: 'women',
    brand: 'Louis Vuitton',
    bestSeller: true,
    monthlyBuyers: 15,
    material: ['Cuir de veau'],
    occasion: ['Luxe quotidien', 'Événements', 'Soirées'],
    color: ['Noir', 'Rouge']
  },
  {
    id: "KM006",
    title: "Abaya Moderne à Détails Géométriques",
    description: "Une abaya contemporaine avec des inserts géométriques contrastants. Sa coupe moderne et ses détails innovants en font une pièce unique pour les femmes qui souhaitent allier tradition et modernité.",
    price: 380.00,
    imageUrl: "/images/khaliji-model/abaya-geometrique.jpg",
    rating: 4.7,
    reviewCount: 93,
    platform: 'ounass',
    category: 'abaya',
    gender: 'women',
    size: ['S', 'M', 'L'],
    brand: 'Ashi',
    monthlyBuyers: 35,
    material: ['Crêpe japonais'],
    occasion: ['Événements artistiques', 'Sorties', 'Réceptions'],
    color: ['Noir', 'Blanc']
  },
  {
    id: "KM007",
    title: "Costume Sur Mesure Ermenegildo Zegna",
    description: "Un costume sur mesure de la prestigieuse maison Zegna, taillé dans une laine légère adaptée au climat du Golfe. Élégance italienne et confort optimal pour l'homme d'affaires exigeant.",
    price: 3200.00,
    originalPrice: 3800.00,
    discountPercentage: 16,
    imageUrl: "/images/khaliji-model/costume-zegna.jpg",
    rating: 4.8,
    reviewCount: 42,
    platform: 'farfetch',
    category: 'menswear',
    gender: 'men',
    size: ['Sur mesure'],
    brand: 'Ermenegildo Zegna',
    bestSeller: false,
    monthlyBuyers: 10,
    material: ['Laine 130s', 'Soie'],
    occasion: ['Affaires', 'Événements formels'],
    color: ['Bleu marine', 'Gris charbon']
  },
  {
    id: "KM008",
    title: "Foulard en Soie Hermès",
    description: "Un carré de soie Hermès aux motifs inspirés des traditions arabes. Accessoire de luxe polyvalent, il peut être porté de multiples façons ou utilisé comme hijab élégant.",
    price: 450.00,
    imageUrl: "/images/khaliji-model/foulard-hermes.jpg",
    rating: 4.9,
    reviewCount: 78,
    platform: 'farfetch',
    category: 'accessory',
    gender: 'women',
    brand: 'Hermès',
    bestSeller: true,
    monthlyBuyers: 25,
    material: ['Soie'],
    occasion: ['Quotidien', 'Événements', 'Cadeaux'],
    color: ['Multicolore']
  },
  {
    id: "KM009",
    title: "Kaftan Homme Brodé",
    description: "Un kaftan masculin traditionnel avec des broderies artisanales. Idéal pour les occasions spéciales comme l'Eid ou les mariages, il allie confort et élégance.",
    price: 320.00,
    originalPrice: 380.00,
    discountPercentage: 16,
    imageUrl: "/images/khaliji-model/kaftan-homme.jpg",
    rating: 4.6,
    reviewCount: 56,
    platform: 'namshi',
    category: 'kaftan',
    gender: 'men',
    size: ['M', 'L', 'XL', 'XXL'],
    brand: 'Moroccan Artisan',
    monthlyBuyers: 20,
    material: ['Coton', 'Fils métalliques'],
    occasion: ['Eid', 'Mariages', 'Célébrations'],
    color: ['Blanc', 'Beige', 'Bleu roi']
  },
  {
    id: "KM010",
    title: "Robe Longue Modest Dior",
    description: "Une robe longue de la collection spéciale Ramadan de Dior. Alliant l'élégance parisienne aux codes de la modestie, cette pièce exclusive incarne le luxe contemporain.",
    price: 3800.00,
    imageUrl: "/images/khaliji-model/robe-dior-modest.jpg",
    rating: 4.8,
    reviewCount: 34,
    platform: 'farfetch',
    category: 'modest',
    gender: 'women',
    size: ['34', '36', '38', '40', '42'],
    brand: 'Dior',
    bestSeller: false,
    monthlyBuyers: 8,
    material: ['Soie', 'Dentelle'],
    occasion: ['Ramadan', 'Soirées de gala', 'Événements de prestige'],
    color: ['Nude', 'Bleu nuit']
  },
  {
    id: "KM011",
    title: "Bisht de Cérémonie",
    description: "Un bisht traditionnel de la plus haute qualité, avec des bordures dorées tissées à la main. Ce manteau cérémoniel est porté lors des occasions les plus prestigieuses.",
    price: 850.00,
    imageUrl: "/images/khaliji-model/bisht-ceremonie.jpg",
    rating: 4.9,
    reviewCount: 45,
    platform: 'namshi',
    category: 'menswear',
    gender: 'men',
    size: ['Standard', 'Sur mesure'],
    brand: 'Royal Bisht',
    bestSeller: true,
    monthlyBuyers: 15,
    material: ['Laine fine', 'Fils d\'or'],
    occasion: ['Mariages', 'Cérémonies officielles', 'Événements royaux'],
    color: ['Noir', 'Camel', 'Brun']
  },
  {
    id: "KM012",
    title: "Montre Rolex Datejust",
    description: "La Rolex Datejust en or et acier, symbole de prestige et d'élégance intemporelle. Un accessoire de luxe essentiel pour l'homme ou la femme d'affaires du Golfe.",
    price: 12500.00,
    imageUrl: "/images/khaliji-model/montre-rolex.jpg",
    rating: 4.9,
    reviewCount: 87,
    platform: 'farfetch',
    category: 'accessory',
    gender: 'unisex',
    brand: 'Rolex',
    bestSeller: true,
    monthlyBuyers: 12,
    material: ['Or', 'Acier'],
    occasion: ['Quotidien', 'Affaires', 'Prestige'],
    color: ['Or/Acier']
  }
];

// Produits populaires (sélection des meilleurs vendeurs)
export const popularFashionProducts = fashionProducts.filter(product => product.bestSeller || product.monthlyBuyers > 20);

// Produits par catégorie
export const getProductsByCategory = (category: 'abaya' | 'kaftan' | 'kandura' | 'modest' | 'accessory' | 'menswear') => {
  return fashionProducts.filter(product => product.category === category);
};

// Produits par genre
export const getProductsByGender = (gender: 'women' | 'men' | 'unisex') => {
  return fashionProducts.filter(product => product.gender === gender);
};

// Produits par marque
export const getProductsByBrand = (brand: string) => {
  return fashionProducts.filter(product => product.brand === brand);
};

// Produits par occasion
export const getProductsByOccasion = (occasion: string) => {
  return fashionProducts.filter(product => product.occasion?.includes(occasion));
};

// Produits par gamme de prix
export const getProductsByPriceRange = (minPrice: number, maxPrice: number) => {
  return fashionProducts.filter(product => 
    product.price >= minPrice && product.price <= maxPrice
  );
};
