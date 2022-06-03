import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import searchReducer from './searchSlice';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    search: searchReducer,
    cart: cartReducer,
  },
});

export default store;
