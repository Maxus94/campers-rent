import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { modalIsShown: false, camper: {} },
  reducers: {
    openModal: (state) => {
      state.modalIsShown = true;
    },
    closeModal: (state) => {
      state.modalIsShown = false;
    },
    setCamper: (state, { payload }) => {
      state.camper = payload;
    },
    cleanCamper: (state) => {
      state.camper = {};
    },
  },
});

export const modalReducer = modalSlice.reducer;

export const { openModal, closeModal, setCamper, cleanCamper } = modalSlice.actions;
