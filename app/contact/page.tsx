"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";

type BudgetOption =
  | "- 5K"
  | "5K - 1K"
  | "1K - 25K"
  | "25K - 50K"
  | "+ 50K";

const SERVICES = [
  "Apps Web",
  "Apps Mobile",
  "Backend",
  "SaaS",
  "Back-Office",
  "Webmastering",
  "DevOps",
  "Migration",
  "Automatisation",
  "Intégration API",
  "Refonte UI",
] as const;

const BUDGETS: BudgetOption[] = [
  "- 5K",
  "5K - 1K",
  "1K - 25K",
  "25K - 50K",
  "+ 50K",
];

function Field({
  label,
  optional,
  children,
}: {
  label: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2">
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-sm font-semibold text-white/90">{label}</span>
        {optional ? (
          <span className="text-xs text-white/60">Optionnel</span>
        ) : null}
      </div>
      {children}
    </label>
  );
}

function Card({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-white/20 bg-white/10 p-4 shadow-lg backdrop-blur-md sm:p-5">
      <header className="grid gap-1">
        <h2 className="text-base font-semibold text-white/95">{title}</h2>
        {subtitle ? (
          <p className="text-sm text-white/75">{subtitle}</p>
        ) : null}
      </header>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function SocialIcon({
  type,
}: {
  type: "linkedin" | "github" | "facebook" | "website";
}) {
  if (type === "linkedin") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="h-4 w-4" viewBox="0 0 24 24"><path fill="currentColor" d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm-9 8a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1m6 0a3 3 0 0 0-1.168.236l-.125.057A1 1 0 0 0 11 11v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0-3-3M8 7a1 1 0 0 0-.993.883L7 8.01a1 1 0 0 0 1.993.117L9 8a1 1 0 0 0-1-1"/></svg>
    );
  }

  if (type === "github") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="h-4 w-4" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"/></svg>
    );
  }

  if (type === "website") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="h-4 w-4" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22a10 10 0 1 0 0-20a10 10 0 0 0 0 20m0 0c2.5-2.7 4-6.1 4-10s-1.5-7.3-4-10m0 20c-2.5-2.7-4-6.1-4-10s1.5-7.3 4-10m-9.5 10h19"/></svg>
    );
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="h-4 w-4" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2z"/></svg>
  );
}

function SocialBubble({
  href,
  label,
  type,
  className,
}: {
  href: string;
  label: string;
  type: "linkedin" | "github" | "facebook" | "website";
  className: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={[
        "absolute grid gap-1 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 shadow-lg backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
        className,
      ].join(" ")}
    >
      <div className="flex items-center gap-2">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-black/10">
          <span className="text-white">{<SocialIcon type={type} />}</span>
        </span>
        <span className="text-sm font-semibold text-white">{label}</span>
      </div>
      {type === "facebook" && <span className="text-xs text-white/70">#patrick-namegni</span>}
      {type === "github" && <span className="text-xs text-white/70">#CodeShadowing95</span>}
      {type === "linkedin" && <span className="text-xs text-white/70">#frank-patrick-namegni</span>}
      {type === "website" && <span className="text-xs text-white/70">#portfolio</span>}
    </a>
  );
}

function SocialTile({
  href,
  label,
  type,
}: {
  href: string;
  label: string;
  type: "linkedin" | "github" | "facebook" | "website";
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 shadow-lg backdrop-blur-md transition hover:bg-white/15"
    >
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-black/10 text-white">
        <SocialIcon type={type} />
      </span>
      <div className="min-w-0">
        <div className="truncate text-sm font-semibold text-white">{label}</div>
        <div className="text-xs text-white/70">Ouvrir</div>
      </div>
    </a>
  );
}

export default function ContactPage() {
  const [services, setServices] = useState<string[]>([]);
  const [budget, setBudget] = useState<BudgetOption | "">("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const canSelectMoreServices = services.length < 2;

  const selectedServicesLabel = useMemo(() => services.join(", "), [services]);

  function toggleService(service: string) {
    setSuccess(null);
    setError(null);
    setServices((prev) => {
      if (prev.includes(service)) return prev.filter((s) => s !== service);
      if (prev.length >= 2) return prev;
      return [...prev, service];
    });
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSuccess(null);
    setError(null);

    if (!name.trim()) return setError("Merci de renseigner ton nom.");
    if (!email.trim()) return setError("Merci de renseigner ton email.");
    if (!details.trim())
      return setError("Merci de décrire ton projet (détails du projet).");
    if (services.length === 0)
      return setError("Sélectionnez au moins 1 service (max 2).");
    if (!budget) return setError("Sélectionnez un budget.");

    const subject = encodeURIComponent("Demande de contact — Projet");
    const body = encodeURIComponent(
      [
        `Nom: ${name}`,
        `Email: ${email}`,
        `Téléphone: ${phone || "-"}`,
        `Services: ${selectedServicesLabel || "-"}`,
        `Budget: ${budget || "-"}`,
        "",
        "Détails du projet:",
        details,
      ].join("\n")
    );

    window.location.href = `mailto:patrick.namegni@gmail.com?subject=${subject}&body=${body}`;
    setSuccess("Parfait — ton client mail va s’ouvrir avec le message prêt.");
  }

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 pb-8 mt-10">
      <section className="grid gap-6 lg:grid-cols-[1fr_520px] lg:items-start lg:gap-8">
        <div className="rounded-3xl border border-white/20 bg-white/10 p-5 shadow-lg backdrop-blur-md sm:p-8 lg:sticky lg:top-28">
          <header className="mb-8">
            <h1 className="text-balance text-4xl font-semibold tracking-tight uppercase sm:text-6xl">
              Parlons-en
            </h1>
          </header>

          <p className="max-w-xl text-pretty text-white/85">
            Un projet d’entreprise, une refonte, une appli, une automatisation
            ou un back-office à mettre en place ? Écrivez-moi : je peux cadrer le
            besoin, proposer une approche claire, et livrer une solution propre
            et maintenable.
          </p>

          <div className="mt-8">
            <div className="grid gap-3 sm:hidden">
              <SocialTile
                type="linkedin"
                label="LinkedIn"
                href="https://www.linkedin.com/in/frank-patrick-namegni/"
              />
              <SocialTile
                type="github"
                label="GitHub"
                href="https://github.com/CodeShadowing95/"
              />
              <SocialTile
                type="facebook"
                label="Facebook"
                href="https://facebook.com/"
              />
              <SocialTile
                type="website"
                label="Site web"
                href="https://patricknamegni.vercel.app/"
              />
            </div>

            <div className="relative mt-4 hidden h-[240px] w-full max-w-[520px] overflow-hidden rounded-2xl border border-white/15 bg-black/10 sm:block">
              <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full opacity-40"
                viewBox="0 0 520 210"
              >
                <defs>
                  <radialGradient id="socialGlow" cx="50%" cy="50%" r="70%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                  </radialGradient>
                </defs>
                <circle
                  cx="260"
                  cy="105"
                  r="78"
                  fill="none"
                  stroke="rgba(255,255,255,0.18)"
                  strokeWidth="2"
                  strokeDasharray="6 10"
                />
                <circle cx="260" cy="105" r="130" fill="url(#socialGlow)" />
              </svg>

              <div className="absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center gap-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-center backdrop-blur-md">
                <div className="text-xs font-semibold tracking-wide text-white/90">
                  Réseaux
                </div>
                <div className="text-[11px] text-white/70">Sociaux</div>
              </div>

              <SocialBubble
                type="linkedin"
                label="LinkedIn"
                href="https://www.linkedin.com/in/frank-patrick-namegni/"
                className="left-4 top-6 w-[140px] bg-linear-to-br from-[#0A66C2]/25 to-white/10 md:w-[148px]"
              />
              <SocialBubble
                type="github"
                label="GitHub"
                href="https://github.com/CodeShadowing95/"
                className="right-4 top-8 w-[140px] bg-linear-to-br from-[#F58529]/20 via-[#DD2A7B]/15 to-[#515BD4]/20 md:right-6 md:w-[148px]"
              />
              <SocialBubble
                type="facebook"
                label="Facebook"
                href="https://facebook.com/"
                className="bottom-6 left-10 w-[140px] bg-linear-to-br from-[#1877F2]/25 to-white/10 md:left-20 md:w-[148px]"
              />
              <SocialBubble
                type="website"
                label="Site web"
                href="https://patricknamegni.vercel.app/"
                className="bottom-4 right-6 w-[140px] bg-linear-to-br from-emerald-400/20 via-cyan-400/10 to-white/10 md:right-16 md:w-[148px]"
              />
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="grid gap-6">
          <Card
            title="Mes Services"
            subtitle="Sélectionnez au maximum 2 services."
          >
            <div className="flex flex-wrap gap-2">
              {SERVICES.map((s) => {
                const selected = services.includes(s);
                const disabled = !selected && !canSelectMoreServices;
                return (
                  <button
                    key={s}
                    type="button"
                    onClick={() => toggleService(s)}
                    disabled={disabled}
                    className={[
                      "rounded-full border px-3 py-2 text-xs font-medium transition",
                      selected
                        ? "border-white/30 bg-white/50 text-slate-800"
                        : "border-white/20 bg-white/5 text-white/85 hover:bg-white/10",
                      disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
                    ].join(" ")}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </Card>

          <Card title="Votre Budget" subtitle="Choisissez une tranche de budget (en €).">
            <div className="flex flex-wrap gap-2">
              {BUDGETS.map((b) => {
                const selected = budget === b;
                return (
                  <button
                    key={b}
                    type="button"
                    onClick={() => {
                      setSuccess(null);
                      setError(null);
                      setBudget(b);
                    }}
                    className={[
                      "flex items-center justify-between gap-2 rounded-xl border px-3 py-2 text-left text-xs font-medium transition cursor-pointer",
                      selected
                        ? "border-white/30 bg-white/20 text-white"
                        : "border-white/20 bg-white/5 text-white/85 hover:bg-white/10",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "h-4 w-4 rounded-full border",
                        selected
                          ? "border-white bg-white"
                          : "border-white/40 bg-transparent",
                      ].join(" ")}
                    />
                    <span>{b}</span>
                  </button>
                );
              })}
            </div>
          </Card>

          <Card title="Votre Projet" subtitle="Dites-moi ce dont vous avez besoin.">
            <div className="grid gap-4">
              <Field label="Nom">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-11 rounded-xl border border-white/20 bg-white/5 px-4 text-white outline-none placeholder:text-white/40 focus:border-white/35"
                  placeholder="Votre nom"
                  autoComplete="name"
                />
              </Field>

              <Field label="Email">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11 rounded-xl border border-white/20 bg-white/5 px-4 text-white outline-none placeholder:text-white/40 focus:border-white/35"
                  placeholder="ton@email.com"
                  autoComplete="email"
                  inputMode="email"
                />
              </Field>

              <Field label="Téléphone" optional>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-11 rounded-xl border border-white/20 bg-white/5 px-4 text-white outline-none placeholder:text-white/40 focus:border-white/35"
                  placeholder="+33 ..."
                  autoComplete="tel"
                  inputMode="tel"
                />
              </Field>

              <Field label="Détails du projet">
                <textarea
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="min-h-32 resize-y rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-white/35"
                  placeholder="Objectifs, délais, contraintes, stack, exemples..."
                />
              </Field>
            </div>
          </Card>

          {error ? (
            <div className="rounded-2xl border border-red-300/30 bg-red-500/10 px-4 py-3 text-sm text-white/90">
              {error}
            </div>
          ) : null}
          {success ? (
            <div className="rounded-2xl border border-emerald-300/30 bg-emerald-500/10 px-4 py-3 text-sm text-white/90">
              {success}
            </div>
          ) : null}

          <div className="flex items-center justify-end">
            <Button
              type="submit"
              className="h-11 rounded-xl bg-white text-slate-900 hover:bg-white/90"
            >
              Envoyer
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
}
