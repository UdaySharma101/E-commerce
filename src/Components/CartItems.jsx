import React, { useContext } from 'react'
import { IndianRupeeIcon, Minus, Plus, Trash } from 'lucide-react'
import { CartContext } from '../context/CartContext'

const CartItems = ({ cart }) => {

  const { increaseQuantity, decreaseQuantity, removeFromCart,  clearFullCart } = useContext(CartContext)
  const totalPrice = cart.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);

  return (
    <div className='flex flex-col items-center justify-center py-10 gap-6'>

      {cart.map(item => (
        <div
          key={item.id}
          className='flex items-center justify-between py-4 shadow-xl w-[70%] rounded gap-10 px-6'
        >

          <img className='h-28 rounded' src={item.image} alt={item.title} />

          <div className='flex flex-col gap-2 w-50'>
            <h1 className='text-lg text-gray-700'>{item.title}</h1>
            <h2 className='text-xl flex items-center'>
              <IndianRupeeIcon size={16} />
              {item.price}
            </h2>
          </div>

          <div className='flex gap-3 shadow-md bg-white px-5 py-2 rounded items-center'>
            <Minus
              onClick={() => decreaseQuantity(item.id)}
              className='cursor-pointer hover:scale-110'
            />

            <span>{item.quantity}</span>

            <Plus
              onClick={() => increaseQuantity(item.id)}
              className='cursor-pointer hover:scale-110'
            />
          </div>

          <Trash
            onClick={() => removeFromCart(item.id)}
            className='cursor-pointer text-red-500 hover:scale-110'
          />

        </div>
      ))}
      <button onClick={()=>  clearFullCart()}  className='py-5 px-60 cursor-pointer hover:scale-105 active:scale-110 active:animation active:ease-in-out bg-red-300'>Clear Cart</button>
      <div className='flex  items-center w-full justify-center'>
             <h1 className='font-bold text-2xl shadow-2xl px-15 py-3 '>Total Price: {totalPrice}</h1>

      </div>
    </div>
  )
}

export default CartItems