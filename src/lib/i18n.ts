// Fichier de configuration pour l'internationalisation
import { createI18n } from 'next-i18n-router';

// Définir les langues supportées
export const locales = ['fr', 'en', 'ar'] as const;
export type Locale = (typeof locales)[number];

// Définir la langue par défaut
export const defaultLocale: Locale = 'fr';

// Créer l'instance i18n
export const i18n = createI18n({
  locales,
  defaultLocale,
  // Utiliser les préférences de langue du navigateur comme fallback
  useBrowserDefault: true,
  // Rediriger automatiquement vers la langue préférée
  autoRedirect: true
});

// Fonction pour obtenir la direction du texte en fonction de la langue
export const getTextDirection = (locale: Locale): 'ltr' | 'rtl' => {
  return locale === 'ar' ? 'rtl' : 'ltr';
};

// Fonction pour obtenir la classe CSS en fonction de la langue
export const getLanguageClass = (locale: Locale): string => {
  return locale === 'ar' ? 'font-arabic' : 'font-sans';
};
