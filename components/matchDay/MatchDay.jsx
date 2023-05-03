/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
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
