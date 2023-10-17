import { NextApiRequest, NextApiResponse } from "next";
import { IAssetType, IAssetsResponse } from "../../../models/asset-type";
import { getAssets, saveAssets } from "./utils/database";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, description, quantity, status }: IAssetType = req.body;
    const assets = getAssets();
    const createdAsset: IAssetsResponse = {
      name,
      description,
      quantity,
      status,
      id: "id" + Math.random().toString(16).slice(2),
    };

    assets.push(createdAsset);
    saveAssets(assets);
    res.status(201).json(createdAsset);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
