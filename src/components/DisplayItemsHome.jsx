import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {ProductsContext} from '../App'

  function Accesories({props}) {

  const contextproducts = useContext(ProductsContext)

    console.log(props)

  return (
    <div>        
        <div className="flex justify-center text-center mt-11">
            <a className='text-2xl px-4 py-2 capitalize' > {props} </a>
        </div>
        <div className="flex justify-center flex-wrap">
            {contextproducts.filter(item => item.categories == props).slice(-5).map(item => 
            <div className='flex uppercase justify-center desktop:w-[280px] laptopL:w-[160px] md:w-[150px] mt-11 text-sm laptopL:mx-12 md:mx-20 lg:mx-12' 
            key={item.id} categories={item.categories} itemname={item.name} itemprice={item.price} itemimg={item.prod_img} >
            <ul>
            <Link to={`/products/${item.categories}/${item.name}`}>
              <img src={item.prod_img}/>
              <li className='font-bold text-center 4k:text-lg'> {item.name}</li>
              <li className='text-center 4k:text-lg text-sm mt-2'> {item.brand} </li>
              <p className='text-base mt-1 font-semibold text-center 4k:text-lg'> $ {item.price}  </p>
            </Link>
            </ul>
            </div>
            )}
        </div>
        <div className='flex justify-center mt-6 mb-12'>
          <Link className='text-white font-bold text-2xl px-4 py-2 bg-[#1f2021]' to={`/products/${props}`}>VIEW ALL</Link>
        </div>
    </div>
  )
}


export default Accesories