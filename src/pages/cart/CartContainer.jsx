import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import Cart from './Cart';

import {
  addToCart, clearCart, decreaseCart, getTotals, removeFromCart,
} from '../../cartSlice';

export default function CartContainer() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleIncreaseCartItemQuantity = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleDecreaseCartItemQuantity = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <Cart
      cart={cart}
      onRemove={handleRemoveFromCart}
      onIncrease={handleIncreaseCartItemQuantity}
      onDecrease={handleDecreaseCartItemQuantity}
      onClear={handleClearCart}
    />
  );
}
