// import createMiddleware from 'next-intl/middleware';
// import {locales, defaultLocale} from './lib/config';

// Temporarily disable next-intl middleware
export default function middleware() {
  // No-op
}

// export default createMiddleware({
//   // A list of all locales that are supported
//   locales: locales,
//   
//   // Used when no locale matches
//   defaultLocale: defaultLocale,
//   
//   // Detect locale based on user preferences and geography
//   localeDetection: true,
//   
//   // Locale prefix strategy
//   localePrefix: 'as-needed'
// });

export const config = {
  // Match all pathnames except for
  // - files with extensions (e.g. favicon.ico)
  // - api routes
  // - _next paths (Next.js internals)
  // Temporarily disable matcher
  // matcher: ['/((?!api|_next|.*\\..*).*)']
  matcher: [] // Empty matcher to effectively disable
};
