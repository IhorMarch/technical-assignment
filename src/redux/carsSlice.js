import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { fetchCars,fetchFiltredCars } from "./operations";
import { handleLoadMoreAction } from  "./operations";

const carsInitialState =
{
  items: [
  ],
  favorites: [],

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
    toggleFavorite: (state, action) => {
      const car = action.payload;
      const index = state.favorites.findIndex((favCar) => favCar.id === car.id);
      if (index === -1) { state.favorites.push(car); }
      else { state.favorites.splice(index, 1);}
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


const persistConfig = {
  key: 'cars',
  storage,
}


// Экспортируем генераторы экшенов и редюсер
export const { handleLoadMore,toggleFavorite  } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
export const reducerCars = persistReducer(persistConfig, carsReducer)