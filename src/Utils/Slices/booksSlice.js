import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    booksCatalog: null,
    booksDetails: null,
  },
  reducers: {
    addBooks: (state, action) => {
      state.booksCatalog = action.payload;
    },
      addToBookDetails: (state, action) => {
          state.booksDetails = action.payload;
    },
      
    removeBookDetails: (state, action) => {
      state.booksDetails = null;
    }
  },
});

export const { addBooks, addToBookDetails, removeBookDetails } = booksSlice.actions;
export default booksSlice.reducer;