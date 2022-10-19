import React, {useState, useEffect, useContext} from "react";
import Home from "./pages/Home";
import {Routes, Route} from 'react-router-dom'
import Products from "./pages/Products";
import ProductCart from "./pages/ProductCart";
import Login from "./pages/Login";
import Update from "./pages/Update";
import NewArrivals from "./pages/NewArrivals"
import axios from 'axios'



export const ProductsContext = React.createContext()
export const CategoriesContext = React.createContext()


function App() {

  const [newproducts, setProducts] = useState([])
  const [newcategories, setCategories] = useState([])


  const prodreq = axios.get('http://localhost:3001/products')
  const catreq = axios.get("http://localhost:3001/categories")



  const fetchAllProducts = async () =>{
    try{
        await axios.all([prodreq, catreq]).then(axios.spread(function(res1, res2){
          setProducts(res1.data) 
          setCategories(res2.data)
        }))

        return;
    }catch(err){
        console.log(err)
    }
  }

    useEffect(() => {
      fetchAllProducts()
  }, [])


  return (
    

    <div className='opacity-changer'>
          <ProductsContext.Provider value={newproducts}>
            <CategoriesContext.Provider value={newcategories}>
            <Routes>
              <Route path='/' element={<Home/>}> </Route>
              <Route path='products/:productscategory' element={<Products/>}/> 
              <Route path='newarrivals' element={<NewArrivals/>}/>
              <Route path='products/:productscategory/:productinfo' element={<ProductCart/>} />
              <Route path='account/login' element={<Login/>}/>
              <Route path="/update/:id" element={<Update/>}/>
            </Routes>
            </CategoriesContext.Provider>
          </ProductsContext.Provider>
    </div>

  );
}



export default App


