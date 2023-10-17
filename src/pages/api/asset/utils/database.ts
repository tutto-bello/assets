import { IAssetsResponse } from "../../../../models/asset-type";
import { LocalStorage } from "node-localstorage";
import { Status } from "../../../../models/status-enum";

const localStorage = new LocalStorage("./tmp");

const localStorageKey = "assets";

const defaultAssets: IAssetsResponse[] = [
  {
    name: "Confluence",
    description: "Manage software development assets",
    quantity: "1",
    status: Status.Pending,
    id: "123412412",
  },
  {
    name: "Github",
    description: "Code hosting platform",
    quantity: "3",
    status: Status.Online,
    id: "123412wgs2",
  },
  {
    name: "Jira",
    description: "Create issues",
    quantity: "1",
    status: Status.Online,
    id: "12341sdg12",
  },
];

export function getAssets(): IAssetsResponse[] {
  try {
    const localStorageData = localStorage.getItem(localStorageKey);

    if (!localStorageData) {
      localStorage.setItem(localStorageKey, JSON.stringify(defaultAssets));
      return defaultAssets;
    }

    const assets = JSON.parse(localStorageData);
    return assets;
  } catch (error) {
    console.error("Error reading assets from localStorage:", error);
    return [];
  }
}

export function saveAssets(assets: IAssetsResponse[]): void {
  try {
    const content = JSON.stringify(assets, null, 2);
    localStorage.setItem(localStorageKey, content);
  } catch (error) {
    console.error("Error saving assets to localStorage:", error);
  }
}
