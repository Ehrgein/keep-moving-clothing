import React from 'react'
import AllNew from '../components/Products/AllNew'
import Header from '../components/Header'
import NewsLetter from '../components/NewsLetter'
import ProductsByBrand from '../components/Products/ProductsByBrand'

function NewArrivals() {
  return ( 
    <div>
        <Header/>
        <ProductsByBrand/>
        <NewsLetter/>
    </div>
  )
}

export default NewArrivals