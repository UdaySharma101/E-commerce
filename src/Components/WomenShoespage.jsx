import { IndianRupee } from 'lucide-react'
import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from "../context/CartContext"

const WomenShoespage = () => {
  const [womenShoes, setWomenShoes] = useState(null)
  const { addToCart } = useContext(CartContext)
  useEffect(() => {
    const fetchingShoes = async () => {
      const res = await fetch('https://dummyjson.com/products/category/womens-shoes')
      const data = await res.json()
      setWomenShoes(data)
      // console.log(data)
    }
    fetchingShoes()
  }, [])

  if (!womenShoes) return <h1 className='h-screen cursor-wait flex items-center justify-center'>Loading...</h1>

  return (
    <div className='h-full w-full flex flex-wrap justify-center items-center gap-20'>
      {womenShoes.products.map((raw) => {
        return <Link className='py-20 w-60 flex flex-col items-center justify-center text-center ' to={`/shoesdetlpage/${raw.id}`} key={raw.id}>
          {/* <div className=''> */}
          <div className=' w-fit flex flex-col items-center justify-center  gap-5 ' >
            <img className=' cursor-pointer hover:scale-105 animation ease-in-out' src={raw.images[1]} alt="" />
            <h2 className='text-lg'>{raw.brand}</h2>
            <h2 className='text-lg'>{raw.title}</h2>
            <h1 className='text-2xl font-bold flex items-center justify-center'><IndianRupee />{raw.price}</h1>
            <button
              onClick={(e) => {
                e.preventDefault()
                const product = {
                  id: raw.id,
                  title: raw.title,
                  price: raw.price
                }

                addToCart(product)

              }}
              className='bg-black text-white px-5 py-3 rounded-2xl cursor-pointer hover:scale-105 animation-all ease-in-out hover:shadow-2xl'>Add to cart</button>

            {/* </div> */}
          </div>
        </Link>
      })}
    </div >
  )
}

export default WomenShoespage
