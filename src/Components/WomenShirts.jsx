import { IndianRupee } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
const WomenShirts = () => {
    const [apidata, setapidata] = useState(null)
     const {addToCart} =  useContext(CartContext)
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('https://fakestoreapi.com/products/category/women%27s%20clothing');
            const data = await res.json();
            setapidata(data)
            // console.log(data)
        };

        fetchProducts();
    }, [])

    if (!apidata) return <h1 className='h-screen text-xl cursor-wait flex justify-center  items-center ' >Loading.....</h1>


    return (
        <div className='flex flex-wrap justify-center gap-15 p-6'>
            {apidata.map((raw) => {
            return <Link to={`/shirtsdetlpage/${raw.id}`} key={raw.id}>
             <div className=' flex items-center justify-center gap-10'>
                    <div className='h-90 w-60  flex flex-col items-center justify-center cursor-pointer gap-2'>
                        <img className='h-50 hover:scale-105 ease-in-out anima ' src={raw.image} alt="" />
                        <h2 className='w-39 text-gray-500 '>{raw.title}</h2>
                        <h1 className='flex justify-center items-center font-bold text-2xl'> <IndianRupee size={15} />{raw.price}</h1>
                         <button
                        onClick={(e)=>{
                            e.preventDefault()
                            const data = {
                                id: raw.id,
                            image: raw.image,
                            title: raw.title,
                            price: raw.price,
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

export default WomenShirts
