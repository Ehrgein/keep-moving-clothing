import React, {useEffect, useState, useContext} from 'react'
import {useNavigate, useParams} from "react-router-dom"
import axios from 'axios'
import {Link} from 'react-router-dom'
import ProductMenus from './ProductMenus'
import {ProductsContext} from '../../App'

function AllProducts() {

    let {productscategory} = useParams()
      

    const productscontext = useContext(ProductsContext)



  return (
    <div>
        <div className='hidden md:flex text-4xl justify-center flex-col'>
          <div className='flex justify-center capitalize text-4xl font-bold mt-12'>  
              {productscategory}
          </div>
        <div className='flex justify-end mr-4'>
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
              {productscontext.filter(item => item.categories === productscategory).map(item =>
              <div key={item.id} photo={item.prod_img}  name={item.name}  brand={item.brand} price={item.price}   
                className='flex justify-center flex-col mr-2 my-2 py-10 tracking-wide w-[360px] h-[420px] items-center'>
                <div>
                  <Link to={`${item.id}`}> <img className='desktop:h-[285px] w-[285px]'  src={item.prod_img}/></Link>
                </div>   
                    <ul>
                      <li className='font-bold text-base uppercase my-1'>{item.name}</li>
                      <li className='text-center uppercase text-base my-1'> {item.brand}</li>
                      <li  className='text-base uppercase text-center'> ${item.price}</li>
                    </ul>
              </div>)}
            </div>
        </div>


        {/*mobile starts here */}

        <div className='md:hidden flex text-4xl justify-center flex-col'>
            <div className='flex justify-center capitalize text-3xl font-bold mt-12'>  
                {productscategory}
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
          <div className="flex flex-col justify-center columns-2 my-6">
          <div className="grid grid-cols-2 gap-4 place-content-center my-2"> 
          {productscontext.filter(item => item.categories === productscategory).map(item =>
            <div key={item.id} className="mx-auto my-auto">
              <div className='my-2'>
              <Link to={`/products/${item.categories}/${item.id}`}>
                <img className='w-[190px] h-[190px] mx-auto my-auto' src={item.prod_img}/>
              </Link>
              </div>
              <div className='text-sm capitalize text-center h-auto my-2'>
                <h1 className='font-bold'>{item.name}</h1> 
                <p className="text-center text-sm capitalize mr-1 mt-1"> {item.brand}</p>
                <p className="text-center text-sm font-medium mr-1 mt-1"> $ {item.price}</p>
              </div>
            </div>
            )}
          </div>
          </div>
        </div>
    </div>
  )
}

export default AllProducts


