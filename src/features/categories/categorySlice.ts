import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { Category } from "../../types/category";
import { SliceState, defaultInitialState } from "../../types/shared";
import { MERCHANTS_API } from "../../constants";

export const fetchCategories = createAsyncThunk("fetchCategories", async () => {
  const response = await fetch(MERCHANTS_API).then((d) => d.json());
  return response as Category[];
});

export const categoryAdapter = createEntityAdapter<Category>({
  selectId: (category) => category.id,
});

const initialState = categoryAdapter.getInitialState<SliceState>(
  defaultInitialState
);

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.status = "pending";
    });

    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.status = "succeeded";
      categoryAdapter.setAll(state, action.payload);
    });

    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || null;
    });
  },
});

export default categorySlice.reducer;
