'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AffiliateButton from './AffiliateButton';
// import { useLocale } from '@/hooks/useLocale'; // Removed i18n hook
// import { useTranslations } from '@/hooks/useTranslations'; // Removed i18n hook

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  imageUrl?: string;
  platform: string;
  category: string;
  rating?: number;
  reviewCount?: number;
  buttonColor?: string;
  className?: string;
}

export default function ProductCard({
  id,
  title,
  description,
  price,
  originalPrice,
  discountPercentage,
  imageUrl,
  platform,
  category,
  rating = 4.5,
  reviewCount = 0,
  buttonColor = 'bg-blue-600 hover:bg-blue-700',
  className = ''
}: ProductCardProps) {
  // const { locale } = useLocale(); // Removed i18n hook usage
  // const t = useTranslations(); // Removed i18n hook usage
  const locale = 'en'; // Default locale to 'en' for now
  const t = (key: string) => key.split('.').pop() || key; // Simple placeholder for translation
  const isRTL = false; // Default RTL to false for now
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isCompared, setIsCompared] = useState(false);
  const [viewCount, setViewCount] = useState<number | null>(null);
  
  // Formater le prix selon la locale
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat(locale === 'fr' ? 'fr-FR' : locale === 'ar' ? 'ar-AE' : 'en-AE', {
      style: 'currency',
      currency: 'AED',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };
  
  // Tronquer la description
  const truncateDescription = (text: string, maxLength: number = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  // Optimiser l'affichage en fonction des données de conversion
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Vérifier si ce produit est parmi les plus performants
      const topProducts = JSON.parse(localStorage.getItem('topPerformingProducts') || '[]");
      const isTopProduct = topProducts.includes(id);
      
      // Mettre en évidence les produits les plus performants
      if (isTopProduct) {
        setIsHighlighted(true);
      }
      
      // Ajouter un compteur de vues aléatoire pour créer un effet de popularité
      if (Math.random() > 0.3) {
        const baseCount = category === 'smartphone' || category === 'wearable' ? 50 : 30;
        const randomCount = Math.floor(Math.random() * baseCount) + 10;
        setViewCount(randomCount);
      }
      
      // Enregistrer l'impression du produit
      const impressionData = {
        productId: id,
        platform,
        category,
        timestamp: new Date().toISOString(),
        path: window.location.pathname
      };
      
      const existingImpressions = JSON.parse(localStorage.getItem('productImpressions') || '[]");
      const alreadyImpressed = existingImpressions.some((imp: any) => 
        imp.productId === id && imp.path === window.location.pathname
      );
      
      if (!alreadyImpressed) {
        existingImpressions.push(impressionData);
        localStorage.setItem('productImpressions', JSON.stringify(existingImpressions.slice(-200)));
      }
    }
  }, [id, platform, category]);

  // Gérer l'ajout à la liste de souhaits
  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsWishlisted(!isWishlisted);
    
    // Enregistrer l'action pour l'analyse
    if (typeof window !== 'undefined') {
      const wishlistData = {
        productId: id,
        action: !isWishlisted ? 'add' : 'remove',
        timestamp: new Date().toISOString()
      };
      
      const existingWishlist = JSON.parse(localStorage.getItem('wishlistActions') || '[]");
      existingWishlist.push(wishlistData);
      localStorage.setItem('wishlistActions', JSON.stringify(existingWishlist.slice(-100)));
    }
  };

  // Gérer l'ajout à la comparaison
  const handleCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsCompared(!isCompared);
    
    // Enregistrer l'action pour l'analyse
    if (typeof window !== 'undefined') {
      const compareData = {
        productId: id,
        category,
        action: !isCompared ? 'add' : 'remove',
        timestamp: new Date().toISOString()
      };
      
      const existingCompares = JSON.parse(localStorage.getItem('productComparisons') || '[]");
      existingCompares.push(compareData);
      localStorage.setItem('productComparisons', JSON.stringify(existingCompares.slice(-100)));
    }
  };

  // Gérer l'ouverture de la vue rapide
  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setShowQuickView(true);
    
    // Enregistrer l'action pour l'analyse
    if (typeof window !== 'undefined') {
      const quickViewData = {
        productId: id,
        category,
        timestamp: new Date().toISOString()
      };
      
      const existingQuickViews = JSON.parse(localStorage.getItem('quickViews') || '[]");
      existingQuickViews.push(quickViewData);
      localStorage.setItem('quickViews', JSON.stringify(existingQuickViews.slice(-100)));
    }
  };

  return (
    <div 
      className={`relative border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all ${
        isHighlighted ? 'border-2 border-yellow-400 transform hover:scale-105' : 'hover:scale-102'
      } ${className}`}
      data-product-card="true"
      data-product-id={id}
      data-platform={platform}
      data-category={category}
    >
      {/* Badge de réduction */}
      {discountPercentage && (
        <div className="absolute top-2 left-2 z-10 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
          -{discountPercentage}%
        </div>
      )}
      
      {/* Badge de produit populaire */}
      {isHighlighted && (
        <div className="absolute top-2 right-2 z-10 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {locale === 'fr' ? 'Populaire' : locale === 'ar' ? 'شائع' : 'Popular'} {/* Kept conditional text for now, defaulting to 'Popular' */}
        </div>
      )}
      
      {/* Image du produit */}
      <div className="relative h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
        {imageUrl ? (
          <Image 
            src={imageUrl} 
            alt={title} 
            width={200} 
            height={200} 
            className="object-contain h-full w-full transition-transform hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-gray-400">{t('common.noImage') === 'noImage' ? 'No Image Available' : t('common.noImage')}</span> {/* Placeholder text */}
          </div>
        )}
        
        {/* Actions rapides */}
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <button 
            onClick={handleWishlist}
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-colors"
            aria-label={isWishlisted ? "Retirer des favoris" : "Ajouter aux favoris"}
          >
            <svg 
              className={`w-5 h-5 ${isWishlisted ? 'text-red-500' : 'text-gray-600'}`} 
              fill={isWishlisted ? "currentColor" : "none"} 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          
          <button 
            onClick={handleCompare}
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-colors"
            aria-label={isCompared ? "Retirer de la comparaison" : "Ajouter à la comparaison"}
          >
            <svg 
              className={`w-5 h-5 ${isCompared ? 'text-blue-500' : 'text-gray-600'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </button>
          
          <button 
            onClick={handleQuickView}
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-colors"
            aria-label="Vue rapide"
          >
            <svg 
              className="w-5 h-5 text-gray-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </button>
        </div>
        
        {/* Compteur de vues */}
        {viewCount !== null && (
          <div className="absolute bottom-2 left-2 bg-white bg-opacity-80 text-xs text-gray-700 px-2 py-1 rounded-full">
            {viewCount} {locale === 'fr' ? 'personnes consultent' : locale === 'ar' ? 'يشاهدون' : 'people viewing'} {/* Kept conditional text for now, defaulting to 'people viewing' */}
          </div>
        )}
      </div>
      
      {/* Contenu du produit */}
      <div className="p-4">
        <div className={`flex justify-between items-start mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
            <Link href={`/product/${id}`}>
              {title}
            </Link>
          </h3>
          
          {/* Évaluation */}
          <div className="flex items-center">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg 
                  key={star}
                  className={`w-4 h-4 ${star <= Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            {reviewCount > 0 && (
              <span className="text-xs text-gray-500 ml-1">({reviewCount})</span>
            )}
          </div>
        </div>
        
        <p className={`text-sm text-gray-600 mb-4 ${isRTL ? 'text-right' : ''}`}>
          {truncateDescription(description)}
        </p>
        
        <div className={`flex justify-between items-center mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div>
            <span className="text-xl font-bold text-gray-800">{formatPrice(price)}</span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">
                {formatPrice(originalPrice)}
              </span>
            )}
          </div>
          
          <div className="text-sm text-gray-500">
            {platform === 'amazon' && 'Amazon'}
            {platform === 'noon' && 'Noon'}
            {platform === 'sharafdg' && 'Sharaf DG'}
            {platform === 'virginmegastore' && 'Virgin'}
            {platform === 'ounass' && 'Ounass'}
            {platform === 'themodist' && 'The Modist'}
            {platform === 'namshi' && 'Namshi'}
            {platform === 'farfetch' && 'Farfetch'}
          </div>
        </div>
        
        <AffiliateButton
          productId={id}
          platform={platform}
          category={category}
          price={price}
          buttonColor={buttonColor}
        />
      </div>
      
      {/* Modal de vue rapide */}
      {showQuickView && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-3xl mx-4 shadow-xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
              <button 
                onClick={() => setShowQuickView(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
                {imageUrl ? (
                  <Image 
                    src={imageUrl} 
                    alt={title} 
                    width={300} 
                    height={300} 
                    className="object-contain max-h-[300px]"
                  />
                ) : (
                  <div className="w-full h-64 flex items-center justify-center bg-gray-200">
                    <span className="text-gray-400">{t('common.noImage') === 'noImage' ? 'No Image Available' : t('common.noImage')}</span> {/* Placeholder text */}
                  </div>
                )}
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-2xl font-bold text-gray-800">{formatPrice(price)}</span>
                    {originalPrice && (
                      <span className="text-sm text-gray-500 line-through ml-2">
                        {formatPrice(originalPrice)}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg 
                          key={star}
                          className={`w-5 h-5 ${star <= Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    {reviewCount > 0 && (
                      <span className="text-sm text-gray-500 ml-1">({reviewCount})</span>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{description}</p>
                
                <AffiliateButton
                  productId={id}
                  platform={platform}
                  category={category}
                  price={price}
                  buttonColor={buttonColor}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

