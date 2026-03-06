import React, { useEffect, useState } from 'react'
import { IndianRupee } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { CartContext } from "../context/CartContext"



const ShopPage = () => {
    const [product, setProduct] = useState([])
    const { addToCart } = useContext(CartContext);
     
    
    useEffect(() => {

        async function fetchProducts() {
            try {
                const res = await fetch('https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json')
                const data = await res.json()
    //             const filterProducts = data.filter((items)=>{
    //     items.title.toLowerCase().include(search.toLowerCase())
    // })
                setProduct(data)
                // console.log(data);

            } catch (error) {
                console.log(error);
            }
        }
        fetchProducts()
    }, [])
    return (
        <>
            <div className='flex items-center justify-center text-2xl text-gray-500'>
                <h1>Featured Products..</h1>
            </div>
            <div className='h-full w-full flex flex-wrap justify-center items-center '>
                {product.map((data) => {
                    return <Link to={`/detailspage/${data.id}`} key={data.id}>
                        <div className=' h-80 w-60 flex flex-col items-center justify-center text-center'>
                            <img className='h-30 hover:scale-111 animation ease-in-out' src={data.image} alt="" />
                            <h1 className='text-gray-600'>{data.title}</h1>
                            <h1 className='text-2xl flex items-center'>    <IndianRupee size={10} />{data.priceCents}</h1>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    addToCart({
                                        id: data.id,
                                        title: data.title,
                                        price: data.priceCents,
                                        image: data.image
                                    });
                                }}
                                className='bg-black text-white px-5 py-3 rounded-2xl cursor-pointer hover:scale-105 animation-all ease-in-out hover:shadow-2xl'>Add to cart</button>
                        </div>
                    </Link>
                })}
            </div>
        </>
    )
}

export default ShopPage

