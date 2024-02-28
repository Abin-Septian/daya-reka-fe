import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const response = await fetch("http://localhost:3333/api/v1/top5");
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching top5 data:", error);
    res.status(500).json({ error: "Failed to fetch top5 data" });
  }
}
