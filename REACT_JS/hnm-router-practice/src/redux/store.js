// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/productReducer';
import authenticateReducer from './reducers/authenticateReducer';

const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authenticateReducer,
  },
});

export default store;
