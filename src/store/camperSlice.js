import { createSlice } from '@reduxjs/toolkit';

const camperSlice = createSlice({
  name: 'camper',
  initialState: {},
  reducers: {
    openModal: (state) => {
      state.modalIsShown=true;
    },
    closeModal: (state) => {
        state.modalIsShown=false;
      },
  },
});

export const modalReducer = modalSlice.reducer;

export const { openModal, closeModal } = modalSlice.actions;