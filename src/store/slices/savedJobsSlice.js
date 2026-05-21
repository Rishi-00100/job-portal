import { createSlice } from "@reduxjs/toolkit";

const savedJobSlice = createSlice({
  name: 'savedJobs',
  initialState: {
    savedJobs: [],
  },
  reducers: {
    saveJob: (state, action) => {
      state.savedJobs.push(action.payload);
    },
    unsaveJob: (state, action) => {
      state.savedJobs = state.savedJobs.filter((job) => job.id !== action.payload);
    },
  }
})

export const {saveJob, unsaveJob} = savedJobSlice.actions;

export default savedJobSlice.reducer;