import { current } from "@reduxjs/toolkit";
import store from "../store";
import { setCurr, setCurrentStep } from "../reducers/homeReducer";

// // @desc: Moves to next step
// export const next = () => {
//   return async (dispatch) => {
//     let current = store.getState().home.currentStep;
//     console.log("current ", current);

//     dispatch(setCurrentStep(1));
//     setCurr(222);
//     current = store.getState().home.currentStep;
//     console.log("current 2 ", current);
//   };
// };

export const next = () => {
  return async (dispatch) => {
    let current = store.getState().home.currentStep;
    console.log("current ", current);
    await dispatch(setCurrentStep(1));
    current = store.getState().home.currentStep;
    console.log("current 2 ", current);
  };
};

// @desc: Moves to previous step
export const prev = () => {
  let current = store.getState().home.currentStep;
  setCurrentStep(current - 1);
};
