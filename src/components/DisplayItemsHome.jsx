import React, { useContext, useEffect, useRef, useState }from 'react'
import {Link} from 'react-router-dom'
import {ProductsContext} from '../App'
import {motion} from 'framer-motion'

  function Accesories({props}) {

  const contextproducts = useContext(ProductsContext)
  const [width, setWidth] = useState(0)

  const carouseltwo = useRef()

  useEffect(()=> {

    setWidth(3600 - 900)

  }, [])

  return (
    <div className=''>        
        <div className="flex justify-center text-center mt-11">
            <p className='4k:text-4xl text-2xl px-4 py-2 capitalize'  > {props} </p>
        </div>
        <motion.div ref={carouseltwo} className="carousel">
          <motion.div drag="x"
          dragConstraints={{right:0, left:-width}} className='inner-carousel'>
            {contextproducts.filter(item => item.categories == props).slice(0, 11).map(item => 
            <motion.div className='flex flex-col uppercase justify-center 4k:w-[400px] 4k:h-[400px] desktop:w-[370px] desktop:h-[380px]  laptopL:w-[330px] laptopL:h-[330px] laptop:w-[310px] laptop:h-[310px] md:w-[300px] md:h-[300px]
            4k:my-20 4k:mx-16 desktop:mx-18 desktop:mt-14 text-sm laptopL:mx-12 laptopL:mt-8 laptop:mx-4 laptop:mt-8 md:mt-8 md:mx-2 mb-4 items-center ml-6'
            key={item.id} categories={item.categories} itemname={item.name} itemprice={item.price} itemimg={item.prod_img} >
          
              <motion.div className='4k:w-[350px] 4k:h-[350px] desktop:w-[300px] desktop:h-[300px] laptopL:w-[250px] laptopL:h-[250px]
               laptop:w-[220px] laptop:h-[220px] md:w-[230px] md:h-[230px]'>
                <Link to={`/products/${item.categories}/${item.id}`}>
                  <img alt={`${item.name} ${item.brand} ${item.price}`}
                    className='grabimg'  onMouseDown={e => e.preventDefault()} src={item.prod_img}/>
                </Link> 
              </motion.div>
            <div className='my-6'>
                <p className='font-bold text-center 4k:text-lg desktop:text-base'> {item.name}</p>
                <Link><p className='text-center 4k:text-lg text-sm mt-2'> {item.brand} </p></Link>
                <p className='text-base mt-1 text-center 4k:text-lg'> $ {item.price}  </p>      
              </div>
            </motion.div>
            )}
          </motion.div>
        </motion.div>
        <div className='flex justify-center my-12'>
          <Link className='text-white font-bold text-xl px-7 py-2 bg-black' to={`/products/${props}`}>VIEW ALL</Link>
        </div>
    </div>
  )
}


export default Accesories