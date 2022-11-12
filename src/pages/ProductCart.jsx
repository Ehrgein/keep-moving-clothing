import React, {useEffect, useState, useContext, Suspense} from 'react'
import NewsLetter from '../components/NewsLetter'
import Header from '../components/Header'
import ProductInfo from '../components/Products/ProductInfo'
import Recommended from '../components/Products/Recommended'
import Loading from './Loading'


const LazyProductInfo = React.lazy(() => import ('../components/Products/ProductInfo'))
const LazyRecommended = React.lazy(() => import ('../components/Products/Recommended'))

function ProductCart() {


  
  return (
    <div >
        <Header/>
        <Suspense fallback={<Loading/>}>
          <LazyProductInfo/>
          <LazyRecommended/>
        </Suspense>
        <NewsLetter/>
    </div>
  )
}

export default ProductCart