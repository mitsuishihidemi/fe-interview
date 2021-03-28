import { configureStore } from "@reduxjs/toolkit";
import merchantReducer from "../features/merchants/merchantSlice";
import categoryReducer from "../features/categories/categorySlice";

const store = configureStore({
  reducer: {
    merchants: merchantReducer,
    categories: categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
