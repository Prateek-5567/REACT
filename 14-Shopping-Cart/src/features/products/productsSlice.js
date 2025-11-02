import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, name: 'Laptop', price: 60000 },
    { id: 2, name: 'Phone', price: 25000 },
    { id: 3, name: 'Headphones', price: 3000 },
  ],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
