/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import matchDay from "../assets/images/matchday.png";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MatchDayItem } from "./matchDay/MatchDayItem";

async function fetchData() {
  const url = "https://api.football-data.org/v4/matches";
  const options = {
    method: "GET",
    headers: {
      "X-Auth-Token": "f37121ea74c14c4fab9304f8ce1a633e",
    },
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
    <div className="bg-slate-700 w-full h-screen ">
      <div className="bg-slate-300 w-full rounded-lg ">
        <div className="flex items-center justify-center flex-col py-8">
          <h1 className="text-2xl sm:text-5xl text-white">Match Day</h1>
          {getData.filters.dateFrom}----{getData.filters.dateTo}
          {/* <img src="../assets/images/matchday.png" alt="image" /> */}
        </div>
        <div>
          {getData.matches.map((children) => (
            <MatchDayItem key={children.id}>{children}</MatchDayItem>
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
