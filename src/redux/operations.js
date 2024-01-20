import axios from "axios";
// import { useSelector } from "react-redux";
import { createAsyncThunk } from "@reduxjs/toolkit"; 
import { createAction } from '@reduxjs/toolkit';
// import { getPerPage,getPage} from './selectors';

axios.defaults.baseURL = "https://65a84931219bfa371866fcc4.mockapi.io";  

  

export const fetchCars = createAsyncThunk("adverts/fetchCars",
  async (_, thunkAPI) => {
const currentPage = thunkAPI.getState().adverts.page;
// const make = thunkAPI.getState().adverts.make;

//     const state = thunkAPI.getState();
//     const currentPage = state.adverts.page;
// const page = useSelector(getPage);
    // const perPage = useSelector(getPerPage);
    
// try {
//   let url = `/adverts?limit=12&page=${currentPage}`;
  
//   if (make) {
//       url += `&make=${make}`;
//     }

//   const response = await axios.get(url);
//   return response.data;
//    } catch (e) {
//     return thunkAPI.rejectWithValue(e.message);
//   }


    try {
      const response = await axios.get(`/adverts?limit=12&page=${currentPage}`);
     
      return response.data;
    }
    catch (e) {
     
      return thunkAPI.rejectWithValue(e.message);
    }

  });

export const handleLoadMoreAction = createAction('adverts/handleLoadMoreAction');


export const fetchFiltredCars = createAsyncThunk("adverts/fetchFiltredCars",
  async (_, thunkAPI) => {
const make = thunkAPI.getState().filter;
    try {
      const response = await axios.get(`/adverts?make=${make}`);
     
      return response.data;
    }
    catch (e) {
     
      return thunkAPI.rejectWithValue(e.message);
    }

  });
