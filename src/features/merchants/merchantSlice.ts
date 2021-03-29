import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { Merchant } from "../../types/merchant";
import { SliceState, defaultInitialState } from "../../types/shared";

export const fetchMerchants = createAsyncThunk("fetchMerchants", async () => {
  const response = await fetch("/merchants").then((data) => data.json());
  return response as Merchant[];
});

export const merchantAdapter = createEntityAdapter<Merchant>({
  selectId: (merchant) => merchant.id,
});

const initialState = merchantAdapter.getInitialState<SliceState>(
  defaultInitialState
);

export const merchantSlice = createSlice({
  name: "merchants",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMerchants.pending, (state) => {
      state.status = "pending";
    });

    builder.addCase(fetchMerchants.fulfilled, (state, action) => {
      state.status = "succeeded";
      merchantAdapter.setAll(state, action.payload);
    });

    builder.addCase(fetchMerchants.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || null;
    });
  },
});

export default merchantSlice.reducer;
