import React, { useState, useEffect } from "react";
import programs from "../../assets/program.json";
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
    }, 3000);
    return () => clearInterval(intervalID);
  }, []);
  return (
    // <div className=" bg-zinc-700 flex justify-center items-center min-w-full h-screen ">
      <div className="flex flex-col bg-slate-400 justify-center items-center  gap-10 shadow-lg text-center min-w-2xl w-full">
        <Image className="w-96 pt-4"
          src={require(`../../assets/${programs[index].program_name}.png`)}
          alt="image"
        />
        <article className="p-6">
          <h1 className="text-4xl uppercase">{programs[index].program_name}</h1>
          <h2 className="text-2xl">{programs[index].poäng}</h2>
          <h3 className="text-2xl">{programs[index].ort}</h3>
          <p className="text-xl">
            Application deadline: {programs[index].Last_date}
          </p>
          {/* <p style={{color: programs[index].program_name == 'agil-utvecklare' ? 'red': 'black', fontSize:'1.8vh' }}>Application deadline: {programs[index].Last_date}</p> */}
          <p className="text-2xl">Start date: {programs[index].start}</p>
          <p className="info">More on: https://www.iths.se/utbildningar</p>
        </article>
      </div>
    //  </div>
  );
};
export default ShowcaseItem;
