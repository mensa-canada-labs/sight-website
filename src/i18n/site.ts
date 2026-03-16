export type Locale = 'en' | 'fr' | 'es';

export type RouteKey = 'home' | 'program' | 'contacts' | 'plan';

export type NavKey = 'home' | 'program' | 'contacts' | 'plan';

const brandLockupByLocale = {
  en: {
    title: 'Mensa Canada SIGHT',
    tagline: 'Hospitality for travelling Mensans',
  },
  fr: {
    title: 'Mensa Canada SIGHT',
    tagline: 'Accueil des Mensiens en voyage',
  },
  es: {
    title: 'Mensa Canada SIGHT',
    tagline: 'Hospitalidad para Mensanos viajeros',
  },
} as const;

function normalizeBasePath(pathname: string): string {
  if (!pathname || pathname === '/') return '';
  const withLeadingSlash = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return withLeadingSlash.endsWith('/') ? withLeadingSlash.slice(0, -1) : withLeadingSlash;
}

const routes = {
  home: { en: '/', fr: '/fr/', es: '/es/' },
  program: { en: '/program', fr: '/fr/programme', es: '/es/programa' },
  contacts: { en: '/contacts', fr: '/fr/contacts', es: '/es/contactos' },
  plan: { en: '/plan', fr: '/fr/planifier', es: '/es/planificar' },
} as const satisfies Record<RouteKey, Record<Locale, string>>;

const basePath = normalizeBasePath(import.meta.env.BASE_URL ?? '/');

export const navKeys: NavKey[] = ['home', 'program', 'contacts', 'plan'];

export const brandLockup = brandLockupByLocale;

export const locales: Locale[] = ['en', 'fr', 'es'];

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  es: 'Español',
};

export const siteMetadata = {
  en: {
    siteName: brandLockupByLocale.en.title,
    defaultDescription:
      'SIGHT — Service of Information, Guidance and Hospitality to Travellers. Connect with Mensa Canada members during your visit to Canada.',
    localeLabel: 'English',
  },
  fr: {
    siteName: brandLockupByLocale.fr.title,
    defaultDescription:
      'SIGHT — Service d\'Information, d\'Orientation et d\'Hospitalité pour les Voyageurs. Rencontrez des membres de Mensa Canada lors de votre séjour.',
    localeLabel: 'Français',
  },
  es: {
    siteName: brandLockupByLocale.es.title,
    defaultDescription:
      'SIGHT — Servicio de Información, Orientación y Hospitalidad para Viajeros. Conéctese con miembros de Mensa Canada durante su visita.',
    localeLabel: 'Español',
  },
} as const;

export const headerCopy = {
  en: {
    brandTitle: brandLockupByLocale.en.title,
    brandSubtitle: brandLockupByLocale.en.tagline,
    nav: {
      home: 'Home',
      program: 'The Program',
      contacts: 'Contacts',
      plan: 'Plan Your Trip',
    } satisfies Record<NavKey, string>,
    cta: 'Plan Your Trip',
    mobileToggle: 'Toggle menu',
    themeSwitchToDark: 'Dark mode',
    themeSwitchToLight: 'Light mode',
  },
  fr: {
    brandTitle: brandLockupByLocale.fr.title,
    brandSubtitle: brandLockupByLocale.fr.tagline,
    nav: {
      home: 'Accueil',
      program: 'Le programme',
      contacts: 'Contacts',
      plan: 'Planifier',
    } satisfies Record<NavKey, string>,
    cta: 'Planifier votre visite',
    mobileToggle: 'Afficher le menu',
    themeSwitchToDark: 'Mode sombre',
    themeSwitchToLight: 'Mode clair',
  },
  es: {
    brandTitle: brandLockupByLocale.es.title,
    brandSubtitle: brandLockupByLocale.es.tagline,
    nav: {
      home: 'Inicio',
      program: 'El programa',
      contacts: 'Contactos',
      plan: 'Planificar',
    } satisfies Record<NavKey, string>,
    cta: 'Planificar su viaje',
    mobileToggle: 'Alternar menú',
    themeSwitchToDark: 'Modo oscuro',
    themeSwitchToLight: 'Modo claro',
  },
} as const;

export const footerCopy = {
  en: {
    about:
      'SIGHT connects travelling Mensans with local members in Canada. Get insider tips, meet fellow members, and make the most of your visit.',
    quickLinksTitle: 'Quick Links',
    quickLinks: {
      home: 'Home',
      program: 'About SIGHT',
      contacts: 'Regional Contacts',
      plan: 'Plan Your Trip',
    },
    contactTitle: 'Contact',
    mensaLabel: 'Mensa Canada',
    addressLines: ['P.O. Box 1570', 'Kingston, ON K7L 5C8'],
    copyright: 'Mensa Canada SIGHT. All rights reserved.',
    madeWith: 'Made with',
    madeFor: 'for travelling Mensans',
    mensaUrl: 'https://mensa.ca/',
  },
  fr: {
    about:
      'SIGHT met en relation les Mensiens en voyage avec les membres locaux au Canada. Obtenez des conseils, rencontrez d\'autres membres et profitez au maximum de votre visite.',
    quickLinksTitle: 'Liens rapides',
    quickLinks: {
      home: 'Accueil',
      program: 'À propos de SIGHT',
      contacts: 'Contacts régionaux',
      plan: 'Planifier votre visite',
    },
    contactTitle: 'Nous contacter',
    mensaLabel: 'Mensa Canada',
    addressLines: ['C.P. 1570', 'Kingston, ON K7L 5C8'],
    copyright: 'Mensa Canada SIGHT. Tous droits réservés.',
    madeWith: 'Créé avec',
    madeFor: 'pour les Mensiens en voyage',
    mensaUrl: 'https://mensa.ca/fr/',
  },
  es: {
    about:
      'SIGHT conecta a los Mensanos viajeros con los miembros locales en Canadá. Obtenga consejos, conozca a otros miembros y aproveche al máximo su visita.',
    quickLinksTitle: 'Enlaces rápidos',
    quickLinks: {
      home: 'Inicio',
      program: 'Sobre SIGHT',
      contacts: 'Contactos regionales',
      plan: 'Planificar su viaje',
    },
    contactTitle: 'Contacto',
    mensaLabel: 'Mensa Canada',
    addressLines: ['P.O. Box 1570', 'Kingston, ON K7L 5C8'],
    copyright: 'Mensa Canada SIGHT. Todos los derechos reservados.',
    madeWith: 'Hecho con',
    madeFor: 'para Mensanos viajeros',
    mensaUrl: 'https://mensa.ca/',
  },
} as const;

function normalizePath(pathname: string): string {
  if (!pathname) return '/';
  const withLeadingSlash = pathname.startsWith('/') ? pathname : `/${pathname}`;
  if (withLeadingSlash.length > 1 && withLeadingSlash.endsWith('/')) {
    return withLeadingSlash.slice(0, -1);
  }
  return withLeadingSlash;
}

function stripBasePath(pathname: string): string {
  const normalizedPath = normalizePath(pathname);
  if (!basePath) return normalizedPath;
  if (normalizedPath === basePath) return '/';
  if (normalizedPath.startsWith(`${basePath}/`)) {
    return normalizedPath.slice(basePath.length) || '/';
  }
  return normalizedPath;
}

function applyBasePath(pathname: string): string {
  const normalizedPath = normalizePath(pathname);
  if (!basePath) return normalizedPath;
  return normalizedPath === '/' ? `${basePath}/` : `${basePath}${normalizedPath}`;
}

export function getLocalizedPath(locale: Locale, routeKey: RouteKey): string {
  return applyBasePath(routes[routeKey][locale]);
}

export function getAssetPath(assetPath: string): string {
  const withLeadingSlash = assetPath.startsWith('/') ? assetPath : `/${assetPath}`;
  return basePath ? `${basePath}${withLeadingSlash}` : withLeadingSlash;
}

export function getLocaleFromPath(pathname: string): Locale {
  const normalizedPath = stripBasePath(pathname);
  if (normalizedPath === '/fr' || normalizedPath.startsWith('/fr/')) return 'fr';
  if (normalizedPath === '/es' || normalizedPath.startsWith('/es/')) return 'es';
  return 'en';
}

export function getRouteFromPath(pathname: string): RouteKey {
  const normalizedPath = stripBasePath(pathname);
  for (const [routeKey, localizedRoutes] of Object.entries(routes) as [RouteKey, Record<Locale, string>][]) {
    if (
      normalizePath(localizedRoutes.en) === normalizedPath ||
      normalizePath(localizedRoutes.fr) === normalizedPath ||
      normalizePath(localizedRoutes.es) === normalizedPath
    ) {
      return routeKey;
    }
  }
  return 'home';
}

export function getOtherLocales(locale: Locale): Locale[] {
  return locales.filter((l) => l !== locale);
}

export function getAlternatePaths(locale: Locale, routeKey: RouteKey): { locale: Locale; href: string }[] {
  return getOtherLocales(locale).map((l) => ({
    locale: l,
    href: getLocalizedPath(l, routeKey),
  }));
}
