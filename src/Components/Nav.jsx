import React,{useContext, useState} from 'react'
import { ShoppingCart } from 'lucide-react';
import { Search } from 'lucide-react';
import {Link} from "react-router-dom"
import { CartContext } from '../context/CartContext'

// import { useNavigate } from 'react-router-dom';
// import { BrowserRouter,Routes,Route } from 'react-router-dom'; 

const Nav = ({setSearch}) => {
    // const navigate = useNavigate();

       const { cart } = useContext(CartContext);
       const [input, seTinput] = useState("")

       const handleSearch = (e) =>{
        const value =    e.target.value
        console.log(value)
        setSearch(value)
        seTinput(value)
        
       }

    // Calculate total quantity (not just cart.length)
    const totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );


    
    return (
        <div className='flex items-center justify-around py-5  gap-6 w-screen h-17  bg-gray-300' >
            <h1 className='text-3xl font-extrabold'>SHOP.CO</h1>

            <Link className='text-gray-700 hover:animate-bounce ease-in-out' to="/">Home</Link>
            <Link className='text-gray-700 hover:animate-bounce ease-in-out' to="/shop">Shop</Link>
            <Link className='text-gray-700 hover:animate-bounce ease-in-out' to='/about'>About</Link>
            
            {/* <input type="text" value={input} onChange={handleSearch}  className='bg-[#F5F5F5] shadow-2xl w-[40%] py-1 px-2 rounded-4xl border-0 outline-0 cursor-pointer' placeholder='Search for products...' type="text" /> */}
              
              

            <Link to="/cart">
                        <button className='relative cursor-pointer hover:animate-bounce'><ShoppingCart /></button>

                          {totalItems > 0 && (
                    <span className='absolute top-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full'>
                        {totalItems}
                    </span>
                )}
            </Link>
        </div>
    )
}

export default Nav