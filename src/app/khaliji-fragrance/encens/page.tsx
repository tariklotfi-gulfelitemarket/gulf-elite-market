import React from 'react';
import { getProductsByCategory } from '@/data/fragranceProducts';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import ConversionTracker from '@/components/ConversionTracker';

export default function EncensPage() {
  // Récupérer tous les produits d'encens et accessoires
  const encens = getProductsByCategory('encens');
  const accessoires = getProductsByCategory('accessoires');
  const allProducts = [...encens, ...accessoires];

  return (
    <ConversionTracker>
      <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
        <h1 className="text-4xl font-bold mb-8">Encens & Bakhoor</h1>
        <p className="text-xl mb-8 text-center max-w-3xl">
          Découvrez l'art ancestral de parfumer votre intérieur avec nos encens traditionnels et bakhoor des pays du Golfe. Des fragrances authentiques qui créent une atmosphère unique et envoûtante.
        </p>

        <div className="w-full max-w-6xl">
          <div className="flex flex-wrap items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Nos Produits ({allProducts.length})</h2>
            <div className="flex space-x-4">
              <select className="border rounded p-2">
                <option>Trier par popularité</option>
                <option>Prix croissant</option>
                <option>Prix décroissant</option>
                <option>Meilleures notes</option>
              </select>
              <select className="border rounded p-2">
                <option>Tous les produits</option>
                <option>Encens</option>
                <option>Accessoires</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                platform={product.platform}
                category={product.category}
                imageUrl={product.imageUrl}
                discountPercentage={product.discountPercentage}
                rating={product.rating}
                buttonColor="bg-amber-600 hover:bg-amber-700"
              />
            ))}
          </div>
        </div>

        <section className="w-full max-w-5xl my-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">L'Art du Bakhoor</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                Le bakhoor est un encens traditionnel des pays du Golfe, composé de copeaux de bois aromatiques, souvent du bois d'agar (oud), imprégnés d'huiles essentielles et de résines parfumées.
              </p>
              <p className="mb-4">
                Utilisé depuis des siècles pour parfumer les maisons et les vêtements, le bakhoor fait partie intégrante de l'hospitalité arabe. Il est traditionnellement brûlé dans un mabkhara (brûleur d'encens) et présenté aux invités.
              </p>
              <p>
                Nos bakhoors sont fabriqués selon des méthodes traditionnelles, avec des ingrédients de la plus haute qualité pour vous offrir une expérience olfactive authentique.
              </p>
            </div>
            <div className="h-64 bg-gradient-to-r from-amber-300 to-amber-500 flex items-center justify-center rounded-lg">
              <span className="text-white text-xl font-semibold">Tradition du Bakhoor</span>
            </div>
          </div>
        </section>

        <section className="w-full max-w-5xl my-12">
          <h2 className="text-2xl font-bold mb-6">Comment Utiliser le Bakhoor</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold mb-4">1</div>
              <h3 className="font-bold text-lg mb-2">Préparation</h3>
              <p>Placez un morceau de charbon spécial encens dans votre brûleur et allumez-le jusqu'à ce qu'il devienne rouge.</p>
            </div>
            <div className="border rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold mb-4">2</div>
              <h3 className="font-bold text-lg mb-2">Disposition</h3>
              <p>Une fois le charbon incandescent, placez délicatement un ou deux morceaux de bakhoor sur le dessus.</p>
            </div>
            <div className="border rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold mb-4">3</div>
              <h3 className="font-bold text-lg mb-2">Diffusion</h3>
              <p>Laissez le bakhoor se consumer lentement, diffusant son parfum envoûtant dans toute la pièce.</p>
            </div>
          </div>
        </section>

        <section className="w-full max-w-5xl my-12 bg-gradient-to-r from-amber-100 to-orange-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Les Bienfaits du Bakhoor</h2>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Crée une atmosphère relaxante et apaisante</li>
            <li>Parfume naturellement votre intérieur pendant plusieurs heures</li>
            <li>Élimine les odeurs indésirables</li>
            <li>Fait partie des rituels de méditation et de prière dans de nombreuses cultures</li>
            <li>Ajoute une touche d'élégance orientale à votre décoration</li>
          </ul>
          <p>
            Découvrez notre sélection de bakhoors et brûleurs d'encens pour transformer l'ambiance de votre maison.
          </p>
        </section>

        <div className="w-full max-w-5xl my-8 flex justify-between">
          <Link href="/khaliji-fragrance/parfums" className="text-amber-600 hover:underline">
            ← Découvrir nos Parfums
          </Link>
          <Link href="/khaliji-fragrance" className="text-amber-600 hover:underline">
            Retour à Khaliji Fragrance
          </Link>
        </div>
      </main>
    </ConversionTracker>
  );
}
