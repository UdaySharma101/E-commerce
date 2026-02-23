import React from 'react'
import { ShoppingCart } from 'lucide-react';
import { Search } from 'lucide-react';


const Nav = () => {
    return (
        <div className='flex items-center justify-center py-5  gap-6 w-full h-17 sticky' >
            <h1 className='text-3xl font-extrabold'>SHOP.CO</h1>
            <a className='text-gray-700' href="###">Home</a>
            <a className='text-gray-700' href="###">Shop</a>
            <a className='text-gray-700' href="###">About</a>
            {/* <div className='flex items-center justify-center'> */}
                {/* <span className='absolute right-'><Search strokeWidth={1.25} size={20} color='gray' /> </span> */}
                <input className='bg-[#F5F5F5] shadow-2xl w-[40%] py-1 px-2 rounded-4xl border-0 outline-0 cursor-pointer' placeholder='Search for products...' type="text" />
            {/* </div> */}
            <span className='cursor-pointer'>  
                <ShoppingCart />
            </span>
        </div>
    )
}

export default Nav