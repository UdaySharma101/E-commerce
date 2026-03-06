import { Link } from 'react-router-dom'
import React from 'react'

const HomeText = () => {
  return (
    <div className='h-full w-full  flex justify-center items-center '>
      <div className='w-full flex flex-col  gap-5'>
        <h1 className='text-5xl font-bold animate-pulse'>FIND PRODUCTS <br />THAT MATCH <br/> YOUR LIFESTYLE</h1>
        <h2 className='text-gray-600'>Browse through our wide range of quality products across fashion, beauty, electronics, home essentials, and more — carefully curated to fit your needs and reflect your personality..</h2>
      <Link to='/shop' className=''>        <button className='bg-black text-white py-3 px-7 w-50 cursor-pointer rounded-3xl hover:scale-105 animation-all ease-in-out hover:shadow-2xl hover:animate-pulse'>Shop Now</button>
</Link>
      </div>


    </div>
  )
}

export default HomeText