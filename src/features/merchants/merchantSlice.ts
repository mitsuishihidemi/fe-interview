import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import { Merchant } from "../../types/merchant";
import { SliceState, defaultInitialState } from "../../types/shared";
import { getData, patchData } from "../../utils/fetch";

export const fetchMerchants = createAsyncThunk("fetchMerchants", async () => {
  return (await getData("/merchants")) as Merchant[];
});

export const updateMerchant = createAsyncThunk(
  "updateMerchant",
  async (merchant: Merchant) => {
    return (await patchData(`/merchants/${merchant.id}`, merchant)) as Merchant;
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
