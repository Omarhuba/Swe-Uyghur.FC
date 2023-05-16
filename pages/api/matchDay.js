export default async function getMachDayData(req, res) {
  const url = "https://api.football-data.org/v4/matches";
  const options = {
    method: "GET",
    headers: {
      "X-Auth-Token": process.env.NEXT_PUBLIC_X_AUTH_TOKEN,
      "Content-Type": "	application/json;charset=UTF-8",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
