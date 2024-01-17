import { configureStore } from "@reduxjs/toolkit";
import { reducerCars } from "./carsSlice";
import { persistStore} from 'redux-persist'
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
    cars: reducerCars,
   
  },

   middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

});

 export const persistor = persistStore(store)