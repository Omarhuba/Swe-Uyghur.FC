export default async function getMachDayData(req, res) {
  const url = "https://api.football-data.org/v4/matches";
  const options = {
    method: "GET",
    headers: {
      "X-Auth-Token": "f37121ea74c14c4fab9304f8ce1a633e",
      "Content-Type": "	application/json",
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
