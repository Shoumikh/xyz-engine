import { configureStore } from "@reduxjs/toolkit";
import reportReducer from "./reducers/reportReducer";
import homeReducer from "./reducers/homeReducer";

export default configureStore({
  reducer: {
    home: homeReducer,
    report: reportReducer,
  },
});
