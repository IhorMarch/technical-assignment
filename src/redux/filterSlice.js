import { createSlice } from "@reduxjs/toolkit";


const filtersSlice = createSlice({
  name: "filter",
  initialState: { make: "" },
  reducers: {
    setMakeFilter(state, action) {
      return action.payload;
    },
  },
});



export const { setMakeFilter  } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;