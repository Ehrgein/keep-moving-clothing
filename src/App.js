import React, {useState, useEffect, useContext, createContext} from "react";
import Home from "./pages/Home";
import { useNavigate } from "react-router-dom"; 
import {Routes, Route} from 'react-router-dom'
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


export const ProductsContext = React.createContext()
export const CategoriesContext = React.createContext()
export const UserContext = React.createContext({
  user: null,
  isLoggedIn: false,
  setUser: () => {},
})


// export const LoginContext = createContext(
//   {
//   loggedIn: false,
//   setLoggedIn: () => {},
//   username: "",
//   setUsername: () => {},
//   password: "",
//   setPassword: () => {},
//   loginMessage: "",
//   setLoginMessage: () => {},
//   loggedUser: "",
//   setLoggedUser: () => {},
//   })




function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const [newproducts, setProducts] = useState([])
  const [newcategories, setCategories] = useState([])
  
  const [loginMessage, setLoginMessage] = useState("")
  const [loggedUser, setLoggedUser] = useState("")
  const navigate = useNavigate()


  const usercontext = useContext(UserContext)
  console.log(usercontext.user)



  axios.defaults.withCredentials = true;

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


useEffect(() => {

  axios.get("http://localhost:3001/login").then((response)=>{
    console.log(response.data.isLoggedIn)
      if (response.data.loggedIn) {
          setIsLoggedIn(true)
          setUser(response.data.user[0].username)
      } else{
          setIsLoggedIn(false)
      }
  })
}, [])



  const contextvalue = {user, isLoggedIn, setUser}


  return (
    

    <div className='opacity-changer'>
      <UserContext.Provider value={contextvalue}>
        <ProductsContext.Provider value={newproducts}>
            <CartContext>
            <CategoriesContext.Provider value={newcategories}>
            <Routes>
              <Route path='/' element={<Home/>}> </Route>
              <Route path='products/:productscategory' element={<Products/>}/> 
              <Route path='newarrivals' element={<NewArrivals/>}/>
              <Route path='products/:productscategory/:productinfo' element={<ProductCart/>} />
              <Route path='account/register' element={<Register/>}/>
              <Route path="/update/:id" element={<Update/>}/>
              <Route element={<ProtectedRoutes />}> 
                <Route path="/account" element={<Account/>}/>
              </Route>
              <Route path='/login' element={<Login/>}/>
            </Routes>
            </CategoriesContext.Provider>
            </CartContext>
        </ProductsContext.Provider>
      </UserContext.Provider>

    </div>

  );
}



export default App


