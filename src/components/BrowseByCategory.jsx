import React, {useContext} from 'react'
import shirts from "../assets/category/shirts.webp";
import bottoms from "../assets/category/bottoms.webp";
import sneakers from "../assets/category/sneakers.webp";
import outerwear from "../assets/category/outerwear.webp";
import accesories from "../assets/category/accesories.webp";
import discounted from "../assets/category/discounted.webp";
import {CategoriesContext} from '../App'
import {Link} from 'react-router-dom'



function BrowseByCategory() {

  const categoriescontext = useContext(CategoriesContext)


  return (
    <div className='flex flex-wrap flex-columns-2 gap-2 mx-2 my-4'>
      { 
        categoriescontext.map(item => 
          <div key={item.id} pic={item.categories_img} className='flex flex-wrap my-4'>
            <div className="mt-4 flex">
            <Link to={`/products/${item.categories}`}>
              <div>
                 <img className='w-[190px] h-[180[px]' src={item.categories_img}/> 
                <h1 className='text-center font-normal capitalize text-lg'>{item.categories}</h1>
              </div>
              </Link>
              <div>
                </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default BrowseByCategory


