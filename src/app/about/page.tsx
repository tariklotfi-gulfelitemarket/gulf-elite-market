import Link from 'next/link';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
      <h1 className="text-4xl font-bold mb-8">À Propos de GulfEliteMarket</h1>
      
      <div className="w-full max-w-4xl">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Notre Mission</h2>
          <p className="text-lg mb-4">
            GulfEliteMarket a été créé avec une vision claire : offrir aux habitants des pays du Golfe (Oman, Émirats Arabes Unis, Koweït et Arabie Saoudite) un accès privilégié aux meilleurs produits de mode, de beauté et de technologie, soigneusement sélectionnés pour répondre aux goûts et aux besoins spécifiques de cette région.
          </p>
          <p className="text-lg">
            Notre mission est de vous guider vers les meilleures offres disponibles, en vous proposant uniquement des produits de qualité, adaptés aux spécificités culturelles et aux préférences locales.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg">
              <h3 className="font-bold text-xl mb-2">Authenticité</h3>
              <p>Nous garantissons l'authenticité de tous les produits que nous recommandons, en travaillant uniquement avec des marques et des vendeurs de confiance.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-bold text-xl mb-2">Pertinence Culturelle</h3>
              <p>Nous comprenons les nuances culturelles des pays du Golfe et sélectionnons des produits qui respectent et célèbrent ces traditions.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-bold text-xl mb-2">Excellence</h3>
              <p>Nous visons l'excellence dans chaque aspect de notre service, de la sélection des produits à la qualité de nos recommandations.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Nos Marques</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg">
              <h3 className="font-bold text-xl mb-2 text-blue-600">Khaliji Model</h3>
              <p className="mb-4">Notre sélection de mode pour hommes et femmes, alliant élégance traditionnelle et tendances contemporaines.</p>
              <Link href="/khaliji-model" className="text-blue-600 hover:underline">Découvrir →</Link>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-bold text-xl mb-2 text-purple-600">Khaliji Fragrance</h3>
              <p className="mb-4">Des parfums et produits de beauté inspirés par les traditions ancestrales du Golfe et adaptés aux goûts modernes.</p>
              <Link href="/khaliji-fragrance" className="text-purple-600 hover:underline">Découvrir →</Link>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-bold text-xl mb-2 text-green-600">Hi-Tech</h3>
              <p className="mb-4">Les dernières innovations technologiques et gadgets, sélectionnés pour leur pertinence sur le marché du Golfe.</p>
              <Link href="/hi-tech" className="text-green-600 hover:underline">Découvrir →</Link>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Notre Approche</h2>
          <p className="text-lg mb-4">
            Chez GulfEliteMarket, nous ne sommes pas simplement un site de recommandations. Nous sommes des passionnés qui testent, comparent et analysent chaque produit avant de le recommander.
          </p>
          <p className="text-lg mb-4">
            Notre équipe d'experts suit de près les tendances du marché dans les pays du Golfe et entretient des relations privilégiées avec les meilleures marques et détaillants de la région.
          </p>
          <p className="text-lg">
            Cette approche nous permet de vous offrir non seulement les meilleurs produits, mais aussi les meilleures offres disponibles, souvent avec des avantages exclusifs.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Notre Engagement</h2>
          <p className="text-lg mb-4">
            Nous nous engageons à vous offrir :
          </p>
          <ul className="list-disc pl-6 mb-4 text-lg">
            <li className="mb-2">Des recommandations honnêtes et transparentes</li>
            <li className="mb-2">Une sélection de produits authentiques et de qualité</li>
            <li className="mb-2">Des informations détaillées pour vous aider à faire les meilleurs choix</li>
            <li className="mb-2">Un contenu régulièrement mis à jour pour refléter les dernières tendances</li>
            <li>Un service client réactif pour répondre à toutes vos questions</li>
          </ul>
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
