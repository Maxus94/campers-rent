import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "page",
  initialState: { page: 1 },
  reducers: {
    nextPage: (state) => {
      state.page += 1;
    },
  },
});

export const pageReducer = pageSlice.reducer;

export const { nextPage } = pageSlice.actions;
