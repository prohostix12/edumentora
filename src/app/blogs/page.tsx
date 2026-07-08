import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PenSquare } from "lucide-react";
import { blogPosts } from "@/lib/blogs";

export const metadata: Metadata = {
  title: "Blogs - Edumentora",
  description:
    "Read Edumentora blogs on credit transfer, student success, universities, and academic opportunities.",
};

export default function BlogsPage() {
  return (
    <main className="pt-20 bg-white">
      <section className="relative overflow-hidden gradient-bg-hero py-20 lg:py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full bg-white border border-primary/20 px-4 py-2 text-sm font-semibold text-primary shadow-soft">
            <PenSquare className="h-4 w-4" />
            Blogs
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-heading mb-6"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Read Our <span className="gradient-text">Latest Blogs</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-paragraph leading-relaxed">
            Practical guidance, student support insights, and credit transfer
            knowledge to help learners continue their academic journey with confidence.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <article
                key={post.slug}
                className={`group overflow-hidden rounded-[2rem] border border-border/70 bg-white shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-hover ${
                  index === 1 ? "lg:translate-y-4" : ""
                }`}
              >
                <Link href={`/blogs/${post.slug}`} className="block">
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </Link>

                <div className="p-8">
                  <div className="mb-4 text-sm sm:text-base text-paragraph">
                    <span>{post.date}</span>
                    <span className="mx-2 text-primary">|</span>
                    <span className="font-semibold text-primary">{post.category}</span>
                  </div>

                  <h2
                    className="text-2xl font-bold leading-snug text-heading mb-8 group-hover:text-primary transition-colors duration-300"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-3 text-base font-semibold text-secondary transition-all duration-300 hover:text-primary"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-secondary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                      <ArrowRight className="h-5 w-5" />
                    </span>
                    READ MORE
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
