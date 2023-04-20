/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from "react";
import Link from "next/link";
import { SiTypo3 } from "react-icons/si";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <nav className="flex justify-between bg-slate-700 hover:bg-gray-800 hover:duration-700 w-full sticky top-0 z-50">
      <Link href={"/"}>
        <h2 className="flex  items-center text-2xl text-white p-4">
          Swe-UG
          <SiTypo3 className="pl-2 text-3xl" />
        </h2>
      </Link>
      <ul className="flex items-center w-full max-w-lg">
        <li className="m-2 p-2 text-xl text-red-600-700 text-gray-500 hover:text-white hover:duration-700">
          <Link href="/">Home</Link>
        </li>
        <li className="m-2 p-2 text-xl text-red-600-700 text-gray-500 hover:text-white hover:duration-700">
          <Link href="/photos">Photos</Link>
        </li>
        <li className="m-2 p-2 text-xl text-red-600-700 text-gray-500 hover:text-white hover:duration-700">
          <Link href="/posts">Posts</Link>
        </li>
        <li className="m-2 p-2 text-xl text-red-600-700 text-gray-500 hover:text-white hover:duration-700">
          <Link href="/about">About</Link>
        </li>
        {user && (
          <>
            <div className="flex">
              <Link href="/dashboard">
                <img
                  className="w-12 rounded-full cursor-pointer mr-4 ml-10"
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

export default Navbar;
