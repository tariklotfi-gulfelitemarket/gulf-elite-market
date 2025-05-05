import Link from 'next/link';

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
      <h1 className="text-4xl font-bold mb-8">Blog GulfEliteMarket</h1>
      <p className="text-xl mb-8 text-center max-w-3xl">
        Découvrez nos articles, guides et conseils pour vous aider à faire les meilleurs choix dans les domaines de la mode, de la beauté et de la technologie dans les pays du Golfe.
      </p>

      <div className="w-full max-w-6xl">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Articles à la Une</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-lg">Image Article</span>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Khaliji Model</span>
                  <span className="text-gray-500 text-sm ml-2">12 Avril 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Tendances Mode 2025 dans les Pays du Golfe</h3>
                <p className="text-gray-600 mb-4">
                  Découvrez les tendances qui façonnent la mode dans les pays du Golfe cette année, entre tradition et modernité...
                </p>
                <Link href="/blog/tendances-mode-2025" className="text-blue-600 hover:underline">
                  Lire la suite →
                </Link>
              </div>
            </div>
            
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-lg">Image Article</span>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">Khaliji Fragrance</span>
                  <span className="text-gray-500 text-sm ml-2">8 Avril 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Les Secrets de Beauté des Femmes du Golfe</h3>
                <p className="text-gray-600 mb-4">
                  Plongez dans les rituels de beauté ancestraux qui font la réputation des femmes du Moyen-Orient...
                </p>
                <Link href="/blog/secrets-beaute-golfe" className="text-purple-600 hover:underline">
                  Lire la suite →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Derniers Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="border rounded-lg overflow-hidden shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Image Article {item}</span>
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <span className={`${
                      item % 3 === 0 ? "bg-green-100 text-green-800" : 
                      item % 3 === 1 ? "bg-blue-100 text-blue-800" : 
                      "bg-purple-100 text-purple-800"
                    } text-xs font-medium px-2.5 py-0.5 rounded`}>
                      {item % 3 === 0 ? "Hi-Tech" : 
                       item % 3 === 1 ? "Khaliji Model" : 
                       "Khaliji Fragrance"}
                    </span>
                    <span className="text-gray-500 text-sm ml-2">Avril 2025</span>
                  </div>
                  <h3 className="font-bold mb-2">Titre de l'article {item}</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Résumé court de l'article avec quelques détails intéressants pour attirer l'attention...
                  </p>
                  <Link 
                    href={`/blog/article-${item}`} 
                    className={`${
                      item % 3 === 0 ? "text-green-600" : 
                      item % 3 === 1 ? "text-blue-600" : 
                      "text-purple-600"
                    } hover:underline text-sm`}
                  >
                    Lire la suite →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Guides d'Achat</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg bg-gray-50">
              <h3 className="font-bold text-xl mb-3">Comment Choisir son Parfum Oriental</h3>
              <p className="text-gray-600 mb-4">
                Guide complet pour sélectionner le parfum oriental qui correspond à votre personnalité et vos préférences.
              </p>
              <Link href="/blog/choisir-parfum-oriental" className="text-purple-600 hover:underline">
                Consulter le guide →
              </Link>
            </div>
            
            <div className="p-6 border rounded-lg bg-gray-50">
              <h3 className="font-bold text-xl mb-3">Top 10 des Smartphones 2025</h3>
              <p className="text-gray-600 mb-4">
                Comparatif détaillé des meilleurs smartphones disponibles dans les pays du Golfe cette année.
              </p>
              <Link href="/blog/top-smartphones-2025" className="text-green-600 hover:underline">
                Consulter le guide →
              </Link>
            </div>
            
            <div className="p-6 border rounded-lg bg-gray-50">
              <h3 className="font-bold text-xl mb-3">Comment Associer Tradition et Modernité</h3>
              <p className="text-gray-600 mb-4">
                Guide pratique pour créer un style vestimentaire qui respecte les traditions tout en étant contemporain.
              </p>
              <Link href="/blog/tradition-modernite" className="text-blue-600 hover:underline">
                Consulter le guide →
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Catégories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/blog/category/mode" className="p-4 border rounded-lg text-center hover:bg-blue-50 transition duration-300">
              <span className="font-bold text-blue-600">Mode</span>
            </Link>
            <Link href="/blog/category/beaute" className="p-4 border rounded-lg text-center hover:bg-purple-50 transition duration-300">
              <span className="font-bold text-purple-600">Beauté & Parfums</span>
            </Link>
            <Link href="/blog/category/technologie" className="p-4 border rounded-lg text-center hover:bg-green-50 transition duration-300">
              <span className="font-bold text-green-600">Technologie</span>
            </Link>
            <Link href="/blog/category/lifestyle" className="p-4 border rounded-lg text-center hover:bg-yellow-50 transition duration-300">
              <span className="font-bold text-yellow-600">Lifestyle</span>
            </Link>
          </div>
        </section>

        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Abonnez-vous à Notre Newsletter</h2>
          <p className="mb-6">
            Recevez nos derniers articles, guides d'achat et offres exclusives directement dans votre boîte mail.
          </p>
          <div className="flex flex-col md:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Votre adresse email" 
              className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
              S'abonner
            </button>
          </div>
        </section>

        <div className="w-full my-8">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
