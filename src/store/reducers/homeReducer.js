import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 0,
  form: {},
};

const homeReducer = createSlice({
  name: "home",
  initialState,
  reducers: {
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    setForm: (state, action) => {
      state.form = action.payload;
    },
  },
});

export const { setCurrentStep, setForm } = homeReducer.actions;

export default homeReducer.reducer;
