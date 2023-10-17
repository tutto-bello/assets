import { NextApiRequest, NextApiResponse } from "next";
import { getAssets } from "./utils/database";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const assets = await getAssets();
    res.status(200).json(assets);
  } catch (error) {
    console.error("Error fetching assets:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
