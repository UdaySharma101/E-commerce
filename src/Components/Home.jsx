import React from 'react'
import HomeText from './HomeText'
import HomeImg from './HomeImg'

const Home = () => {
  return (
    <div className='h-[87vh] w-screen px-13 bg-gray-200 flex items-center justify-center '>
      <HomeText/>
      <HomeImg/>
    </div>
  )
}

export default Home