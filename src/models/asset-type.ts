import { Status } from "./status-enum";

export interface IAssetType {
  name: string;
  description: string;
  quantity: string;
  status: Status;
}
export interface IAssetsResponse extends IAssetType {
  id: string;
}
