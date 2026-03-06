import { IndianRupeeIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const ProductDetailsPageShoes = () => {
    const { id } = useParams()
    const [detPage, setDetPage] = useState(null)
    const { addToCart } = useContext(CartContext)


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/products/${id}`);
                const data = await res.json();
                setDetPage(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!detPage) return <h1 className='text-center'>Loading.....</h1>

    return (
        <div className='flex h-full w-screen '>
            <img className='w-[50%] cursor-zoom-in hover:scale-115 animation ease-in-out' src={detPage.images[0]} alt="" />
            <div className='w-[50%] flex justify-center items-center flex-col gap-10'>
                <h2 className='font-medium text-xl'>{detPage.brand}</h2>
                <h1 className='text-2xl font-bold flex  items-center justify-center'><IndianRupeeIcon size={13} />{detPage.price}</h1>
                <button onClick={() => addToCart({
                    id: detPage.id,
                    title: detPage.title,
                    price: detPage.price ,
                    image: detPage.images[0]
                })} className='bg-black text-white px-7 py-4 rounded-2xl cursor-pointer hover:scale-105' >Add to cart</button>

            </div>
        </div>
    )
}

export default ProductDetailsPageShoes
