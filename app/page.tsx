import { Square } from "lucide-react";

const Home = () => {
  return (
    <main className="flex flex-1 flex-col">
      <div className="flex flex-1 items-center">
        <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-10">
          <section className="flex w-full items-center justify-between gap-6">
            <div className="text-5xl leading-none sm:text-6xl">🧑🏿‍💻</div>
            <h1 className="text-right text-5xl font-semibold leading-none tracking-tight sm:text-7xl lg:text-8xl">
              Patrick
              <br />
              NAMEGNI
            </h1>
          </section>

          <section className="flex w-full flex-col justify-between gap-10 sm:flex-row sm:items-start">
            <div className="flex max-w-xl items-start gap-4">
              <Square className="mt-1 h-7 w-7 text-white/90" />
              <div>
                <div className="text-2xl font-semibold">(B;/)</div>
                <p className="mt-2 text-pretty text-white/85">
                  Motivé, curieux et rigoureux, j’apprends vite et je m’adapte
                  facilement pour livrer des interfaces propres et efficaces.
                </p>
              </div>
            </div>

            <div className="max-w-xl">
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

      <footer className="mx-auto mt-auto w-full max-w-6xl">
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-white/85">
          <li>Curiosité naturelle</li>
          <li>Autonomie flexible</li>
          <li>Rigueur constante</li>
          <li>Esprit d’équipe</li>
          <li>Créativité active</li>
          <li>Solution orientée</li>
        </ul>
      </footer>
    </main>
  );
};

export default Home
