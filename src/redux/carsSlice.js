import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { fetchCars } from "./operations";


const carsInitialState =
{
  items: [
  ],

    isLoading: false,
    error: null
};


const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};


const carsSlice = createSlice({
    name: "cars",
    initialState: carsInitialState,
  
extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.rejected, handleRejected)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      });





 // Добавляем обработку внешних экшенов
//   extraReducers: {
//         [fetchCars.pending]: handlePending,
//         [fetchCars.rejected]: handleRejected,
      
//         [fetchCars.fulfilled](state, action) {state.isLoading = false;
//       state.error = null;
//             state.items = action.payload;
//         },
},
});


const persistConfig = {
  key: 'root',
  storage,
}


// Экспортируем генераторы экшенов и редюсер

export const carsReducer = carsSlice.reducer;
export const reducerCars = persistReducer(persistConfig, carsReducer)