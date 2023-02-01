import React, { useState, useEffect } from "react";
import programs from "../../assets/showcase/program.json";
import Image from "next/image";

const ShowcaseItem = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setIndex((index) => {
        if (index < programs.length - 1) {
          return index + 1;
        } else {
          return 0;
        }
      });
    }, 4000);
    return () => clearInterval(intervalID);
  }, []);
  return (
    <div className="flex min-h-screen bg-slate-600 justify-center items-center  gap-10 shadow-lg text-center min-w-2xl w-full">
      <Image
        className="w-[900px] h-[600px] p-6 rounded-lg"
        src={require(`../../assets/showcase/${programs[index].img_name}.png`)}
        alt="image"
      />
      <article className="p-6">
        <h1 className="text-5xl  py-4 uppercase text-cyan-300">{programs[index].name}</h1>
        <h3 className="text-xl text-white py-4">Nations: {programs[index].nations}</h3>
        <h3 className="text-xl text-white py-2">Club: {programs[index].clubs}</h3>
        <p className="text-2xl text-white py-2">World Cup: {programs[index].vm_champions}  Times</p>
        <p className="text-2xl text-white py-2">Ballond_dOr: {programs[index].ballon_dor}  Times</p>
        <p className="text-2xl text-white py-2">
          Champions League: {programs[index].champins_league}  Times
        </p>
        <p className="text-md text-white">{programs[index].description}</p>
      </article>
    </div>
  );
};
export default ShowcaseItem;
