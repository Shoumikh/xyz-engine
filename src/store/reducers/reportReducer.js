import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fileData: [],
  reportData: [],
};

const reportReducer = createSlice({
  name: "report",
  initialState,
  reducers: {
    setFileData: (state, action) => {
      state.fileData = action.payload;
    },
    setReportData: (state, action) => {
      state.reportData = action.payload;
    },
  },
});

export const { setFileData, setReportData } = reportReducer.actions;

export default reportReducer.reducer;
