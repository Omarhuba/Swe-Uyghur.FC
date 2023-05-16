/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from "react";
import Link from "next/link";
import { SiTypo3 } from "react-icons/si";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
// import logo from "../assets/images/matchday.png";
import logo from "../assets/logo.png";
import Image from "next/image";
import { useState } from "react";

export const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <nav className="flex justify-between bg-slate-800 hover:bg-slate-950 hover:duration-700 w-full sticky top-0 z-50 opacity-95">
      <Link href={"/"}>
        <article className="flex justify-center items-center w-18 sm:w-48 gap-2">
          <h2 className="sm:flex hidden  items-center text-3xl text-white ">
            Swe-UG
          </h2>
          {/* <Image className="w-16" src={logo} alt="img" priority={true} /> */}
          <SiTypo3 className="text-white text-4xl sm:3xl" />
        </article>
      </Link>
      <ul className="flex items-center gap-2  ">
        <li className=" text-md sm:text-xl lg:px-3 text-red-600-700 text-gray-500 hover:text-white hover:duration-700">
          <Link href="/news">Nyheter</Link>
        </li>
        <li className=" text-md sm:text-xl lg:px-3 text-red-600-700 text-gray-500 hover:text-white hover:duration-700">
          <Link href="/posts">Inlägg</Link>
        </li>
        <li className=" text-md sm:text-xl lg:px-3 text-red-600-700 text-gray-500 hover:text-white hover:duration-700">
          <Link href="/photos">Bilder</Link>
        </li>
        <li className=" text-md sm:text-xl lg:px-3 text-red-600-700 text-gray-500 hover:text-white hover:duration-700">
          <Link href="/about">Om Oss</Link>
        </li>
        {user && (
          <>
            <div className="flex">
              <Link href="/dashboard">
                <img
                  className="sm:w-14 w-8 rounded-full cursor-pointer sm:ml-6 "
                  src={user.photoURL}
                  alt="img"
                />
              </Link>
              {/* <h3 className="text-l text-white">{user.displayName}</h3> */}
            </div>
          </>
        )}
        {!user && (
          <Link
            href={"/auth/login"}
            className="py-1 px-2 bg-cyan-600 text-white rounded-xl font-medium"
          >
            Login
          </Link>
        )}
      </ul>
    </nav>
  );
};
