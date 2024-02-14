import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    // setFetchDone: (state) => {
    //   console.log("done called");
    //   return (state.fetchDone = true);
    // },

    // setCurrentlyFetching: (state) => {
    //   console.log("cf called");
    //   return (state.currentlyFetching = true);
    // },
    // setFetchingFinished: (state) => {
    //   console.log("ff called");
    //   return (state.currentlyFetching = false);
    // },

    setFetchDone: (state) => {
      return { ...state, fetchDone: true }; // Return a new state object with fetchDone set to true
    },
    setCurrentlyFetching: (state) => {
      return { ...state, currentlyFetching: true }; // Return a new state object with currentlyFetching set to true
    },
    setFetchingFinished: (state) => {
      return { ...state, currentlyFetching: false }; // Return a new state object with currentlyFetching set to false
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;
