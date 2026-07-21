import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const siteName = 'The Bartenders Company';
const siteUrl = 'https://thebartenderscompany.com';
const siteLocale = 'en_IN';
const siteRegion = 'IN-KA';
const siteCoordinates = {
  latitude: 12.9716,
  longitude: 77.5946,
};
const siteDescription =
  'Bengaluru and Bangalore bartender services for weddings, corporate events, birthday parties, and private celebrations across Karnataka.';
const siteImagePath = '/og-image.svg';

function updateHeadTag(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLElement>(selector);

  if (!element) {
    const tagName = selector.startsWith('link') ? 'link' : selector.startsWith('script') ? 'script' : 'meta';
    element = document.createElement(tagName);
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element!.setAttribute(key, value);
  });
}

function SeoBootstrap() {
  useEffect(() => {
    const isProductionHost =
      window.location.hostname === 'thebartenderscompany.com' ||
      window.location.hostname.endsWith('.thebartenderscompany.com');
    const siteBaseUrl = isProductionHost ? siteUrl : window.location.origin;
    const canonicalUrl = `${siteBaseUrl}${window.location.pathname}${window.location.search}`;
    const imageUrl = `${siteBaseUrl}${siteImagePath}`;

    document.documentElement.lang = siteLocale;
    document.title = `${siteName} | Bangalore Bartender Services`;

    updateHeadTag('meta[name="description"]', {
      name: 'description',
      content: siteDescription,
    });
    updateHeadTag('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    });
    updateHeadTag('meta[name="geo.region"]', {
      name: 'geo.region',
      content: siteRegion,
    });
    updateHeadTag('meta[name="geo.placename"]', {
      name: 'geo.placename',
      content: 'Bengaluru, Bangalore, Karnataka, India',
    });
    updateHeadTag('meta[name="geo.position"]', {
      name: 'geo.position',
      content: `${siteCoordinates.latitude};${siteCoordinates.longitude}`,
    });
    updateHeadTag('meta[name="ICBM"]', {
      name: 'ICBM',
      content: `${siteCoordinates.latitude}, ${siteCoordinates.longitude}`,
    });
    updateHeadTag('link[rel="canonical"]', {
      rel: 'canonical',
      href: canonicalUrl,
    });
    updateHeadTag('meta[property="og:title"]', {
      property: 'og:title',
      content: `${siteName} | Bangalore Bartender Services`,
    });
    updateHeadTag('meta[property="og:description"]', {
      property: 'og:description',
      content: siteDescription,
    });
    updateHeadTag('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    });
    updateHeadTag('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl,
    });
    updateHeadTag('meta[property="og:locale"]', {
      property: 'og:locale',
      content: siteLocale,
    });
    updateHeadTag('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: siteName,
    });
    updateHeadTag('meta[property="og:image"]', {
      property: 'og:image',
      content: imageUrl,
    });
    updateHeadTag('meta[property="og:image:alt"]', {
      property: 'og:image:alt',
      content: `${siteName} in Bengaluru, India`,
    });
    updateHeadTag('meta[property="og:image:width"]', {
      property: 'og:image:width',
      content: '1200',
    });
    updateHeadTag('meta[property="og:image:height"]', {
      property: 'og:image:height',
      content: '630',
    });
    updateHeadTag('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    updateHeadTag('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: `${siteName} | Bangalore Bartender Services`,
    });
    updateHeadTag('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: siteDescription,
    });
    updateHeadTag('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: imageUrl,
    });

    const schemaId = 'site-structured-data';
    let schemaScript = document.getElementById(schemaId) as HTMLScriptElement | null;

    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = schemaId;
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    schemaScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: siteName,
      alternateName: 'The Bartenders Company Bangalore',
      description: siteDescription,
      url: canonicalUrl,
      image: imageUrl,
      telephone: '+91 91486 24249',
      email: 'ashwinlokanath009@gmail.com',
      priceRange: 'Custom quotes',
      currenciesAccepted: 'INR',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: siteCoordinates.latitude,
        longitude: siteCoordinates.longitude,
      },
      areaServed: ['Bengaluru', 'Karnataka', 'India'],
      serviceType: [
        'Wedding Bartending',
        'Corporate Event Bartending',
        'Birthday Party Bartending',
        'Mobile Bar Hire',
        'Cocktail Catering',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91 91486 24249',
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['en', 'hi'],
      },
    });
  }, []);

  return null;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SeoBootstrap />
    <App />
  </StrictMode>
);
