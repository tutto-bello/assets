import { Status } from "./status-enum";

export interface AssetType {
  name: string;
  description: string;
  quantity: number;
  status: Status;
  id: string;
}
