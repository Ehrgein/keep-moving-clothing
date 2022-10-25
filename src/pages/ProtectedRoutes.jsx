import React, {useContext} from 'react'
import { Outlet } from 'react-router-dom'
import Login from './Login'

const useAuth = () => {

  
   
}


function ProtectedRoutes() {

    const isAuth = useAuth()

  return isAuth ? <Outlet/> : <Login/>
  
}


export default ProtectedRoutes