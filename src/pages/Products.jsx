import React from 'react'
import Header from '../components/Header'
import NewsLetter from '../components/NewsLetter'
import AllProdByCat from '../components/Products/AllProdByCat'



function Products() {
  return (
    <div>
        <Header/>
        <AllProdByCat/>
        <NewsLetter/>
    </div>
  )
}

export default Products