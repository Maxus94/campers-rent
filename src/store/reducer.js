import { modalReducer } from "./modalSlice";
import { favoritesReducer } from "./favoritesSlice";
import { pageReducer } from "./pageSlice";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { filterReducer } from "./filterSlice";

const persistConfig = {
  key: "favorites",
  storage,
};

const persistedReducer = persistReducer(persistConfig, favoritesReducer);

export const reducer = {
  favorites: persistedReducer,
  modal: modalReducer,
  // favorites: favoritesReducer,
  page: pageReducer,
  filters: filterReducer,
};
