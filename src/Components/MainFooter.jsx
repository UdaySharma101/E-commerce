import React from 'react'
import { Twitter, Facebook, Instagram, Github } from 'lucide-react';


const MainFooter = () => {
    return (
        <div className='h-[60vh] w-screen bg-gray-300'>

            <div className='flex items-center justify-between  px-12 py-5'>
                <div className='flex  flex-col ' >
                    <h1 className='font-bold text-4xl py-5'>SHOP.CO</h1>
                    <span className='text-gray-400 flex  flex-col gap-1.5'>We have cloths that suits your style and <br /> which you are proud to wear from <br /> Women to Men. </span>

                    <div className='flex py-8 gap-3 '>
                        <span className='h-8 w-8 rounded-full flex items-center justify-center shadow-m bg-white border cursor-pointer'><Twitter /> </span>
                        <span className='h-8 w-8 rounded-full flex items-center justify-center shadow-m bg-white border cursor-pointer'><Facebook  /></span>
                        <span className='h-8 w-8 rounded-full flex items-center justify-center shadow-m bg-white border cursor-pointer' ><Instagram /></span>
                        <span className='h-8 w-8 rounded-full flex items-center justify-center shadow-m bg-white border cursor-pointer'><Github /></span>
                    </div>
                </div>

                <div>
                    <h1 className=' text-lg py-5'>COMPANY</h1>
                    <div className='text-gray-400 flex  flex-col gap-1.5'>
                        <h2>About</h2>
                        <h2>Features</h2>
                        <h2>Works</h2>
                    </div>

                </div>

                <div>
                    <h1 className=' text-lg py-5'>HELP</h1>
                    <div className='text-gray-400 flex  flex-col gap-1.5'>
                        <h2>Custmer Support</h2>
                        <h2>Dilivery Details</h2>
                        <h2>Term 7 Conditions</h2>
                    </div>


                </div>

                <div>
                    <h1 className=' text-lg py-5'>FAQ</h1>
                    <div className='text-gray-400 flex  flex-col gap-1.5'>
                        <h2>Account</h2>
                        <h2>Manage Deliveries</h2>
                        <h2>Orders</h2>
                        <h2>Payments</h2>
                    </div>
                </div>
            </div>
                        <div className='border-b-gray-700 px-20'></div>

        </div>
    )
}

export default MainFooter