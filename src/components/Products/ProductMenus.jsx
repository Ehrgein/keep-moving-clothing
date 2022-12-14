import React from 'react'
import { MdKeyboardArrowDown} from "react-icons/md";

function ProductMenus() {

    const searchmenu = ["price", "brand"]





  return (
    <div>
        <div className='hidden laptop:flex items-center'>
            <h1 className='px-2 uppercase text-xl items-start border-b-2 border-black font-black mt-4 h-8 ml-10 desktop:w-[265px] laptop:w-[170px]'> Search By</h1>
        </div>
        {searchmenu.map(item => 
        <div className='hidden md:flex desktop:w-[300px] laptop:w-[200px] h-auto justify-start flex-col ml-10'>
            <div className='flex items-center '>
                <h1 className='px-2 uppercase text-xl items-start border-b-2 border-black font-normal mt-4  h-8 w-full'> {item} </h1>
                <MdKeyboardArrowDown className='mt-2 mr-2' size={28}/>
            </div>
        </div>)}            
        
        {/*mobile here */}
        
        {searchmenu.map(item =>
        <div className='md:hidden flex md:w-[420px] h-auto justify-start flex-col mx-2 my-10'>
            <div className='flex items-center '>
                <h1 className='px-2 uppercase text-xl items-start border-b-2 border-black font-black mt-4  h-8 w-full'> {item} </h1>
                <MdKeyboardArrowDown className='mt-2 mr-2' size={28}/>
            </div>
        </div> )}
    </div>   
  )
}

export default ProductMenus