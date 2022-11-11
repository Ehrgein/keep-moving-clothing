import React, {useContext} from 'react'
import NewsLetter from '../components/NewsLetter'
import Header from '../components/Header'
import {VscAccount} from 'react-icons/vsc'

import Wishlist from '../components/Account/Wishlist'

function Account() {
    
    // const {loggedIn, setLoggedin} = useContext(LoginContext)
    // const {loggedUser, setLoggedUser} = useContext(LoginContext)





  return (

    <div >
        <Header/>
        <Wishlist/>
        <NewsLetter/>
    </div>
    
  )
}

export default Account