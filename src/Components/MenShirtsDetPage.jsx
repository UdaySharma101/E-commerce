import { IndianRupee } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const ProductDetShirts = () => {
  const { id } = useParams()
  const [shirtData, setShirtData] = useState(null)
  const {addToCart} = useContext(CartContext)
  useEffect(() => {

    const fetchShirts = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await res.json()
        setShirtData(data)
        console.log(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchShirts()
  }, [id])

  if(!shirtData) return <h1 className='h-screen w-screen items-center justify-center flex'>Loading....</h1>

  return (
    <div className='w-screen h-full '>
      <div className='flex '>
        <div className='w-[50%] h-screen flex items-center justify-center'>
          <img className=' h-90 hover:scale-115 animation ease-in-out cursor-zoom-in' src={shirtData.image} alt="" />

        </div>
        <div className='w-[50%] flex flex-col items-center justify-center gap-5 text-center'>
          <h2 className='font-medium text-lg'>{shirtData.title}</h2>
          <h1 className='font-bold text-2xl flex items-center justify-center'><IndianRupee size={13} />{shirtData.price}</h1>
          <button
           onClick={(e)=>{
            e.preventDefault()
            const data = {
               id: shirtData.id,
               image: shirtData.image,
               title: shirtData.title,
               price: shirtData.price 
            }
            addToCart(data)
           }}
          className='bg-black text-white px-7 py-4 rounded-2xl cursor-pointer hover:scale-105' >Add to cart</button>

        </div>
      </div>
    </div>
  )
}

export default ProductDetShirts
