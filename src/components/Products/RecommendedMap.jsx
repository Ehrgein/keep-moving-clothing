import React from 'react'
import { Link, useParams} from 'react-router-dom'
import { products } from '../NewMenuData'


function RecommendedMap({items}) {


  let {product} = useParams()

  const slicedarr = items.slice(-5)


  return (
    <div className='flex justify-center flex-wrap'>
        {slicedarr.map((item) => 
          <div key={item.id} className='flex uppercase justify-center desktop:w-[280px] laptopL:w-[160px] md:w-[150px] mt-11 text-sm laptopL:mx-12'>
            <div>
              <ul>
              <Link to={`/products/${product}/${item.name}`}><img className='h-auto text-center mb-4' src={item.prod_img}/>               </Link>
                <li className='font-bold text-center 4k:text-lg'> {item.name} </li>
                <li className='text-center 4k:text-lg text-sm mt-2'> {item.brand}</li>
                <p className='text-base mt-1 font-semibold text-center 4k:text-lg'>$ {item.price}</p>
              </ul>
            </div>
          </div>
       )}
    </div>

  )
}

export default RecommendedMap