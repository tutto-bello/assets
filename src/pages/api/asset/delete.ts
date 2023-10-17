import { NextApiRequest, NextApiResponse } from "next";
import { getAssets, saveAssets } from "./utils/database";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    const {
      query: { id },
    } = req;
    const assets = await getAssets();

    const deletedAssetIndex = assets.findIndex((asset) => asset.id === id);
    if (deletedAssetIndex !== -1) {
      const deletedAsset = assets.splice(deletedAssetIndex, 1)[0];
      await saveAssets(assets);
      res.status(200).json(deletedAsset);
    } else {
      res.status(404).json({ message: "Asset not found" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
