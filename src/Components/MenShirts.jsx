import { IndianRupee } from 'lucide-react'
import { Link } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
const MenShirts = () => {
  const [menData, setMenData] = useState(null)
  const {addToCart} = useContext(CartContext)
  useEffect(() => {

    async function fetchingData() {
      let res = await fetch('https://fakestoreapi.com/products/category/men%27s%20clothing')
      let data = await res.json()
      setMenData(data)
      console.log(data)
    }
    fetchingData()
  }, [])

  if (!menData) return <h1 className='h-screen flex items-center justify-center cursor-wait'>Loading....</h1>

  return (
    <div className='flex gap-20 items-center justify-center h-screen'>
      {menData.map((raw) => {
        return <Link to={`/menshirtsdetpage/${raw.id}`} key={raw.id}>
          <div className='flex flex-wrap h-fit '>
            <div className='h-30 w-50 flex flex-col items-center justify-center cursor-pointer'>
              <img className='hover:scale-105 animation ease-in-out ' src={raw.image} alt="" />
              <h2>{raw.title}</h2>
              <h2 className='flex items-center justify-center font-bold'><IndianRupee size={12} />{raw.price}</h2>
              <button
                onClick={(e)=>{
                  e.preventDefault()
                  const data = {
                    id : raw.id,
                    image : raw.image,
                    title : raw.title,
                    price: raw.price
                  }
                  addToCart(data)
                }}
              className='bg-black text-white px-5 py-3 rounded-2xl cursor-pointer hover:scale-105 animation-all ease-in-out hover:shadow-2xl'>Add to cart</button>

            </div>
          </div>
        </Link>
      })}
    </div>
  )
}

export default MenShirts
