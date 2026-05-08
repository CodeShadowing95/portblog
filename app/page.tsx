import { Square } from "lucide-react";

const Home = () => {
  const qualities = [
    "Curiosité naturelle",
    "Autonomie flexible",
    "Rigueur constante",
    "Esprit d’équipe",
    "Créativité active",
    "Solution orientée",
  ];

  return (
    <main className="flex flex-1 flex-col">
      <div className="flex flex-1 items-center">
        <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-10">
          <section className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row sm:items-center">
            <div className="text-6xl leading-none sm:text-6xl lg:text-7xl">
              🧑🏿‍💻
            </div>
            <h1 className="text-center text-5xl font-semibold leading-none tracking-tight sm:text-right sm:text-7xl lg:text-8xl">
              Patrick
              <br />
              NAMEGNI
            </h1>
          </section>

          <section className="flex w-full flex-col justify-between gap-10 sm:flex-row sm:items-start">
            <div className="flex max-w-xl items-start gap-4">
              <Square className="mt-1 h-7 w-7 text-white/90 shrink-0 hidden sm:block" />
              <div>
                <div className="text-2xl font-semibold">(B;/)</div>
                <p className="mt-2 text-pretty text-white/85">
                  Motivé, curieux et rigoureux, j’apprends vite et je m’adapte
                  facilement pour livrer des interfaces propres et efficaces.
                </p>
              </div>
            </div>

            <div className="max-w-xl sm:text-right">
              <div className="text-2xl font-semibold">(A;/)</div>
              <p className="mt-2 text-pretty text-white/85">
                Je peux propulser les projets d’entreprise en structurant les
                idées, en priorisant l’impact et en transformant les besoins en
                solutions concrètes et maintenables.
              </p>
            </div>
          </section>
        </div>
      </div>

      <footer className="mx-auto sm:mt-auto mt-10 w-full max-w-6xl">
        <div className="flex flex-wrap items-center justify-center gap-y-2 text-sm font-medium text-white/85">
          {qualities.map((q, idx) => (
            <span key={q} className="inline-flex items-center">
              <span>{q}</span>
              {idx < qualities.length - 1 ? (
                <span
                  className="px-2 text-white/55 sm:px-4"
                  aria-hidden="true"
                >
                  ·
                </span>
              ) : null}
            </span>
          ))}
        </div>
      </footer>
    </main>
  );
};

export default Home
