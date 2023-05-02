import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { BsPlayCircle } from "react-icons/bs";
import { MatchDay } from "../components/MatchDay";
import { Aktivitet } from "../components/Aktivitet";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Swe-Uyghur .FC</title>
        <meta name="description" content="Sverige Uyghur fottball team." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <div className=" flex justify-center items-center">
            {/* <video src='/videos/video-1.mp4' autoPlay muted loop/> */}
            <video
              className="object-cover w-full max-h-full relative z-0"
              src="/videos/football.mp4"
              autoPlay
              muted
              loop
            />
            <div className=" absolute flex flex-col justify-center items-center ">
              <h1 className="sm:text-6xl text-xl text-white font-poppins font-bold">
                Swe-Uyghur .FC
              </h1>
              <p className="text-xl sm:text-3xl lg:text-5xl sm:p-8 p-2 text-white font-poppins ">
                What Are You Waiting For?
              </p>
              <div className="flex gap-4">
                <Link
                  href="/auth/login"
                  className="text-sm  border-solid border-4 border-white sm:text-2xl p-2  text-white hover:text-black hover:bg-white"
                >
                  GET STARTED
                </Link>
                <Link
                  href="/photos"
                  className="flex text-sm  items-center border-solid border-2 border-white sm:text-2xl py-2 px-4  bg-white hover:bg-none"
                >
                  VIDEOS <BsPlayCircle className="ml-3 text-xl sm:text-3xl" />
                </Link>
              </div>
            </div>
          </div>
          {/* <ShowcaseItem  /> */}
          <MatchDay />
          {/* <Aktivitet /> */}
        </div>
      </main>
    </div>
  );
}
