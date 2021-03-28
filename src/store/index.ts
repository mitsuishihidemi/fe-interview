import { configureStore } from "@reduxjs/toolkit";
import merchantReducer from "../features/merchants/merchantSlice";

const store = configureStore({
  reducer: {
    merchants: merchantReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
