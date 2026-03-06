import { IndianRupee } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const ProductDetailedPage = () => {
  const { id } = useParams()
  const [singleProd, setSingleProd] = useState(null)
  const { addToCart } = useContext(CartContext)

  useEffect(() => {
    fetch('https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json')
      .then(res => res.json())
      .then(data => {
        console.log(data[0]); // check structure

        const foundProduct = data.find(
          (item) => item.id === id

        );
        // console.log(foundProduct);
        setSingleProd(foundProduct)
      });
  }, [id]);


  if (!singleProd) return <h1 className='h-screen text-xl cursor-wait flex justify-center  items-center' >Loading.....</h1>

  return (
    <div className='h-[84vh] flex' >
      <div className='w-[50vw] h- flex items-center justify-center'>
        <img className='hover:scale-110 cursor-zoom-in' src={singleProd.image} alt="" />
      </div>
      <div className='flex justify-center gap-10 items-center flex-col h-full w-[50vw]'>
        <h1 className='text-xl font-extrabold'>{singleProd.name}</h1>
        <h2>{singleProd.description}</h2>
        {/* <h1>{singleProd.rating = []}</h1> */}
        <h1 className='text-2xl font-bold flex items-center justify-center'><IndianRupee size={15} /> {singleProd.priceCents}</h1>
        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart({
              id: singleProd.id,
              image: singleProd.image,
              title: singleProd.name,
              price: singleProd.priceCents
            })
          }}
          className='bg-black rounded-2xl text-white px-8 py-3 cursor-pointer  hover:scale-111 animation ease-in-out '>Add to cart</button>
      </div>
    </div>
  )
}

export default ProductDetailedPage

