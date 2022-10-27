import React, { useState, useContext } from 'react'
import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
import { ProductsContext } from '../App'
import { Link } from 'react-router-dom'

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
        <div onClick={handleSearch}>
             <AiOutlineSearch size={25}/>
        </div>
    {searchBar ?    
    <div className='bgparent fixed inset-0 z-55 overflow-y-scroll'>
        <div className='flex justify-center items-center text-black text-2xl ' >
          <div className='flex flex-col w-full justify-center bg-white py-12 px-24 cart-anim'>
            <div className='flex w-full opacity-100 '>
                <input placeholder='Search' value={filter} onChange={handleFilter}
                className='w-full border-b-2 border-[#1f2021] focus:outline-none text-black font-light placeholder:px-2'/>
                <AiOutlineClose className='' onClick={handleSearch} />
            </div>
            <div className='mt-10 flex flex-wrap justify-center bg-white'>
                {products?.map(item =>
                <div key={item.id} className='flex flex-col  items-center justify-center w-[250px] h-[300px] capitalize mx-2 my-2 menuborder'>
                    <Link onClick={handleSearch} to={`/products/${item.categories}/${item.id}`}><img className='w-[150px] h-[150px]' src={item.prod_img}/></Link>
                    <p className='text-sm mt-2 tracking-wide'> {item.name}</p>
                    <p className='text-sm mt-2 tracking-wide font-normal'> {item.brand}</p>
                    <p className='text-sm mt-2 tracking-wide font-normal'>$ {item.price}</p>
                </div>
                )}
            </div>
          </div>

        </div>
    </div>
    :
    null}

    </div>
  )
}

export default SearchBar