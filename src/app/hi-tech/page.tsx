import React from 'react';
import { newTechProducts } from '@/data/newProducts';
import ProductCard from '@/components/ProductCard';
import SeoOptimization from '@/components/SeoOptimization';
import ConversionTracker from '@/components/ConversionTracker';
import RecommendationEngine from '@/components/RecommendationEngine';
import { useLocale } from '@/hooks/useLocale';
import { useTranslations } from '@/hooks/useTranslations';

export default function KhalijiHiTechPage() {
  const { locale } = useLocale();
  const t = useTranslations();
  const isRTL = locale === 'ar';

  return (
    <SeoOptimization
      title={`Khaliji Hi-Tech - ${t('tech.title')} | Gulf Elite Market`}
      description={t('tech.description')}
      keywords={['technologie', 'smartphones', 'audio', 'montres connectées', 'gadgets', 'pays du golfe']}
      imageUrl="/images/khaliji-hitech/hero-banner.jpg"
    >
      <ConversionTracker>
        <RecommendationEngine>
          <main className={`container mx-auto px-4 py-8 ${isRTL ? 'rtl' : 'ltr'}`}>
            {/* Section Héroïque */}
            <section className="relative h-96 rounded-xl overflow-hidden mb-12 bg-gradient-to-r from-blue-700 to-blue-900">
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center p-8">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {t('tech.heroTitle')}
                </h1>
                <p className="text-xl text-white max-w-2xl">
                  {t('tech.heroSubtitle')}
                </p>
                <div className="mt-8">
                  <a 
                    href="#products" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
                  >
                    {t('common.exploreProducts')}
                  </a>
                </div>
              </div>
            </section>

            {/* Barre de recherche */}
            <section className="mb-12">
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
                <input
                  type="text"
                  placeholder={t('common.searchPlaceholder')}
                  className={`flex-grow p-2 outline-none ${isRTL ? 'text-right' : 'text-left'}`}
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg ml-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </section>

            {/* Catégories */}
            <section className="mb-12">
              <h2 className={`text-3xl font-bold mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('tech.categories')}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <a href="/hi-tech/smartphones" className="bg-blue-100 hover:bg-blue-200 rounded-lg p-6 text-center transition-all transform hover:scale-105">
                  <div className="text-blue-800 text-4xl mb-2">📱</div>
                  <h3 className="text-lg font-semibold text-blue-900">{t('tech.category.smartphones')}</h3>
                </a>
                <a href="/hi-tech/audio" className="bg-blue-100 hover:bg-blue-200 rounded-lg p-6 text-center transition-all transform hover:scale-105">
                  <div className="text-blue-800 text-4xl mb-2">🎧</div>
                  <h3 className="text-lg font-semibold text-blue-900">{t('tech.category.audio')}</h3>
                </a>
                <a href="/hi-tech/wearables" className="bg-blue-100 hover:bg-blue-200 rounded-lg p-6 text-center transition-all transform hover:scale-105">
                  <div className="text-blue-800 text-4xl mb-2">⌚</div>
                  <h3 className="text-lg font-semibold text-blue-900">{t('tech.category.wearables')}</h3>
                </a>
                <a href="/hi-tech/gadgets" className="bg-blue-100 hover:bg-blue-200 rounded-lg p-6 text-center transition-all transform hover:scale-105">
                  <div className="text-blue-800 text-4xl mb-2">🔌</div>
                  <h3 className="text-lg font-semibold text-blue-900">{t('tech.category.gadgets')}</h3>
                </a>
                <a href="/hi-tech/ordinateurs" className="bg-blue-100 hover:bg-blue-200 rounded-lg p-6 text-center transition-all transform hover:scale-105">
                  <div className="text-blue-800 text-4xl mb-2">💻</div>
                  <h3 className="text-lg font-semibold text-blue-900">{t('tech.category.computers')}</h3>
                </a>
              </div>
            </section>

            {/* Produits Populaires */}
            <section className="mb-12" id="products">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">{t('tech.popularProducts')}</h2>
                <a href="/hi-tech/tous-produits" className="text-blue-600 hover:text-blue-800">
                  {t('common.viewAll')} →
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {newTechProducts.filter(product => product.featured).slice(0, 4).map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    originalPrice={product.originalPrice}
                    discountPercentage={product.discountPercentage}
                    imageUrl={product.imageUrl}
                    platform={product.platform}
                    category={product.category}
                    rating={product.rating}
                    reviewCount={product.reviewCount}
                    buttonColor="bg-blue-600 hover:bg-blue-700"
                  />
                ))}
              </div>
            </section>

            {/* Smartphones */}
            <section className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">{t('tech.smartphonesSection')}</h2>
                <a href="/hi-tech/smartphones" className="text-blue-600 hover:text-blue-800">
                  {t('common.viewAll')} →
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {newTechProducts
                  .filter(product => product.category === 'smartphone')
                  .slice(0, 4)
                  .map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      description={product.description}
                      price={product.price}
                      originalPrice={product.originalPrice}
                      discountPercentage={product.discountPercentage}
                      imageUrl={product.imageUrl}
                      platform={product.platform}
                      category={product.category}
                      rating={product.rating}
                      reviewCount={product.reviewCount}
                      buttonColor="bg-blue-600 hover:bg-blue-700"
                    />
                  ))}
              </div>
            </section>

            {/* Équipements Audio */}
            <section className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">{t('tech.audioSection')}</h2>
                <a href="/hi-tech/audio" className="text-blue-600 hover:text-blue-800">
                  {t('common.viewAll')} →
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {newTechProducts
                  .filter(product => product.category === 'audio')
                  .slice(0, 4)
                  .map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      description={product.description}
                      price={product.price}
                      originalPrice={product.originalPrice}
                      discountPercentage={product.discountPercentage}
                      imageUrl={product.imageUrl}
                      platform={product.platform}
                      category={product.category}
                      rating={product.rating}
                      reviewCount={product.reviewCount}
                      buttonColor="bg-blue-600 hover:bg-blue-700"
                    />
                  ))}
              </div>
            </section>

            {/* Gadgets Innovants */}
            <section className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">{t('tech.gadgetsSection')}</h2>
                <a href="/hi-tech/gadgets" className="text-blue-600 hover:text-blue-800">
                  {t('common.viewAll')} →
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {newTechProducts
                  .filter(product => product.category === 'gadget')
                  .slice(0, 4)
                  .map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      description={product.description}
                      price={product.price}
                      originalPrice={product.originalPrice}
                      discountPercentage={product.discountPercentage}
                      imageUrl={product.imageUrl}
                      platform={product.platform}
                      category={product.category}
                      rating={product.rating}
                      reviewCount={product.reviewCount}
                      buttonColor="bg-blue-600 hover:bg-blue-700"
                    />
                  ))}
              </div>
            </section>

            {/* Marques Premium */}
            <section className="mb-12">
              <h2 className={`text-3xl font-bold mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('tech.premiumBrands')}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-center">
                  <img src="/images/brands/apple.svg" alt="Apple" className="h-12" />
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-center">
                  <img src="/images/brands/samsung.svg" alt="Samsung" className="h-12" />
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-center">
                  <img src="/images/brands/sony.svg" alt="Sony" className="h-12" />
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-center">
                  <img src="/images/brands/bose.svg" alt="Bose" className="h-12" />
                </div>
              </div>
            </section>

            {/* Guide d'Achat */}
            <section className="mb-12 bg-blue-50 rounded-xl p-8">
              <h2 className={`text-3xl font-bold mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('tech.buyingGuide.title')}
              </h2>
              <div className={`prose max-w-none ${isRTL ? 'text-right' : 'text-left'}`}>
                <p className="mb-4">
                  {t('tech.buyingGuide.paragraph1')}
                </p>
                <p className="mb-4">
                  {t('tech.buyingGuide.paragraph2')}
                </p>
                <p>
                  {t('tech.buyingGuide.paragraph3')}
                </p>
              </div>
              <div className="mt-6">
                <a 
                  href="/blog/guide-achat-tech-golfe" 
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  {t('common.readMore')} →
                </a>
              </div>
            </section>

            {/* Tous les Produits */}
            <section className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">{t('tech.allProducts')}</h2>
                <a href="/hi-tech/tous-produits" className="text-blue-600 hover:text-blue-800">
                  {t('common.viewAll')} →
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {newTechProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    originalPrice={product.originalPrice}
                    discountPercentage={product.discountPercentage}
                    imageUrl={product.imageUrl}
                    platform={product.platform}
                    category={product.category}
                    rating={product.rating}
                    reviewCount={product.reviewCount}
                    buttonColor="bg-blue-600 hover:bg-blue-700"
                  />
                ))}
              </div>
            </section>
          </main>
        </RecommendationEngine>
      </ConversionTracker>
    </SeoOptimization>
  );
}
