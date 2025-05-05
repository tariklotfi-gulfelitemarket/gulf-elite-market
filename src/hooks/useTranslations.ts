import { useState, useEffect } from 'react';
import { Locale } from '@/lib/i18n';

// Hook pour utiliser les traductions
export const useTranslations = () => {
  const [translations, setTranslations] = useState<any>({});
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Récupérer la locale depuis localStorage ou utiliser la locale par défaut
  const getLocale = (): Locale => {
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('locale') as Locale;
      return savedLocale || 'fr';
    }
    return 'fr';
  };
  
  const locale = getLocale();

  useEffect(() => {
    // Charger les traductions depuis le fichier JSON
    const loadTranslations = async () => {
      try {
        const response = await fetch('/locales/translations.json');
        const data = await response.json();
        setTranslations(data[locale] || data.fr);
        setIsLoaded(true);
      } catch (error) {
        console.error('Erreur lors du chargement des traductions:', error);
        setTranslations({});
        setIsLoaded(true);
      }
    };

    loadTranslations();
  }, [locale]);

  // Fonction pour obtenir une traduction par sa clé
  const t = (key: string, defaultValue: string = '') => {
    if (!isLoaded) return defaultValue;
    
    // Gestion des clés imbriquées (ex: "common.home")
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return defaultValue || key;
      }
    }
    
    return value || defaultValue || key;
  };

  return t;
};
