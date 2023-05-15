import React from "react";
import Image from "next/image";
import img_1 from "../assets/images/aktivitet/1.png";
import img_2 from "../assets/images/aktivitet/2.png";
import img_3 from "../assets/images/aktivitet/3.png";
import img_4 from "../assets/images/aktivitet/4.png";
import img_5 from "../assets/images/aktivitet/5.png";

export const Aktivitet = () => {
  return (
    <div>
      <div className="py-4 w-full ">
        <h1 className="font-poppins font-bold text-2xl sm:text-4xl text-center  py-10">
          Här är vi och våran aktivitet
        </h1>
        <div className="flex flex-col justify-center py-4 lg:flex lg:flex-row ">
          <div className="flex flex-col justify-center items-center">
            <Image className="w-64" src={img_1} alt="img" />
            <span className="text-xl py-2 font-medium sm:text-2xl">Ledare</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image className="w-64" src={img_2} alt="img" />
            <span className="text-xl py-2 font-medium sm:text-2xl">Aktiva</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image className="w-64" src={img_3} alt="img" />
            <span className="text-xl py-2 font-medium sm:text-2xl">
              Föräldrar
            </span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image className="w-64" src={img_4} alt="img" />
            <span className="text-xl py-2 font-medium sm:text-2xl">
              Suportrar
            </span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image className="w-64 h-[234px]" src={img_5} alt="img" />
            <span className="text-xl py-2 font-medium sm:text-2xl">
              Styrelse/Kansili
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
