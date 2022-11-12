import React, {useContext} from 'react'
import NewsLetter from '../components/NewsLetter'
import Header from '../components/Header'
import {VscAccount} from 'react-icons/vsc'

import Wishlist from '../components/Account/Wishlist'

function Account() {




  return (

    <div >
        <Header/>
        <Wishlist/>
        <NewsLetter/>
    </div>
    
  )
}

export default Account