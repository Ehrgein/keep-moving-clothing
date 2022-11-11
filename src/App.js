import React, {useState, useEffect, useContext, createContext, useLayoutEffect} from "react";
import Home from "./pages/Home";
import { useNavigate } from "react-router-dom"; 
import {Routes, Route, useLocation} from 'react-router-dom'
import Products from "./pages/Products";
import ProductCart from "./pages/ProductCart";
import Login from "./pages/Login";
import Update from "./pages/Update";
import NewArrivals from "./pages/NewArrivals"
import axios from 'axios'
import CartContext from "./components/Cart/CartFunctionality";
import Register from "./pages/Register";
import Account from './pages/Account'
import ProtectedRoutes from "./pages/ProtectedRoutes";
import ProductsByBrand from "./components/Products/ProductsByBrand";
import BrandProduct from './pages/BrandProduct'
import ScrollToTop from "./components/ScrollToTop";
import MyWishlist from './pages/MyWishlist'
import AllBrands from "./pages/AllBrands";
import MyOrders from "./pages/MyOrders";
import OrdersInfo from "./pages/OrdersInfo";


export const ProductsContext = React.createContext()
export const CategoriesContext = React.createContext()
export const BrandsContext = React.createContext()
export const UserContext = React.createContext({
  user: null,
  userid: null,
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  setUser: () => {},
  setUserId: () => {},
})





function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const [userid, setUserId] = useState(null)
  const [newproducts, setProducts] = useState([])
  const [newcategories, setCategories] = useState([])
  const [allbrands, setBrands] = useState([])
  
  const [loginMessage, setLoginMessage] = useState("")
  const [loggedUser, setLoggedUser] = useState("")
  const navigate = useNavigate()


  const usercontext = useContext(UserContext)
  const cartcontext = useContext(CartContext)

  console.log




  axios.defaults.withCredentials = true;

  const prodreq = axios.get('http://localhost:3001/products')
  const catreq = axios.get("http://localhost:3001/categories")
  const brandsreq = axios.get("http://localhost:3001/brands")
  


  const fetchAllProducts = async () =>{
    try{
        await axios.all([prodreq, catreq, brandsreq]).then(axios.spread(function(res1, res2, res3){
          setProducts(res1.data) 
          setCategories(res2.data)
          setBrands(res3.data)
        }))

        return;
    }catch(err){
        console.log(err)
    }
  }


  useEffect(() => {
    fetchAllProducts()
}, [])


useEffect(() => {

  axios.get("http://localhost:3001/login").then((response)=>{
      if (response.data.loggedIn) {
          setIsLoggedIn(true)
          setUserId(response.data.user[0].id)
          setUser(response.data.user[0].username)
      } else{
          setIsLoggedIn(false)
      }
  })
}, [user, isLoggedIn])




  

  const contextvalue = {user, userid, isLoggedIn, setUser, setUserId, setIsLoggedIn}

  

  return (
    

    <div className='opacity-changer'>
      <UserContext.Provider value={contextvalue}>
        <BrandsContext.Provider value={allbrands}>
        <ProductsContext.Provider value={newproducts}>
            <CartContext>
            <CategoriesContext.Provider value={newcategories}>
            <ScrollToTop/>
              <Routes>
                <Route path='/' element={<Home/>}> </Route>
                <Route path='products/:productscategory' element={<Products/>}/> 
                <Route path='brands' element={<AllBrands/>}/>
                <Route path='newarrivals' element={<NewArrivals/>}/>
                <Route path='products/:productscategory/:productinfo' element={<ProductCart/>} />
                <Route path='/collection/:brand' element={<BrandProduct/>}/>
                <Route path='account/register' element={<Register/>}/>
                <Route path="/update/:id" element={<Update/>}/>
                <Route element={<ProtectedRoutes />}> 
                  <Route path="/account" element={<Account/>}/>
                  <Route path='/login' element={<Login/>}/>
                  <Route path="/account/wishlist" element={<MyWishlist/>}/>
                  <Route path="/account/orders" element={<MyOrders/>}/>
                  <Route path="/account/orders/:orderid" element={<OrdersInfo/>}/> 
                </Route>
              </Routes>
            </CategoriesContext.Provider>
            </CartContext>
        </ProductsContext.Provider>
        </BrandsContext.Provider>
      </UserContext.Provider>
    </div>

  );
}



export default App


