import React from 'react';
import { newFashionProducts } from '@/data/newProducts';
import ProductCard from '@/components/ProductCard';
import SeoOptimization from '@/components/SeoOptimization';
import ConversionTracker from '@/components/ConversionTracker';
import RecommendationEngine from '@/components/RecommendationEngine';
import { useLocale } from '@/hooks/useLocale';
import { useTranslations } from '@/hooks/useTranslations';

export default function KhalijiModelPage() {
  const { locale } = useLocale();
  const t = useTranslations();
  const isRTL = locale === 'ar';

  return (
    <SeoOptimization
      title={`Khaliji Model - ${t('fashion.title')} | Gulf Elite Market`}
      description={t('fashion.description')}
      keywords={['mode arabe', 'abaya', 'kandura', 'vêtements traditionnels', 'accessoires de luxe', 'pays du golfe']}
      imageUrl="/images/khaliji-model/hero-banner.jpg"
    >
      <ConversionTracker>
        <RecommendationEngine>
          <main className={`container mx-auto px-4 py-8 ${isRTL ? 'rtl' : 'ltr'}`}>
            {/* Section Héroïque */}
            <section className="relative h-96 rounded-xl overflow-hidden mb-12 bg-gradient-to-r from-indigo-700 to-indigo-900">
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center p-8">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {t('fashion.heroTitle')}
                </h1>
                <p className="text-xl text-white max-w-2xl">
                  {t('fashion.heroSubtitle')}
                </p>
                <div className="mt-8">
                  <a 
                    href="#products" 
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
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
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-lg ml-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </section>

            {/* Catégories */}
            <section className="mb-12">
              <h2 className={`text-3xl font-bold mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('fashion.categories')}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <a href="/khaliji-model/femme" className="bg-indigo-100 hover:bg-indigo-200 rounded-lg p-6 text-center transition-all transform hover:scale-105">
                  <div className="text-indigo-800 text-4xl mb-2">👗</div>
                  <h3 className="text-lg font-semibold text-indigo-900">{t('fashion.category.women')}</h3>
                </a>
                <a href="/khaliji-model/homme" className="bg-indigo-100 hover:bg-indigo-200 rounded-lg p-6 text-center transition-all transform hover:scale-105">
                  <div className="text-indigo-800 text-4xl mb-2">👔</div>
                  <h3 className="text-lg font-semibold text-indigo-900">{t('fashion.category.men')}</h3>
                </a>
                <a href="/khaliji-model/accessoires" className="bg-indigo-100 hover:bg-indigo-200 rounded-lg p-6 text-center transition-all transform hover:scale-105">
                  <div className="text-indigo-800 text-4xl mb-2">👜</div>
                  <h3 className="text-lg font-semibold text-indigo-900">{t('fashion.category.accessories')}</h3>
                </a>
                <a href="/khaliji-model/occasions" className="bg-indigo-100 hover:bg-indigo-200 rounded-lg p-6 text-center transition-all transform hover:scale-105">
                  <div className="text-indigo-800 text-4xl mb-2">✨</div>
                  <h3 className="text-lg font-semibold text-indigo-900">{t('fashion.category.occasions')}</h3>
                </a>
              </div>
            </section>

            {/* Produits Populaires */}
            <section className="mb-12" id="products">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">{t('fashion.popularProducts')}</h2>
                <a href="/khaliji-model/tous-produits" className="text-indigo-600 hover:text-indigo-800">
                  {t('common.viewAll')} →
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {newFashionProducts.filter(product => product.featured).slice(0, 4).map((product) => (
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
                    buttonColor="bg-indigo-600 hover:bg-indigo-700"
                  />
                ))}
              </div>
            </section>

            {/* Mode Féminine */}
            <section className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">{t('fashion.womenCollection')}</h2>
                <a href="/khaliji-model/femme" className="text-indigo-600 hover:text-indigo-800">
                  {t('common.viewAll')} →
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {newFashionProducts
                  .filter(product => product.category === 'femme')
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
                      buttonColor="bg-indigo-600 hover:bg-indigo-700"
                    />
                  ))}
              </div>
            </section>

            {/* Mode Masculine */}
            <section className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">{t('fashion.menCollection')}</h2>
                <a href="/khaliji-model/homme" className="text-indigo-600 hover:text-indigo-800">
                  {t('common.viewAll')} →
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {newFashionProducts
                  .filter(product => product.category === 'homme')
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
                      buttonColor="bg-indigo-600 hover:bg-indigo-700"
                    />
                  ))}
              </div>
            </section>

            {/* Accessoires de Luxe */}
            <section className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">{t('fashion.luxuryAccessories')}</h2>
                <a href="/khaliji-model/accessoires" className="text-indigo-600 hover:text-indigo-800">
                  {t('common.viewAll')} →
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {newFashionProducts
                  .filter(product => product.category === 'accessoire')
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
                      buttonColor="bg-indigo-600 hover:bg-indigo-700"
                    />
                  ))}
              </div>
            </section>

            {/* Section Éducative */}
            <section className="mb-12 bg-indigo-50 rounded-xl p-8">
              <h2 className={`text-3xl font-bold mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('fashion.educationalSection.title')}
              </h2>
              <div className={`prose max-w-none ${isRTL ? 'text-right' : 'text-left'}`}>
                <p className="mb-4">
                  {t('fashion.educationalSection.paragraph1')}
                </p>
                <p className="mb-4">
                  {t('fashion.educationalSection.paragraph2')}
                </p>
                <p>
                  {t('fashion.educationalSection.paragraph3')}
                </p>
              </div>
              <div className="mt-6">
                <a 
                  href="/blog/mode-contemporaine-golfe" 
                  className="text-indigo-600 hover:text-indigo-800 font-semibold"
                >
                  {t('common.readMore')} →
                </a>
              </div>
            </section>

            {/* Tous les Produits */}
            <section className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">{t('fashion.allProducts')}</h2>
                <a href="/khaliji-model/tous-produits" className="text-indigo-600 hover:text-indigo-800">
                  {t('common.viewAll')} →
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {newFashionProducts.map((product) => (
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
                    buttonColor="bg-indigo-600 hover:bg-indigo-700"
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
