import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
      productName: "John",
      productCategory: "Doe",
      imageInput: "Doe",
      productFreshness: "Doe",
      productDescription: "Doe",
      productPrice: "Doe",
    },
  ],
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
