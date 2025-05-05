"use client";

// Composant amélioré pour le suivi des conversions et l'optimisation des performances
import React, { useEffect, useState } from 'react';

interface ConversionTrackerProps {
  children: React.ReactNode;
}

export default function ConversionTracker({ children }: ConversionTrackerProps) {
  const [analyticsInitialized, setAnalyticsInitialized] = useState(false);
  const [conversionData, setConversionData] = useState<any>(null);

  // Initialiser le système de suivi des conversions avec des fonctionnalités améliorées
  useEffect(() => {
    if (!analyticsInitialized && typeof window !== 'undefined') {
      // Initialiser les structures de données pour le suivi avec plus de métriques
      if (!localStorage.getItem('affiliateClicks')) {
        localStorage.setItem('affiliateClicks', JSON.stringify([]));
      }
      
      if (!localStorage.getItem('productImpressions')) {
        localStorage.setItem('productImpressions', JSON.stringify([]));
      }
      
      if (!localStorage.getItem('pageViews')) {
        localStorage.setItem('pageViews', JSON.stringify([]));
      }
      
      if (!localStorage.getItem('addToCart')) {
        localStorage.setItem('addToCart', JSON.stringify([]));
      }
      
      if (!localStorage.getItem('productComparisons')) {
        localStorage.setItem('productComparisons', JSON.stringify([]));
      }
      
      if (!localStorage.getItem('userPreferences')) {
        localStorage.setItem('userPreferences', JSON.stringify({
          language: navigator.language,
          theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
          device: /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop'
        }));
      }
      
      // Enregistrer la visite de page avec des données enrichies
      const pageViewData = {
        path: window.location.pathname,
        referrer: document.referrer || 'direct',
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        language: navigator.language
      };
      
      const existingPageViews = JSON.parse(localStorage.getItem('pageViews') || '[]');
      existingPageViews.push(pageViewData);
      localStorage.setItem('pageViews', JSON.stringify(existingPageViews.slice(-100))); // Garder seulement les 100 dernières entrées
      
      // Configurer le suivi des événements de conversion
      setupConversionTracking();
      
      // Analyser les données existantes pour optimiser l'expérience utilisateur
      const analysis = analyzeConversionData();
      setConversionData(analysis);
      
      // Appliquer des optimisations basées sur l'analyse
      applyConversionOptimizations(analysis);
      
      setAnalyticsInitialized(true);
    }
  }, [analyticsInitialized]);

  // Configurer le suivi des événements de conversion avec des métriques avancées
  const setupConversionTracking = () => {
    // Suivre le temps passé sur la page
    let startTime = new Date().getTime();
    
    window.addEventListener('beforeunload', () => {
      const endTime = new Date().getTime();
      const timeSpent = (endTime - startTime) / 1000; // en secondes
      
      // Enregistrer le temps passé sur la page
      const engagementData = {
        path: window.location.pathname,
        timeSpent,
        timestamp: new Date().toISOString(),
        bounced: timeSpent < 10 // Considérer comme rebond si moins de 10 secondes
      };
      
      const existingEngagement = JSON.parse(localStorage.getItem('pageEngagement') || '[]');
      existingEngagement.push(engagementData);
      localStorage.setItem('pageEngagement', JSON.stringify(existingEngagement.slice(-100)));
    });
    
    // Suivre les défilements de page avec plus de précision
    let scrollDepthMarkers = [10, 25, 50, 75, 90, 100];
    let markedScrollDepths: number[] = [];
    let lastScrollTime = new Date().getTime();
    let scrollPauses = 0;
    
    window.addEventListener('scroll', () => {
      const currentTime = new Date().getTime();
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / documentHeight) * 100;
      
      // Détecter les pauses dans le défilement (indicateur d'intérêt)
      if (currentTime - lastScrollTime > 2000) {
        scrollPauses++;
        
        // Enregistrer la position de pause
        const pauseData = {
          path: window.location.pathname,
          position: scrollPercentage,
          duration: currentTime - lastScrollTime,
          timestamp: new Date().toISOString()
        };
        
        const existingPauses = JSON.parse(localStorage.getItem('scrollPauses') || '[]');
        existingPauses.push(pauseData);
        localStorage.setItem('scrollPauses', JSON.stringify(existingPauses.slice(-50)));
      }
      
      lastScrollTime = currentTime;
      
      scrollDepthMarkers.forEach(marker => {
        if (scrollPercentage >= marker && !markedScrollDepths.includes(marker)) {
          markedScrollDepths.push(marker);
          
          // Enregistrer la profondeur de défilement
          const scrollData = {
            path: window.location.pathname,
            depth: marker,
            timestamp: new Date().toISOString()
          };
          
          const existingScrollData = JSON.parse(localStorage.getItem('scrollDepth') || '[]');
          existingScrollData.push(scrollData);
          localStorage.setItem('scrollDepth', JSON.stringify(existingScrollData.slice(-100)));
        }
      });
    });
    
    // Suivre les clics sur les éléments interactifs
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      
      // Suivre les clics sur les boutons d'affiliation
      if (target.closest('[data-affiliate-link]')) {
        const affiliateElement = target.closest('[data-affiliate-link]') as HTMLElement;
        const productId = affiliateElement.getAttribute('data-product-id');
        const platform = affiliateElement.getAttribute('data-platform');
        const category = affiliateElement.getAttribute('data-category');
        const price = affiliateElement.getAttribute('data-price');
        
        const clickData = {
          productId,
          platform,
          category,
          price,
          timestamp: new Date().toISOString(),
          path: window.location.pathname
        };
        
        const existingClicks = JSON.parse(localStorage.getItem('affiliateClicks') || '[]');
        existingClicks.push(clickData);
        localStorage.setItem('affiliateClicks', JSON.stringify(existingClicks.slice(-100)));
      }
      
      // Suivre les clics sur les boutons "Ajouter au panier"
      if (target.closest('[data-add-to-cart]')) {
        const cartElement = target.closest('[data-add-to-cart]') as HTMLElement;
        const productId = cartElement.getAttribute('data-product-id');
        const category = cartElement.getAttribute('data-category');
        
        const cartData = {
          productId,
          category,
          timestamp: new Date().toISOString(),
          path: window.location.pathname
        };
        
        const existingCartData = JSON.parse(localStorage.getItem('addToCart') || '[]');
        existingCartData.push(cartData);
        localStorage.setItem('addToCart', JSON.stringify(existingCartData.slice(-100)));
      }
    });
    
    // Observer les impressions de produits
    const observeProductImpressions = () => {
      const productElements = document.querySelectorAll('[data-product-card]');
      
      if (productElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const productElement = entry.target as HTMLElement;
              const productId = productElement.getAttribute('data-product-id');
              const platform = productElement.getAttribute('data-platform');
              const category = productElement.getAttribute('data-category');
              
              // Vérifier si ce produit a déjà été enregistré comme impression
              const existingImpressions = JSON.parse(localStorage.getItem('productImpressions') || '[]');
              const alreadyImpressed = existingImpressions.some((imp: any) => 
                imp.productId === productId && imp.path === window.location.pathname
              );
              
              if (!alreadyImpressed) {
                const impressionData = {
                  productId,
                  platform,
                  category,
                  timestamp: new Date().toISOString(),
                  path: window.location.pathname
                };
                
                existingImpressions.push(impressionData);
                localStorage.setItem('productImpressions', JSON.stringify(existingImpressions.slice(-200)));
              }
              
              // Arrêter d'observer cet élément après la première impression
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.5 });
        
        productElements.forEach(element => {
          observer.observe(element);
        });
      }
    };
    
    // Observer les impressions après le chargement complet de la page
    if (document.readyState === 'complete') {
      observeProductImpressions();
    } else {
      window.addEventListener('load', observeProductImpressions);
    }
    
    // Réobserver les impressions lors des changements de DOM (pour les applications SPA)
    const mutationObserver = new MutationObserver(() => {
      observeProductImpressions();
    });
    
    mutationObserver.observe(document.body, { childList: true, subtree: true });
  };

  // Analyser les données de conversion pour optimiser les performances
  const analyzeConversionData = () => {
    if (typeof window !== 'undefined') {
      const clicks = JSON.parse(localStorage.getItem('affiliateClicks') || '[]');
      const impressions = JSON.parse(localStorage.getItem('productImpressions') || '[]');
      const pageViews = JSON.parse(localStorage.getItem('pageViews') || '[]');
      const cartActions = JSON.parse(localStorage.getItem('addToCart') || '[]');
      const scrollDepth = JSON.parse(localStorage.getItem('scrollDepth') || '[]');
      const engagement = JSON.parse(localStorage.getItem('pageEngagement') || '[]');
      
      // Calculer le taux de conversion (CTR)
      const ctr = impressions.length > 0 ? (clicks.length / impressions.length) * 100 : 0;
      
      // Calculer le taux de rebond
      const bounceRate = engagement.length > 0 
        ? (engagement.filter((e: any) => e.bounced).length / engagement.length) * 100 
        : 0;
      
      // Analyser les performances par plateforme
      const platformPerformance: Record<string, { impressions: number, clicks: number, ctr: number }> = {};
      
      // Compter les impressions par plateforme
      impressions.forEach((impression: any) => {
        const platform = impression.platform;
        if (!platformPerformance[platform]) {
          platformPerformance[platform] = { impressions: 0, clicks: 0, ctr: 0 };
        }
        platformPerformance[platform].impressions += 1;
      });
      
      // Compter les clics par plateforme
      clicks.forEach((click: any) => {
        const platform = click.platform;
        if (!platformPerformance[platform]) {
          platformPerformance[platform] = { impressions: 0, clicks: 0, ctr: 0 };
        }
        platformPerformance[platform].clicks += 1;
      });
      
      // Calculer le CTR par plateforme
      Object.keys(platformPerformance).forEach(platform => {
        const { impressions, clicks } = platformPerformance[platform];
        platformPerformance[platform].ctr = impressions > 0 ? (clicks / impressions) * 100 : 0;
      });
      
      // Analyser les performances par catégorie
      const categoryPerformance: Record<string, { impressions: number, clicks: number, ctr: number }> = {};
      
      // Compter les impressions par catégorie
      impressions.forEach((impression: any) => {
        const category = impression.category;
        if (!categoryPerformance[category]) {
          categoryPerformance[category] = { impressions: 0, clicks: 0, ctr: 0 };
        }
        categoryPerformance[category].impressions += 1;
      });
      
      // Compter les clics par catégorie
      clicks.forEach((click: any) => {
        const category = click.category;
        if (!categoryPerformance[category]) {
          categoryPerformance[category] = { impressions: 0, clicks: 0, ctr: 0 };
        }
        categoryPerformance[category].clicks += 1;
      });
      
      // Calculer le CTR par catégorie
      Object.keys(categoryPerformance).forEach(category => {
        const { impressions, clicks } = categoryPerformance[category];
        categoryPerformance[category].ctr = impressions > 0 ? (clicks / impressions) * 100 : 0;
      });
      
      // Analyser les performances par page
      const pagePerformance: Record<string, { views: number, clicks: number, ctr: number }> = {};
      
      // Compter les vues par page
      pageViews.forEach((view: any) => {
        const path = view.path;
        if (!pagePerformance[path]) {
          pagePerformance[path] = { views: 0, clicks: 0, ctr: 0 };
        }
        pagePerformance[path].views += 1;
      });
      
      // Compter les clics par page
      clicks.forEach((click: any) => {
        const path = click.path;
        if (!pagePerformance[path]) {
          pagePerformance[path] = { views: 0, clicks: 0, ctr: 0 };
        }
        pagePerformance[path].clicks += 1;
      });
      
      // Calculer le CTR par page
      Object.keys(pagePerformance).forEach(path => {
        const { views, clicks } = pagePerformance[path];
        pagePerformance[path].ctr = views > 0 ? (clicks / views) * 100 : 0;
      });
      
      // Identifier les produits les plus performants
      const productPerformance: Record<string, { impressions: number, clicks: number, ctr: number }> = {};
      
      // Compter les impressions par produit
      impressions.forEach((impression: any) => {
        const productId = impression.productId;
        if (!productPerformance[productId]) {
          productPerformance[productId] = { impressions: 0, clicks: 0, ctr: 0 };
        }
        productPerformance[productId].impressions += 1;
      });
      
      // Compter les clics par produit
      clicks.forEach((click: any) => {
        const productId = click.productId;
        if (!productPerformance[productId]) {
          productPerformance[productId] = { impressions: 0, clicks: 0, ctr: 0 };
        }
        productPerformance[productId].clicks += 1;
      });
      
      // Calculer le CTR par produit
      Object.keys(productPerformance).forEach(productId => {
        const { impressions, clicks } = productPerformance[productId];
        productPerformance[productId].ctr = impressions > 0 ? (clicks / impressions) * 100 : 0;
      });
      
      // Trier les produits par CTR pour identifier les plus performants
      const topProducts = Object.entries(productPerformance)
        .filter(([_, data]) => data.impressions > 5) // Filtrer les produits avec suffisamment d'impressions
        .sort(([_, dataA], [__, dataB]) => dataB.ctr - dataA.ctr)
        .slice(0, 10)
        .map(([productId, data]) => ({ productId, ...data }));
      
      return {
        overallCTR: ctr,
        bounceRate,
        platformPerformance,
        categoryPerformance,
        pagePerformance,
        topProducts,
        totalClicks: clicks.length,
        totalImpressions: impressions.length,
        totalPageViews: pageViews.length,
        cartActions: cartActions.length
      };
    }
    
    return null;
  };

  // Appliquer des optimisations basées sur l'analyse des données
  const applyConversionOptimizations = (analysis: any) => {
    if (!analysis || typeof window === 'undefined') return;
    
    // Stocker les données d'analyse pour utilisation par d'autres composants
    localStorage.setItem('conversionAnalysis', JSON.stringify(analysis));
    
    // Optimiser l'affichage des produits en fonction des performances
    if (analysis.topProducts && analysis.topProducts.length > 0) {
      localStorage.setItem('topPerformingProducts', JSON.stringify(analysis.topProducts.map((p: any) => p.productId)));
    }
    
    // Optimiser l'affichage des plateformes en fonction des performances
    if (analysis.platformPerformance) {
      const platforms = Object.entries(analysis.platformPerformance)
        .sort(([_, dataA]: [string, any], [__, dataB]: [string, any]) => dataB.ctr - dataA.ctr)
        .map(([platform, _]: [string, any]) => platform);
      
      if (platforms.length > 0) {
        localStorage.setItem('preferredPlatforms', JSON.stringify(platforms));
      }
    }
    
    // Optimiser l'affichage des catégories en fonction des performances
    if (analysis.categoryPerformance) {
      const categories = Object.entries(analysis.categoryPerformance)
        .sort(([_, dataA]: [string, any], [__, dataB]: [string, any]) => dataB.ctr - dataA.ctr)
        .map(([category, _]: [string, any]) => category);
      
      if (categories.length > 0) {
        localStorage.setItem('preferredCategories', JSON.stringify(categories));
      }
    }
    
    // Définir des objectifs de conversion basés sur les performances actuelles
    const conversionGoals = {
      targetCTR: Math.max(analysis.overallCTR * 1.2, 5), // Viser 20% d'amélioration ou minimum 5%
      targetBounceRate: Math.max(analysis.bounceRate * 0.8, 40), // Viser 20% de réduction ou maximum 40%
      dailySalesTarget: 20, // Objectif de 20 ventes par jour pour atteindre 150$ (avec 7.5$ par vente)
      dailyClicksNeeded: Math.ceil(20 / (analysis.overallCTR / 100)) // Clics nécessaires pour atteindre l'objectif
    };
    
    localStorage.setItem('conversionGoals', JSON.stringify(conversionGoals));
  };

  return <>{children}</>;
}
