import axios from "axios";
// import { useSelector } from "react-redux";
import { createAsyncThunk } from "@reduxjs/toolkit"; 
import { createAction } from '@reduxjs/toolkit';
// import { getPerPage,getPage} from './selectors';

axios.defaults.baseURL = "https://65a84931219bfa371866fcc4.mockapi.io";  

  

export const fetchCars = createAsyncThunk("adverts/fetchCars",
  async (_, thunkAPI) => {
const currentPage = thunkAPI.getState().adverts.page;


//     const state = thunkAPI.getState();
//     const currentPage = state.adverts.page;
// const page = useSelector(getPage);
// const perPage = useSelector(getPerPage);

    try {
      const response = await axios.get(`/adverts?limit=12&page=${currentPage}`);
     
      return response.data;
    }
    catch (e) {
     
      return thunkAPI.rejectWithValue(e.message);
    }

  });

export const handleLoadMoreAction = createAction('adverts/handleLoadMoreAction');

