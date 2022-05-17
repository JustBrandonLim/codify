import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import SearchEngineOptimization from "@components/SearchEngineOptimization";
import Data from "../../data";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Play: NextPage = () => {
  const slug = useRouter().query.slug;

  const programmingLanguage = Data.programmingLanguages.filter((programmingLanguage) => programmingLanguage.slug === slug)[0];
  const cards = programmingLanguage.questions;

  const [totalScore, setTotalScore] = React.useState<number>(0);
  const [cardIndex, setCardIndex] = React.useState<number>(0);
  const [hasCompleted, setHasCompleted] = React.useState<boolean>(false);

  const handleSelect = (index: number) => {
    if (cards && cards[cardIndex].answer == index) setTotalScore((totalScore) => totalScore + 300);

    if (cards && cardIndex + 1 < cards.length) setCardIndex((cardIndex) => cardIndex + 1);
    else setHasCompleted(() => true);
  };

  const handleShare = () => {
    if (cards)
      navigator.clipboard.writeText(
        "I scored " + totalScore + " on Codify!\nCan you beat my score?\nTry it at https://codify.justbrandonlim.com/play now!"
      );
  };

  if (cards)
    if (hasCompleted)
      return (
        <>
          <SearchEngineOptimization title="Play" url="play" />
          <section id="contribute" className="container max-w-3xl min-h-screen p-5 mt-10">
            <h1 className="mb-5 text-3xl font-bold md:text-5xl">Play</h1>
            <p className="mb-5">
              Welcome to <span className="font-bold">Codify</span> for <span className="font-bold capitalize">{programmingLanguage.name}</span>!
            </p>
            <p className="mb-5">
              {totalScore >= (cards.length * 300) / 2 ? "Congratulations! You have passed the quiz!" : "Oh no! You did not pass the quiz!"}
            </p>
            <div className="p-5 rounded-lg shadow-lg bg-neutral-100">
              <h4 className="mb-5 font-bold">Results</h4>
              <p className="mb-5">Total Score: {totalScore}</p>
              <p className="mb-5">
                Thank you for using <span className="font-bold">Codify</span>!
              </p>
              <div className="flex items-center justify-center gap-5">
                <button
                  className="px-3 py-2 text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-500"
                  onClick={() => handleShare()}
                  aria-label="Share"
                >
                  Share
                </button>
                <Link href="/play">
                  <a
                    className="px-3 py-2 text-black transition-colors duration-300 bg-white rounded-lg shadow-lg hover:bg-neutral-100"
                    aria-label="Back"
                  >
                    Back
                  </a>
                </Link>
              </div>
            </div>
          </section>
        </>
      );
    else
      return (
        <>
          <SearchEngineOptimization title="Play" url="play" />
          <section id="contribute" className="container max-w-3xl min-h-screen p-5 mt-10">
            <h1 className="mb-5 text-3xl font-bold md:text-5xl">Play</h1>
            <p className="mb-5">
              Welcome to <span className="font-bold">Codify</span> for <span className="font-bold capitalize">{programmingLanguage.name}</span>!
            </p>
            <p className="mb-5">Your current score is {totalScore}.</p>
            <div className="p-5 rounded-lg shadow-lg bg-neutral-100">
              <h4 className="mb-5 font-bold">Question {cardIndex + 1}</h4>
              <p className="mb-5">{cards[cardIndex].question}</p>
              <div className="flex flex-col gap-5 md:items-center md:flex-row">
                {cards[cardIndex].options.map((option, index) => (
                  <button
                    className="px-3 py-2 text-center text-black transition-colors duration-300 rounded-lg shadow-lg hover:bg-blue-600 hover:text-white bg-neutral-300"
                    onClick={() => handleSelect(index)}
                    aria-label={option}
                    key={index}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </section>
        </>
      );

  return (
    <>
      <SearchEngineOptimization title="Play" url="play" />
      <section id="contribute" className="container max-w-3xl min-h-screen p-5 mt-10">
        <h1 className="mb-5 text-3xl font-bold md:text-5xl">Play</h1>
        <p className="mb-5">Something went wrong!</p>
      </section>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const works = Data.programmingLanguages.map((programmingLanguage) => ({
    params: { slug: programmingLanguage.slug },
  }));

  return {
    paths: works,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug;
  const programmingLanguage = Data.programmingLanguages.find((programmingLanguage) => programmingLanguage.slug === slug);

  return {
    props: {
      programmingLanguage: programmingLanguage,
    },
  };
};

export default Play;
