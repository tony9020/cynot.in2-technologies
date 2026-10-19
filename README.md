# Cynot Technologies — Corporate Website

Marketing website for **Cynot Technologies Private Limited**, an IT solutions provider based in Thrissur, Kerala, India.

> Technology that drives business growth.
> Software, web, design, digital marketing, creative and IT support services, all under one roof and tailored for B2B and B2C businesses.

Content is aligned with the company brochure: 7+ years of combined experience, 8 digital service areas, and end-to-end delivery from build to ongoing support.

## Pages

| Route | Contents |
| --- | --- |
| `/` | Hero, company overview, service groups, stats, selected work, why choose us |
| `/about` | Company overview, benefits of choosing Cynot, milestones, team expertise, leadership |
| `/services` | All 8 service areas (Build & Design 01–04, Grow & Support 05–08) and the 3 pricing models |
| `/technologies` | Engineering capabilities, case studies and technology stack |
| `/portfolio` | Selected projects, filterable by service group |
| `/contact` | Contact details, enquiry form and FAQs |

### Service areas

**Build & Design** — Software Development · Web Design & Development · UI/UX & Graphic Design · Data, Automation & AI

**Grow & Support** — Digital Marketing · Creative & Media Production · IT Support Services · Digital Business Services

### Contact

- Email: support@cynot.in
- Phone: +91 9020 555 800
- Location: Thrissur, Kerala, India

## Development

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run lint     # eslint
```

Stack: React 18 + TypeScript, Vite, Tailwind CSS, React Router, Framer Motion, Lucide icons.

## SEO

The site is fully SEO-optimised for the **cynot.in** domain:

- Per-page `<title>`, meta description, canonical URL and Open Graph/Twitter tags, managed by `src/components/SEO.tsx` (one unique title/description per route; 404 page is `noindex`).
- Structured data (JSON-LD) in `index.html`: `ProfessionalService` organization (name, CIN, address, geo, hours, sameAs, offer catalog) + `WebSite`; `FAQPage` schema on `/contact` matching the visible FAQs.
- `public/robots.txt` and `public/sitemap.xml` (all public routes with `lastmod`).
- Google Analytics 4 (`G-GVC2RHEDV9`) is configured in `index.html`.

After the domain goes live:

1. Add `cynot.in` in the Vercel project settings → Domains, and point DNS:
   - Apex `A` record → `76.76.21.21`
   - `www` `CNAME` → `cname.vercel-dns.com`
2. Verify the site in [Google Search Console](https://search.google.com/search-console) (HTML tag method: add the `<meta name="google-site-verification">` tag to `index.html`), then submit `https://cynot.in/sitemap.xml`.
3. Update GA4 property settings to the `cynot.in` domain and link Search Console.
4. Create a 1200×630 social share image and replace `og:image`/`twitter:image` (`/ss.png`) in `index.html` and `DEFAULT_IMAGE` in `src/components/SEO.tsx` if desired.
