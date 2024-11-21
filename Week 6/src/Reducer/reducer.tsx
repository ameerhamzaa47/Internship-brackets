import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// Define the types for the state and the data
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

export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetchProducts',
  async () => {
    const response = await fetch('https://dummyjson.com/products');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data.products;
  }
);

// Create the slice with reducers
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addtocart: (state, action: PayloadAction<Product>) => {
        // Check if the product already exists in the cart
        const existingProduct = state.carts.find(
          (item) => item.id === action.payload.id
        );
  
        if (existingProduct) {
          // If the product exists, increase the quantity
          existingProduct.quantity += 1;
        } else {
          // Otherwise, add the product to the cart with quantity 1
          state.carts.push({ ...action.payload, quantity: 1 });
        }
      },
    deletecart:(state,action: PayloadAction<number>)=>{
       state.carts=state.carts.filter((item)=>item.id !== action.payload) 
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      });
  },
});

export const {addtocart,deletecart} = productSlice.actions

export default productSlice.reducer;