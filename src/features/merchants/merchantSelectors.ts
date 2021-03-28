import { RootState } from "../../store";

export const shouldFetchMerchants = (state: RootState): boolean =>
  state.merchants.status === "idle";
