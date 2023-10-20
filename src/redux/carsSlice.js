import { createSlice } from '@reduxjs/toolkit';

import { fetchCars, fetchFavoriteCars, addFavoriteCar } from './operations';

const handlePending = state => {
    state.loading = true;
};

const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
};

const handleFetchCarsFulfilled = (state, action) => {
    state.loading = false;
    state.error = null;
    state.cars = action.payload;
};

const handleFetchFavoriteCarsFulfilled = (state, action) => {
    state.loading = false;
    state.error = null;
    state.favoriteCars = action.payload;
};

const handleAddFavoriteCarFulfilled = (state, action) => {
    state.loading = false;
    state.error = null;
    const idx = state.favoriteCars.findIndex(favoriteCar => favoriteCar.id === action.payload.id);
    state.favoriteCar.splice(idx, 1);
};

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        cars: [],
        favoriteCars: [],
        loading: false,
        error: null,
    },
    extraReducers: builder =>
        builder.addCase(fetchCars.pending, handlePending).addCase(fetchCars.fulfilled, handleFetchCarsFulfilled).addCase(fetchCars.rejected, handleRejected).addCase(fetchFavoriteCars.pending, handlePending).addCase(fetchFavoriteCars.fulfilled, handleFetchFavoriteCarsFulfilled).addCase(fetchFavoriteCars.rejected, handleRejected).addCase(addFavoriteCar.pending, handlePending).addCase(addFavoriteCar.fulfilled, handleAddFavoriteCarFulfilled).addCase(addFavoriteCar.rejected, handleRejected),
});

export const carsReducer = carsSlice.reducer;