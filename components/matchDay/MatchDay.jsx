/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { MatchDayItem } from "./MatchDayItem.jsx";
import matchday from "../../assets/images/matchday.png";
import Image from "next/image";

async function fetchData() {
  const url = "https://api.football-data.org/v4/matches";
  const options = {
    method: "GET",
    headers: {
      "X-Auth-Token": "f37121ea74c14c4fab9304f8ce1a633e",
    },
    mode: "cors",
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export function MatchDay() {
  const [getData, setGetData] = useState(null);
  useEffect(() => {
    fetchData().then((result) => setGetData(result));
  }, []);

  if (!getData) {
    return <div>Loading.....</div>;
  }
  return (
    <div className="">
      <div className="bg-gray-700  ">
        <div className="flex items-center justify-center flex-col py-8">
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
        <div className="sm:grid grid-cols-2 gap-4 min-w-72">
          {getData.matches.map((children) => (
            <MatchDayItem className="" key={children.id}>
              {children}
            </MatchDayItem>
          ))}
        </div>
      </div>
    </div>
  );
}
