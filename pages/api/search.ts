import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { location } = req.body;
  const places = [
    { name: "Tower of London", location: "London" },
    { name: "Eiffel Tower", location: "Paris" },
    { name: "Statue of Liberty", location: "New York" },
    { name: "Colosseum", location: "Rome" },
    { name: "Taj Mahal", location: "Agra" },
    { name: "Great Wall of China", location: "Beijing" },
  ];

  const filteredPlaces = places.filter((place) =>
    place.location.toLowerCase().includes(location.toLowerCase())
  );

  if (filteredPlaces.length > 0) {
    console.log(filteredPlaces);
    res.status(200).json({ places: filteredPlaces });
  } else {
    res.status(404).json({ message: "No places found" });
  }
}
