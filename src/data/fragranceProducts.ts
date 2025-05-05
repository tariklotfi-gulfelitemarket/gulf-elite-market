// Données des produits pour la section Khaliji Fragrance

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  imageUrl?: string;
  rating: number;
  reviewCount: number;
  platform: 'arabclicks' | 'amazon' | 'noon' | 'xcite' | 'other';
  category: string;
  gender: 'women' | 'men' | 'unisex';
  volume: string;
  brand: string;
  bestSeller?: boolean;
  monthlyBuyers?: number;
  notes?: string[];
}

export const fragranceProducts: Product[] = [
  {
    id: "B07LFYX4TX",
    title: "Swiss Arabian Shaghaf pour Femmes",
    description: "Un parfum oriental floral luxueux avec des notes d'ambre et de vanille, créé spécialement pour les femmes qui apprécient les fragrances riches et durables.",
    price: 50.00,
    originalPrice: 70.00,
    discountPercentage: 29,
    imageUrl: "/images/khaliji-fragrance/shaghaf-women.jpg",
    rating: 3.8,
    reviewCount: 12467,
    platform: 'amazon',
    category: 'parfums',
    gender: 'women',
    volume: '75ml',
    brand: 'Swiss Arabian',
    bestSeller: true,
    monthlyBuyers: 300,
    notes: ['Ambre', 'Vanille', 'Fleurs blanches', 'Musc']
  },
  {
    id: "B07LFYX4TY",
    title: "Lattafa Asdaaf Ameerat Al Arab",
    description: "Un parfum luxueux inspiré des traditions du Golfe, avec un mélange captivant de notes florales et boisées qui évoque l'élégance et le raffinement.",
    price: 51.25,
    originalPrice: 75.42,
    discountPercentage: 32,
    imageUrl: "/images/khaliji-fragrance/ameerat-al-arab.jpg",
    rating: 4.2,
    reviewCount: 2941,
    platform: 'amazon',
    category: 'parfums',
    gender: 'women',
    volume: '100ml',
    brand: 'Lattafa',
    bestSeller: true,
    monthlyBuyers: 400,
    notes: ['Rose', 'Oud', 'Ambre', 'Musc']
  },
  {
    id: "B09LFYX4TZ",
    title: "Rasasi Hawas Pink pour Femmes",
    description: "Le nouveau lancement très attendu de Rasasi, version féminine du populaire Hawas. Un parfum frais et séduisant avec des notes florales et fruitées.",
    price: 120.00,
    imageUrl: "/images/khaliji-fragrance/hawas-pink.jpg",
    rating: 4.5,
    reviewCount: 150,
    platform: 'arabclicks',
    category: 'parfums',
    gender: 'women',
    volume: '100ml',
    brand: 'Rasasi',
    bestSeller: false,
    notes: ['Bergamote', 'Rose', 'Jasmin', 'Vanille']
  },
  {
    id: "B07LFYX4UA",
    title: "Lattafa Khamrah",
    description: "Un parfum unisexe très populaire avec des notes d'oud et d'ambre. Sa composition riche et complexe en fait l'un des parfums les plus appréciés dans les pays du Golfe.",
    price: 75.00,
    originalPrice: 110.00,
    discountPercentage: 32,
    imageUrl: "/images/khaliji-fragrance/khamrah.jpg",
    rating: 4.3,
    reviewCount: 19927,
    platform: 'amazon',
    category: 'parfums',
    gender: 'unisex',
    volume: '100ml',
    brand: 'Lattafa',
    bestSeller: true,
    monthlyBuyers: 2000,
    notes: ['Oud', 'Ambre', 'Vanille', 'Bois de santal']
  },
  {
    id: "B07LFYX4UB",
    title: "LATTAFA PERFUMES Raghba",
    description: "Un parfum oriental boisé avec un excellent rapport qualité-prix. Ses notes chaudes et épicées en font un choix parfait pour les soirées.",
    price: 34.00,
    imageUrl: "/images/khaliji-fragrance/raghba.jpg",
    rating: 4.0,
    reviewCount: 951,
    platform: 'amazon',
    category: 'parfums',
    gender: 'unisex',
    volume: '100ml',
    brand: 'Lattafa',
    monthlyBuyers: 40,
    notes: ['Bois', 'Vanille', 'Ambre', 'Musc']
  },
  {
    id: "B07LFYX4UC",
    title: "My Perfumes LAMSAT HARIR from ARABIYAT",
    description: "Un parfum oriental doux et accessible avec des notes délicates qui évoquent la soie (harir). Idéal pour une utilisation quotidienne.",
    price: 32.00,
    originalPrice: 35.00,
    discountPercentage: 9,
    imageUrl: "/images/khaliji-fragrance/lamsat-harir.jpg",
    rating: 4.2,
    reviewCount: 74,
    platform: 'amazon',
    category: 'parfums',
    gender: 'unisex',
    volume: '100ml',
    brand: 'My Perfumes',
    monthlyBuyers: 50,
    notes: ['Fleurs', 'Musc', 'Bois de santal']
  },
  {
    id: "B07LFYX4UD",
    title: "Bakhoor Al Naseem",
    description: "Encens traditionnel de haute qualité pour parfumer votre intérieur selon les traditions du Golfe. Parfait pour créer une ambiance chaleureuse et accueillante.",
    price: 85.00,
    imageUrl: "/images/khaliji-fragrance/bakhoor.jpg",
    rating: 4.7,
    reviewCount: 320,
    platform: 'arabclicks',
    category: 'encens',
    gender: 'unisex',
    volume: '70g',
    brand: 'Ard Al Zaafaran',
    notes: ['Oud', 'Bois de santal', 'Musc', 'Ambre']
  },
  {
    id: "B07LFYX4UE",
    title: "Brûleur d'Encens Traditionnel",
    description: "Brûleur d'encens artisanal en métal doré, parfait pour utiliser avec du bakhoor traditionnel. Un élément décoratif qui ajoute une touche d'élégance orientale à votre intérieur.",
    price: 120.00,
    imageUrl: "/images/khaliji-fragrance/encens-burner.jpg",
    rating: 4.5,
    reviewCount: 89,
    platform: 'arabclicks',
    category: 'accessoires',
    gender: 'unisex',
    volume: 'N/A',
    brand: 'Artisanat du Golfe',
    notes: []
  }
];

// Produits populaires (sélection des meilleurs vendeurs)
export const popularFragranceProducts = fragranceProducts.filter(product => product.bestSeller || product.monthlyBuyers > 300);

// Produits par catégorie
export const getProductsByCategory = (category: string) => {
  return fragranceProducts.filter(product => product.category === category);
};

// Produits par genre
export const getProductsByGender = (gender: 'women' | 'men' | 'unisex') => {
  return fragranceProducts.filter(product => product.gender === gender);
};

// Produits par marque
export const getProductsByBrand = (brand: string) => {
  return fragranceProducts.filter(product => product.brand === brand);
};
