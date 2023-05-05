import React, { useState } from "react";
import { ShowCase } from "../components/showcase/ShowCase";
import Image from "next/image";
import programs from "../assets/showcase/program.json";
import { TeamImages } from "../components/images/TeamImages";

const Photos = () => {
  return (
    <div className="flex items-center flex-col  ">
      <h1 className="text-2xl sm:text-6xl text-white font-bold bg-clip-text text-transparent bg-cyan-700 py-4">
        Football Legends
      </h1>
      <ShowCase autoSlide={true}>
        {[
          ...programs.map((images) => (
            <Image
              key={images.id}
              className=" flex sm:h-[480px] sm:w-[800px] gap-6 rounded-3xl px-2"
              src={require(`../assets/showcase/${images.img_name}.png`)}
              alt="image"
            />
          )),
        ]}
      </ShowCase>
      <div className="bg-slate-500 min-h-screen w-full">
        <div>
          <h3 className="text-base text-amber-200 font-bold p-4">
            Picturegram
          </h3>
        </div>
        <div className="text-center">
          <h1 className="text-3xl text-white font-bold pt-6 pb-2">
            Våran bilder
          </h1>
          <p className="text-white px-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
            voluptates?
          </p>
        </div>
        <TeamImages />
      </div>
    </div>
  );
};

export default Photos;
