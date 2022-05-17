import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Logo from "@images/logo.png";

const NavBar: NextPage = () => {
  return (
    <nav className="container max-w-3xl p-5">
      <div className="flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 text-lg font-bold" aria-label="Home">
            <Image src={Logo} alt="Brandon Lim" layout="fixed" width={50} height={50} quality={100} placeholder="blur" />
            Codify
          </a>
        </Link>
        <ul>
          <li>
            <Link href="/play">
              <a className="px-3 py-2 text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-500" aria-label="Play">
                Play
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
