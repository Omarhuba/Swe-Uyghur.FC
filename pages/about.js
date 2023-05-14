import React from "react";
import meddle from "../assets/images/aboutImage/middle1.png";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="bg-[url('../assets/images/aboutImage/header.jpg')]  min-h-[25rem] bg-cover bg-no-repeat bg-bottom "></div>
      <div>
        <h1 className="text-gray-500 text-3xl text-center py-2 font-poppins ">
          About Club
        </h1>
        <p className="px-4 py-6 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
          sunt nostrum accusantium neque similique? Sunt similique quis neque
          impedit quod.
        </p>
      </div>
      <div className="w-full h-full">
        <div className="  gap-6 bg-slate-500 sm:min-h-[80vh] sm:flex sm:w-full sm:justify-evenly sm:gap-0">
          <section className="">
            <h1 className="text-center font-poppins text-2xl py-4 text-white sm:text-4xl sm:py-8">
              Swe-Uyghur .FC Club
            </h1>
            <p className="text-sm px-8 break-all sm:text-base sm:max-w-1/3 text-slate-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              distinctio facere illum iste maxime vel quasi porro cumque ad
              tempora, sed aut accusamus rem doloremque, ullam animi quis. Quos
              doloribus non, eligendi quas nemo sed quidem at! Earum ipsa
              aliquid dolorum quis dolores quam culpa rerum accusantium non.
              Dolorem repudiandae aut provident repellendus, ipsa atque enim
              magnam, hic pariatur expedita rem. Cupiditate libero saepe facere
              ut facilis, accusamus explicabo cumque delectus cum harum mollitia
              obcaecati voluptatem exercitationem quia quos provident totam
              eaque necessitatibus molestiae. Omnis ullam illo eius cum alias
              dicta reiciendis! Molestias dolorum adipisci impedit natus
              deleniti rem delectus.
            </p>
            <button className="m-8 p-3 rounded-md text-white bg-cyan-700 hover:bg-cyan-400 hover:text-black hover: duration-700">
              READ MORE
            </button>
          </section>
          <section className="max-w-[20rem] p-4 mx-auto sm:min-w-[20rem] sm:mx-10 sm:my-6">
            <Image
              src={meddle}
              className="rounded-2xl flex  justify-center items-center  "
              alt="images"
            />
          </section>
        </div>
        <div className="bg-yellow-500">
          <div className="">
            <div className="sm:flex sm:justify-center sm:items-center mx-auto text-center gap-4 px-4 py-10 ">
              <div className=" max-w-[410px] bg-white rounded-lg mx-auto py-6 sm:-translate-y-1/2 my-4">
                <div className="bg-[url('../assets/images/aboutImage/memory2.png')]  h-[220px]  mx-auto bg-no-repeat  bg-top "></div>
                <h3 className="font-poppins font-extrabold text-xl">
                  Children
                </h3>
                <p className="font-poppins  text-sm px-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, mollitia ipsum nemo laudantium ratione adipisci
                  veniam. Harum deleniti iure eum.
                </p>
              </div>
              <div className="max-w-[410px] bg-white rounded-lg mx-auto py-6 sm:-translate-y-1/2">
                <div className="bg-[url('../assets/images/aboutImage/memory4.png')] h-[220px]  mx-auto bg-no-repeat  bg-top "></div>
                <h3 className="font-poppins font-extrabold text-xl">
                  Just right
                </h3>
                <p className="font-poppins  text-sm px-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, mollitia ipsum nemo laudantium ratione adipisci
                  veniam. Harum deleniti iure eum.
                </p>
              </div>
              <div className="max-w-[410px] bg-white rounded-lg mx-auto py-6 sm:-translate-y-1/2 my-4">
                <div className="bg-[url('../assets/images/aboutImage/memory3.png')]   h-[220px]  mx-auto bg-no-repeat  bg-center "></div>
                <h3 className="font-poppins font-extrabold text-xl">
                  Old fart
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
