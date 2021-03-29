import { Transaction } from "./transaction";
export interface Merchant {
  categoryId: number;
  category?: string;
  iconUrl: string;
  id: string;
  isBill: boolean;
  name: string;
  transactions: Transaction[];
}
