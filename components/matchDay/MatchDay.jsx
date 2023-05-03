/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import matchDay from "../../assets/images/matchday.png";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MatchDayItem } from "./MatchDayItem.jsx";

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
  // console.log("data", getData.matches);
  // const matchDayData = getData.matches;
  // console.log("data", matchDayData);

  if (!getData) {
    return <div>Loading.....</div>;
  }
  return (
    <div className="">
      <div className="bg-gray-700  ">
        <div className="flex items-center justify-center flex-col py-8">
          <h1 className="text-2xl sm:text-6xl text-white font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-500">
            Match Day
          </h1>
          <div className="flex gap-6 py-4 ">
            <h3 className=" text-gray-300 text-xl sm:text-4xl">
              {getData.filters.dateFrom}
            </h3>
            <h3 className=" text-gray-300 text-xl sm:text-4xl">
              {getData.filters.dateTo}
            </h3>
          </div>
          {/* <img src="../assets/images/matchday.png" alt="image" /> */}
        </div>
        <div className="sm:grid grid-cols-2 gap-4 min-w-72">
          {getData.matches.map((children) => (
            <MatchDayItem className="" key={children.id}>
              {children}
            </MatchDayItem>
          ))}
        </div>
        {/* <MatchDayItem matchData={matchData} /> */}
      </div>
      {/* <div className="p-4">
        <ul>
          {getData.filters.dateFrom}----{getData.filters.dateTo}
        </ul>
        <div className="flex gap-2">
          <ul>
            {getData.matches.map((item, index) => (
              <li key={index}>{item.homeTeam.name} VS</li>
            ))}
            <span>VS</span>
          </ul>
          VS
          <ul>
            {getData.matches.map((item, index) => (
              <li key={index}>{item.awayTeam.name}</li>
            ))}
          </ul>
        </div>
        <div>
          {getData.matches.map((item, index) => (
            <span key={index}>{item.utcDate}</span>
          ))}
        </div>
      </div> */}
    </div>
    // <ul>
    //   {getData.key.map((item) => (
    //     <li key={item.id}>{item.logo}</li>
    //   ))}
    // </ul>
  );
}
