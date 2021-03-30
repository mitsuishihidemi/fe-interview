import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import { Merchant } from "../../types/merchant";
import { SliceState, defaultInitialState } from "../../types/shared";
import { MERCHANTS_API } from "../../constants";

export const fetchMerchants = createAsyncThunk("fetchMerchants", async () => {
  const response = await fetch(MERCHANTS_API).then((d) => d.json());
  return response as Merchant[];
});

export const updateMerchant = createAsyncThunk(
  "updateMerchant",
  async (merchant: Merchant) => {
    const response = await fetch(MERCHANTS_API, {
      method: "PATCH",
      body: JSON.stringify(merchant),
      headers: { "Content-Type": "application/json" },
    }).then((d) => d.json());
    return response as Merchant;
  }
);

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
    builder.addCase(fetchMerchants.fulfilled, (state, action) => {
      state.status = "succeeded";
      merchantAdapter.setAll(state, action.payload);
    });

    builder.addCase(updateMerchant.fulfilled, (state, action) => {
      state.status = "succeeded";
      merchantAdapter.updateOne(state, {
        id: action.payload.id,
        changes: action.payload,
      });
    });

    builder.addMatcher(isPending(fetchMerchants, updateMerchant), (state) => {
      state.status = "pending";
    });

    builder.addMatcher(
      isRejected(fetchMerchants, updateMerchant),
      (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      }
    );
  },
});

export default merchantSlice.reducer;
