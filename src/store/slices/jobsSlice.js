import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: 'jobs',
  initialState: {
    jobs: [],
    loading: true,
    error: null,
  },
  reducers: {
    setJobArr: (state, action) => {
      state.jobs = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setErrorMsg: (state, action) => {
      state.error = action.payload
    },
  }
})

export const {setJobArr, setLoading, setErrorMsg} = jobSlice.actions;

export default jobSlice.reducer;