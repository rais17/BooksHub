import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addCartItems: (state, action) => {
      const { _version_ } = action.payload;
      const itemPresent = state.cartItems.some(
        (item) => item._version_ === _version_
      );

      if (!itemPresent) {
        state.cartItems.push(action.payload);
      }
    },
    removeCartItem: (state, action) => {
      const _version_ = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item._version_ !== _version_
      );
    },
    incrementItem: (state, action) => {
      const _version_  = action.payload;
      const item = state.cartItems.find((item) => item._version_ === _version_);
      if (item) {
        item.totalItems += 1;
      }
    },
    decrementItem: (state, action) => {
      const  _version_ = action.payload;
      const item = state.cartItems.find((item) => item._version_ === _version_);
      if (item && item.totalItems > 1) {
        item.totalItems -= 1;
      }
    },
    removeCart: (state) => {
      state.cartItems = [];
    }
  },
});

export const {
  addCartItems,
  removeCartItem,
  incrementItem,
  decrementItem,
  removeCart,
} = cartSlice.actions;
export default cartSlice.reducer;
