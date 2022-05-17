import type { NextPage } from "next";
import Link from "next/link";

const NavBar: NextPage = () => {
  return (
    <nav className="container max-w-3xl p-5">
      <div className="flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 text-lg font-bold" aria-label="Home">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Codify
          </a>
        </Link>
        <ul className="flex gap-5">
          <li>
            <Link href="/">
              <a className="hover:text-blue-600" aria-label="Home">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="px-3 py-2 text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-500">Play</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
