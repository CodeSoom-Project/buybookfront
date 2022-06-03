import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: ((state, { payload: product }) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === product.id,
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(
          `장바구니에 ${state.cartItems[itemIndex].title} 추가로 담겼습니다.`,
          { position: 'bottom-left' },
        );
      } else {
        const tempProduct = { ...product, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success('장바구니에 물건이 잘 담겼습니다.', {
          position: 'bottom-left',
        });
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    }),
    removeFromCart(state, { payload: product }) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== product.id,
      );

      state.cartItems = nextCartItems;
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    decreaseCart(state, { payload: product }) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === product.id,
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== product.id,
        );

        state.cartItems = nextCartItems;
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    clearCart(state) {
      state.cartItems = [];
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    getTotals(state) {
      const { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        },
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const {
  addToCart, removeFromCart, decreaseCart, clearCart, getTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
