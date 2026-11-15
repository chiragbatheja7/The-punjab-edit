import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "@/lib/posts";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Stories from Punjab: Sport, Fitness & Local Life",
  description: "Read practical stories about sport, fitness, lifestyle and local life in Chandigarh, Patiala and Nabha.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: site.name,
    description: site.description,
    url: site.url,
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url: `${site.url}/blog/${post.slug}`,
      datePublished: post.date,
      author: { "@type": "Organization", name: post.author },
    })),
  };

  return (
    <main>
      <section className="hero">
        <div className="hero-inner">
          <p className="eyebrow">A JOURNAL ROOTED IN PUNJAB</p>
          <h1>Good stories.<br /><em>Closer to home.</em></h1>
          <p className="hero-copy">Ideas for moving more, living well and discovering the places around us—from Chandigarh to Patiala and Nabha.</p>
          <a className="text-link hero-link" href="#latest">Explore the stories <span aria-hidden="true">↘</span></a>
          <div className="hero-note"><span className="hero-dot" /> FIVE EDITORIAL STARTING POINTS <span>·</span> SPORT / FITNESS / LOCAL LIFE</div>
        </div>
        <div className="hero-side" aria-hidden="true">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-stamp">PUNJAB<br />& BEYOND</div>
          <span className="hero-side-caption">FIELD NOTES — VOL. 01</span>
        </div>
      </section>

      <section className="content-section" id="latest">
        <div className="section-heading">
          <div><p className="eyebrow">THE READING LIST</p><h2>Latest stories<span className="heading-period">.</span></h2></div>
          <p className="section-intro">Five thoughtful reads to get this journal started. Choose a story to read the full article.</p>
        </div>
        <div className="post-list">
          {posts.map((post, index) => (
            <article className="post-row" key={post.slug}>
              <div className="post-index">0{index + 1}</div>
              <div className="post-main">
                <div className="post-meta"><span>{post.category}</span><i>·</i><span>{post.location}</span><i>·</i><span>{post.readTime}</span></div>
                <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
                <p>{post.description}</p>
              </div>
              <Link className="post-arrow" href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>↗</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="about-band" id="about">
        <div><p className="eyebrow">WHY THIS JOURNAL EXISTS</p><h2>Curious about the<br /><em>everyday.</em></h2></div>
        <p>From a weekend ride to a neighbourhood discovery, the best stories help us see familiar places differently. The Punjab Edit is an independent editorial project exploring practical ideas and local perspectives. We value useful information, honest recommendations and stories made with care.</p>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </main>
  );
}
