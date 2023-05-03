/* eslint-disable @next/next/no-img-element */

import { MatchDay } from "./MatchDay";
export const MatchDayItem = ({ children }) => {
  const sortByLeague = children;
  console.log("item", sortByLeague);

  const isoDateString = children.utcDate;
  const date = new Date(isoDateString);
  const formattedDate = date
    .toLocaleString("sv-SE", {
      // year: "2-digit",
      // month: "2-digit",
      // day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    })
    .replace(",", "");
  console.log(formattedDate);

  return (
    <div className="flex flex-col bg-white shadow shadow-red-700/40 rounded-lg p-4 mx-auto max-w-[25rem] sm:min-w-[35rem] my-4">
      <div className="flex justify-center flex-col items-center pb-4">
        <span>
          <img
            src={children.competition.emblem}
            alt=""
            className="w-10 sm:w-20"
          />
        </span>
        <h5 className="text-base font-bold sm:text-2xl">
          {children.competition.name}
        </h5>
        <p className="text-sm sm:text-base">Match Day{children.matchday}</p>
      </div>
      <div className="flex justify-between divide-x-2">
        <div className="flex flex-col w-full px-4 gap-2">
          <div className="flex justify-between items-center gap-6">
            <div className="flex items-center ">
              <img
                src={children.homeTeam.crest}
                alt=""
                className="w-6 sm:w-12"
              />
              <h3 className="px-2 text-sm sm:text-xl">
                {children.homeTeam.name}
              </h3>
            </div>
            <div>
              <p className="font-bold text-sm sm:text-xl">
                {children.score.fullTime.home}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center gap-6">
            <div className="flex items-center ">
              <img
                src={children.awayTeam.crest}
                alt=""
                className="w-6 sm:w-12"
              />
              <h3 className="px-2 text-sm sm:text-xl">
                {children.awayTeam.name}
              </h3>
            </div>
            <div>
              <p className="font-bold text-sm sm:text-xl">
                {children.score.fullTime.away}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center px-4">
          {children.status == "TIMED" ? (
            <span className="text-sm font-bold sm:text-2xl">
              {formattedDate}
            </span>
          ) : (
            <span className="text-sm font-bold sm:text-lg">
              {children.status}
            </span>
          )}
        </div>
      </div>
    </div>
    // <div className="flex jutify-between bg-white shadow shadow-blue-500/40 rounded-lg p-4 mx-auto max-w-[25rem] sm:min-w-[30rem] my-4">
    //   <div className="flex justify-center items-center pb-2 gap-2">
    //     <span>
    //       <img src={children.competition.emblem} alt="" className="w-12" />
    //     </span>
    //     <h5 className="text-xl bold">{children.competition.name}</h5>
    //   </div>
    //   <div className="flex justify-between">
    //     <div className="flex items-center justify-between my-2 ">
    //       <div className="flex items-center">
    //         <span>
    //           <img src={children.homeTeam.crest} alt="" className="w-10" />
    //         </span>
    //         <h3 className="px-2">{children.homeTeam.name}</h3>
    //       </div>
    //       <div>
    //         <span>{children.score.fullTime.home}</span>
    //       </div>
    //       {/* <div>
    //         {children.status == "FINISHED" ? (
    //           <span>{children.score.fullTime.home}</span>
    //         ) : (
    //           <span>{formattedDate}</span>
    //         )}
    //       </div> */}
    //     </div>
    //   </div>
    //   <div className="flex items-center justify-between">
    //     <div className="flex items-center">
    //       <span>
    //         <img src={children.awayTeam.crest} alt="" className="w-10" />
    //       </span>
    //       <h3 className="px-2">{children.awayTeam.name}</h3>
    //     </div>
    //     <div>
    //       <span>{children.score.fullTime.away}</span>
    //     </div>
    //   </div>
    //   <div className="h-full border-l-2 bg-gray-500"></div>
    //   <div className="bg-red-500">{children.status}</div>

    // </div>
  );
};
