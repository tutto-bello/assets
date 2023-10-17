import { NextApiRequest, NextApiResponse } from "next";
import { getAssets } from "./utils/database";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {
      query: { name },
    } = req;
    const assets = getAssets();

    console.log(name);
    if (name) {
      const filteredAssets = assets.filter((asset) =>
        asset.name.toLowerCase().includes(name.toString().toLowerCase())
      );
      res.status(200).json(filteredAssets);
    } else {
      res.status(200).json(assets);
    }
  } catch (error) {
    console.error("Error fetching assets:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
