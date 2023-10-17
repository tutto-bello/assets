import { NextApiRequest, NextApiResponse } from "next";
import { getAssets } from "./utils/database";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    const {
      query: { id },
    } = req;
    const assets = await getAssets();

    const asset = assets.find((asset) => asset.id === id);
    if (asset) {
      res.status(200).json(asset);
    } else {
      res.status(404).json({ message: "Asset not found" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
