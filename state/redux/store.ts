'use client';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import cartReducer from './reducers/cartSlice';

const config = {
  key: 'root',
  storage,
};

const combine = combineReducers({
  cart: cartReducer,
});

const reducer = persistReducer(config, combine);

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      serializableCheck: false,
    }),
});

setupListeners(store.dispatch);
