import React, { useContext, useEffect, useRef, useState } from 'react'
import {Link} from 'react-router-dom'
import {ProductsContext, CategoriesContext} from '../App'
import {motion} from 'framer-motion'

function NewArrivalsHome() {

  const [width, setWidth] = useState(0)
  const carousel = useRef()

  const productscontext = useContext(ProductsContext)

  useEffect(()=> {

    setWidth(3600 - 900)

  }, [])

  

  
  return (
    <div>      
        <div className="flex justify-center text-center mt-11">
            <p className='4k:text-4xl text-2xl px-4 py-2 capitalize' > New Arrivals </p>
        </div> 
        <motion.div ref={carousel} className="carousel">
          <motion.div drag="x"
          dragConstraints={{right:0, left:-width}} className='inner-carousel'>
            {productscontext.slice(-11).map(item => 
            <motion.div className='flex flex-col uppercase justify-center 4k:w-[400px] 4k:h-[400px] desktop:w-[350px] desktop:h-[350px]  laptopL:w-[330px] laptopL:h-[330px] laptop:w-[310px] laptop:h-[310px] md:w-[300px] md:h-[300px]
            4k:my-20 4k:mx-12 desktop:mx-12 desktop:mt-11 text-sm laptopL:mx-12 laptop:mx-12 laptop:mt-8 md:mt-8 md:mx-2 mb-4 items-center' 
            key={item.id} categories={item.categories} itemname={item.name} itemprice={item.price} itemimg={item.prod_img} >
          
              <motion.div className='4k:w-[350px] 4k:h-[350px] desktop:w-[280px] desktop:h-[280px] laptopL:w-[250px] laptopL:h-[250px] laptop:w-[220px] laptop:h-[220px] md:w-[230px] md:h-[230px] md:ml-6'>
                <Link to={`/products/${item.categories}/${item.id}`}>
                  <img  className='grabimg'  onMouseDown={e => e.preventDefault()} src={item.prod_img}/>
                </Link> 
              </motion.div>
              <div className='4k:mt-4'>
                <p className='font-bold text-center 4k:text-lg'> {item.name}</p>
                <Link><p className='text-center 4k:text-lg text-sm mt-2'> {item.brand} </p></Link>
                <p className='text-base mt-1 font-semibold text-center 4k:text-lg'> $ {item.price}  </p>      
              </div>
            </motion.div>
            )}
          </motion.div>
        </motion.div>
        <div className='flex justify-center mt-6 mb-12'>
            <Link className='text-white font-bold text-2xl px-4 py-2 bg-[#1f2021]' to={`/newarrivals`} >
              VIEW ALL
            </Link>
        </div>
    </div>
  )
}

export default NewArrivalsHome






// import React, { useContext } from 'react'
// import {Link} from 'react-router-dom'
// import {ProductsContext, CategoriesContext} from '../App'
// import {motion} from 'framer-motion'

// function NewArrivalsHome() {


//   const productscontext = useContext(ProductsContext)

  
//   return (
//     <div>      
//         <div className="flex justify-center text-center mt-11">
//             <a className='text-2xl px-4 py-2' > New Arrivals </a>
//         </div>
//         <motion.div className="flex justify-center flex-wrap">
//           <motion.div>
//             {productscontext.slice(-5).map(item => 
//             <div className='flex uppercase justify-center desktop:w-[280px] laptopL:w-[160px] md:w-[150px] mt-11 text-sm laptopL:mx-12 md:mx-20 lg:mx-12' 
//             key={item.id} categories={item.categories} itemname={item.name} itemprice={item.price} itemimg={item.prod_img} >
//             <ul>
//             <Link to={`/products/${item.categories}/${item.id}`}>
//               <img src={item.prod_img}/>
//               <li className='font-bold text-center 4k:text-lg'> {item.name}</li>
//               <li className='text-center 4k:text-lg text-sm mt-2'> {item.brand} </li>
//               <p className='text-base mt-1 font-semibold text-center 4k:text-lg'> $ {item.price}  </p>
//             </Link>
//             </ul>
//             </div>
//             )}
//           </motion.div>
//         </motion.div>
//         <div className='flex justify-center mt-6 mb-12'>
//             <Link className='text-white font-bold text-2xl px-4 py-2 bg-[#1f2021]' to={`/newarrivals`} >
//               VIEW ALL
//             </Link>
//         </div>
//     </div>
//   )
// }

// export default NewArrivalsHome