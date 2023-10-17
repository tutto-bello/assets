import fs from "fs";
import path from "path";
import { IAssetsResponse } from "../../../../models/asset-type";

const databasePath = path.join(process.cwd(), "tmp", "data", "assets.json");

export function getAssets(): IAssetsResponse[] {
  try {
    const fileContent = fs.readFileSync(databasePath, "utf-8");
    const assets = JSON.parse(fileContent);
    return assets;
  } catch (error) {
    console.error("Error reading assets from file:", error);
    return [];
  }
}

export function saveAssets(assets: IAssetsResponse[]): void {
  const content = JSON.stringify(assets, null, 2);
  fs.writeFileSync(databasePath, content, "utf-8");
}
