
// HomePageContent.tsx - Static version without next-intl

// Still a client component because it uses Navbar/Footer/ProductCard which might be client components
// or because it might have client-side interactions later.
// For now, we focus on removing next-intl.
'use client';

// import { useTranslations } from 'next-intl'; // Removed
// import { useLocale } from 'next-intl'; // Removed
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import Image from 'next/image';
import { Link } from '@/lib/navigation.server'; // Keep server link for now

// Placeholder data for homepage (can be passed as props or fetched here)
const featuredProducts = [
  {
    id: 'frag-001',
    title: 'Swiss Arabian Shaghaf Oud',
    description: 'A luxurious oriental fragrance with notes of oud, saffron, and rose',
    price: 350,
    currency: 'AED',
    imageUrl: 'https://via.placeholder.com/500x600?text=Shaghaf+Oud',
    category: 'Oriental Perfumes',
    section: 'fragrance' as const,
    inStock: true
  },
  {
    id: 'fashion-001',
    title: 'Premium Embroidered Abaya',
    description: 'Elegant black abaya with gold embroidery details',
    price: 750,
    currency: 'AED',
    imageUrl: 'https://via.placeholder.com/500x600?text=Premium+Abaya',
    category: 'Traditional Clothing',
    section: 'fashion' as const,
    inStock: true
  },
  {
    id: 'tech-001',
    title: 'Smart Kitchen Assistant',
    description: 'All-in-one kitchen gadget with touchscreen and recipe database',
    price: 1200,
    currency: 'AED',
    imageUrl: 'https://via.placeholder.com/500x600?text=Kitchen+Assistant',
    category: 'Kitchen Gadgets',
    section: 'tech' as const,
    inStock: true
  }
];

export default function HomePageContent() {
  // const t = useTranslations(); // Removed
  // const locale = useLocale(); // Removed
  // const isRTL = locale === 'ar'; // Removed
  
  return (
    // <main className={`min-h-screen ${isRTL ? 'rtl' : 'ltr'}`}> // Removed RTL/LTR class
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="https://via.placeholder.com/1920x600?text=Gulf+Elite+Market"
            alt="Gulf Elite Market"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {/* {t('site.name')} */}
            Gulf Elite Market
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl">
            {/* {t('site.description')} */}
            Your destination for premium products from the Gulf region.
          </p>
          <div className="mt-10">
            <Link
              href="/khaliji-fragrance"
              className="inline-block bg-indigo-600 py-3 px-8 border border-transparent rounded-md text-base font-medium text-white hover:bg-indigo-700"
            >
              {/* {t('cta.shopNow')} */}
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      
      {/* Eid Countdown Section */}
      <div className="bg-indigo-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {/* {t('eid.countdown')} */}
              Eid Countdown
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              {/* {t('eid.preparations')} */}
              Prepare for the celebrations!
            </p>
            
            {/* Countdown Timer Placeholder */}
            <div className="mt-10 flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-indigo-600">12</div>
                <div className="mt-2 text-sm font-medium text-gray-500">{/* {t('eid.days')} */} Days</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-indigo-600">08</div>
                <div className="mt-2 text-sm font-medium text-gray-500">{/* {t('eid.hours')} */} Hours</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-indigo-600">45</div>
                <div className="mt-2 text-sm font-medium text-gray-500">{/* {t('eid.minutes')} */} Minutes</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-indigo-600">30</div>
                <div className="mt-2 text-sm font-medium text-gray-500">{/* {t('eid.seconds')} */} Seconds</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Products Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">
            {/* {t('eid.gifts')} */}
            Eid Gifts
          </h2>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {/* ProductCard still uses next-intl, needs modification */}
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Category Sections */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Khaliji Fragrance Section */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-extrabold text-gray-900">
                  {/* {t('sections.fragrance.title')} */}
                  Khaliji Fragrance
                </h2>
                <Link
                  href="/khaliji-fragrance"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  {/* {t('cta.viewAll')} */}
                  View All
                </Link>
              </div>
              <p className="text-gray-500 mb-8">
                {/* {t('sections.fragrance.description')} */}
                Discover the rich scents of the Gulf.
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="group relative bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                  <div className="aspect-w-3 aspect-h-2 bg-gray-200 group-hover:opacity-75">
                    <Image
                      src="https://via.placeholder.com/600x400?text=Perfumes"
                      alt="Oriental Perfumes"
                      width={600}
                      height={400}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      <Link href="/khaliji-fragrance/perfumes">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {/* {t('sections.fragrance.categories.perfumes')} */}
                        Perfumes
                      </Link>
                    </h3>
                  </div>
                </div>
                
                <div className="group relative bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                  <div className="aspect-w-3 aspect-h-2 bg-gray-200 group-hover:opacity-75">
                    <Image
                      src="https://via.placeholder.com/600x400?text=Incense"
                      alt="Traditional Incense"
                      width={600}
                      height={400}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      <Link href="/khaliji-fragrance/incense">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {/* {t('sections.fragrance.categories.incense')} */}
                        Incense
                      </Link>
                    </h3>
                  </div>
                </div>
                
                <div className="group relative bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                  <div className="aspect-w-3 aspect-h-2 bg-gray-200 group-hover:opacity-75">
                    <Image
                      src="https://via.placeholder.com/600x400?text=Accessories"
                      alt="Fragrance Accessories"
                      width={600}
                      height={400}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      <Link href="/khaliji-fragrance/accessories">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {/* {t('sections.fragrance.categories.accessories')} */}
                        Accessories
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Similar sections for Khaliji Model and Khaliji Hi-Tech would go here */}
          </div>
        </div>
      </div>
      
      {/* Footer still uses next-intl, needs modification */}
      <Footer />
    </main>
  );
}
