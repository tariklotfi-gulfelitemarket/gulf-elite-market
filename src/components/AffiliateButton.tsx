
'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
// import { useLocale } from '@/hooks/useLocale'; // Removed i18n hook

interface AffiliateButtonProps {
  productId: string;
  platform: string;
  category: string;
  price: number;
  className?: string;
  buttonText?: string;
  buttonColor?: string;
}

export default function AffiliateButton({
  productId,
  platform,
  category,
  price,
  className = '',
  buttonText = 'Acheter maintenant', // Default text, will be localized below if possible
  buttonColor = 'bg-blue-600 hover:bg-blue-700'
}: AffiliateButtonProps) {
  const router = useRouter();
  // const { locale } = useLocale(); // Removed i18n hook usage
  const locale = 'en'; // Default locale to 'en' for now
  const [optimized, setOptimized] = useState(false);
  const [urgencyMessage, setUrgencyMessage] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);

  // Traduire le texte du bouton en fonction de la langue (placeholder)
  const getLocalizedButtonText = () => {
    if (locale === 'en') return buttonText === 'Acheter maintenant' ? 'Buy Now' : buttonText;
    if (locale === 'ar') return buttonText === 'Acheter maintenant' ? 'اشتري الآن' : buttonText;
    // Default to French or original if not 'Acheter maintenant'
    return buttonText;
  };

  // Appliquer des optimisations basées sur les données de conversion
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Vérifier si ce produit est parmi les plus performants
      const topProducts = JSON.parse(localStorage.getItem('topPerformingProducts') || '[]');
      const isTopProduct = topProducts.includes(productId);

      // Vérifier si cette plateforme est parmi les plus performantes
      const preferredPlatforms = JSON.parse(localStorage.getItem('preferredPlatforms') || '[]');
      const isPreferredPlatform = preferredPlatforms.length > 0 && preferredPlatforms[0] === platform;

      // Appliquer des optimisations si le produit ou la plateforme est performant
      if (isTopProduct || isPreferredPlatform) {
        setOptimized(true);

        // Ajouter un message d'urgence pour les produits populaires (placeholder)
        if (isTopProduct) {
          const messages = {
            fr: ['Très populaire', 'Presque épuisé', 'Offre limitée'],
            en: ['Very popular', 'Almost sold out', 'Limited offer'],
            ar: ['شعبية كبيرة', 'على وشك النفاد', 'عرض محدود']
          };

          const randomIndex = Math.floor(Math.random() * 3);
          // Use 'en' as default locale for message
          setUrgencyMessage(messages['en'][randomIndex]);
        }

        // Ajouter un compte à rebours pour créer un sentiment d'urgence
        if (Math.random() > 0.5) {
          const randomHours = Math.floor(Math.random() * 24) + 1;
          setCountdown(randomHours);
        }
      }
    }
  }, [productId, platform, locale]);

  // Gérer le clic sur le bouton d'affiliation
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // Enregistrer le clic pour l'analyse des conversions
    if (typeof window !== 'undefined') {
      const clickData = {
        productId,
        platform,
        category,
        price,
        timestamp: new Date().toISOString(),
        path: window.location.pathname,
        optimized: optimized
      };

      const existingClicks = JSON.parse(localStorage.getItem('affiliateClicks') || '[]');
      existingClicks.push(clickData);
      localStorage.setItem('affiliateClicks', JSON.stringify(existingClicks.slice(-100)));
    }

    // Afficher une popup de confirmation pour augmenter l'engagement
    setShowPopup(true);

    // Rediriger vers la plateforme d'affiliation après un court délai
    setTimeout(() => {
      setShowPopup(false);

      // Construire l'URL d'affiliation en fonction de la plateforme
      let affiliateUrl = '';

      switch (platform) {
        case 'amazon':
          affiliateUrl = `https://www.amazon.ae/dp/${productId}?tag=gulfelitemarket-21`;
          break;
        case 'noon':
          affiliateUrl = `https://www.noon.com/uae-en/product/${productId}?utm_source=gulfelitemarket`;
          break;
        case 'sharafdg':
          affiliateUrl = `https://uae.sharafdg.com/product/${productId}?utm_source=gulfelitemarket`;
          break;
        case 'virginmegastore':
          affiliateUrl = `https://www.virginmegastore.ae/en/p/${productId}?utm_source=gulfelitemarket`;
          break;
        case 'ounass':
          affiliateUrl = `https://www.ounass.ae/designer/${productId}?utm_source=gulfelitemarket`;
          break;
        case 'themodist':
          affiliateUrl = `https://www.themodist.com/en/product/${productId}?utm_source=gulfelitemarket`;
          break;
        case 'namshi':
          affiliateUrl = `https://www.namshi.com/uae-en/buy/${productId}?utm_source=gulfelitemarket`;
          break;
        case 'farfetch':
          affiliateUrl = `https://www.farfetch.com/ae/shopping/item-${productId}.aspx?utm_source=gulfelitemarket`;
          break;
        default:
          affiliateUrl = `https://www.gulfelitemarket.com/redirect?product=${productId}&platform=${platform}`;
      }

      // Ouvrir l'URL dans un nouvel onglet
      window.open(affiliateUrl, '_blank');
    }, 1500);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={handleClick}
        className={`w-full ${buttonColor} text-white font-bold py-3 px-4 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
          optimized ? 'shadow-lg animate-pulse' : 'shadow'
        }`}
        data-affiliate-link="true"
        data-product-id={productId}
        data-platform={platform}
        data-category={category}
        data-price={price}
      >
        {getLocalizedButtonText()}
      </button>

      {/* Message d'urgence pour créer un sentiment de rareté */}
      {urgencyMessage && (
        <div className="mt-2 text-center text-red-600 text-sm font-semibold animate-pulse">
          {urgencyMessage}
        </div>
      )}

      {/* Compte à rebours pour créer un sentiment d'urgence (placeholder) */}
      {countdown !== null && (
        <div className="mt-2 text-center text-gray-600 text-xs">
          {/* Use 'en' as default locale for countdown message */}
          {`Offer expires in ${countdown} hours`}
        </div>
      )}

      {/* Popup de confirmation (placeholder) */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-md mx-4 shadow-xl transform transition-all animate-bounce">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4">
                {/* Use 'en' as default locale for popup title */}
                {'Excellent choice!'}
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  {/* Use 'en' as default locale for popup message */}
                  {'You are being redirected to our partner...'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

