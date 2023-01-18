import React from "react";
import Link from "next/link";
import { SiTypo3 } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-slate-600">
      <Link href={"/"}>
        <h2 className="flex  items-center text-2xl text-white p-4">
          Swe-UG
          <SiTypo3 className="pl-2 text-3xl"/>
        </h2>
      </Link>
      <ul className="flex items-center w-full max-w-lg">
        <li className="m-2 p-2 text-xl text-red-600-700 text-white hover:text-cyan-400 hover:duration-700">
          <Link href="/">Home</Link>
        </li>
        <li className="m-2 p-2 text-xl text-red-600-700 text-white hover:text-cyan-400 hover:duration-700">
          <Link href="/about">Photos</Link>
        </li>
        <li className="m-2 p-2 text-xl text-red-600-700 text-white hover:text-cyan-400 hover:duration-700">
          <Link href="/about">Posts</Link>
        </li>
        <li className="m-2 p-2 text-xl text-red-600-700 text-white hover:text-cyan-400 hover:duration-700">
          <Link href="/about">About</Link>
        </li>
        <Link href={"/auth/login"} className="py-1 px-4 bg-cyan-600 text-white rounded-xl font-medium">Login</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
