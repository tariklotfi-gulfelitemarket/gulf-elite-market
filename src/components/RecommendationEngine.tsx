import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useLocale } from '@/hooks/useLocale';

interface RecommendationEngineProps {
  currentProductId?: string;
  currentCategory?: string;
  currentPlatform?: string;
  maxRecommendations?: number;
  children: React.ReactNode;
}

export default function RecommendationEngine({
  currentProductId,
  currentCategory,
  currentPlatform,
  maxRecommendations = 4,
  children
}: RecommendationEngineProps) {
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [userPreferences, setUserPreferences] = useState<any>(null);
  const [initialized, setInitialized] = useState(false);
  const { locale } = useLocale();
  
  // Initialiser le moteur de recommandation
  useEffect(() => {
    if (typeof window !== 'undefined' && !initialized) {
      // Récupérer l'historique de navigation et les préférences utilisateur
      const pageViews = JSON.parse(localStorage.getItem('pageViews') || '[]');
      const productImpressions = JSON.parse(localStorage.getItem('productImpressions') || '[]');
      const affiliateClicks = JSON.parse(localStorage.getItem('affiliateClicks') || '[]');
      const wishlistActions = JSON.parse(localStorage.getItem('wishlistActions') || '[]');
      const productComparisons = JSON.parse(localStorage.getItem('productComparisons') || '[]');
      
      // Analyser les préférences utilisateur
      const preferences = analyzeUserPreferences(pageViews, productImpressions, affiliateClicks, wishlistActions, productComparisons);
      setUserPreferences(preferences);
      
      // Générer des recommandations basées sur les préférences
      const recs = generateRecommendations(preferences, currentProductId, currentCategory, currentPlatform, maxRecommendations);
      setRecommendations(recs);
      
      setInitialized(true);
    }
  }, [initialized, currentProductId, currentCategory, currentPlatform, maxRecommendations]);

  // Analyser les préférences utilisateur
  const analyzeUserPreferences = (pageViews: any[], productImpressions: any[], affiliateClicks: any[], wishlistActions: any[], productComparisons: any[]) => {
    // Catégories visitées
    const categoryVisits: Record<string, number> = {};
    productImpressions.forEach(impression => {
      const category = impression.category;
      if (category) {
        categoryVisits[category] = (categoryVisits[category] || 0) + 1;
      }
    });
    
    // Plateformes préférées
    const platformClicks: Record<string, number> = {};
    affiliateClicks.forEach(click => {
      const platform = click.platform;
      if (platform) {
        platformClicks[platform] = (platformClicks[platform] || 0) + 1;
      }
    });
    
    // Gammes de prix
    const priceRanges: Record<string, number> = {
      'budget': 0,
      'mid': 0,
      'premium': 0,
      'luxury': 0
    };
    
    affiliateClicks.forEach(click => {
      const price = parseFloat(click.price);
      if (!isNaN(price)) {
        if (price < 500) priceRanges['budget']++;
        else if (price < 1500) priceRanges['mid']++;
        else if (price < 5000) priceRanges['premium']++;
        else priceRanges['luxury']++;
      }
    });
    
    // Produits sauvegardés
    const savedProducts = wishlistActions
      .filter(action => action.action === 'add')
      .map(action => action.productId);
    
    // Produits comparés
    const comparedProducts = productComparisons
      .filter(action => action.action === 'add')
      .map(action => action.productId);
    
    // Déterminer les catégories préférées
    const preferredCategories = Object.entries(categoryVisits)
      .sort(([_, countA], [__, countB]) => countB - countA)
      .map(([category, _]) => category);
    
    // Déterminer les plateformes préférées
    const preferredPlatforms = Object.entries(platformClicks)
      .sort(([_, countA], [__, countB]) => countB - countA)
      .map(([platform, _]) => platform);
    
    // Déterminer la gamme de prix préférée
    const preferredPriceRange = Object.entries(priceRanges)
      .sort(([_, countA], [__, countB]) => countB - countA)
      .map(([range, _]) => range)[0];
    
    return {
      preferredCategories,
      preferredPlatforms,
      preferredPriceRange,
      savedProducts,
      comparedProducts,
      lastVisit: new Date().toISOString()
    };
  };

  // Générer des recommandations basées sur les préférences utilisateur
  const generateRecommendations = (
    preferences: any,
    currentProductId?: string,
    currentCategory?: string,
    currentPlatform?: string,
    maxRecommendations: number = 4
  ) => {
    if (!preferences) return [];
    
    // Récupérer les produits les plus performants
    const topProducts = JSON.parse(localStorage.getItem('topPerformingProducts') || '[]');
    
    // Récupérer les données d'analyse des conversions
    const conversionAnalysis = JSON.parse(localStorage.getItem('conversionAnalysis') || '{}');
    
    // Récupérer les produits par catégorie
    let recommendedProducts: any[] = [];
    
    // Priorité 1: Recommander des produits de la même catégorie que celle actuellement consultée
    if (currentCategory) {
      // Simuler la récupération de produits de la même catégorie
      // Dans une implémentation réelle, cela viendrait d'une API ou d'une base de données
      const categoryProducts = topProducts
        .filter((productId: string) => {
          // Vérifier si le produit appartient à la catégorie actuelle
          // Ceci est une simulation, dans un cas réel nous aurions une vraie vérification
          return Math.random() > 0.5 && productId !== currentProductId;
        })
        .slice(0, 2);
      
      recommendedProducts = [...recommendedProducts, ...categoryProducts];
    }
    
    // Priorité 2: Recommander des produits des catégories préférées de l'utilisateur
    if (preferences.preferredCategories && preferences.preferredCategories.length > 0) {
      const preferredCategoryProducts = topProducts
        .filter((productId: string) => {
          // Vérifier si le produit appartient aux catégories préférées
          // Ceci est une simulation, dans un cas réel nous aurions une vraie vérification
          return Math.random() > 0.3 && productId !== currentProductId && !recommendedProducts.includes(productId);
        })
        .slice(0, 2);
      
      recommendedProducts = [...recommendedProducts, ...preferredCategoryProducts];
    }
    
    // Priorité 3: Recommander des produits des plateformes préférées de l'utilisateur
    if (preferences.preferredPlatforms && preferences.preferredPlatforms.length > 0) {
      const preferredPlatformProducts = topProducts
        .filter((productId: string) => {
          // Vérifier si le produit appartient aux plateformes préférées
          // Ceci est une simulation, dans un cas réel nous aurions une vraie vérification
          return Math.random() > 0.4 && productId !== currentProductId && !recommendedProducts.includes(productId);
        })
        .slice(0, 1);
      
      recommendedProducts = [...recommendedProducts, ...preferredPlatformProducts];
    }
    
    // Compléter avec les produits les plus performants si nécessaire
    if (recommendedProducts.length < maxRecommendations) {
      const remainingCount = maxRecommendations - recommendedProducts.length;
      const additionalProducts = topProducts
        .filter((productId: string) => {
          return productId !== currentProductId && !recommendedProducts.includes(productId);
        })
        .slice(0, remainingCount);
      
      recommendedProducts = [...recommendedProducts, ...additionalProducts];
    }
    
    // Limiter au nombre maximum de recommandations
    return recommendedProducts.slice(0, maxRecommendations);
  };

  // Passer les recommandations aux composants enfants
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { recommendations });
    }
    return child;
  });

  return <>{childrenWithProps}</>;
}
