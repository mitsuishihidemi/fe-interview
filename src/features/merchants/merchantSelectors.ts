import { RootState } from "../../store";
import { merchantAdapter } from "./merchantSlice";

export const shouldFetchMerchants = (state: RootState): boolean =>
  state.merchants.status === "idle";
