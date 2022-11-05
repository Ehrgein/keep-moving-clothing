import React, {useState, useContext, useEffect, useRef} from 'react'
import { BrandsContext } from '../App';
import {Link} from 'react-router-dom'

function BrandDropDown() {

    const [brandnav, setBrandNav] = useState(false)
    const handleBrand = () => setBrandNav(!brandnav)
    const brands = useContext(BrandsContext)



  
  
    const handleSubFalse = () => setBrandNav(false)
  
  
    useEffect(() => {
      document.addEventListener("click", handleClickOutsideTwo, true);
    }, []);
  
  
    const refTWo = useRef(null);
  
    const handleClickOutsideTwo = (e) => {
      if (!refTWo.current?.contains(e.target)) {
        setBrandNav(false);
      } else {
        console.log("holi");
      }
    }; 



  return brandnav ? (
    <div>
      <div>
        <h1 onClick={handleBrand}>Brands</h1>
      </div>
      <div ref={refTWo} onMouseLeave={handleSubFalse}  className='fixed top-[9%] w-[100%] h-[50%] left-0 text-black bg-white fade-anim justify-start flex flex-col'>
            <div className='flex justify-center items-start'>
              <h1 className='flex font-bold mt-4'> Most Popular Brands</h1>
            </div>
            <div className='flex flex-col h-[650px] w-[95%] justify-start items-center'>
              <div className='h-[35%] w-[15%] desktop:text-sm md: text-xs flex flex-col justify-start items-start flex-wrap mt-6 mr-40 gap-1'>
                  {brands.slice(0, 9).map(item => 
                  <div key={item.id} className='flex mx-6'>
                    <Link  onClick={handleSubFalse} to={`/collection/${item.brand}`}><p className='flex'>{item.brand}</p></Link>
                  </div>)}
                  {brands.slice(10, 19).map(item => 
                  <div key={item.id} className='flex mx-6'>
                    <Link onClick={handleSubFalse} to={`/collection/${item.brand}`}><p className='flex'>{item.brand}</p></Link>
                  </div>)}
                  {brands.slice(20, 29).map(item => 
                  <div key={item.id} className='flex mx-6'>
                    <Link onClick={handleSubFalse} to={`/collection/${item.brand}`}><p className='flex'>{item.brand}</p></Link>
                  </div>)}
              </div>
                <div className='mt-5 w-[40%] flex justify-center ml-32'>
                 <button className='h-10 font-bold w-[30%] border-2 flex justify-center bg-[#1f2021] text-white items-center'>
                  <Link to="/brands">VIEW ALL</Link>
                  </button>
                </div>
            </div>
            

      </div>
    </div>
    
    ) : (  

      <div>
        <h1 onClick={handleBrand}>Brands</h1>
      </div>
    );
  }



export default BrandDropDown


// {brands.map(item => 
//   <div key={item.id}  className='w-[80%] flex justify-between mx-20 '>
//     <div className='flex ml-20'>
//       <p>{item.brand}</p>
//       </div>
//     <div className='flex'>
//     <p>{item.brand}</p>
//     </div>
//     <div className='flex'>
//     <p>{item.brand}</p>
//     </div>
//     <div className='flex ml-'>
//     <p>{item.brand}</p>
//     </div>
//   </div>
//   )}