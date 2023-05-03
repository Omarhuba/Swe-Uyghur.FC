/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from "react";
import Link from "next/link";
import { SiTypo3 } from "react-icons/si";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";

export const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <nav className="flex justify-between bg-slate-800 hover:bg-slate-950 hover:duration-700 w-full sticky top-0 z-50 opacity-95">
      <Link href={"/"}>
        <article className="flex justify-center items-center w-10 sm:w-48 gap-2">
          <h2 className="sm:flex hidden  items-center text-4xl text-white ">
            Swe-UG
          </h2>
          <SiTypo3 className="text-white text-4xl sm:3xl" />
        </article>
      </Link>
      <ul className="flex items-center gap-3">
        <li className=" text-md sm:text-xl sm:px-4 text-red-600-700 text-gray-500 hover:text-white hover:duration-700">
          <Link href="/">Home</Link>
        </li>
        <li className=" text-md sm:text-xl sm:px-4 text-red-600-700 text-gray-500 hover:text-white hover:duration-700">
          <Link href="/photos">Photos</Link>
        </li>
        <li className=" text-md sm:text-xl sm:px-4 text-red-600-700 text-gray-500 hover:text-white hover:duration-700">
          <Link href="/posts">Posts</Link>
        </li>
        <li className=" text-md sm:text-xl sm:px-4 text-red-600-700 text-gray-500 hover:text-white hover:duration-700">
          <Link href="/about">About</Link>
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
            className="py-1 px-4 bg-cyan-600 text-white rounded-xl font-medium"
          >
            Login
          </Link>
        )}
      </ul>
    </nav>
  );
};
