import React from "react";
import Link from "next/link";
import { SiTypo3 } from "react-icons/si";

import { BsFacebook, BsYoutube, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" flex flex-col justify-center items-center p-4 bg-gray-800 ">
      <section className="flex flex-col justify-center items-center text-center text-white mb-4 p-6">
        <h1 className="text-2xl sm:text-4xl sm:py-6 mb-4 font-poppins">
          Welcome To Our Football Club and Join Us!
        </h1>
        <p className="text-xl mb-6 sm:text-2xl font-poppins">
          You can subscrip any time.
        </p>
        <div className="flex justify-center items-center max-w-3xl">
          <input
            className="min-w-[10rem] sm:min-w-[30rem] px-4 py-2   text-black outline-4"
            type="mail"
            placeholder="Type Your Email Here..."
          />
          <button className="border-2 ml-4 p-2">Subscrip</button>
        </div>
      </section>
      <div className="flex justify-center  mt-10 mb-10">
        <div className="grid grid-cols-2 gap-8 xl:flex ">
          <div className="flex flex-col items-start  w-40 text-white">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">About Us</h2>
            <Link href={"/"} className="text-sm sm:text-base">
              How it works
            </Link>
            <Link href={"/"} className="text-sm sm:text-base">
              About Teams
            </Link>
            <Link href={"/"} className="text-sm sm:text-base">
              Docs
            </Link>
          </div>
          <div className="flex flex-col items-start  w-40 text-white">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Contact Us</h2>
            <Link href={"/"} className="text-sm sm:text-base">
              Contact
            </Link>
            <Link href={"/"} className="text-sm sm:text-base">
              Support
            </Link>
            <Link href={"/"} className="text-sm sm:text-base">
              Help
            </Link>
          </div>
          <div className="flex flex-col items-start  w-40 text-white">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Resources</h2>
            <Link href={"/"} className="text-sm sm:text-base">
              Blog
            </Link>
            <Link href={"/"} className="text-sm sm:text-base">
              Learn More
            </Link>
          </div>
          <div className="flex flex-col items-start  w-40 text-white">
            <h2 className="text-xl  sm:text-2xl font-bold mb-2">Join Us</h2>
            <Link href={"/"} className="text-sm sm:text-base">
              Get Started
            </Link>
            <Link href={"/"} className="text-sm sm:text-base">
              Subscrip
            </Link>
          </div>
        </div>
      </div>
      <section className=" ">
        <div className="flex justify-between items-center flex-col xl:flex xl:w-full">
          <div className="flex text-white justify-center items-center cursor-pointer text-2xl py-2  ">
            <Link className="flex" href="/">
              Swe-Uyghur FC <SiTypo3 className="pl-2 text-3xl" />
            </Link>
          </div>
          <small className=" text-white flex justify-center items-center py-2">
            SweUyghur © 2022
          </small>
          <div className="flex justify-center items-center gap-8 py-2">
            <Link
              className="social-icon-link facebook"
              href="/"
              target="_blank"
              area-aria-label="Facebook"
            >
              <BsFacebook className="text-4xl text-white" />
            </Link>
            <Link
              className="social-icon-link instagram"
              href="/"
              target="_blank"
              area-aria-label="Instagram"
            >
              <BsInstagram className="text-4xl text-white" />
            </Link>
            <Link
              className="social-icon-link youtube"
              href="/"
              target="_blank"
              area-aria-label="Youtube"
            >
              <BsYoutube className="text-4xl text-white" />
            </Link>
            <Link
              className="social-icon-link twitter"
              href="/"
              target="_blank"
              area-aria-label="Twitter"
            >
              <BsTwitter className="text-4xl text-white" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
