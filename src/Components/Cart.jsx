import React, { useContext } from 'react'
import { BrushCleaning } from 'lucide-react';
import CartItems from './CartItems';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  

  const { cart } = useContext(CartContext);
   
  

  return (
    <>
      {cart.length === 0 ? (
        <div className='h-screen w-screen flex items-center justify-center'>
          <h1 className='text-5xl font-bold text-gray-400 flex items-center justify-center'>
            Your cart is empty <BrushCleaning size={70} />
          </h1>
        </div>
      ) : (
        <CartItems cart={cart}/>
      )}
    </>
  )
}

export default Cart