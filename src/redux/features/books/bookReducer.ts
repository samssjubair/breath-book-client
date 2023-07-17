import { createSlice } from "@reduxjs/toolkit";

interface IBooksFilter {
//   status: boolean;
//   priceRange: number;
}

const initialState: IBooksFilter = {
//   status: true,
//   priceRange: 150,
};

const books = createSlice({
  name: "books",
  initialState,
  reducers: {},
});

// export const { toggleState, setPriceRange } = books.actions;

export default books.reducer;
