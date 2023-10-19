import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://64bc2c2e7b33a35a44471974.mockapi.io/api/rentcar';

// https://64bc2c2e7b33a35a44471974.mockapi.io/api/rentcar/:endpoint
  
export const fetchCars = createAsyncThunk(
    'cars/fetchAllCars',
    async (__, thunkAPI) => {
        try {
            const resp = await axios.get('/catalog');
            return resp.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        };
    }
);

export const fetchFavoriteCars = createAsyncThunk(
    'favoriteCars/fetchAllFavoriteCars',
    async (__, thunkAPI) => {
        try {
            const resp = await axios.get('/favorite');
            return resp.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        };
    }
);

export const addFavoriteCar = createAsyncThunk(
    'favorite/addFavoriteCar',
    async (favoriteCar, thunkAPI) => {
        try {
            const resp = await axios.post('/favorite', { ...favoriteCar });
            return resp.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);
