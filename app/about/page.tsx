import Image from "next/image";

const TECH_ORNAMENTS = [
  {
    src: "/images/technos/react.png",
    alt: "React",
    top: "10%",
    left: "6%",
    size: 56,
    rotate: -12,
    opacity: 0.26,
  },
  {
    src: "/images/technos/nextjs.png",
    alt: "Next.js",
    top: "6%",
    left: "86%",
    size: 56,
    rotate: 10,
    opacity: 0.22,
  },
  {
    src: "/images/technos/typescript.png",
    alt: "TypeScript",
    top: "22%",
    left: "92%",
    size: 56,
    rotate: -8,
    opacity: 0.18,
  },
  {
    src: "/images/technos/javascript.png",
    alt: "JavaScript",
    top: "34%",
    left: "3%",
    size: 56,
    rotate: 14,
    opacity: 0.2,
  },
  {
    src: "/images/technos/node.png",
    alt: "Node.js",
    top: "56%",
    left: "90%",
    size: 56,
    rotate: 6,
    opacity: 0.18,
  },
  {
    src: "/images/technos/postgres.png",
    alt: "PostgreSQL",
    top: "70%",
    left: "5%",
    size: 56,
    rotate: -10,
    opacity: 0.18,
  },
  {
    src: "/images/technos/mongodb.png",
    alt: "MongoDB",
    top: "82%",
    left: "18%",
    size: 56,
    rotate: 10,
    opacity: 0.16,
  },
  {
    src: "/images/technos/firebase.png",
    alt: "Firebase",
    top: "84%",
    left: "86%",
    size: 56,
    rotate: -6,
    opacity: 0.16,
  },
  {
    src: "/images/technos/docker.png",
    alt: "Docker",
    bottom: "48%",
    left: "10%",
    size: 56,
    rotate: -14,
    opacity: 0.14,
  },
  {
    src: "/images/technos/figma.png",
    alt: "Figma",
    top: "44%",
    left: "84%",
    size: 56,
    rotate: 12,
    opacity: 0.14,
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-lg border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/85 backdrop-blur-md">
      {children}
    </span>
  );
}

function TechOrnament({
  src,
  alt,
  top,
  right,
  bottom,
  left,
  size,
  rotate,
  opacity,
}: {
  src: string;
  alt: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  size?: number;
  rotate?: number;
  opacity?: number;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="absolute hidden select-none lg:block"
      style={{
        top,
        right,
        bottom,
        left,
        opacity,
        transform: `rotate(${rotate}deg)`,
        filter: "drop-shadow(0 10px 30px rgba(0,0,0,.35))",
        width: 'auto',
        height: 'auto',
      }}
      loading="eager"
    />
  );
}

const About = () => {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 mt-16 sm:gap-10">
      <section className="relative w-full overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-5 shadow-lg backdrop-blur-md sm:p-8">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/25 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute left-1/2 top-8 h-40 w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="relative grid gap-8 md:grid-cols-[260px_1fr] md:items-center lg:grid-cols-[320px_1fr]">
          <div className="mx-auto w-full max-w-[240px] sm:max-w-[280px]">
            <div className="relative">
              <div className="absolute -inset-2 rounded-[2.25rem] bg-linear-to-br from-white/25 via-white/5 to-transparent blur-md" />
              <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/20 bg-black/10">
                <Image
                  src="/images/profile.jpg"
                  alt="Photo de profil"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 240px, 320px"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/5 to-transparent" />
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold text-white/85">
                Fullstack
              </span>
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold text-white/85">
                Automatisation
              </span>
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold text-white/85">
                IA
              </span>
            </div>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
              Bonjour/Bonsoir{" "}
              <span className="bg-linear-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                👋
              </span>
            </h1>

            <div className="mt-5 grid max-w-3xl gap-3 text-pretty text-white/85">
              <p>
                Je m’appelle Patrick NAMEGNI, développeur Fullstack orienté
                automatisation & IA.
              </p>
              <p>
                Je conçois des interfaces modernes (React/Next.js) et des APIs
                robustes (Node.js, Java, PHP, Python).
              </p>
              <p>
                J’aime transformer des besoins métiers en solutions concrètes,
                maintenables et performantes.
              </p>
              <p>
                Je combine rigueur, autonomie et esprit d’équipe pour livrer
                vite et bien.
              </p>
              <p>
                Aujourd’hui, je recherche une alternance de 2 ans pour
                contribuer à des projets innovants.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-5 shadow-lg backdrop-blur-md sm:p-8">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          {TECH_ORNAMENTS.map((t) => (
            <TechOrnament key={t.src} {...t} />
          ))}
        </div>

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_420px] lg:items-start lg:gap-10">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Mon parcours professionnel jusqu&apos;à présent
            </h2>

            <div className="mt-5 grid gap-4 text-pretty text-white/85">
              <p>
                J’ai démarré en développant des applications web et outils de
                gestion en entreprise, avec une approche très orientée
                livraison, qualité et optimisation.
              </p>
              <p>
                En parallèle de mon cursus, j’ai consolidé un profil fullstack
                (frontend moderne + backend + bases de données), en gardant une
                forte appétence pour l’automatisation et l’analyse de données.
              </p>
              <p>
                Chez HKDigitals, j’ai travaillé sur des algorithmes de matching
                basés sur la géolocalisation et des critères avancés, pour
                améliorer la mise en relation candidats–recruteurs.
              </p>
              <p>
                Depuis 2024, chez TeePy Job, je développe des outils
                d’automatisation à grande échelle (API, XML, pipelines
                d’enrichissement), afin d’accélérer la publication et le ciblage
                d’offres d’emploi.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-2xl border border-white/20 bg-white/5 p-4 sm:p-5">
              <div className="text-sm font-semibold text-white/90">
                Hard skills
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <Tag>JavaScript</Tag>
                <Tag>TypeScript</Tag>
                <Tag>React</Tag>
                <Tag>Next.js</Tag>
                <Tag>React Native</Tag>
                <Tag>TailwindCSS</Tag>
                <Tag>React Native</Tag>
                <Tag>Node.js</Tag>
                <Tag>Java Spring</Tag>
                <Tag>PHP</Tag>
                <Tag>Python</Tag>
                <Tag>MySQL</Tag>
                <Tag>PostgreSQL</Tag>
                <Tag>MongoDB</Tag>
                <Tag>Firebase</Tag>
                <Tag>DevOps CI/CD</Tag>
                <Tag>Docker</Tag>
                <Tag>Figma</Tag>
              </div>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/5 p-4 sm:p-5">
              <div className="text-sm font-semibold text-white/90">
                Soft skills
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <Tag>Autonomie</Tag>
                <Tag>Rigueur</Tag>
                <Tag>Adaptabilité</Tag>
                <Tag>Collaboration</Tag>
                <Tag>Leadership</Tag>
                <Tag>Curiosité</Tag>
                <Tag>Orienté solution</Tag>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About
