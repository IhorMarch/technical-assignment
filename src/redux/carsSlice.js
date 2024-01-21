import { createSlice } from "@reduxjs/toolkit";

import { fetchCars,fetchFiltredCars } from "./operations";
import { handleLoadMoreAction } from  "./operations";

const carsInitialState =
{
  items: [],
    isLoading: false,
    error: null,
    page: 1,
    perPage: 12
   
};


const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};





const carsSlice = createSlice({
    name: "adverts",
    initialState: carsInitialState,
  reducers: {
    handleLoadMoreAction: (state) => {
      state.page = state.page + 1;
    
    },
   

    resetPage: (state) => {
      state.page = 1;
    },


     },
extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.rejected, handleRejected)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (state.page === 1) {
         
          state.items = action.payload;
      
        }
        else { state.items = [...state.items, ...action.payload];}
       
      })
      .addCase(fetchFiltredCars.pending, handlePending)
      .addCase(fetchFiltredCars.rejected, handleRejected)
      .addCase(fetchFiltredCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      }) 
      
      .addCase(handleLoadMoreAction, (state) => {
  state.page = state.page + 1;
})
  },

},
);





export const { handleLoadMore,resetPage} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
