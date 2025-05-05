import { fragranceProducts } from './fragranceProducts';
import { additionalFragranceProducts, mergeWithExistingProducts } from './additionalFragranceProducts';

// Fusionner les produits existants avec les nouveaux produits
export const allFragranceProducts = mergeWithExistingProducts(fragranceProducts);

// Produits populaires (sélection des meilleurs vendeurs)
export const popularFragranceProducts = allFragranceProducts.filter(product => 
  product.bestSeller || product.monthlyBuyers > 300
);

// Produits par catégorie
export const getProductsByCategory = (category: string) => {
  return allFragranceProducts.filter(product => product.category === category);
};

// Produits par genre
export const getProductsByGender = (gender: 'women' | 'men' | 'unisex') => {
  return allFragranceProducts.filter(product => product.gender === gender);
};

// Produits par marque
export const getProductsByBrand = (brand: string) => {
  return allFragranceProducts.filter(product => product.brand === brand);
};

// Produits par gamme de prix
export const getProductsByPriceRange = (minPrice: number, maxPrice: number) => {
  return allFragranceProducts.filter(product => 
    product.price >= minPrice && product.price <= maxPrice
  );
};

// Produits en promotion
export const getDiscountedProducts = () => {
  return allFragranceProducts.filter(product => product.discountPercentage);
};

// Produits les mieux notés
export const getTopRatedProducts = (minRating: number = 4.5) => {
  return allFragranceProducts.filter(product => product.rating >= minRating);
};

// Produits les plus vendus
export const getBestSellingProducts = (minBuyers: number = 200) => {
  return allFragranceProducts.filter(product => 
    product.monthlyBuyers && product.monthlyBuyers >= minBuyers
  );
};

// Recherche de produits
export const searchProducts = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return allFragranceProducts.filter(product => 
    product.title.toLowerCase().includes(lowercaseQuery) || 
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.brand.toLowerCase().includes(lowercaseQuery) ||
    (product.notes && product.notes.some(note => note.toLowerCase().includes(lowercaseQuery)))
  );
};
