import React, {useEffect, useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import ProductMenus from './ProductMenus'
import {ProductsContext} from '../../App'


function AllNew() {

      
    const productscontext = useContext(ProductsContext)
      

   
  return (
    <div>
        <div className='hidden md:flex text-4xl justify-center flex-col'>
          <div className='flex justify-center capitalize text-4xl font-bold mt-12'>  
              New Arrivals
          </div>
          <div className='hidden md:flex justify-end mr-4'>
              <div className='text-sm px-2'>
                  Number2
              </div>
              <div className='text-sm px-2'>
                  Sort(Num)
              </div>
          </div>
        </div>
        <div className='hidden md:flex'>
            <ProductMenus/>
            <div className='flex flex-wrap my-10 pl-16'>
              {productscontext.slice().reverse().map(item =>
              <div key={item.id} photo={item.prod_img}  name={item.name}  brand={item.brand} price={item.price}   
                className='flex justify-center flex-col mr-2 my-2 py-10 tracking-wide w-[360px] h-[420px] items-center'>
                <div>
                  <Link to={`/products/${item.categories}/${item.id}`}> <img className='desktop:h-[285px] w-[285px]'  src={item.prod_img}/></Link>
                </div>   
                    <ul>
                    <li className='font-bold text-base uppercase my-1'>{item.name}</li>
                    <li className='text-center uppercase text-base my-1'> {item.brand}</li>
                    <li  className='text-base uppercase text-center'> ${item.price}</li>
                    </ul>
              </div>)}
            </div>
        </div>


        {/*Mobile Starts here */}
        
        <div>          
          <div className='md:hidden flex text-4xl justify-center flex-col'>
            <div className='flex justify-center capitalize text-3xl font-bold mt-12'>  
                New Arrivals
            </div>
          <ProductMenus/>

        <div className='md:hidden flex justify-end mr-4'>
            <div className='text-sm px-2'>
                Number2
            </div>
            <div className='text-sm px-2'>
                Sort(Num)
            </div>
        </div>
        <div className="flex flex-col justify-center columns-2 mb-6">
        <div className="grid grid-cols-2 gap-4 place-content-center">
          {productscontext.slice(-15).reverse().map(item => 
            <div key={item.id} className="mx-auto my-auto">
              <Link to={`/products/${item.categories}/${item.id}`}> 
               <img className="mobilexs:w-[160px] mobilexs:h-[160px] mobilem:w-[170px] mobilem:h-[170px] mobilem:mx-4 mobilexs:mx-0 my-4" src={item.prod_img} />
               </Link>
              <h2 className="text-center text-xs">
                <a className="text-base capitalize font-semibold">
                  {item.name}
                </a>
            </h2>
            <p className="text-center text-base capitalize mt-1 mr-1"> {item.brand}</p>
            <p className="text-center text-base font-semibold mt-1 mr-1"> $ {item.price}</p>
            </div>
            )}
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default AllNew


