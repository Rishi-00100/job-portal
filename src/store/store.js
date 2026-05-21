import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./slices/jobsSlice";
import savedJobsReducer from "./slices/savedJobsSlice";

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    savedJobs: savedJobsReducer,
  },
});