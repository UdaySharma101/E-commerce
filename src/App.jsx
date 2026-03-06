import React, { useEffect, useState } from 'react'
import Nav from './Components/Nav'
import Home from './Components/Home'
import MainFooter from './Components/MainFooter'
import Cart from './Components/Cart'
import {  Routes, Route,  } from 'react-router-dom';
import ShopPage from './Components/ShopPage'
import Abot from './Components/Abot'
import ProductDetailedPage from './Components/ProductDetailedPage'
import WomenShirts from './Components/WomenShirts'
import MenShirts from './Components/MenShirts'
import WomenShoespage from './Components/WomenShoespage'
import MenShoesPage from './Components/MenShoesPage'
import ProductDetailsPageShoes from './Components/ProductDetailsPageShoes'
import ProductDetShirts from './Components/ProductDetShirts'
import MenShirtsDetPage from './Components/MenShirtsDetPage'





const App = () => {
  const [products, setSproducts] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch('https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json')
      .then(res => res.json())
      .then(data => {
        const apparel = data
        setSproducts(apparel)
      }, []);
  })
// .filter(p => p.category === 'Fashion & Apparel');



  
// useEffect(()=>{
//   const fetchProducts = async () => {
//     const res = await fetch('https://dummyjson.com/products/category/mens-shirts');
//      const data = await res.json();
//       const customItems =  data.products.filter((item)=>{
//       item.title.toLowerCase().includes("casual")
//     })
//     console.log(customItems)
//   };

//   fetchProducts();
//   },[])

  return (
    <>

      <Nav setSearch={setSearch} />



      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/shop' element={<ShopPage search={search} />} />
        <Route path='/about' element={<Abot/>} />
        <Route path='/detailspage/:id' element={<ProductDetailedPage/>} />
        <Route path='/womwnshirt' element={<WomenShirts/>} />
        <Route path='/menshirt' element={<MenShirts/>} />
        <Route path='/womenshoes' element={<WomenShoespage/>} />
        <Route path='/menshoes' element={<MenShoesPage/>} />
        <Route path='/shoesdetlpage/:id' element={<ProductDetailsPageShoes/>} />
        <Route path='/shirtsdetlpage/:id'element={<ProductDetShirts/>}/>
        <Route path='/menshirtsdetpage/:id'element={<MenShirtsDetPage/>}/>

        {/* <Route path='/womenshoes' element={<WomenShoespage/>} />
        <Route path='/menshoes' element={<MenShoesPage/>} />
        <Route path='/menshirt' element={<MenShirts/>} /> */}
      </Routes>

      
      <MainFooter />

    </>
  )
}

export default App