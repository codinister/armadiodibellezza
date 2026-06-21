'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addCart(state) {},
  },
});

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;
