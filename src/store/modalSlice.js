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
      state.camper = {};
    },
    setCamper: (state, { payload }) => {
      state.camper = payload;
    },
    // cleanCamper: (state) => {
    //   state.camper = {};
    // },
  },
});

export const modalReducer = modalSlice.reducer;

export const { openModal, closeModal, setCamper} = modalSlice.actions;
