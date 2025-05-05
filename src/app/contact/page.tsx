import Link from 'next/link';

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
      <h1 className="text-4xl font-bold mb-8">Contactez-nous</h1>
      
      <div className="w-full max-w-4xl">
        <section className="mb-12">
          <p className="text-lg mb-8 text-center">
            Vous avez des questions sur nos recommandations ou besoin d'informations supplémentaires ? 
            Notre équipe est à votre disposition pour vous aider.
          </p>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Formulaire de Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="votre@email.com"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
              <select 
                id="subject" 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Sélectionnez un sujet</option>
                <option value="khaliji-model">Question sur Khaliji Model</option>
                <option value="khaliji-fragrance">Question sur Khaliji Fragrance</option>
                <option value="hi-tech">Question sur Hi-Tech</option>
                <option value="partnership">Proposition de partenariat</option>
                <option value="other">Autre demande</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea 
                id="message" 
                rows={6} 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Détaillez votre demande ici..."
              ></textarea>
            </div>
            
            <div className="mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <span className="ml-2 text-sm text-gray-600">
                  J'accepte de recevoir des informations et offres personnalisées de GulfEliteMarket
                </span>
              </label>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Envoyer le message
            </button>
          </div>
        </section>

        <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 border rounded-lg">
            <h3 className="font-bold text-xl mb-4">Email</h3>
            <p className="mb-2">Pour toute demande générale :</p>
            <a href="mailto:contact@gulfelitemarket.com" className="text-blue-600 hover:underline">
              contact@gulfelitemarket.com
            </a>
          </div>
          
          <div className="text-center p-6 border rounded-lg">
            <h3 className="font-bold text-xl mb-4">Réseaux Sociaux</h3>
            <p className="mb-2">Suivez-nous pour les dernières actualités :</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">Instagram</a>
              <a href="#" className="text-blue-600 hover:text-blue-800">Facebook</a>
              <a href="#" className="text-blue-600 hover:text-blue-800">Twitter</a>
            </div>
          </div>
          
          <div className="text-center p-6 border rounded-lg">
            <h3 className="font-bold text-xl mb-4">Partenariats</h3>
            <p className="mb-2">Pour les opportunités de collaboration :</p>
            <a href="mailto:partners@gulfelitemarket.com" className="text-blue-600 hover:underline">
              partners@gulfelitemarket.com
            </a>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Foire Aux Questions</h2>
          
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Comment fonctionnent vos recommandations ?</h3>
              <p>
                Nous testons et analysons rigoureusement chaque produit avant de le recommander. Nos experts sélectionnent uniquement les meilleures offres disponibles dans les pays du Golfe, en tenant compte de la qualité, du prix et de l'adéquation culturelle.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Livrez-vous dans tous les pays du Golfe ?</h3>
              <p>
                GulfEliteMarket est un site de recommandations qui vous redirige vers les vendeurs officiels. La disponibilité des livraisons dépend donc de chaque marchand partenaire, mais nous privilégions ceux qui livrent dans l'ensemble des pays du Golfe.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Comment puis-je devenir partenaire ?</h3>
              <p>
                Si vous êtes une marque ou un détaillant opérant dans les pays du Golfe et souhaitez collaborer avec nous, veuillez nous contacter à partners@gulfelitemarket.com avec les détails de votre entreprise et de vos produits.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Proposez-vous des codes promo exclusifs ?</h3>
              <p>
                Oui, nous négocions régulièrement des offres et codes promo exclusifs avec nos partenaires. Inscrivez-vous à notre newsletter pour être informé des dernières promotions disponibles.
              </p>
            </div>
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
