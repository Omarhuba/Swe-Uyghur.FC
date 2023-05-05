import React, { useState, useEffect } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

export const ShowCase = ({
  children: images,
  name,
  autoSlide = false,
  autoInterval = 3000,
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoInterval);
    return () => clearInterval(slideInterval);
  });

  return (
    <div className="overflow-hidden relative max-w-screen-sm m-auto my-10">
      <div
        className="flex  transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {images}
      </div>

      <div className="absolute flex inset-0 items-center justify-between px-5">
        <button onClick={prev}>
          <BsFillArrowLeftCircleFill size={30} className="text-white" />
        </button>
        <button onClick={next}>
          <BsFillArrowRightCircleFill size={30} className="text-white" />
        </button>
      </div>
      <div className="absolute bottom-8 right-0 left-0 text-white">
        <p>{images.name}</p>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`transition-all w-3 h-3 bg-white rounded-full ${
                curr === index ? "p-2" : "bg-opacity-50"
              } `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
