import { Merchant } from "../../types/merchant";

export const getTotalTransacionsByMerchant = (merchant: Merchant) =>
  merchant.transactions.reduce((acc, t) => acc + t.amount, 0).toFixed(2);
