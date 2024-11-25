import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Product {
    thumbnail: string | undefined;
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    quantity: number;
  }
  
  interface ProductState {
    products: Product[];
    carts: Product[]; 
    loading: boolean;
    error: string | null;
  }
  
  // Initial state
  const initialState: ProductState = {
    products: [],
    carts: [], 
    loading: false,
    error: null,
  };


  export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      return data.products;
    }
  );


  const productSlice=createSlice({
    name:"product",
    initialState,
    reducers:{
        addtocart:(state,action)=>{
            state.carts.push(action.payload)
        }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchProducts.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
          state.loading = false;
          state.products = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || "Failed to fetch products";
        });
    },
  })

export const {addtocart}=productSlice.actions

export default productSlice.reducer