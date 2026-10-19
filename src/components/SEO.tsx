import { useEffect } from 'react';

const SITE_URL = 'https://cynot.in';
const DEFAULT_IMAGE = `${SITE_URL}/ss.png`;
const SITE_NAME = 'Cynot Technologies';

interface SEOProps {
  /** Page title. Home passes the full title; other pages get " | Cynot Technologies" appended. */
  title: string;
  description: string;
  /** Route path, e.g. '/about'. Use '/' for home. */
  path: string;
  image?: string;
  type?: string;
  /** Set true for 404 and other non-indexable pages. */
  noindex?: boolean;
  /** Set false to skip the canonical link (e.g. 404 page). */
  canonical?: boolean;
}

const SEO = ({ title, description, path, image = DEFAULT_IMAGE, type = 'website', noindex = false, canonical = true }: SEOProps) => {
  const fullTitle = path === '/' ? title : `${title} | ${SITE_NAME}`;
  const url = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;

  useEffect(() => {
    const setMeta = (selector: string, attr: 'name' | 'property', key: string, value: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    document.title = fullTitle;

    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[name="robots"]', 'name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1');

    setMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', url);
    setMeta('meta[property="og:type"]', 'property', 'og:type', type);
    setMeta('meta[property="og:image"]', 'property', 'og:image', image);

    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', image);

    if (canonical) {
      let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', url);
    }
  }, [fullTitle, description, url, image, type, noindex, canonical]);

  return <></>;
};

// eslint-disable-next-line react-refresh/only-export-components -- component returns null-equivalent fragment; file exports only this component
export default SEO;
