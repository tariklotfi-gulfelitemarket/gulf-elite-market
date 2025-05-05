
// MinimalClientComponent.tsx - Static version without next-intl

// No longer a client component necessarily, but keep directive for now if needed elsewhere
// We might remove 'use client' if no client hooks are used at all.
// For now, let's keep it simple and just remove next-intl.
// import { useTranslations } from 'next-intl'; 

export default function MinimalClientComponent() {
  // const t = useTranslations('site'); // Removed

  return (
    <div>
      <h2>Minimal Client Component (Static)</h2>
      {/* <p>Translated text: {t('name')}</p> */}
      <p>Static text: Gulf Elite Market</p> 
    </div>
  );
}
