// async function fetchMachDayData() {
//   const url = "https://api.football-data.org/v4/matches";
//   const options = {
//     method: "GET",
//     headers: {
//       "X-Auth-Token": process.env.NEXT_PUBLIC_X_AUTH_TOKEN,
//       "Access-Control-Allow-Origin": "*",
//       "Content-Type": "text/plain",
//     },
//     mode: "cors",
//   };
//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     console.log(result);
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// }

// export default fetchMachDayData;
