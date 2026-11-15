import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.name,
    description: site.description,
    url: site.url,
  },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="header-inner">
            <Link className="brand" href="/" aria-label={`${site.name} home`}>
              <span className="brand-mark">P.</span>
              <span>{site.name}<small>THE LOCAL LIFE JOURNAL</small></span>
            </Link>
            <nav aria-label="Main navigation">
              <Link href="/">Stories</Link>
              <a href="/#about">About</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="footer-inner">
            <Link className="footer-brand" href="/">{site.name}</Link>
            <p>Independent stories on sport, fitness and everyday life in Punjab.</p>
            <span>© {new Date().getFullYear()} The Punjab Edit</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
