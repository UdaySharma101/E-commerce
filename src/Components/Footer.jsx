import React from 'react'
import FooterTopItems from './FooterTopItems'
import NewArivals from './NewArivals'

const Footer = ({ products}) => {
  return (
  <>
    <div className='text-center py-10 text-4xl font-bold'>
      <h1>NEW ARRIVALS</h1>
    </div>
<div>
                  <FooterTopItems  products={products.slice(0,4)}/>
    <div className='text-center  text-4xl font-bold'>
      <h1>TOP SELLING</h1>
    </div>
    <NewArivals products={products.slice(5,8)}/>
</div>
  </>

  )
}

export default Footer
