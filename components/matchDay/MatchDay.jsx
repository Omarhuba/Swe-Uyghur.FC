/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { MatchDayItem } from "./MatchDayItem.jsx";
import matchday from "../../assets/images/matchday.png";
import Image from "next/image";
import fetchMachDayData from "../../pages/api/fetchData.js";
import { Loading } from "../../utils/Loading.jsx";

export const MatchDay = () => {
  const [getData, setGetData] = useState(null);

  //* get matchday data
  useEffect(() => {
    const myData = async () => {
      const url = "/api/matchDay";
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": process.env.X_AUTH_TOKEN,
        },
      };
      try {
        const response = await fetch(url, options);
        await new Promise((resolve) => setTimeout(resolve, 3000));
        const result = await response.json();
        setGetData(result);
      } catch (e) {}
    };
    myData();
  }, []);

  if (!getData) {
    return (
      <div className="min-h-[15rem] flex justify-center items-center  bg-slate-700 ">
        <Loading />
      </div>
    );
  }
  return (
    <div className="bg-gray-700 py-1  ">
      <div className="flex items-center justify-center flex-col py-8 ">
        <Image
          className=" w-44 sm:w-80"
          src={matchday}
          alt="img"
          priority={true}
        />
        {/* <h1 className="text-2xl sm:text-6xl  font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-cyan-400 to-yellow-400">
            Match Day
          </h1> */}
        <div className="flex gap-6 py-4 ">
          <h3 className=" text-gray-300 text-xl sm:text-4xl">
            {getData.filters.dateFrom}
          </h3>
          <h3 className=" text-gray-300 text-xl sm:text-4xl">
            {getData.filters.dateTo}
          </h3>
        </div>
      </div>
      <div className="sm:flex sm:flex-wrap gap-4  mb-8 mx-2">
        {getData.matches.map((children) => (
          <MatchDayItem className="" key={children.id}>
            {children}
          </MatchDayItem>
        ))}
      </div>
    </div>
  );
};
