import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { merchantAdapter } from "./merchantSlice";
import { categorySelectors } from "../categories/categorySelectors";
import { Merchant } from "../../types/merchant";

export const merchantSelectors = merchantAdapter.getSelectors<RootState>(
  (state) => state.merchants
);

export const selectMerchants = createSelector(
  merchantSelectors.selectAll,
  categorySelectors.selectEntities,
  (merchants, categories): Merchant[] => {
    return merchants.map((merchant) => {
      return { ...merchant, category: categories[merchant.categoryId]?.name };
    });
  }
);

export const selectMerchantsFilteredByBill = (
  state: RootState,
  isBill: boolean
) => {
  return selectMerchants(state).filter(
    (merchant) => merchant.isBill === isBill
  );
};

export const selectShouldFetchMerchants = (state: RootState): boolean =>
  state.merchants.status === "idle";

export const selectIsFetchMerchantsPending = (state: RootState): boolean =>
  state.merchants.status === "pending";
