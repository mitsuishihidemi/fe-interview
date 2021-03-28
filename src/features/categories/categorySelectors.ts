import { RootState } from "../../store";
import { categoryAdapter } from "./categorySlice";

export const categorySelectors = categoryAdapter.getSelectors<RootState>(
  (state) => state.categories
);

export const selectShouldFetchCategories = (state: RootState): boolean =>
  state.categories.status === "idle";
