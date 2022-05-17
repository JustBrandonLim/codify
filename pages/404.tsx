import type { NextPage } from "next";
import Link from "next/link";

const Custom404: NextPage = () => {
  return (
    <section id="contribute" className="container max-w-3xl min-h-screen p-5 mt-10">
      <h1 className="mb-5 text-3xl font-bold md:text-5xl">Page Not Found</h1>
      <p className="mb-5">
        Click{" "}
        <Link href="/">
          <a className="text-blue-600 underline underline-offset-2 hover:text-blue-500" aria-label="Home">
            here
          </a>
        </Link>{" "}
        to go home.
      </p>
    </section>
  );
};

export default Custom404;
