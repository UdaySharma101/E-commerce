import React from 'react'

const HomeText = () => {
  return (
    <div className='h-full w-full  flex justify-center items-center'>
      <div className='w-full flex flex-col  gap-5'>
        <h1 className='text-5xl font-bold'>FIND CLOTHES <br /> THAT MATACHES  <br /> YOU STYLE</h1>
        <h2 className='text-gray-600'>Browse through our diverse range of meticulously crafted garments, desigened <br /> to bring out your individuality and cater to yout sence of style.</h2>
        <button className='bg-black text-white py-3 px-7 w-50 cursor-pointer rounded-3xl'>Shop Now</button>
      </div>


    </div>
  )
}

export default HomeText