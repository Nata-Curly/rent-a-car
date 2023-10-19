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

// const handlePending = state => {
//   state.loading = true;
// };

// const handleRejected = (state, action) => {
//   state.loading = false;
//   state.error = action.payload;
// };

// const handleFetchFulfilled = (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   state.items = action.payload;
// };

// const handleAddContactFulfilled = (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   state.items.push(action.payload);
// };

// const handleDeleteContactFulfilled = (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   const index = state.items.findIndex(
//     contact => contact.id === action.payload.id
//   );
//   state.items.splice(index, 1);
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },

//   extraReducers: builder =>
//     builder
//       .addCase(fetchContacts.pending, handlePending)
//       .addCase(fetchContacts.fulfilled, handleFetchFulfilled)
//       .addCase(fetchContacts.rejected, handleRejected)
//       .addCase(addContact.pending, handlePending)
//       .addCase(addContact.fulfilled, handleAddContactFulfilled)
//       .addCase(addContact.rejected, handleRejected)
//       .addCase(DeleteContact.pending, handlePending)
//       .addCase(DeleteContact.fulfilled, handleDeleteContactFulfilled)
//       .addCase(DeleteContact.rejected, handleRejected),
// });

// export const contactsReducer = contactsSlice.reducer;
