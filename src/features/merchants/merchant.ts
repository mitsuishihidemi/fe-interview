export interface Transaction {
  amount: number;
  date: string;
  id: number;
}

export interface Merchant {
  categoryId: number;
  iconUrl: string;
  id: string;
  isBill: boolean;
  name: string;
  transactions: Transaction[];
}
