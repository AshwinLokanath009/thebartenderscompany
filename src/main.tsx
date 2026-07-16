import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const siteName = 'The Bartenders Company';
const siteDescription =
  'Professional bartender services for weddings, corporate events, birthday parties, and private celebrations in Bengaluru and beyond.';
const siteImagePath = '/og-image.svg';

function updateHeadTag(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement | HTMLLinkElement | HTMLScriptElement>(selector);

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
    const canonicalUrl = window.location.origin + window.location.pathname;

    document.title = `${siteName} | Premium Bartender Services`;

    updateHeadTag('meta[name="description"]', {
      name: 'description',
      content: siteDescription,
    });
    updateHeadTag('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    });
    updateHeadTag('link[rel="canonical"]', {
      rel: 'canonical',
      href: canonicalUrl,
    });
    updateHeadTag('meta[property="og:title"]', {
      property: 'og:title',
      content: `${siteName} | Premium Bartender Services`,
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
    updateHeadTag('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: siteName,
    });
    updateHeadTag('meta[property="og:image"]', {
      property: 'og:image',
      content: `${window.location.origin}${siteImagePath}`,
    });
    updateHeadTag('meta[property="og:image:alt"]', {
      property: 'og:image:alt',
      content: `${siteName} branding preview`,
    });
    updateHeadTag('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    updateHeadTag('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: `${siteName} | Premium Bartender Services`,
    });
    updateHeadTag('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: siteDescription,
    });
    updateHeadTag('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: `${window.location.origin}${siteImagePath}`,
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
      description: siteDescription,
      url: canonicalUrl,
      image: `${window.location.origin}${siteImagePath}`,
      telephone: '+91 96639 29391',
      email: 'ashwinlokanath009@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        addressCountry: 'IN',
      },
      areaServed: ['Bengaluru', 'Karnataka', 'India'],
      serviceType: [
        'Wedding Bartending',
        'Corporate Event Bartending',
        'Birthday Party Bartending',
        'Mobile Bar Hire',
        'Cocktail Catering',
      ],
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
