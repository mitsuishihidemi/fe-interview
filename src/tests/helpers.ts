import merchantsFixture from "../../cypress/fixtures/get-merchants.json";
import categoriesFixture from "../../cypress/fixtures/get-categories.json";
import appStore, { RootState } from "../store";
import { merchantAdapter } from "../features/merchants/merchantSlice";
import { categoryAdapter } from "../features/categories/categorySlice";

type CustomState = {
  categories?: any;
  merchants?: any;
};

export const getInitialState = (customState: CustomState = {}) => {
  const initialState = appStore.getState();

  const merchantsState = merchantAdapter.setAll(
    initialState.merchants,
    merchantsFixture
  );

  const categoriesState = categoryAdapter.setAll(
    initialState.categories,
    categoriesFixture
  );

  return {
    merchants: { ...merchantsState, ...customState.merchants },
    categories: { ...categoriesState, ...customState.categories },
  } as RootState;
};
