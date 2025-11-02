import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from './cartSlice';

const Cart = () => {
  const { cartItems, totalPrice } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className='text-center text-emerald-700'> Your Cart</h2>
      {
      cartItems.length === 0 ? (
        <p className='text-center text-yellow-400' >Cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id}>
              <p>{item.name} × {item.quantity}</p>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
            </div>
          ))}
          <h3>Total: ₹{totalPrice}</h3>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </>
      )
      }
    </div>
  );
};

export default Cart;
