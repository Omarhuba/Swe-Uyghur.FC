import React from "react";
import { ShowCase } from "../components/showcase/ShowCase";
import Image from "next/image";
import programs from "../assets/showcase/program.json";

const Photos = () => {
  return (
    <div className="flex items-center flex-col  ">
      <h1 className="text-2xl sm:text-6xl text-white font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-500 py-4">
        Football Legends
      </h1>
      <ShowCase autoSlide={true}>
        {[
          ...programs.map((images) => (
            <Image
              key={images.id}
              className=" flex sm:h-[480px] sm:w-[800px] gap-6 rounded-3xl px-1"
              src={require(`../assets/showcase/${images.img_name}.png`)}
              alt="image"
            />
          )),
        ]}
      </ShowCase>
      <div className="bg-yellow-700 min-h-screen w-full">
        <h1 className="text-2xl text-center py-12">
          Våran photo ska vara här med som image galeri{" "}
        </h1>
        <div></div>
      </div>
    </div>
  );
};

export default Photos;
