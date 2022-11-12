import React, {useContext} from 'react'
import {useParams, Link} from "react-router-dom"
import {ProductsContext} from '../../App'
import {HiOutlineArrowNarrowLeft} from 'react-icons/hi'


function Recommended() {



    let {productscategory} = useParams()

    const productscontext = useContext(ProductsContext)

    const scrolltoTop = () => {
      window.scrollTo(0, 0)
    }

  return (
    <div>
        <div className="hidden md:flex justify-center text-center mt-10">
            <a className='text-2xl px-4 py-2 font-black' > YOU MAY ALSO LIKE</a>
        </div>
        <div className='hidden md:flex justify-center flex-wrap'>
           {productscontext.filter(item => item.categories === productscategory).slice(-4).map(item =>
            <div key={item.id} className='flex uppercase justify-center items-center 4k:w-[350px] desktop:w-[280px] laptopL:w-[240px] laptop:w-[170px] md:w-[150px] my-10 text-sm
            4k:mx-12 laptop:mx-8 laptopL:mx-8  md:mx-4'>
              <ul className='text-sm text-center'>
              <Link onClick={scrolltoTop} to={`/products/${productscategory}/${item.id}`}>
                <img alt={`${item.name} ${item.brand} $${item.price}`} className='h-auto text-center md:mb-0 mb-4' src={item.prod_img}/>
              </Link>
                <li className='flex justify-center items-center font-bold text-center 4k:text-xl desktop:text-base  md:text-sm h-10'> {item.name} </li>
                <li className='text-center 4k:text-xl desktop:text-base md:text-sm mt-1'> {item.brand}</li>
                <p className='mt-1 font-semibold text-center 4k:text-xl desktop:text-base'>$ {item.price}</p>
              </ul>
            </div>
            
            )}
        </div>
        <div className='hidden md:flex justify-center mb-12'>
            <Link to={`/products/${productscategory}`}>
              <div className='flex bg-[#1f2021] text-white font-bold text-medium px-5 py-3 uppercase items-center'>
                <HiOutlineArrowNarrowLeft className='mr-2' size={23}/> 
                <h1> 
                Go back to  {productscategory}
                </h1>
              </div>
            </Link>
        </div>

        {/* mobile */}


        <div className="md:hidden flex justify-center text-center mt-10">
            <a className='text-lg font-semibold px-4 py-2' > YOU MAY ALSO LIKE</a>
        </div>
        <div className="md:hidden flex flex-col justify-center columns-2 mb-6">
          <div className="grid grid-cols-2 gap-4 place-content-center">
            {productscontext.slice(-4).reverse().map(item => 
              <div key={item.id} className="mx-auto my-auto">
                <Link to={`/products/${item.categories}/${item.id}`}>
                  <img className="tablet:w-[140px] tablet:h-[140px] mobilexs:w-[180px] mobilexs:h-[170px] mt-4" src={item.prod_img} alt={`${item.name} ${item.brand} $${item.price}`} />
                   </Link>
                <h2 className="text-center text-xs">
                <a className="text-base capitalize font-semibold">
                  {item.name}
                </a>
              </h2>
              <p className="text-center text-base font-semibold mt-1 mr-1"> $ {item.price}</p>
            </div>
              )}
          </div>
      </div>
    </div>
  )
}


 {/* {allproducts.filter(category => category.category == product).map(item => <RecommendedMap key={item.id} categories={item.category} items={item.items} />)} */}

export default Recommended