import { CartSlice } from "./Slice/CartSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer : {
        ShoppingCart : CartSlice.reducer,
    }
});