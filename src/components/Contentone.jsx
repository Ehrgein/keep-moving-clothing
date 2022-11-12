import React, { useContext, Suspense, useState} from "react";
import NewArrivalsHome from "./NewArrivalsHome";
import {ProductsContext} from '../App'
import MobileMenWomen from "./MobileMenWomen";
import BrowseByCategory from "./BrowseByCategory";
import {Link} from 'react-router-dom'
import DisplayItemsHome from './DisplayItemsHome'
import NewFeatures from './NewFeatures'
import maharishi from '../assets/maharishi.webp'
import nike from '../assets/nike.webp'
import jordans from '../assets/jordans.webp'
import newbalance1 from '../assets/newbalance.webp'
import nikelouis from '../assets/nikelouis.webp'
import converse from '../assets/converse.webp'
import { CartContext } from "./Cart/CartFunctionality";

function Contentone() {
  

  const productscontext = useContext(ProductsContext)
  const cartcontext = useContext(CartContext)

  const AddToCart = (id) => {
    cartcontext.openCart()
    cartcontext.addOneToCart(id) 

  }

 
  
  const images = [
    {
    img: newbalance1,
    text: "new balance",
    url: "new balance",
    },
    {
    img: nikelouis,
    text:"nike x louis",
    url:"nike"
    },
    {
      img:converse,
      text:"converse",
      url:"converse"
    },
    {
      img:maharishi,
      text:"maharishi",
      url:"maharishi"
    },
    {
      img: nike,
      text: "nike",
      url:"nike"
    },
    {
      img: jordans,
      text: "air jordan",
      url:"air jordan"
    }
  ]


  return (
    <div>
      <div className="hidden md:block">
        <NewArrivalsHome/>
        <NewFeatures img1={images[0]} img2={images[1]} img3={images[2]} />
        <DisplayItemsHome key={1} props={"accesories"}/>
        <NewFeatures img1={images[3]} img2={images[4]} img3={images[5]}/>
        <DisplayItemsHome  key={2} props={"bottoms"}/>
      </div>


{/*mobile here*/}

    <div className="md:hidden my-2 md:mx-60 overflow-x:hidden">
      <div className="flex flex-col justify-center overflow-x-hidden">
        <h2 className="text-center font-bold text-black md:text-3xl text-xl">
          Shop our Latest Products
        </h2>
      </div>
      <div className="flex flex-wrap justify-center columns-2 mb-6">
          {productscontext.slice(-4).reverse().map(item => 
          <div key={item.id} className="flex flex-wrap flex-col mobileL:w-[170px] mobilem:w-[150px] fold:w-[130px] mobileL:mx-2 fold:mx-3">
              <Link to={`products/${item.categories}/${item.id}`}>
                <img className="mobileL:h-40 mobileL:w-40 mobilem:h-36 mobilem:w-36 fold:w-[130px] fold:h-[130px] my-4" src={item.prod_img} />
               </Link>
              <p className="text-center mobilem:text-base mobilexs:text-sm capitalize mt-1 mr-1"> {item.brand}</p>
              <p className="mobilem:text-base mobilexs:text-sm capitalize h-8 text-center mobilem:mt-2 mobilexs:mt-2">
                {item.name}
              </p>
              <p className="text-center mobilem:text-base font-semibold mt-1 mobilem:mt-5 mobilexs:mt-3"> $ {item.price}</p>
              <div className="flex justify-center items-center mobilexs:w-32 bg-black text-white mobilem:mx-4 mobilexs:mx-1 px-2 py-1 mobilexs:mt-3">
                <button onClick={() => AddToCart(item.id)} className="font-semibold uppercase">
                  add to cart
                </button>
              </div>
          </div>
            )}
      </div>
      <MobileMenWomen/>
      <BrowseByCategory/>
    </div>
    </div>

  );
}
export default Contentone;
