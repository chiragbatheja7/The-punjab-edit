# The Punjab Edit — React SEO blog starter

A small, server-rendered React blog with a homepage and five individual articles. It uses **Next.js App Router**, React Server Components and build-time generation for the known article routes. There is no database, CMS, external API, login system or API route.

## What is included

- Homepage listing five articles with title, description and a link to each article route.
- Five full article pages at `/blog/[slug]`.
- Server-rendered HTML: article text and links are present in the HTML response, not injected after a browser-only JavaScript fetch.
- Per-page title, description, canonical URL and Open Graph metadata.
- `sitemap.xml` generated from the homepage and article list.
- `robots.txt` generated with a sitemap reference.
- `public/llms.txt` as an optional AI-crawler content guide.
- Blog and BlogPosting JSON-LD structured data.
- Responsive editorial styling and semantic HTML.

## 1. Set your domain before deployment

Edit `lib/site.ts` and replace `https://your-domain.com` with your real HTTPS domain. Also update the three example URLs in `public/llms.txt`.

Alternatively, set this environment variable in your deployment dashboard:

`NEXT_PUBLIC_SITE_URL=https://www.your-real-domain.com`

Use one canonical version of your domain (www or non-www), and configure the other version to redirect to it.

## 2. Run locally

Requirements: Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Check the production build:

```bash
npm run build
npm start
```

## 3. Deploy

### Vercel (simplest for Next.js)
1. Push this project to a GitHub repository.
2. Import the repository in Vercel.
3. Add `NEXT_PUBLIC_SITE_URL` with your real domain.
4. Build command: `npm run build` (usually detected automatically).
5. Deploy and attach your custom domain.

### Render
Create a **Web Service** from the repository:
- Build command: `npm install && npm run build`
- Start command: `npm start`
- Add `NEXT_PUBLIC_SITE_URL` as an environment variable.
- Use a Node runtime compatible with Node 20.9+.

### Netlify
Use Netlify's current Next.js runtime/plugin support and follow its Next.js deployment preset. Set the same environment variable. Do not configure this as a plain static-only export unless you intentionally change the rendering/deployment strategy.

## 4. Verify the actual HTML and SEO files

After deployment, replace the domain below with yours:

```bash
curl -L https://www.your-real-domain.com/
curl -L https://www.your-real-domain.com/blog/weekend-cycling-routes-chandigarh
curl -L https://www.your-real-domain.com/sitemap.xml
curl -L https://www.your-real-domain.com/robots.txt
curl -L https://www.your-real-domain.com/llms.txt
```

In the homepage and article HTML, confirm that the article titles, descriptions and article body text appear in the response. A page that only contains an empty root element and relies on client JavaScript to fetch all content is not the intended result here.

Also test:
- Each article URL returns HTTP 200.
- Unknown article URLs return 404.
- Each page has a unique `<title>`, meta description and canonical URL.
- The sitemap contains the homepage and all five article URLs.
- `robots.txt` does not block the homepage or blog paths.
- The canonical domain redirects consistently to your preferred version.
- Mobile usability, HTTPS and Core Web Vitals are healthy.

## 5. Google Search Console checklist

1. Add the production domain as a **Domain property** in Search Console and verify ownership using the DNS TXT record Google provides. Do not copy a placeholder verification token from a tutorial.
2. Open **Sitemaps** and submit `https://www.your-real-domain.com/sitemap.xml`.
3. Use **URL Inspection** on the homepage and each of the five article URLs. Run **Test Live URL**, then request indexing where appropriate.
4. After Google has crawled the pages, inspect **Page indexing** and the sitemap report for discovered, indexed, excluded or error URLs.
5. Use Google's Rich Results Test to validate BlogPosting structured data. Structured data makes a page eligible for certain search features; it does not guarantee a rich result or a ranking.
6. Check Search Console again over the following days and weeks. Crawling and indexing are not immediate and cannot be guaranteed.

## Important SEO reality

- A sitemap helps search engines discover URLs; it does not guarantee indexing or ranking.
- `llms.txt` is an emerging, optional convention. It is **not** a Google ranking factor and does not replace `robots.txt`, sitemap.xml, useful HTML content or structured data.
- Google can render JavaScript, but server-rendered HTML makes the important content directly available and easier to inspect.
- Five articles are enough to validate the technical setup, not to establish topical authority. Expand only with genuinely useful, original articles backed by experience and reliable sources.
- Do not publish fabricated local recommendations, fake author credentials, keyword-stuffed pages or thin AI-generated articles. Add real author details, editorial review, sources and first-hand local insight before publishing.
- Search rankings depend on relevance, quality, competition, links, site experience and many other factors. No implementation can promise a ranking.

## Editing the articles

All article content lives in `lib/posts.ts`. Add a new object to the `posts` array with a unique `slug`, useful title, accurate description, date, intro and substantive sections. The homepage and sitemap update from this list automatically.

## Project structure

```text
app/
  blog/[slug]/page.tsx   # individual server-rendered article pages
  globals.css            # responsive styles
  layout.tsx             # shared layout and site metadata
  page.tsx                # homepage
  robots.ts               # /robots.txt
  sitemap.ts              # /sitemap.xml
lib/
  posts.ts                # five sample articles
  site.ts                 # site name, description and canonical domain
public/
  llms.txt                # optional AI-readable site guide
```
