import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <section className="container max-w-3xl p-5">
      <p className="mb-5 text-center">
        &copy; {new Date().getFullYear()} <span className="font-bold">Codify</span>.
      </p>
      <p className="mb-5 text-center">All rights reserved.</p>
    </section>
  );
};

export default Footer;
