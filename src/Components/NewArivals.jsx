import React from 'react'

const NewArivals = ({products}) => {
  return (
    
        <div className='flex  items-center py-20 '>
       {products.map((data)=>{
        return   <div className='w-full h-40  flex justify-center items-center'>
            <div className='h-65 w-60  flex flex-col items-center'>
                <img className='rounded-2xl h-20' src={data.image} alt="" />
                <h2 className='text-gray-400'>{data.name}</h2>
                <h1 className='text-xl font-bold'>Rs{data.priceCents}</h1>
            </div>

        </div>
       })}
       </div>
    
  )
}

export default NewArivals
