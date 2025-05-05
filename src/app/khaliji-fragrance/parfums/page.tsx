import React from 'react';
import { getProductsByCategory } from '@/data/fragranceProducts';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import ConversionTracker from '@/components/ConversionTracker';

export default function ParfumsPage() {
  // Récupérer tous les parfums
  const parfums = getProductsByCategory('parfums');

  return (
    <ConversionTracker>
      <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
        <h1 className="text-4xl font-bold mb-8">Parfums Orientaux</h1>
        <p className="text-xl mb-8 text-center max-w-3xl">
          Découvrez notre sélection exclusive de parfums orientaux, inspirés par les traditions ancestrales des pays du Golfe. Des fragrances riches et envoûtantes qui vous transporteront au cœur de l'Orient.
        </p>

        <div className="w-full max-w-6xl">
          <div className="flex flex-wrap items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Nos Parfums ({parfums.length})</h2>
            <div className="flex space-x-4">
              <select className="border rounded p-2">
                <option>Trier par popularité</option>
                <option>Prix croissant</option>
                <option>Prix décroissant</option>
                <option>Meilleures notes</option>
              </select>
              <select className="border rounded p-2">
                <option>Tous les parfums</option>
                <option>Pour femmes</option>
                <option>Pour hommes</option>
                <option>Unisexe</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {parfums.map((product) => (
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
                buttonColor="bg-purple-600 hover:bg-purple-700"
              />
            ))}
          </div>
        </div>

        <section className="w-full max-w-5xl my-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Guide des Notes de Parfum Orientales</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow-sm">
              <h3 className="font-bold text-lg mb-3">Notes de Tête</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-amber-500 rounded-full mr-2"></span>
                  <span>Bergamote</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-amber-500 rounded-full mr-2"></span>
                  <span>Safran</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-amber-500 rounded-full mr-2"></span>
                  <span>Cardamome</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-amber-500 rounded-full mr-2"></span>
                  <span>Agrumes</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded shadow-sm">
              <h3 className="font-bold text-lg mb-3">Notes de Cœur</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-rose-500 rounded-full mr-2"></span>
                  <span>Rose de Damas</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-rose-500 rounded-full mr-2"></span>
                  <span>Oud (Bois d'Agar)</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-rose-500 rounded-full mr-2"></span>
                  <span>Jasmin</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-rose-500 rounded-full mr-2"></span>
                  <span>Épices</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded shadow-sm">
              <h3 className="font-bold text-lg mb-3">Notes de Fond</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                  <span>Ambre</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                  <span>Musc</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                  <span>Vanille</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                  <span>Bois de Santal</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="w-full max-w-5xl my-12">
          <h2 className="text-2xl font-bold mb-6">Nos Marques Partenaires</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Lattafa', 'Swiss Arabian', 'Rasasi', 'Ard Al Zaafaran'].map((brand, index) => (
              <div key={index} className="h-24 bg-white flex items-center justify-center border rounded shadow-sm hover:shadow-md transition-shadow">
                <span className="text-gray-700 font-semibold">{brand}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full max-w-5xl my-12 bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Comment Choisir son Parfum Oriental ?</h2>
          <p className="mb-4">
            Les parfums orientaux sont connus pour leur richesse et leur complexité. Voici quelques conseils pour choisir celui qui vous conviendra le mieux :
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Tenez compte de la saison : les parfums plus légers pour l'été, plus intenses pour l'hiver</li>
            <li>Considérez l'occasion : certaines fragrances conviennent mieux aux soirées, d'autres au quotidien</li>
            <li>Testez sur votre peau : les parfums réagissent différemment selon la chimie de chaque personne</li>
            <li>Laissez le parfum évoluer : attendez quelques heures pour apprécier toutes les notes</li>
          </ul>
          <p>
            N'hésitez pas à explorer notre sélection pour trouver la fragrance qui deviendra votre signature olfactive.
          </p>
        </section>

        <div className="w-full max-w-5xl my-8 flex justify-between">
          <Link href="/khaliji-fragrance" className="text-purple-600 hover:underline">
            ← Retour à Khaliji Fragrance
          </Link>
          <Link href="/khaliji-fragrance/encens" className="text-purple-600 hover:underline">
            Découvrir nos Encens et Bakhoor →
          </Link>
        </div>
      </main>
    </ConversionTracker>
  );
}
