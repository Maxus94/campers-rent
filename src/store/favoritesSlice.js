import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: { favorites: [] },
  reducers: {
    addToFavorites: (state, { payload }) => {
      state.favorites.push(payload);
    },
    removeFromFavorites: (state, { payload }) => {
      state.favorites = state.favorites.filter(
        (favorite) => favorite !== payload
      );
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
