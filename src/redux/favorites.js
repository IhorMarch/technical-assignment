import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const favCarsInitialState =
{
 
  favorites: [],

   
};



const favCarsSlice = createSlice({
    name: "favorites",
    initialState: favCarsInitialState,
  reducers: {
   
    toggleFavorite: (state, action) => {
      const car = action.payload;
      const index = state.favorites.findIndex((favCar) => favCar.id === car.id);
      if (index === -1) { state.favorites.push(car); }
      else { state.favorites.splice(index, 1);}
    },

    },
  
},
);


const persistConfig = {
  key: 'favorites',
  storage,
}



export const { toggleFavorite } = favCarsSlice.actions;
export const favCarsReducer = favCarsSlice.reducer;
export const favReducerCars = persistReducer(persistConfig, favCarsReducer)