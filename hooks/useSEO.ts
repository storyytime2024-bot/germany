import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  structuredData?: object;
}

const BASE_URL = 'https://hakunatv.digital';

function useSEO({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogType = 'website',
  structuredData,
}: SEOProps) {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);

    // Meta keywords
    if (keywords) {
      let metaKw = document.querySelector('meta[name="keywords"]');
      if (metaKw) {
        metaKw.setAttribute('content', keywords);
      } else {
        metaKw = document.createElement('meta');
        metaKw.setAttribute('name', 'keywords');
        metaKw.setAttribute('content', keywords);
        document.head.appendChild(metaKw);
      }
    }

    // Canonical
    const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : undefined;
    if (canonicalUrl) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonicalUrl);
    }

    // Open Graph
    const setOG = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (tag) {
        tag.setAttribute('content', content);
      } else {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        tag.setAttribute('content', content);
        document.head.appendChild(tag);
      }
    };

    setOG('og:title', ogTitle || title);
    setOG('og:description', ogDescription || description);
    setOG('og:type', ogType);
    if (canonicalUrl) setOG('og:url', canonicalUrl);

    // Structured Data (JSON-LD)
    if (structuredData) {
      let script = document.querySelector('#structured-data') as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.id = 'structured-data';
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

    // Cleanup
    return () => {
      const script = document.querySelector('#structured-data');
      if (script) script.remove();
    };
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogType, structuredData]);
}

export default useSEO;
