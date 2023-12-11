import { configureStore } from "@reduxjs/toolkit";
import booksSlice from "../Slices/booksSlice";
import cartSlice from "../Slices/cartSlice";
import filteredResultsSlice from "../Slices/filteredResultsSlice";
import placeOrderSlice from "../Slices/placeOrderSlice";

const store = configureStore({
    reducer: {
        books: booksSlice,
        cart: cartSlice,
        filteredResults: filteredResultsSlice,
        placeOrder: placeOrderSlice
    }
});

export default store;