import Link from "next/link";
import type { Metadata } from "next";
import PixelCursor from "@/components/PixelCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Blue Ocean Materials",
  description:
    "Engineering insights on plastics, materials selection, and high-performance polymers for industrial buyers.",
  alternates: {
    canonical: "https://www.blueoceanmaterials.com/blog",
  },
};

function formatDate(date: string) {
  if (!date) return "";
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <PixelCursor />
      <Navbar />
      <main className="relative min-h-screen pt-24">
        <div className="absolute inset-0 blueprint-grid-fine opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean/[0.03] via-transparent to-transparent" />

        <div className="relative mx-auto max-w-3xl px-6 pb-24 pt-10 lg:px-8">
          <p className="font-mono text-[10px] tracking-widest text-ocean">
            RESOURCES
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-charcoal sm:text-5xl">
            Blog
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal/60">
            Practical guidance on engineering plastics, temperature ratings, and
            material selection for demanding industrial applications.
          </p>

          <ul className="mt-14 space-y-8">
            {posts.map((post) => (
              <li key={post.slug}>
                <article className="border-t border-charcoal/10 pt-8">
                  <div className="flex flex-wrap items-center gap-3">
                    {post.date && (
                      <time
                        dateTime={post.date}
                        className="font-mono text-[11px] text-charcoal/40"
                      >
                        {formatDate(post.date)}
                      </time>
                    )}
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] tracking-wide text-charcoal/35"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-charcoal">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition-colors hover:text-ocean"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  {post.description && (
                    <p className="mt-3 text-sm leading-relaxed text-charcoal/55">
                      {post.description}
                    </p>
                  )}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-flex font-mono text-[11px] tracking-wide text-ocean transition-opacity hover:opacity-70"
                  >
                    Read article →
                  </Link>
                </article>
              </li>
            ))}
          </ul>

          {posts.length === 0 && (
            <p className="mt-12 text-sm text-charcoal/50">
              No posts yet. Check back soon.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
