import React from 'react'
import { MdKeyboardArrowDown} from "react-icons/md";

function ProductMenus() {

    const searchmenu = ["search by", "price", "category", "brand"]





  return (
    <div>
        {searchmenu.map(item => 
        <div className='hidden md:flex w-[300px] h-auto justify-start flex-col ml-10'>
            <div className='flex items-center '>
                <h1 className='px-2 uppercase text-xl items-start border-b-2 border-black font-black mt-4  h-8 w-full'> {item} </h1>
                <MdKeyboardArrowDown className='mt-2 mr-2' size={28}/>
            </div>
        </div>)}            
        
        {/*mobile here */}

        {searchmenu.map(item =>
        <div className='md:hidden flex w-[420px] h-auto justify-start flex-col mx-2 my-10'>
            <div className='flex items-center '>
                <h1 className='px-2 uppercase text-xl items-start border-b-2 border-black font-black mt-4  h-8 w-full'> {item} </h1>
                <MdKeyboardArrowDown className='mt-2 mr-2' size={28}/>
            </div>
        </div> )}
    </div>   
  )
}

export default ProductMenus