import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit"; 

axios.defaults.baseURL = "https://65a84931219bfa371866fcc4.mockapi.io";  

export const fetchCars = createAsyncThunk("adverts/fetchCars",
async (_, thunkAPI) => {

    try {
      const response = await axios.get("/adverts");
      // При успешном запросе возвращаем промис с данными
      return response.data;
    }
    catch (e) {
      // При ошибке запроса возвращаем промис
      // который будет отклонен с текстом ошибки
      return thunkAPI.rejectWithValue(e.message);
    }

 
});