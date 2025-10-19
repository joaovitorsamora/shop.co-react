import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  items: CartItem[];
  total: number;
}

const initialState: CartState = {
  items: [],
  total: 0,
};

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    adicionarProduto: (state, action: PayloadAction<CartItem>) => {
      const itemExistente = state.items.find(t => t.id === action.payload.id);
      if (itemExistente) {
        itemExistente.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.total = state.items.reduce((acc, i) => acc + i.price * i.quantity, 0);
    },

    removerProduto: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(t => t.id !== action.payload);
      state.total = state.items.reduce((acc, i) => acc + i.price * i.quantity, 0);
    },

    limparCarrinho: state => {
      state.items = [];
      state.total = 0;
    },
  },
});
export const { adicionarProduto, removerProduto, limparCarrinho } = counterSlice.actions;
export default counterSlice.reducer;
