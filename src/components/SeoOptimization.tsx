import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useLocale } from '@/hooks/useLocale';

interface SeoOptimizationProps {
  title?: string;
  description?: string;
  keywords?: string[];
  imageUrl?: string;
  canonicalUrl?: string;
  productId?: string;
  category?: string;
  price?: number;
  children: React.ReactNode;
}

export default function SeoOptimization({
  title = 'Gulf Elite Market - Produits Premium pour les Pays du Golfe',
  description = 'Découvrez notre sélection exclusive de produits premium pour les pays du Golfe. Parfums, mode et technologie de luxe avec livraison rapide.',
  keywords = ['pays du golfe', 'produits premium', 'parfums', 'mode', 'technologie'],
  imageUrl = '/images/gulf-elite-market-og.jpg',
  canonicalUrl,
  productId,
  category,
  price,
  children
}: SeoOptimizationProps) {
  const router = useRouter();
  const { locale } = useLocale();
  const [structuredData, setStructuredData] = useState<string>('');
  const [optimizedTitle, setOptimizedTitle] = useState<string>(title);
  const [optimizedDescription, setOptimizedDescription] = useState<string>(description);
  
  // Optimiser les métadonnées en fonction de la langue
  useEffect(() => {
    if (locale === 'en') {
      setOptimizedTitle(title.replace('Produits Premium pour les Pays du Golfe', 'Premium Products for Gulf Countries'));
      setOptimizedDescription(description.replace(
        'Découvrez notre sélection exclusive de produits premium pour les pays du Golfe. Parfums, mode et technologie de luxe avec livraison rapide.',
        'Discover our exclusive selection of premium products for Gulf countries. Luxury fragrances, fashion and technology with fast delivery.'
      ));
    } else if (locale === 'ar') {
      setOptimizedTitle(title.replace('Gulf Elite Market - Produits Premium pour les Pays du Golfe', 'سوق الخليج النخبة - منتجات فاخرة لدول الخليج'));
      setOptimizedDescription(description.replace(
        'Découvrez notre sélection exclusive de produits premium pour les pays du Golfe. Parfums, mode et technologie de luxe avec livraison rapide.',
        'اكتشف مجموعتنا الحصرية من المنتجات الفاخرة لدول الخليج. عطور فاخرة وأزياء وتكنولوجيا مع توصيل سريع.'
      ));
    }
  }, [locale, title, description]);

  // Générer les données structurées pour les produits
  useEffect(() => {
    if (productId && category) {
      // Données structurées pour un produit
      const productSchema = {
        '@context': 'https://schema.org/',
        '@type': 'Product',
        name: title,
        description: description,
        image: imageUrl,
        sku: productId,
        mpn: productId,
        category: category,
        offers: {
          '@type': 'Offer',
          url: canonicalUrl || `https://gulfelitemarket.com${router.asPath}`,
          priceCurrency: 'AED',
          price: price || 0,
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: 'Gulf Elite Market'
          }
        }
      };
      
      setStructuredData(JSON.stringify(productSchema));
    } else {
      // Données structurées pour le site web
      const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Gulf Elite Market',
        url: 'https://gulfelitemarket.com',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://gulfelitemarket.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      };
      
      // Données structurées pour l'organisation
      const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Gulf Elite Market',
        url: 'https://gulfelitemarket.com',
        logo: 'https://gulfelitemarket.com/images/logo.png',
        sameAs: [
          'https://www.instagram.com/gulfelitemarket',
          'https://www.tiktok.com/@gulfelitemarket',
          'https://www.snapchat.com/add/gulfelitemarket'
        ]
      };
      
      setStructuredData(JSON.stringify([websiteSchema, organizationSchema]));
    }
  }, [productId, category, price, title, description, imageUrl, canonicalUrl, router.asPath]);

  // Optimiser les mots-clés en fonction de la langue
  const getLocalizedKeywords = () => {
    if (locale === 'en') {
      return keywords.map(keyword => {
        switch (keyword) {
          case 'pays du golfe': return 'gulf countries';
          case 'produits premium': return 'premium products';
          case 'parfums': return 'fragrances';
          case 'mode': return 'fashion';
          case 'technologie': return 'technology';
          default: return keyword;
        }
      });
    } else if (locale === 'ar') {
      return keywords.map(keyword => {
        switch (keyword) {
          case 'pays du golfe': return 'دول الخليج';
          case 'produits premium': return 'منتجات فاخرة';
          case 'parfums': return 'عطور';
          case 'mode': return 'أزياء';
          case 'technologie': return 'تكنولوجيا';
          default: return keyword;
        }
      });
    }
    return keywords;
  };

  return (
    <>
      <Head>
        <title>{optimizedTitle}</title>
        <meta name="description" content={optimizedDescription} />
        <meta name="keywords" content={getLocalizedKeywords().join(', ')} />
        
        {/* Balises Open Graph pour les réseaux sociaux */}
        <meta property="og:title" content={optimizedTitle} />
        <meta property="og:description" content={optimizedDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={canonicalUrl || `https://gulfelitemarket.com${router.asPath}`} />
        <meta property="og:type" content={productId ? 'product' : 'website'} />
        <meta property="og:locale" content={locale === 'fr' ? 'fr_FR' : locale === 'ar' ? 'ar_SA' : 'en_US'} />
        
        {/* Balises Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={optimizedTitle} />
        <meta name="twitter:description" content={optimizedDescription} />
        <meta name="twitter:image" content={imageUrl} />
        
        {/* URL canonique */}
        <link rel="canonical" href={canonicalUrl || `https://gulfelitemarket.com${router.asPath}`} />
        
        {/* Balises pour les moteurs de recherche */}
        <meta name="robots" content="index, follow" />
        
        {/* Balises pour les appareils mobiles */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Balises pour les navigateurs */}
        <meta name="theme-color" content="#4f46e5" />
        
        {/* Balises pour les langues alternatives */}
        <link rel="alternate" hrefLang="fr" href={`https://gulfelitemarket.com${router.pathname}`} />
        <link rel="alternate" hrefLang="en" href={`https://gulfelitemarket.com/en${router.pathname}`} />
        <link rel="alternate" hrefLang="ar" href={`https://gulfelitemarket.com/ar${router.pathname}`} />
        <link rel="alternate" hrefLang="x-default" href={`https://gulfelitemarket.com${router.pathname}`} />
        
        {/* Données structurées pour les moteurs de recherche */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />
      </Head>
      {children}
    </>
  );
}
