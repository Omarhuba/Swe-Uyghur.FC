import React from "react";
import meddle from "../assets/images/aboutImage/middle1.png";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="bg-[url('../assets/images/aboutImage/header.jpg')]  min-h-[25rem] bg-cover bg-no-repeat bg-bottom "></div>
      <div>
        <h1 className="text-gray-500 text-3xl text-center pt-6 font-poppins ">
          Swe-Uyghur Fotball Föreningen
        </h1>
        <p className="px-4 py-6 text-center">
          Swe Uyghur Fotball Föreningen grundade 2023-06-01 och Syftet med
          föreningen är att ge alla svenska uiguriska fotbollsfans en god chans
          att spela fotboll
        </p>
      </div>
      <div className="w-full h-full">
        <div className="  gap-6 bg-slate-500 h-full lg:min-h-[80vh] lg:flex lg:w-full lg:justify-evenly ">
          <section className="">
            <h1 className="text-center font-poppins text-2xl py-4 text-white lg:text-4xl lg:py-8">
              Swe-Uyghur.FC Klubb
            </h1>
            <p className="text-sm px-8 break-all sm:text-base lg:max-w-1/3 text-slate-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              distinctio facere illum iste maxime vel quasi porro cumque ad
              tempora, sed aut accusamus rem doloremque, ullam animi quis. Quos
              doloribus non, eligendi quas nemo sed quidem at! Earum ipsa
              aliquid dolorum quis dolores quam culpa rerum accusantium non.
              Dolorem repudiandae aut provident repellendus,
            </p>
            <button className="m-8 p-2 lg:m-8 lg:p-3 rounded-md text-sm text-black bg-cyan-400 hover:bg-cyan-600 hover:text-white hover: duration-700">
              LÄS MER
            </button>
          </section>
          <section className="max-w-[20rem] p-4 mx-auto lg:min-w-[20rem] lg:mx-10 lg:my-6">
            <Image
              src={meddle}
              className="rounded-2xl flex  justify-center items-center  "
              alt="images"
            />
          </section>
        </div>
        <div className="bg-yellow-500">
          <div className="">
            <div className="lg:flex lg:justify-center lg:items-center mx-auto text-center gap-4 px-4 py-10 ">
              <div className=" max-w-[410px] bg-white rounded-lg mx-auto py-6  lg:-translate-y-1/3 my-4">
                <div className="bg-[url('../assets/images/aboutImage/memory2.png')]  h-[220px]  mx-auto bg-no-repeat  bg-top "></div>
                <h3 className="font-poppins font-extrabold text-xl">Barnen</h3>
                <p className="font-poppins  text-sm px-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, mollitia ipsum nemo laudantium ratione adipisci
                  veniam. Harum deleniti iure eum.
                </p>
              </div>
              <div className="max-w-[410px] bg-white rounded-lg mx-auto py-6 lg:-translate-y-1/3">
                <div className="bg-[url('../assets/images/aboutImage/memory4.png')] h-[220px]  mx-auto bg-no-repeat  bg-top "></div>
                <h3 className="font-poppins font-extrabold text-xl">Just nu</h3>
                <p className="font-poppins  text-sm px-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, mollitia ipsum nemo laudantium ratione adipisci
                  veniam. Harum deleniti iure eum.
                </p>
              </div>
              <div className="max-w-[410px] bg-white rounded-lg mx-auto py-6 lg:-translate-y-1/3 my-4">
                <div className="bg-[url('../assets/images/aboutImage/memory3.png')]   h-[220px]  mx-auto bg-no-repeat  bg-center "></div>
                <h3 className="font-poppins font-extrabold text-xl">
                  Gammal fis
                </h3>
                <p className="font-poppins  text-sm px-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, mollitia ipsum nemo laudantium ratione adipisci
                  veniam. Harum deleniti iure eum.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bg-yellow-500">
          <h3>ABOUT US</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,
            corrupti quo quae distinctio minus consequuntur. Quis, temporibus
            necessitatibus voluptas quas repudiandae maiores quisquam officia,
            obcaecati beatae tempora earum quam. Qui in consequuntur et quisquam
            accusantium beatae numquam natus autem placeat pariatur quas
            adipisci molestias ipsum, architecto asperiores! Mollitia, ducimus
            necessitatibus?
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default About;
