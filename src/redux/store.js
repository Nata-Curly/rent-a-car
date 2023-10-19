import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './carsSlice';

export const store = configureStore({
    reducer: {
        cars: carsReducer,
    },
});


// import { contactsReducer } from './contactsSlice';
// import { filterReducer } from './filterSlice';

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
// });
