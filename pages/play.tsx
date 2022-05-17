import SearchEngineOptimization from "@components/SearchEngineOptimization";
import type { NextPage } from "next";

const Play: NextPage = () => {
  return (
    <>
      <SearchEngineOptimization title="Play" url="play" />
      <section id="contribute" className="container max-w-3xl min-h-screen p-5 mt-10">
        <h1 className="mb-5 text-3xl font-bold md:text-5xl">Play</h1>
        <p className="mb-5">Coming soon!</p>
      </section>
    </>
  );
};

export default Play;
