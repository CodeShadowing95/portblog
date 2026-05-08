"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Share2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import postsData from "@/lib/blog-posts-portfolio.json";

type BlogPost = {
  title: string;
  slug: string;
  date: string;
  format: string;
  expertise_level: string;
  excerpt: string;
  tags: string[];
  cover_image: string;
  reading_time_minutes: number;
  likes: number;
  comments: number;
};

const posts = postsData as BlogPost[];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-slate-900/10 px-3 py-1 text-xs font-semibold text-white/80">
      {children}
    </span>
  );
}

function FilterBadge({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-sm border px-3 py-2 text-xs font-semibold transition capitalize",
        active
          ? "border-white/30 bg-white/20 text-white"
          : "border-white/20 bg-white/5 text-white/80 hover:bg-white/10",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function formatDate(date: string) {
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export default function BlogPage() {
  const [toast, setToast] = useState<string | null>(null);
  const [level, setLevel] = useState<string>("Tous");

  const featured = posts[0] ?? null;

  const levels = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => set.add(p.expertise_level));
    return ["Tous", ...Array.from(set)];
  }, []);

  const visiblePosts = useMemo(() => {
    const rest = posts.slice(1);
    if (level === "Tous") return rest;
    return rest.filter((p) => p.expertise_level === level);
  }, [level]);

  async function share(post: BlogPost) {
    try {
      const url = `${window.location.origin}/blog/${post.slug}`;
      if (navigator.share) {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url,
        });
        return;
      }

      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
        setToast("Lien copié dans le presse-papiers.");
        window.setTimeout(() => setToast(null), 1800);
        return;
      }

      window.prompt("Copie ce lien :", url);
    } catch {
      setToast("Impossible de partager pour le moment.");
      window.setTimeout(() => setToast(null), 1800);
    }
  }

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 mt-10">
      {featured ? (
        <section className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-lg backdrop-blur-md">
          <div className="grid gap-0 md:grid-cols-[340px_1fr]">
            <div className="relative h-56 md:h-full">
              <Image
                // src={featured.cover_image}
                src="/images/first-blog.png"
                alt={featured.title}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 340px, 100vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
            </div>

            <div className="grid gap-4 p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div className="text-xs font-semibold text-white/75 capitalize">
                  {formatDate(featured.date)}{" "}
                  <span className="text-white/50">|</span> {featured.format}
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => share(featured)}
                  className="h-9 rounded-xl text-white/90 hover:bg-white/10 hover:text-white"
                  aria-label="Partager l’article"
                >
                  <Share2 />
                </Button>
              </div>

              <Link
                href={`/blog/${featured.slug}`}
                className="text-balance text-2xl font-semibold leading-snug text-white underline-offset-4 hover:underline sm:text-3xl"
              >
                {featured.title}
              </Link>

              <p className="text-pretty text-sm text-white/85 sm:text-base">
                {featured.excerpt}
              </p>

              <div className="flex items-center justify-between gap-3 pt-2">
                <div className="text-sm font-semibold text-white/85">
                  Patrick NAMEGNI
                </div>
                <div className="flex flex-wrap justify-end gap-2">
                  <span className="capitalize">
                    <Pill>{featured.expertise_level}</Pill>
                  </span>
                  <Pill>{featured.reading_time_minutes} min</Pill>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="mt-10 mb-16 flex justify-center">
        <div className="flex flex-wrap gap-4">
          {levels.map((l) => (
            <FilterBadge key={l} active={level === l} onClick={() => setLevel(l)}>
              {l}
            </FilterBadge>
          ))}
        </div>
      </section>

      <section className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visiblePosts.map((post) => (
          <article
            key={post.slug}
            className="group overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-lg backdrop-blur-md transition hover:bg-white/15"
          >
            <div className="relative">
              <Image
                // src={post.cover_image}
                src="/images/blog-illustration.jpg"
                alt={post.title}
                width={1200}
                height={630}
                className="h-44 w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                <Pill>{post.reading_time_minutes} min</Pill>
              </div>
            </div>

            <div className="grid gap-4 p-5">
              <div className="flex items-center justify-between gap-3">
                <div className="text-xs text-white/65">
                  {formatDate(post.date)} · <span className="capitalize">{post.format}</span>
                </div>

                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => share(post)}
                  className="h-9 rounded-xl text-white/90 hover:bg-white/10 hover:text-white"
                >
                  <Share2 />
                </Button>
              </div>
              <div className="grid gap-2">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-lg font-semibold leading-snug text-white underline-offset-4 hover:underline"
                >
                  {post.title}
                </Link>
                <p className="line-clamp-4 text-sm text-white/80">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 4).map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      {toast ? (
        <div className="fixed bottom-6 left-1/2 z-200 -translate-x-1/2 rounded-2xl border border-white/20 bg-black/60 px-4 py-3 text-sm text-white shadow-lg backdrop-blur-md">
          {toast}
        </div>
      ) : null}
    </main>
  );
}
