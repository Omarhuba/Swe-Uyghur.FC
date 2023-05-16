import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { BsPlayCircle } from "react-icons/bs";
import { MatchDay } from "../components/matchDay/MatchDay";
import { Aktivitet } from "../components/Aktivitet";
import useMediaQuery from "../hooks/useMediaQuery";
import img_5 from "../assets/images/2.jpg";

export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 860px");
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
          <div className=" flex justify-center items-end lg:items-center">
            {/* <video src='/videos/video-1.mp4' autoPlay muted loop/> */}
            {isDesktop ? (
              <video
                className="object-cover w-full max-h-full relative z-0"
                src="/videos/football.mp4"
                autoPlay
                muted
                loop
              />
            ) : (
              <Image src={img_5} alt="image" />
            )}
            <div className=" absolute flex flex-col justify-center items-center mb-10">
              <h1 className="lg:text-6xl text-xl text-white font-poppins font-bold">
                Swe-Uyghur .FC
              </h1>
              <p className="text-xl lg:text-5xl  lg:p-8 text-white font-poppins ">
                What Are You Waiting For?
              </p>
              <div className="flex gap-4">
                <Link
                  href="/auth/login"
                  className="text-sm  border-solid border-2 border-white lg:text-2xl  p-2 text-white hover:text-black hover:bg-white"
                >
                  GET STARTED
                </Link>
                <Link
                  href="/photos"
                  className="flex text-sm  items-center border-solid border-2 border-white lg:text-2xl py-1 px-2 lg:px-4 lg:py-2 bg-white hover:bg-none"
                >
                  VIDEOS <BsPlayCircle className="ml-3 text-xl sm:text-3xl" />
                </Link>
              </div>
            </div>
          </div>
          {/* <ShowcaseItem  /> */}
          <MatchDay />
          <Aktivitet />
        </div>
      </main>
    </div>
  );
}
