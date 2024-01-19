import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { fetchCars } from "./operations";
import { handleLoadMoreAction } from  "./operations";

const carsInitialState =
{
  items: [
  ],

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
          //  state.items = [...state.items, ...action.payload]
        }
        else { state.items = [...state.items, ...action.payload];}
       
      })
      
  .addCase(handleLoadMoreAction, (state) => {
  state.page = state.page + 1;
})

},
});


const persistConfig = {
  key: 'cars',
  storage,
}


// Экспортируем генераторы экшенов и редюсер
export const { handleLoadMore } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;

export const reducerCars = persistReducer(persistConfig, carsReducer)