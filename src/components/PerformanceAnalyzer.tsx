// Analyse des performances et ajustement de la stratégie

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface PerformanceAnalyzerProps {
  children: React.ReactNode;
}

export default function PerformanceAnalyzer({ children }: PerformanceAnalyzerProps) {
  const [analysisResults, setAnalysisResults] = useState<any>(null);
  const [strategyAdjustments, setStrategyAdjustments] = useState<any>(null);
  const [initialized, setInitialized] = useState(false);
  const router = useRouter();

  // Initialiser l'analyseur de performances
  useEffect(() => {
    if (typeof window !== 'undefined' && !initialized) {
      // Récupérer les données de conversion
      const conversionData = JSON.parse(localStorage.getItem('conversionAnalysis') || '{}');
      const conversionGoals = JSON.parse(localStorage.getItem('conversionGoals') || '{}');
      
      // Analyser les performances actuelles
      const results = analyzePerformance(conversionData, conversionGoals);
      setAnalysisResults(results);
      
      // Générer des ajustements de stratégie basés sur l'analyse
      const adjustments = generateStrategyAdjustments(results);
      setStrategyAdjustments(adjustments);
      
      // Appliquer les ajustements automatiques
      applyAutomaticAdjustments(adjustments);
      
      setInitialized(true);
      
      // Enregistrer les résultats de l'analyse et les ajustements
      localStorage.setItem('performanceAnalysis', JSON.stringify(results));
      localStorage.setItem('strategyAdjustments', JSON.stringify(adjustments));
    }
  }, [initialized, router.pathname]);

  // Analyser les performances actuelles
  const analyzePerformance = (conversionData: any, conversionGoals: any) => {
    if (!conversionData || Object.keys(conversionData).length === 0) {
      return {
        status: 'insufficient_data',
        message: 'Données insuffisantes pour une analyse complète',
        recommendations: [
          'Continuer à collecter des données pendant au moins une semaine',
          'Encourager les interactions utilisateur pour générer plus de données'
        ]
      };
    }
    
    // Calculer l'écart par rapport aux objectifs
    const ctrGap = conversionGoals.targetCTR ? (conversionData.overallCTR - conversionGoals.targetCTR) : 0;
    const bounceRateGap = conversionGoals.targetBounceRate ? (conversionData.bounceRate - conversionGoals.targetBounceRate) : 0;
    
    // Identifier les forces et faiblesses
    const strengths = [];
    const weaknesses = [];
    
    // Analyser les performances par plateforme
    if (conversionData.platformPerformance) {
      const platforms = Object.entries(conversionData.platformPerformance)
        .sort(([_, dataA]: [string, any], [__, dataB]: [string, any]) => dataB.ctr - dataA.ctr);
      
      if (platforms.length > 0) {
        const [topPlatform, topPlatformData] = platforms[0];
        if (topPlatformData.ctr > conversionData.overallCTR) {
          strengths.push(`La plateforme ${topPlatform} performe bien avec un CTR de ${topPlatformData.ctr.toFixed(2)}%`);
        }
        
        if (platforms.length > 1) {
          const [worstPlatform, worstPlatformData] = platforms[platforms.length - 1];
          if (worstPlatformData.ctr < conversionData.overallCTR * 0.7) {
            weaknesses.push(`La plateforme ${worstPlatform} sous-performe avec un CTR de seulement ${worstPlatformData.ctr.toFixed(2)}%`);
          }
        }
      }
    }
    
    // Analyser les performances par catégorie
    if (conversionData.categoryPerformance) {
      const categories = Object.entries(conversionData.categoryPerformance)
        .sort(([_, dataA]: [string, any], [__, dataB]: [string, any]) => dataB.ctr - dataA.ctr);
      
      if (categories.length > 0) {
        const [topCategory, topCategoryData] = categories[0];
        if (topCategoryData.ctr > conversionData.overallCTR) {
          strengths.push(`La catégorie ${topCategory} performe bien avec un CTR de ${topCategoryData.ctr.toFixed(2)}%`);
        }
        
        if (categories.length > 1) {
          const [worstCategory, worstCategoryData] = categories[categories.length - 1];
          if (worstCategoryData.ctr < conversionData.overallCTR * 0.7) {
            weaknesses.push(`La catégorie ${worstCategory} sous-performe avec un CTR de seulement ${worstCategoryData.ctr.toFixed(2)}%`);
          }
        }
      }
    }
    
    // Analyser les performances par page
    if (conversionData.pagePerformance) {
      const pages = Object.entries(conversionData.pagePerformance)
        .filter(([path, _]: [string, any]) => path !== '/' && path !== '/404')
        .sort(([_, dataA]: [string, any], [__, dataB]: [string, any]) => dataB.ctr - dataA.ctr);
      
      if (pages.length > 0) {
        const [topPage, topPageData] = pages[0];
        if (topPageData.ctr > conversionData.overallCTR) {
          strengths.push(`La page ${topPage} performe bien avec un CTR de ${topPageData.ctr.toFixed(2)}%`);
        }
        
        if (pages.length > 1) {
          const [worstPage, worstPageData] = pages[pages.length - 1];
          if (worstPageData.ctr < conversionData.overallCTR * 0.7 && worstPageData.views > 5) {
            weaknesses.push(`La page ${worstPage} sous-performe avec un CTR de seulement ${worstPageData.ctr.toFixed(2)}%`);
          }
        }
      }
    }
    
    // Évaluer le taux de rebond
    if (conversionData.bounceRate > 70) {
      weaknesses.push(`Taux de rebond élevé (${conversionData.bounceRate.toFixed(2)}%)`);
    } else if (conversionData.bounceRate < 40) {
      strengths.push(`Excellent taux de rebond (${conversionData.bounceRate.toFixed(2)}%)`);
    }
    
    // Évaluer le CTR global
    if (conversionData.overallCTR < 2) {
      weaknesses.push(`CTR global faible (${conversionData.overallCTR.toFixed(2)}%)`);
    } else if (conversionData.overallCTR > 5) {
      strengths.push(`Excellent CTR global (${conversionData.overallCTR.toFixed(2)}%)`);
    }
    
    // Déterminer le statut global
    let status = 'needs_improvement';
    if (ctrGap >= 0 && bounceRateGap <= 0) {
      status = 'on_target';
    } else if (ctrGap >= -1 && bounceRateGap <= 10) {
      status = 'close_to_target';
    } else if (ctrGap < -3 || bounceRateGap > 20) {
      status = 'significant_improvement_needed';
    }
    
    // Générer des recommandations basées sur l'analyse
    const recommendations = [];
    
    if (weaknesses.includes('CTR global faible')) {
      recommendations.push('Améliorer la visibilité des boutons d\'affiliation');
      recommendations.push('Ajouter plus de messages d\'urgence et de rareté');
      recommendations.push('Optimiser les titres et descriptions des produits');
    }
    
    if (weaknesses.some(w => w.includes('sous-performe'))) {
      recommendations.push('Revoir la sélection de produits dans les catégories sous-performantes');
      recommendations.push('Améliorer la présentation visuelle des produits sous-performants');
    }
    
    if (weaknesses.includes(`Taux de rebond élevé`)) {
      recommendations.push('Améliorer la vitesse de chargement des pages');
      recommendations.push('Optimiser l\'expérience mobile');
      recommendations.push('Ajouter plus de contenu engageant sur les pages d\'atterrissage');
    }
    
    // Ajouter des recommandations générales
    recommendations.push('Continuer à enrichir le catalogue de produits');
    recommendations.push('Développer du contenu éducatif pour augmenter l\'engagement');
    recommendations.push('Optimiser les campagnes marketing sur les réseaux sociaux');
    
    return {
      status,
      ctrGap,
      bounceRateGap,
      strengths,
      weaknesses,
      recommendations,
      conversionData,
      conversionGoals,
      timestamp: new Date().toISOString()
    };
  };

  // Générer des ajustements de stratégie basés sur l'analyse
  const generateStrategyAdjustments = (analysisResults: any) => {
    if (!analysisResults || analysisResults.status === 'insufficient_data') {
      return {
        priorityActions: [
          'Collecter plus de données d\'utilisation',
          'Continuer à enrichir le catalogue de produits',
          'Développer la présence sur les réseaux sociaux'
        ],
        resourceAllocation: {
          productDevelopment: 40,
          marketing: 30,
          contentCreation: 20,
          technicalOptimization: 10
        },
        focusAreas: ['data_collection', 'product_expansion', 'social_media']
      };
    }
    
    // Déterminer les actions prioritaires
    const priorityActions = [];
    
    // Ajouter des actions basées sur les faiblesses
    if (analysisResults.weaknesses.includes('CTR global faible')) {
      priorityActions.push('Optimiser les boutons d\'affiliation et les appels à l\'action');
      priorityActions.push('Améliorer la mise en page des fiches produits');
    }
    
    if (analysisResults.weaknesses.some(w => w.includes('plateforme') && w.includes('sous-performe'))) {
      priorityActions.push('Réévaluer les partenariats avec les plateformes sous-performantes');
      priorityActions.push('Négocier de meilleures conditions avec les plateformes performantes');
    }
    
    if (analysisResults.weaknesses.some(w => w.includes('catégorie') && w.includes('sous-performe'))) {
      priorityActions.push('Revoir la sélection de produits dans les catégories sous-performantes');
      priorityActions.push('Ajouter plus de produits dans les catégories performantes');
    }
    
    if (analysisResults.weaknesses.includes(`Taux de rebond élevé`)) {
      priorityActions.push('Optimiser la vitesse de chargement des pages');
      priorityActions.push('Améliorer l\'expérience utilisateur mobile');
    }
    
    // Ajouter des actions générales si nécessaire
    if (priorityActions.length < 3) {
      priorityActions.push('Développer du contenu éducatif pour augmenter l\'engagement');
      priorityActions.push('Optimiser les campagnes marketing sur les réseaux sociaux');
    }
    
    // Limiter à 5 actions prioritaires maximum
    const limitedPriorityActions = priorityActions.slice(0, 5);
    
    // Déterminer l'allocation des ressources
    let resourceAllocation = {
      productDevelopment: 25,
      marketing: 25,
      contentCreation: 25,
      technicalOptimization: 25
    };
    
    // Ajuster l'allocation en fonction des besoins
    if (analysisResults.status === 'significant_improvement_needed') {
      if (analysisResults.weaknesses.includes('CTR global faible')) {
        resourceAllocation.marketing += 15;
        resourceAllocation.productDevelopment += 10;
        resourceAllocation.contentCreation -= 10;
        resourceAllocation.technicalOptimization -= 15;
      } else if (analysisResults.weaknesses.includes(`Taux de rebond élevé`)) {
        resourceAllocation.technicalOptimization += 20;
        resourceAllocation.contentCreation += 10;
        resourceAllocation.marketing -= 15;
        resourceAllocation.productDevelopment -= 15;
      }
    }
    
    // Déterminer les domaines d'intérêt
    const focusAreas = [];
    
    if (analysisResults.weaknesses.includes('CTR global faible')) {
      focusAreas.push('conversion_optimization');
    }
    
    if (analysisResults.weaknesses.some(w => w.includes('sous-performe'))) {
      focusAreas.push('product_selection');
    }
    
    if (analysisResults.weaknesses.includes(`Taux de rebond élevé`)) {
      focusAreas.push('user_experience');
    }
    
    // Ajouter des domaines d'intérêt généraux si nécessaire
    if (focusAreas.length < 2) {
      focusAreas.push('content_marketing');
      focusAreas.push('social_media');
    }
    
    return {
      priorityActions: limitedPriorityActions,
      resourceAllocation,
      focusAreas,
      timestamp: new Date().toISOString()
    };
  };

  // Appliquer les ajustements automatiques
  const applyAutomaticAdjustments = (adjustments: any) => {
    if (!adjustments) return;
    
    // Stocker les ajustements pour utilisation par d'autres composants
    localStorage.setItem('currentStrategy', JSON.stringify({
      priorityActions: adjustments.priorityActions,
      resourceAllocation: adjustments.resourceAllocation,
      focusAreas: adjustments.focusAreas,
      lastUpdated: new Date().toISOString()
    }));
    
    // Appliquer des ajustements spécifiques en fonction des domaines d'intérêt
    if (adjustments.focusAreas.includes('conversion_optimization')) {
      // Augmenter la visibilité des boutons d'affiliation
      localStorage.setItem('buttonEmphasis', 'high');
      
      // Augmenter la fréquence des messages d'urgence
      localStorage.setItem('urgencyMessageFrequency', 'high');
    }
    
    if (adjustments.focusAreas.includes('user_experience')) {
      // Simplifier l'interface utilisateur
      localStorage.setItem('uiComplexity', 'low');
      
      // Réduire les animations
      localStorage.setItem('animationLevel', 'minimal');
    }
    
    if (adjustments.focusAreas.includes('product_selection')) {
      // Mettre davantage l'accent sur les produits performants
      localStorage.setItem('topProductsEmphasis', 'very_high');
    }
  };

  return <>{children}</>;
}
