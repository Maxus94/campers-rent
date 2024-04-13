import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: { modalIsShown: false },
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