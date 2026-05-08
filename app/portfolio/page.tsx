"use client";

import Image, { type StaticImageData } from "next/image";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { projects, projectCategories } from "@/constants";

type Project = (typeof projects)[number];

type SortOption = "populaire" | "a-z" | "z-a" | "termine";

function TagPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-black/10 px-3 py-1 text-xs font-medium text-white/80">
      {children}
    </span>
  );
}

function ChipButton({
  active,
  disabled,
  children,
  onClick,
}: {
  active: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={[
        "rounded-full border px-3 py-2 text-xs font-semibold transition",
        active
          ? "border-white/30 bg-white/20 text-white"
          : "border-white/20 bg-white/5 text-white/80 hover:bg-white/10",
        disabled ? "cursor-not-allowed opacity-50" : "",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function normalizeTag(tag: string) {
  return tag.trim().toLowerCase();
}

function getProjectTags(p: Project) {
  return (p.tags ?? []).map((t) => normalizeTag(t.name));
}

function getProjectCategories(p: Project) {
  const tags = getProjectTags(p);
  const hasFrontend =
    tags.some((t) => t === "react" || t.startsWith("react") || t === "nextjs" || t === "angular") ||
    tags.includes("tailwindcss");
  const hasBackend = tags.some((t) =>
    [
      "nodejs",
      "restapi",
      "springboot",
      "laravel",
      "php",
      "python",
      "java",
      "mongodb",
      "postgresql",
      "mysql",
      "firebase",
    ].includes(t)
  );

  const categories: string[] = [];

  if (tags.includes("ai")) categories.push("AI");
  if (tags.includes("angular")) categories.push("Angular");
  if (tags.includes("nextjs")) categories.push("Next.js");
  if (tags.some((t) => t === "react" || t.startsWith("react"))) categories.push("React");
  if (hasFrontend && hasBackend) categories.push("Fullstack App");

  return categories;
}

function scoreForSort(p: Project) {
  const tags = getProjectTags(p);
  const status = (p.status ?? "").toLowerCase();
  let score = 0;
  if (status.includes("en cours")) score += 30;
  if (status.includes("termin")) score += 10;
  if (tags.includes("ai")) score += 25;
  if (tags.includes("nextjs")) score += 12;
  if (tags.includes("react")) score += 10;
  if (tags.includes("angular")) score += 8;
  if (tags.includes("restapi")) score += 6;
  return score;
}

function StatusBadge({ status }: { status: string }) {
  const normalized = status.toLowerCase();
  const classes = normalized.includes("en cours")
    ? "border-amber-200/30 bg-amber-500/10 text-amber-50"
    : "border-emerald-200/30 bg-emerald-500/10 text-emerald-50";

  return (
    <span
      className={[
        "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold backdrop-blur-md",
        classes,
      ].join(" ")}
    >
      {status}
    </span>
  );
}

function ProjectImage({
  image,
  name,
}: {
  image: StaticImageData;
  name: string;
}) {
  return (
    <div className="relative aspect-16/10 overflow-hidden rounded-2xl border border-white/15 bg-white/5">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 33vw, 100vw"
        priority={false}
        loading="eager"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />
    </div>
  );
}

function Modal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-200">
      <button
        type="button"
        aria-label="Fermer"
        onClick={onClose}
        className="absolute inset-0 bg-black/60"
      />
      <div className="relative mx-auto mt-30 w-[min(92vw,1100px)] overflow-hidden rounded-3xl border border-white/20 bg-[#0b0b10]/80 shadow-2xl backdrop-blur-md">
        <div className="grid gap-6 p-6 lg:grid-cols-[420px_1fr] lg:gap-8 lg:p-8">
          <div className="grid gap-4">
            <ProjectImage image={project.image} name={project.name} />
            <div className="flex flex-wrap gap-2">
              <StatusBadge status={project.status} />
              <TagPill>{project.reason}</TagPill>
              {getProjectCategories(project).map((c) => (
                <TagPill key={c}>{c}</TagPill>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {getProjectTags(project).map((t) => (
                <TagPill key={t}>{t}</TagPill>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-1">
              <Button
                asChild
                className="h-10 rounded-xl bg-white text-slate-900 hover:bg-white/90"
              >
                <a href={project.app_link} target="_blank" rel="noreferrer">
                  Voir le projet
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-10 rounded-xl border-white/25 bg-white/10 text-white hover:bg-white/15 hover:text-white"
              >
                <a
                  href={project.source_code_link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Code source
                </a>
              </Button>
              <Button
                type="button"
                variant="ghost"
                onClick={onClose}
                className="h-10 rounded-xl text-white/90 hover:bg-white/10 hover:text-white"
              >
                Fermer
              </Button>
            </div>
          </div>

          <div className="grid gap-6">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-white">
                {project.name}
              </h2>
              <p className="mt-3 text-pretty text-white/85">
                {project.details?.fullDescription ?? project.description}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <div className="text-sm font-semibold text-white/90">
                  Objectifs clés
                </div>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/85">
                  {(project.details?.keyObjectives ?? []).map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <div className="text-sm font-semibold text-white/90">
                  Fonctionnalités
                </div>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/85">
                  {(project.details?.functionalities ?? []).map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("Tous");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [selectedReason, setSelectedReason] = useState<string[]>([]);
  const [sort, setSort] = useState<SortOption>("populaire");
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((p) => getProjectTags(p).forEach((t) => tags.add(t)));
    return Array.from(tags).sort((a, b) => a.localeCompare(b));
  }, []);

  const allReasons = useMemo(() => {
    const reasons = new Set<string>();
    projects.forEach((p) => reasons.add(p.reason));
    return Array.from(reasons).sort((a, b) => a.localeCompare(b));
  }, []);

  const allStatuses = useMemo(() => {
    const statuses = new Set<string>();
    projects.forEach((p) => statuses.add(p.status));
    return Array.from(statuses).sort((a, b) => a.localeCompare(b));
  }, []);

  const categoryTitles = useMemo(() => {
    const titles = projectCategories.map((c) => c.title);
    return titles.includes("Tous") ? titles : ["Tous", ...titles];
  }, []);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    categoryTitles.forEach((t) => (counts[t] = 0));

    projects.forEach((p) => {
      counts["Tous"] = (counts["Tous"] ?? 0) + 1;
      getProjectCategories(p).forEach((c) => {
        counts[c] = (counts[c] ?? 0) + 1;
      });
    });

    return counts;
  }, [categoryTitles]);

  const filteredProjects = useMemo(() => {
    const q = query.trim().toLowerCase();

    const res = projects.filter((p) => {
      if (q) {
        const hay = [
          p.name,
          p.description,
          p.reason,
          p.status,
          ...(p.tags ?? []).map((t) => t.name),
        ]
          .join(" ")
          .toLowerCase();
        if (!hay.includes(q)) return false;
      }

      if (category && category !== "Tous") {
        const cats = getProjectCategories(p);
        if (!cats.includes(category)) return false;
      }

      if (selectedStatus.length) {
        if (!selectedStatus.includes(p.status)) return false;
      }

      if (selectedReason.length) {
        if (!selectedReason.includes(p.reason)) return false;
      }

      if (selectedTags.length) {
        const tags = getProjectTags(p);
        const ok = selectedTags.every((t) => tags.includes(t));
        if (!ok) return false;
      }

      return true;
    });

    const sorted = [...res];
    if (sort === "a-z") sorted.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "z-a") sorted.sort((a, b) => b.name.localeCompare(a.name));
    if (sort === "termine") {
      sorted.sort((a, b) => {
        const aDone = a.status.toLowerCase().includes("termin") ? 0 : 1;
        const bDone = b.status.toLowerCase().includes("termin") ? 0 : 1;
        return aDone - bDone || b.name.localeCompare(a.name);
      });
    }
    if (sort === "populaire") {
      sorted.sort((a, b) => scoreForSort(b) - scoreForSort(a));
    }

    return sorted;
  }, [category, query, selectedReason, selectedStatus, selectedTags, sort]);

  const activeProject = useMemo(() => {
    if (!activeProjectId) return null;
    return projects.find((p) => p.id === activeProjectId) ?? null;
  }, [activeProjectId]);

  const hasActiveFilters =
    query.trim() ||
    category !== "Tous" ||
    selectedTags.length ||
    selectedStatus.length ||
    selectedReason.length;

  function toggleTag(tag: string) {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }

  function toggleStatus(status: string) {
    setSelectedStatus((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status]
    );
  }

  function toggleReason(reason: string) {
    setSelectedReason((prev) =>
      prev.includes(reason)
        ? prev.filter((r) => r !== reason)
        : [...prev, reason]
    );
  }

  function clearAll() {
    setQuery("");
    setCategory("Tous");
    setSelectedTags([]);
    setSelectedStatus([]);
    setSelectedReason([]);
    setSort("populaire");
  }

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 mt-10">
      <header className="mb-8 grid gap-3">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
              Projets Réalisés
            </h1>
            <p className="mt-2 max-w-2xl text-pretty text-white/80">
              Une vitrine façon e-commerce pour parcourir mes projets, filtrer
              par stack, type et état, puis ouvrir les détails comme une fiche
              produit.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:w-[420px]">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-11 w-full rounded-2xl border border-white/20 bg-white/10 px-4 text-white outline-none placeholder:text-white/40 focus:border-white/35"
              placeholder="Rechercher un projet, une techno..."
            />

            <div className="flex items-center gap-3">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="h-11 w-full rounded-2xl border border-white/20 bg-white/10 px-4 text-sm font-semibold text-white outline-none focus:border-white/35"
              >
                <option value="populaire">Tri : recommandé</option>
                <option value="termine">Tri : terminés d’abord</option>
                <option value="a-z">Tri : A → Z</option>
                <option value="z-a">Tri : Z → A</option>
              </select>
              {hasActiveFilters ? (
                <Button
                  type="button"
                  variant="ghost"
                  onClick={clearAll}
                  className="h-11 rounded-2xl text-white/85 hover:bg-white/10 hover:text-white"
                >
                  Reset
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </header>

      <section className="grid gap-8 lg:grid-cols-[320px_1fr] lg:items-start">
        <aside className="grid gap-6">
          <div className="rounded-3xl border border-white/20 bg-white/10 p-5 shadow-lg backdrop-blur-md">
            <div className="flex justify-between items-center">
              <div className="text-sm font-semibold text-white/90">Collections</div>

            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {categoryTitles.map((t) => (
                <ChipButton
                  key={t}
                  active={category === t}
                  onClick={() => setCategory(t)}
                >
                  {t}{" "}
                  <span className="ml-1 text-white/60">
                    {categoryCounts[t] ?? 0}
                  </span>
                </ChipButton>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/10 p-5 shadow-lg backdrop-blur-md">
            <div className="text-sm font-semibold text-white/90">État</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {allStatuses.map((s) => (
                <ChipButton
                  key={s}
                  active={selectedStatus.includes(s)}
                  onClick={() => toggleStatus(s)}
                >
                  {s}
                </ChipButton>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/10 p-5 shadow-lg backdrop-blur-md">
            <div className="text-sm font-semibold text-white/90">Type</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {allReasons.map((r) => (
                <ChipButton
                  key={r}
                  active={selectedReason.includes(r)}
                  onClick={() => toggleReason(r)}
                >
                  {r}
                </ChipButton>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/10 p-5 shadow-lg backdrop-blur-md">
            <div className="text-sm font-semibold text-white/90">Tech stack</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {allTags.map((t) => (
                <ChipButton
                  key={t}
                  active={selectedTags.includes(t)}
                  onClick={() => toggleTag(t)}
                >
                  {t}
                </ChipButton>
              ))}
            </div>
            {selectedTags.length ? (
              <div className="mt-4 text-xs text-white/65">
                Filtre tags : tous les tags sélectionnés doivent être présents.
              </div>
            ) : null}
          </div>
        </aside>

        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-white/75">
              {filteredProjects.length} projet
              {filteredProjects.length > 1 ? "s" : ""}
            </div>
            {hasActiveFilters ? (
              <div className="flex flex-wrap justify-end gap-2">
                {category !== "Tous" ? <TagPill>{category}</TagPill> : null}
                {selectedStatus.map((s) => (
                  <TagPill key={s}>{s}</TagPill>
                ))}
                {selectedReason.map((r) => (
                  <TagPill key={r}>{r}</TagPill>
                ))}
                {selectedTags.map((t) => (
                  <TagPill key={t}>{t}</TagPill>
                ))}
              </div>
            ) : null}
          </div>

          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
            {filteredProjects.map((p) => (
              <article
                key={p.id}
                className="group rounded-3xl border border-white/20 bg-white/10 p-4 shadow-lg backdrop-blur-md transition hover:bg-white/15"
              >
                <ProjectImage image={p.image} name={p.name} />

                <div className="mt-4 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex justify-between items-center">
                      <div className="truncate text-lg font-semibold text-white">
                        {p.name}
                      </div>
                      <StatusBadge status={p.status} />
                    </div>
                    <div className="mt-1 line-clamp-2 text-sm text-white/80">
                      {p.description}
                    </div>
                  </div>
                  {/* <StatusBadge status={p.status} /> */}
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  <TagPill>{p.reason}</TagPill>
                  {getProjectCategories(p)
                    .slice(0, 2)
                    .map((c) => (
                      <TagPill key={c}>{c}</TagPill>
                    ))}
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {getProjectTags(p)
                    .slice(0, 4)
                    .map((t) => (
                      <TagPill key={t}>{t}</TagPill>
                    ))}
                </div>

                <div className="mt-4 grid gap-2">
                  <Button
                    type="button"
                    onClick={() => setActiveProjectId(p.id)}
                    className="h-10 w-full rounded-2xl bg-white text-slate-900 hover:bg-white/90"
                  >
                    Voir la fiche
                  </Button>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      asChild
                      variant="outline"
                      className="h-10 rounded-2xl border-white/25 bg-white/10 text-white hover:bg-white/15 hover:text-white"
                    >
                      <a href={p.app_link} target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="h-5 w-5" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m12-3l-6 6"/><path d="M15 15V9H9"/></g></svg>
                        Demo
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="ghost"
                      className="h-10 rounded-2xl text-white/85 hover:bg-white/10 hover:text-white"
                    >
                      <a
                        href={p.source_code_link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="h-5 w-5" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"/></svg>
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {activeProject ? (
        <Modal project={activeProject} onClose={() => setActiveProjectId(null)} />
      ) : null}
    </main>
  );
}
