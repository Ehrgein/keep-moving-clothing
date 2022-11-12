import React, {Suspense} from 'react'
import Header from '../components/Header'
import NewsLetter from '../components/NewsLetter'
import AllProdByCat from '../components/Products/AllProdByCat'
import Loading from './Loading'
import Products from './Products'
import ProductsByName from '../components/Products/ProductsByName'



function ProdsByName() {
  return (
    <div className=''>
        <Header/>
        <Suspense fallback={<Loading/>}>
          <ProductsByName/>
        </Suspense>
        <NewsLetter/>
    </div>
  )
}

export default ProdsByName