import { useEffect, useState } from 'react';
import { Locale, locales } from '@/lib/i18n';

// Hook pour gérer la locale actuelle
export const useLocale = () => {
  const [locale, setLocale] = useState<Locale>('fr');

  useEffect(() => {
    // Récupérer la locale depuis localStorage ou utiliser la locale par défaut
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && locales.includes(savedLocale)) {
      setLocale(savedLocale);
      document.documentElement.lang = savedLocale;
      document.documentElement.dir = savedLocale === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.classList.toggle('font-arabic', savedLocale === 'ar');
    }
  }, []);

  const changeLocale = (newLocale: Locale) => {
    if (locales.includes(newLocale)) {
      setLocale(newLocale);
      localStorage.setItem('locale', newLocale);
      document.documentElement.lang = newLocale;
      document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.classList.toggle('font-arabic', newLocale === 'ar');
      
      // Recharger la page pour appliquer les changements
      window.location.reload();
    }
  };

  return { locale, changeLocale };
};
