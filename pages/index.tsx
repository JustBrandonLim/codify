import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <section className="container max-w-3xl p-5">
        <h1 className="mb-5 text-3xl font-extrabold text-center md:text-5xl">Start learning with Codify today.</h1>
        <p className="mb-5 text-center">
          <span className="font-bold">Codify</span> consists of simple quizzes to test your programming knowledge!
        </p>
        <div className="flex items-center justify-center gap-5">
          <Link href="/play">
            <a className="px-3 py-2 text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-500">Try now</a>
          </Link>
          <Link href="/#contribute">
            <a className="px-3 py-2 text-black transition-colors duration-300 rounded-lg shadow-lg hover:bg-neutral-100">Contribute</a>
          </Link>
        </div>
      </section>
      <section className="container max-w-3xl p-5 mt-10">
        <h2 className="mb-5 text-xl font-bold md:text-3xl">Let&apos;s hear from others</h2>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="p-5 rounded-lg shadow-lg bg-neutral-100">
            <h4 className="mb-5 font-bold">John Doe</h4>
            <p>
              <span className="inline-block mr-5">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M96 224C84.72 224 74.05 226.3 64 229.9V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32S145.7 96 128 96C57.42 96 0 153.4 0 224v96c0 53.02 42.98 96 96 96s96-42.98 96-96S149 224 96 224zM352 224c-11.28 0-21.95 2.305-32 5.879V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32s-14.33-32-32-32c-70.58 0-128 57.42-128 128v96c0 53.02 42.98 96 96 96s96-42.98 96-96S405 224 352 224z" />
                </svg>
              </span>
              <span className="font-bold">Codify</span> has helped me to study much more efficiently for my programming modules.
            </p>
          </div>
          <div className="p-5 rounded-lg shadow-lg bg-neutral-100">
            <h4 className="mb-5 font-bold">John Doe</h4>
            <p>
              <span className="inline-block mr-5">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M96 224C84.72 224 74.05 226.3 64 229.9V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32S145.7 96 128 96C57.42 96 0 153.4 0 224v96c0 53.02 42.98 96 96 96s96-42.98 96-96S149 224 96 224zM352 224c-11.28 0-21.95 2.305-32 5.879V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32s-14.33-32-32-32c-70.58 0-128 57.42-128 128v96c0 53.02 42.98 96 96 96s96-42.98 96-96S405 224 352 224z" />
                </svg>
              </span>
              <span className="font-bold">Codify</span> has helped me to study much more efficiently for my programming modules.
            </p>
          </div>
        </div>
      </section>
      <section className="container max-w-3xl p-5 mt-10">
        <h2 className="mb-5 text-xl font-bold md:text-3xl">How it works</h2>
        <p className="mb-5">
          <span className="font-bold">Codify</span> works by getting a set of questions from a question bank for the specific programming language
          that you choose.
        </p>
        <p className="mb-5">You are then presented with the questions in a deck of cards.</p>
        <p className="mb-5">Answering questions correctly will yield points.</p>
        <p>At the end of the quiz, you are shown the final tabulated score.</p>
      </section>
      <section id="contribute" className="container max-w-3xl p-5 mt-10">
        <h2 className="mb-5 text-xl font-bold md:text-3xl">How to contribute</h2>
        <p className="mb-5">
          You can contribute by checking out our GitHub repository{" "}
          <a className="text-blue-600 underline underline-offset-2 hover:text-blue-500" href="https://github.com">
            here
          </a>
          .
        </p>
        <p>
          <span className="font-bold">Codify</span> will always remain open-sourced.
        </p>
      </section>
    </>
  );
};

export default Home;
