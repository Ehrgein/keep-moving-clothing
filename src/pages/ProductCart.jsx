import React, {useEffect, useState, useContext} from 'react'
import NewsLetter from '../components/NewsLetter'
import Header from '../components/Header'
import ProductInfo from '../components/Products/ProductInfo'
import Recommended from '../components/Products/Recommended'


function ProductCart() {


  return (
    <div >
        <Header/>
        <ProductInfo/>
        <Recommended/>
        <NewsLetter/>
    </div>
  )
}

export default ProductCart