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
      <div className="h-full pb-32">
        <h1 className="font-poppins text-6xl text-center mt-32 py-6">
          Här är vi och våran aktivitet
        </h1>
        <div className="flex justify-center py-8">
          <div className="flex flex-col justify-center items-center">
            <Image className="w-64" src={img_1} alt="img" />
            <span>Ledare</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image className="w-64" src={img_2} alt="img" />
            <span>Aktiva</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image className="w-64" src={img_3} alt="img" />
            <span>Föräldrar</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image className="w-64" src={img_4} alt="img" />
            <span>Suportrar</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image className="w-64 mb-12" src={img_5} alt="img" />
            <span className="">Styrelse/Kansili</span>
          </div>
        </div>
      </div>
    </div>
  );
};
