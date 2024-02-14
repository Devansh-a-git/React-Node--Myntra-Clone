import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const itemsActions = itemSlice.actions;

export default itemSlice;
