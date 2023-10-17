import { IAssetType } from "./models/asset-type";

export const fetchAssets = async () => {
  try {
    const response = await fetch("/api/asset/getAll");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching assets:", error);
  }
};

export const createdAsset = async (data: IAssetType) => {
  try {
    const response = await fetch("/api/asset/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const createdAsset = await response.json();
      console.log("Created Asset:", createdAsset);
    } else {
      console.error("Failed to create asset:", response.statusText);
    }
  } catch (error) {
    console.error("Error creating asset:", error);
  }
};

export const deleteAsset = async (id: string) => {
  try {
    const response = await fetch(`/api/asset/delete?id=${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      const deletedAsset = await response.json();
      console.log("Deleted Asset:", deletedAsset);
    } else {
      console.error("Failed to delete asset:", response.statusText);
    }
  } catch (error) {
    console.error("Error deleting asset:", error);
  }
};

export const searchAssetsByName = async (searchTerm: string) => {
  try {
    console.log(searchTerm);
    const response = await fetch(`/api/asset/search?name=${searchTerm}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Failed to fetch search results:", response.statusText);
    }
  } catch (error) {
    console.error("Error fetching search results:", error);
  }
};
