import { NextApiRequest, NextApiResponse } from "next";

// Handler function for the invoice-detail endpoint
export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  const { id } = req.query;

  try {
    // Fetch data from the provided endpoint with the dynamic ID
    const response = await fetch(`http://localhost:3333/api/v1/invoice-detail/${id}`);
    const data = await response.json();

    // Return the fetched data
    res.status(200).json(data);
  } catch (error) {
    // Handle errors
    console.error('Error fetching invoice detail data:', error);
    res.status(500).json({ error: 'Failed to fetch invoice detail data' });
  }
}
