import React, { useContext } from "react";
import ThreeFeatures from "./ThreeFeatures";
import NewArrivalsHome from "./NewArrivalsHome";
import {ProductsContext} from '../App'
import MobileMenWomen from "./MobileMenWomen";
import BrowseByCategory from "./BrowseByCategory";
import {Link} from 'react-router-dom'
import DisplayItemsHome from './DisplayItemsHome'
import { CartContext } from "./Cart/CartFunctionality";


function Contentone() {
  

  const productscontext = useContext(ProductsContext)


  // el prop que se manda es <<<<< no el de la derecha, corki, se lo estas asignando

  return (
    <div>
      <div className="hidden md:block">
        <NewArrivalsHome/>
        <ThreeFeatures/>
        <DisplayItemsHome key={1} props={"accesories"}/>
        <ThreeFeatures />
        <DisplayItemsHome  key={2} props={"bottoms"}/>
      </div>


{/*mobile here*/}

    <div className="md:hidden my-2 md:mx-60 overflow-x:hidden">
      <div className="flex flex-col justify-center overflow-x-hidden">
        <h2 className="text-center font-bold text-black md:text-3xl text-xl">
          Shop our Latest Products
        </h2>
      </div>
      <div className="flex flex-col justify-center columns-2 mb-6">
        <div className="grid grid-cols-2 gap-4 place-content-center">
          {productscontext.slice(-4).reverse().map(item => 
            <div key={item.id} className="mx-auto my-auto">
              <Link to={`products/${item.categories}/${item.id}`}> <img className="w-[180px] h-[180px] mx-4 my-4" src={item.prod_img} /> </Link>
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
        <div className="flex justify-center text-center my-2 md:text-xl text-base font-normal	">
            <Link to="/newarrivals" className='text-white font-bold text-xl px-4 py-2 bg-[#1f2021]'>
              VIEW ALL
            </Link>
        </div>
      </div>
      <MobileMenWomen/>
      <BrowseByCategory/>
    </div>
    </div>

  );
}
export default Contentone;
