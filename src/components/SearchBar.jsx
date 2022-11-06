import React, { useState, useContext } from 'react'
import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
import { ProductsContext } from '../App'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

function SearchBar() {

    const [searchBar, setSearchBar] = useState(false)
    const [pepe, setPepe] = useState(false)
    const [filter, setFilter] = useState("")

    const productscontext = useContext(ProductsContext)
    

    const handleFilter = (e) => {
        setFilter(e.target.value)
    }


    const handleSearch = () => setSearchBar(!searchBar)


    const products = filter ? productscontext.filter((word) => word.name.toUpperCase().includes(filter.toUpperCase())
                                                            || word.brand.toUpperCase().includes(filter.toUpperCase())
                                                            || word.categories.toUpperCase().includes(filter.toUpperCase()))
                                                             : null

                    


  return (
    <div>
        <div className='mobilexs:mr-1 mobilem:mr-1 md:mr-0 ' onClick={handleSearch}>
             <AiOutlineSearch className='4k:w-[35px] 4k:h-[35px] desktop:w-[25px] desktop:h-[25px] laptopL:w-[22px] laptopL:h-[22px]'/>
        </div>
    {searchBar ?    
    <div className='bgparent fixed inset-0 z-55 overflow-y-scroll'>
        <div className='flex justify-center items-center text-black text-2xl' >
          <motion.div className='flex flex-col w-full justify-center bg-white md:py-12 py-8  md:px-24 px-4 cart-anim' >
            <div className='flex w-full opacity-100'>
                <input placeholder='Search' value={filter} onChange={handleFilter}
                className='w-full border-b-2 border-[#1f2021] focus:outline-none text-black font-light'/>
                <AiOutlineClose className='ml-4' onClick={handleSearch} />
            </div>
            <div className='md:hidden flex mt-4 uppercase text-sm font-medium'>
              products
            </div>
            <div className='md:mt-10 mt-2 flex flex-wrap justify-center bg-white'>
                {products?.map(item =>
                <div key={item.id} className='flex md:flex-col  md:items-center md:justify-center justify-start items-center 
                md:w-[250px] md:h-[300px] mobilexs:w-[280px] mobilexs:h-[150px] capitalize mx-2 my-2 4k:w-[250px] 4k:h-[250px]'>
                    <Link className='w-[200px] md:w-auto' onClick={handleSearch} to={`/products/${item.categories}/${item.id}`}>
                      <img className='md:w-[150px] md:h-[150px] mobilexs:w-[120px] mobilexs:h-[120px] md:mr-0 mobilexs:ml-1' src={item.prod_img}/>
                    </Link>
                    <div className='md:ml-8 flex flex-col justify-center w-[150px] md:w-auto'>
                      <p className='text-sm mt-2 tracking-wide'> {item.name}</p>
                      <p className='text-sm mt-2 tracking-wide font-normal'> {item.brand}</p>
                      <p className='hidden md:text-sm mt-2 tracking-wide font-normal'>$ {item.price}</p>
                    </div>
                </div>
                )}
            </div>
          </motion.div>

        </div>
    </div>
    :
    null}

    </div>
  )
}

export default SearchBar