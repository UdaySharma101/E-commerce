import React from 'react'
import HomeText from './HomeText'
import HomeImg from './HomeImg'
import Footer from './Footer'
import LastFooter from './LastFooter'

const Home = ({ products }) => {
  return (
    <>
      <div className='h-[89vh] w-screen px-13  bg-gray-200 flex items-center justify-center  '>
        <HomeText />
        <HomeImg />
      </div>

      <Footer products={products} />
      <LastFooter />
    </>
  )
}

export default Home