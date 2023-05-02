/* eslint-disable @next/next/no-img-element */

import { MatchDay } from "../MatchDay";

export const MatchDayItem = ({ children }) => {
  console.log("item", children);
  return (
    <div className=" bg-white shadow shadow-blue-500/40 rounded-lg p-8  max-w-[20rem] mx-auto my-4">
      <div className="flex   flex-col gap-2 ">
        {/* <img
          src={children.matches}
          alt="image"
          className="w-10 rounded-full "
        /> */}
        <h2>{children.MatchDay}</h2>
        <h3>
          <span>
            <img src={children.homeTeam.crest} alt="" className="w-12" />
          </span>
          {children.homeTeam.name} <span>{children.score.fullTime.home}</span>
        </h3>
        <span>
          <img src={children.awayTeam.crest} alt="" className="w-12" />
        </span>
        <h3>
          {children.awayTeam.name} <span>{children.score.fullTime.away}</span>
        </h3>
      </div>

      {/* {children} */}
    </div>
  );
};
