import React, { useEffect, useState } from 'react'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Footer from './Components/Footer'
import LastFooter from './Components/LastFooter'
import MainFooter from './Components/MainFooter'



const App = () => {
const [products, setSroducts] = useState([])
  
useEffect(()=>{
  fetch('https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json')
  .then(res => res.json())
  .then(data => {
    const apparel = data.filter(p => p.category === 'Fashion & Apparel');
    setSroducts(apparel)
  },[]);
})
 
  return (
<>
<Nav/>
<Home/>
<Footer products={products}/> 
<LastFooter/>
<MainFooter/>
</>
  )
}

export default App