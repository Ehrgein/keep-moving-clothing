import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { BrandsContext } from '../App'

function BrandList() {

    const brands = useContext(BrandsContext)

    



  return (
    <div className='mt-10 mb-10'>
        <div className='hidden md:flex flex-col'>
        {brands?.map(item =>
            <div key={item.id} className='hidden md:flex mx-4 mt-2 text-xl font-bold capitalize'>
              <div className='w-[50%] flex items-center justify-center'>
                <p>{item.brand.split('  ').map(word => word[0]).join(' ')}</p>
              </div>
              <Link className='flex w-[50%] items-end mr-40' to={`/collection/${item.brand}`}>
                    <h1>{item.brand}</h1>
              </Link>
            </div>
            )}
        </div>
        <div>
        {brands?.map(item =>
            <div key={item.id} className='md:hidden flex justify-between mx-4 mt-2 text-xl font-bold capitalize'>
                    <p>{item.brand.split('  ').map(word => word[0]).join(' ')}</p>
                    <Link className='flex justify-end items-end mr-2' to={`/collection/${item.brand}`}>
                         <h1>{item.brand}</h1>
                    </Link>
            </div>
            )}
        </div>
    </div>
  )
}

export default BrandList