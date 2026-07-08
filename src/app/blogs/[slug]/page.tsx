import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, FolderOpen } from "lucide-react";
import { blogPosts, getBlogBySlug } from "@/lib/blogs";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Blog Not Found - Edumentora",
    };
  }

  return {
    title: `${post.title} - Edumentora`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) notFound();

  return (
    <main className="pt-20 bg-white">
      <section className="relative overflow-hidden gradient-bg-hero py-20 lg:py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blogs"
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-white border border-primary/20 px-4 py-2 text-sm font-semibold text-primary shadow-soft transition-all hover:-translate-y-0.5"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blogs
          </Link>

          <div className="mb-6 flex flex-wrap items-center gap-4 text-sm sm:text-base text-paragraph">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-primary" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-2 font-semibold text-primary">
              <FolderOpen className="h-4 w-4" />
              {post.category}
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.08] text-heading"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            {post.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-paragraph leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-white shadow-soft">
            <div className="relative aspect-[16/8] overflow-hidden">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 960px"
                className="object-cover"
              />
            </div>

            <div className="p-8 lg:p-10">
              <div className="prose prose-slate max-w-none">
                {post.content.map((paragraph, index) => (
                  <p
                    key={index}
                    className="mb-6 text-base sm:text-lg leading-relaxed text-paragraph"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
