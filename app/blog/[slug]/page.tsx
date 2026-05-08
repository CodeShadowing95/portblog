"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { ArrowLeft, Share2 } from "lucide-react";

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

function formatDate(date: string) {
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const [toast, setToast] = useState<string | null>(null);

  const post = useMemo(() => {
    return posts.find((p) => p.slug === params.slug) ?? null;
  }, [params.slug]);

  async function share() {
    if (!post) return;
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

  if (!post) {
    return (
      <main className="mx-auto w-full max-w-4xl flex-1">
        <div className="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md">
          <div className="text-lg font-semibold">Article introuvable</div>
          <p className="mt-2 text-white/80">
            Ce slug ne correspond à aucun article.
          </p>
          <div className="mt-5">
            <Button
              asChild
              variant="outline"
              className="h-10 rounded-2xl border-white/25 bg-white/10 text-white hover:bg-white/15 hover:text-white"
            >
              <Link href="/blog">
                <ArrowLeft />
                Retour au blog
              </Link>
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-4xl flex-1">
      <div className="mb-6 flex items-center justify-between gap-3">
        <Button
          asChild
          variant="ghost"
          className="h-10 rounded-2xl text-white/85 hover:bg-white/10 hover:text-white"
        >
          <Link href="/blog">
            <ArrowLeft />
            Retour
          </Link>
        </Button>

        <Button
          type="button"
          variant="outline"
          onClick={share}
          className="h-10 rounded-2xl border-white/25 bg-white/10 text-white hover:bg-white/15 hover:text-white"
        >
          <Share2 />
          Partager
        </Button>
      </div>

      <article className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-lg backdrop-blur-md">
        <div className="relative">
          <Image
            src={post.cover_image}
            alt={post.title}
            width={1200}
            height={630}
            className="h-56 w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/15 to-transparent" />
          <div className="absolute left-6 top-6 flex flex-wrap gap-2">
            <Pill>{post.format}</Pill>
            <Pill>{post.expertise_level}</Pill>
            <Pill>{formatDate(post.date)}</Pill>
            <Pill>{post.reading_time_minutes} min</Pill>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-pretty text-white/85">{post.excerpt}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/15 bg-black/10 p-5">
            <div className="text-sm font-semibold text-white/90">
              Note
            </div>
            <p className="mt-2 text-sm text-white/80">
              Les contenus détaillés de l’article peuvent être ajoutés ensuite
              (MDX, CMS ou markdown). Pour l’instant, la page affiche l’extrait
              et les métadonnées, avec un bouton de partage.
            </p>
          </div>
        </div>
      </article>

      {toast ? (
        <div className="fixed bottom-6 left-1/2 z-200 -translate-x-1/2 rounded-2xl border border-white/20 bg-black/60 px-4 py-3 text-sm text-white shadow-lg backdrop-blur-md">
          {toast}
        </div>
      ) : null}
    </main>
  );
}
