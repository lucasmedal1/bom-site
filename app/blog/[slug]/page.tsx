import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PixelCursor from "@/components/PixelCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MarkdownContent from "@/components/MarkdownContent";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found — Blue Ocean Materials" };
  }

  return {
    title: `${post.title} — Blue Ocean Materials`,
    description: post.description,
    alternates: {
      canonical: `https://www.blueoceanmaterials.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `https://www.blueoceanmaterials.com/blog/${post.slug}`,
    },
  };
}

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

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PixelCursor />
      <Navbar />
      <main className="relative min-h-screen pt-24">
        <div className="absolute inset-0 blueprint-grid-fine opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean/[0.025] via-transparent to-transparent" />

        <article className="relative mx-auto max-w-3xl px-6 pb-24 pt-10 lg:px-8">
          <Link
            href="/blog"
            className="font-mono text-[11px] tracking-wide text-charcoal/45 transition-colors hover:text-ocean"
          >
            ← All posts
          </Link>

          <header className="mt-8 border-b border-charcoal/10 pb-10">
            <div className="flex flex-wrap items-center gap-3">
              {post.date && (
                <time
                  dateTime={post.date}
                  className="font-mono text-[11px] text-charcoal/40"
                >
                  {formatDate(post.date)}
                </time>
              )}
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-charcoal/10 px-2 py-0.5 font-mono text-[10px] tracking-wide text-charcoal/45"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              {post.title}
            </h1>
            {post.description && (
              <p className="mt-5 text-base leading-relaxed text-charcoal/55">
                {post.description}
              </p>
            )}
          </header>

          <div className="mt-10">
            <MarkdownContent content={post.content} />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
