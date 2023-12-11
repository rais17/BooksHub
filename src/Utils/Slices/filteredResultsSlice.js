import { createSlice } from "@reduxjs/toolkit";

const filteredResultsSlice = createSlice({
  name: "filteredResults",
  initialState: {
    results: null,
  },
  reducers: {
    setFilteredResults: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const { setFilteredResults } = filteredResultsSlice.actions;
export default filteredResultsSlice.reducer;
