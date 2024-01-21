import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./carsSlice";
import persistStore from "redux-persist/es/persistStore";
import { filtersReducer } from "./filterSlice";
import { favReducerCars } from "./favorites";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';






export const store = configureStore({
  reducer: {
    adverts: carsReducer,
    filter: filtersReducer,
    favorites:favReducerCars,
   
  },

   middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

});

 export const persistor = persistStore(store)