import type { NextPage } from "next";
import SearchEngineOptimization from "@components/SearchEngineOptimization";
import Data from "../data";
import Link from "next/link";

const Play: NextPage = () => {
  return (
    <>
      <SearchEngineOptimization title="Play" url="play" />
      <section id="contribute" className="container max-w-3xl min-h-screen p-5 mt-10">
        <h1 className="mb-5 text-3xl font-bold md:text-5xl">Play</h1>
        <p className="mb-5">
          Welcome to <span className="font-bold">Codify</span>!
        </p>
        <p className="mb-5">Click a programming language below to start your quiz.</p>
        <div className="p-5 rounded-lg shadow-lg bg-neutral-100">
          <h4 className="mb-5 font-bold">Programming Languages</h4>
          <div className="grid items-center grid-cols-1 gap-5 justify-evenly md:grid-cols-3">
            {Data.programmingLanguages.map((programmingLanguage) => (
              <Link href={"/play/" + programmingLanguage.slug} key={programmingLanguage.slug}>
                <a
                  className="px-3 py-2 text-center text-black transition-colors duration-300 rounded-lg shadow-lg hover:bg-blue-600 hover:text-white bg-neutral-300"
                  aria-label={programmingLanguage.name}
                >
                  {programmingLanguage.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Play;
