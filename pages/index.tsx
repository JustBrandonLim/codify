import type { NextPage } from "next";
import SearchEngineOptimization from "@components/SearchEngineOptimization";
import Link from "next/link";
import TestimonialCard from "@components/TestimonialCard";

const Home: NextPage = () => {
  return (
    <>
      <SearchEngineOptimization />
      <section className="container max-w-3xl p-5">
        <h1 className="mb-5 text-3xl font-extrabold text-center md:text-5xl">Start learning with Codify today.</h1>
        <p className="mb-5 text-center">
          <span className="font-bold">Codify</span> consists of simple quizzes to test your programming knowledge!
        </p>
        <div className="flex items-center justify-center gap-5">
          <Link href="/play">
            <a
              className="px-3 py-2 text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-500"
              aria-label="Play now"
            >
              Play now
            </a>
          </Link>
          <Link href="/#contribute">
            <a
              className="px-3 py-2 text-black transition-colors duration-300 bg-white rounded-lg shadow-lg hover:bg-neutral-100"
              aria-label="Contribute"
            >
              Contribute
            </a>
          </Link>
        </div>
      </section>
      <section className="container max-w-3xl p-5 mt-10">
        <h2 className="mb-5 text-xl font-bold md:text-3xl">Let&apos;s hear from others</h2>
        <div className="grid items-stretch justify-center grid-cols-1 gap-5 md:grid-cols-2">
          <TestimonialCard name="Alford" role="Apprentice" description="Codify has helped me build up confidence in my programming significantly." />
          <TestimonialCard
            name="Chun Guan"
            role="Student"
            description="Codify has helped me to study much more efficiently for my programming modules."
          />
        </div>
      </section>
      <section className="container max-w-3xl p-5 mt-10">
        <h2 className="mb-5 text-xl font-bold md:text-3xl">How it works</h2>
        <p className="mb-5">
          <span className="font-bold">Codify</span> works by getting a set of questions from a question bank for the specific programming language
          that you choose.
        </p>
        <p className="mb-5">You are then presented with the questions in a series of cards.</p>
        <p className="mb-5">Answering questions correctly will yield you points.</p>
        <p>At the end of the quiz, you are shown the final tabulated score.</p>
      </section>
      <section id="contribute" className="container max-w-3xl p-5 mt-10">
        <h2 className="mb-5 text-xl font-bold md:text-3xl">How to contribute</h2>
        <p className="mb-5">
          You can contribute to our GitHub repository{" "}
          <a
            className="text-blue-600 underline underline-offset-2 hover:text-blue-500"
            href="https://github.com/JustBrandonLim/codify"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
        <p>
          <span className="font-bold">Codify</span> will always remain open-sourced.
        </p>
      </section>
      <section className="container max-w-3xl p-5 mt-10">
        <h2 className="mb-5 text-xl font-bold md:text-3xl">Credits</h2>
        <p className="mb-5">
          Made with{" "}
          <a
            className="text-blue-600 underline underline-offset-2 hover:text-blue-500"
            href="https://nextjs.org/"
            aria-label="@JustBrandonLim"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            className="text-blue-600 underline underline-offset-2 hover:text-blue-500"
            href="https://tailwindcss.com/"
            aria-label="TailwindCSS"
            target="_blank"
            rel="noopener noreferrer"
          >
            TailwindCSS
          </a>
          .
        </p>
        <p className="mb-5">
          Powered by{" "}
          <a
            className="text-blue-600 underline underline-offset-2 hover:text-blue-500"
            href="https://vercel.com/"
            aria-label="Vercel"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel
          </a>
          .
        </p>
        <p className="mb-5">
          Built by{" "}
          <a
            className="text-blue-600 underline underline-offset-2 hover:text-blue-500"
            href="https://github.com/JustBrandonLim"
            aria-label="@JustBrandonLim"
            target="_blank"
            rel="noopener noreferrer"
          >
            @JustBrandonLim
          </a>
          .
        </p>
      </section>
    </>
  );
};

export default Home;
