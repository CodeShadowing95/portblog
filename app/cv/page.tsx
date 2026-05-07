import {
  Briefcase,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  Link2,
  Mail,
  Phone,
  Sparkles,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";

function Card({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-lg backdrop-blur-md">
      <header className="flex items-center gap-3">
        <div className="rounded-xl border border-white/20 bg-white/10 p-2">
          {icon}
        </div>
        <h2 className="text-sm font-semibold tracking-wide text-white/95">
          {title}
        </h2>
      </header>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-black/10 px-3 py-1 text-xs font-medium text-white/85">
      {children}
    </span>
  );
}

function TimelineItem({
  period,
  title,
  subtitle,
  bullets,
}: {
  period: string;
  title: string;
  subtitle: string;
  bullets?: string[];
}) {
  return (
    <div className="grid gap-2 rounded-xl border border-white/15 bg-black/10 p-4">
      <div className="text-xs font-semibold text-white/75">{period}</div>
      <div className="text-base font-semibold text-white">{title}</div>
      <div className="text-sm text-white/85">{subtitle}</div>
      {bullets?.length ? (
        <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-white/85">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default function CvPage() {
  return (
    <main className="mx-auto mt-10 flex w-full max-w-6xl flex-1 flex-col gap-8">
      <header className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-white/20 bg-white/10 p-2 backdrop-blur-md">
              <FileText className="h-5 w-5 text-white/90" />
            </div>
            <h1 className="text-4xl font-semibold tracking-tight">
              Patrick NAMEGNI
            </h1>
          </div>
          <p className="text-sm font-semibold tracking-wide text-white/85">
            DÉVELOPPEUR FULLSTACK | AUTOMATISATION & IA
          </p>
          <p className="max-w-4xl text-pretty text-white/85">
            Major de promotion en Licence, j’allie excellence académique et
            expertise technique en développement Fullstack. Fort de 5+ ans
            d’expérience en automatisation et analyse de données, je recherche
            une alternance de 2 ans pour contribuer à des projets innovants tout
            en renforçant mes compétences.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 pt-1">
          <Button
            asChild
            variant="outline"
            className="border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white"
          >
            <a href="/CV.pdf" download>
              <Download />
              Télécharger
            </a>
          </Button>

          <Button
            asChild
            variant="ghost"
            className="text-white/90 hover:bg-white/10 hover:text-white"
          >
            <a href="/CV.pdf" target="_blank" rel="noreferrer">
              <ExternalLink />
              Ouvrir
            </a>
          </Button>
        </div>
      </header>

      <section className="grid gap-6 lg:grid-cols-[360px_1fr] lg:items-start">
        <div className="grid gap-6">
          <Card title="Informations" icon={<User className="h-5 w-5 text-white/90" />}>
            <div className="grid gap-3 text-sm text-white/85">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-white/80" />
                <span>07 49 74 86 56</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-white/80" />
                <a
                  className="underline-offset-4 hover:underline"
                  href="mailto:patrick.namegni@gmail.com"
                >
                  patrick.namegni@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Link2 className="h-4 w-4 text-white/80" />
                <a
                  className="underline-offset-4 hover:underline"
                  href="https://www.linkedin.com/in/frank-patrick-namegni/"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/frank-patrick-namegni
                </a>
              </div>
              {/* <div className="flex items-center gap-3">
                <User className="h-4 w-4 text-white/80" />
                <span>26 ans</span>
              </div> */}
            </div>
          </Card>

          <Card
            title="Compétences"
            icon={<Sparkles className="h-5 w-5 text-white/90" />}
          >
            <div className="grid gap-5">
              <div>
                <div className="text-xs font-semibold text-white/80">
                  Développement Frontend
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Tag>JavaScript/TypeScript</Tag>
                  <Tag>React/Next.js</Tag>
                  <Tag>TailwindCSS</Tag>
                  <Tag>React Native</Tag>
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold text-white/80">
                  Ingénierie Backend
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Tag>Node.js</Tag>
                  <Tag>Java (Spring Boot)</Tag>
                  <Tag>PHP</Tag>
                  <Tag>Python</Tag>
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold text-white/80">
                  Bases de données
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Tag>MySQL</Tag>
                  <Tag>PostgreSQL</Tag>
                  <Tag>MongoDB</Tag>
                  <Tag>Firebase</Tag>
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold text-white/80">Autres</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Tag>Wordpress</Tag>
                  <Tag>Bubble.io</Tag>
                  <Tag>Figma</Tag>
                  <Tag>CI/CD Azure DevOps</Tag>
                </div>
              </div>
            </div>
          </Card>

          <Card
            title="Soft Skills"
            icon={<User className="h-5 w-5 text-white/90" />}
          >
            <ul className="grid gap-2 text-sm text-white/85">
              <li>Autonomie et rigueur</li>
              <li>Orienté solutions</li>
              <li>Apprentissage et adaptabilité</li>
              <li>Collaboration avec des équipes</li>
              <li>Développement personnel (charisme, leadership)</li>
            </ul>
          </Card>

          <Card
            title="Centres d’intérêt"
            icon={<Sparkles className="h-5 w-5 text-white/90" />}
          >
            <ul className="grid gap-2 text-sm text-white/85">
              <li>Veille technologique</li>
              <li>Actualités internationales</li>
              <li>Calisthénie</li>
            </ul>
          </Card>
        </div>

        <div className="grid gap-6">
          <Card
            title="Expérience Professionnelle"
            icon={<Briefcase className="h-5 w-5 text-white/90" />}
          >
            <div className="grid gap-4">
              <TimelineItem
                period="Depuis septembre 2024"
                title="TeePy Job — Alternance"
                subtitle="Développeur Web — Automatisation"
                bullets={[
                  "Développement d’un outil d’automatisation de publication des offres d’emploi, réduisant de 90 % le temps de traitement manuel.",
                  "Intégration d’API et de flux XML pour gérer plus de 250 000 offres d’emploi.",
                  "Création d’un pipeline d’analyse des annonces avec filtrage et enrichissement (catégorisation, géolocalisation) sur plus de 200 000 profils séniors.",
                  "Amélioration de 40% de la rapidité de publication et du ciblage.",
                ]}
              />

              <TimelineItem
                period="Juillet 2023 — Septembre 2023"
                title="HKDigitals — Stage"
                subtitle="Développeur Web Fullstack"
                bullets={[
                  "Développement d'algorithmes de matching basés sur la géolocalisation et critères avancés, augmentant de 30 % le taux de mise en relation candidats-recruteurs.",
                ]}
              />

              <TimelineItem
                period="Octobre 2018 — Juillet 2021"
                title="Univers Binaire SARL — Stage & CDI"
                subtitle="Développeur Web & Applications"
                bullets={[
                  "Participation à la conception et à l’optimisation de 10+ applications de gestion destinées à la commercialisation.",
                  "Conception d’un outil d’extraction automatique de données de 30+ sites web et bases d’entreprises afin d’identifier des prospects qualifiés.",
                  "Déploiement d’un système de filtrage et analyse des prospects, améliorant la précision du ciblage de 60 %.",
                ]}
              />
            </div>
          </Card>

          <Card
            title="Projets Innovants"
            icon={<Sparkles className="h-5 w-5 text-white/90" />}
          >
            <div className="grid gap-4">
              <TimelineItem
                period="IA"
                title="Système de recommandations IA"
                subtitle="Système de suggestions de restaurants en fonction des préférences exprimées par l’utilisateur via des prompts textuels, utilisant une base de données géospatiale pour proposer des restaurants."
              />
              <TimelineItem
                period="IA"
                title="Application IA pour sans-abri"
                subtitle="Utilisant NLP et géolocalisation pour connecter les sans-abri (via des bornes) aux ressources locales (distributions alimentaires, emploi, logement, assistance), avec prédiction des besoins via Machine Learning."
              />
            </div>
          </Card>

          <Card
            title="Formation"
            icon={<GraduationCap className="h-5 w-5 text-white/90" />}
          >
            <div className="grid gap-4">
              <TimelineItem
                period="2024 — 2026"
                title="Master 1 & 2 — Expert en développement web"
                subtitle="École YNOV Lyon"
              />
              <TimelineItem
                period="2022 — 2024"
                title="Bachelor — Management de projets informatiques"
                subtitle="École ÉSTIAM Lyon — Major de promotion"
              />
              <TimelineItem
                period="2015 — 2018"
                title="Bachelor — Conception & Développement d'applications"
                subtitle="IAI-Cameroun Yaoundé, Cameroun"
              />
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
