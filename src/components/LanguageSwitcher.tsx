import React from 'react';
import { useTranslations } from '@/hooks/useTranslations';
import { useLocale } from '@/hooks/useLocale';
import Link from 'next/link';

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const { locale, changeLocale } = useLocale();
  const t = useTranslations();

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ar', name: 'العربية', flag: '🇦🇪' }
  ];

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center space-x-2 cursor-pointer group">
        <span className="text-xl">{languages.find(lang => lang.code === locale)?.flag}</span>
        <span>{languages.find(lang => lang.code === locale)?.code.toUpperCase()}</span>
        <svg 
          className="w-4 h-4 transition-transform group-hover:rotate-180" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        
        <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLocale(lang.code as 'fr' | 'en' | 'ar')}
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center space-x-2 ${
                locale === lang.code ? 'bg-gray-100 font-medium' : ''
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
