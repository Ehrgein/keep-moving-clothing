import React from 'react'
import men from '../assets/men.webp'
import women from '../assets/women.webp'

function MenWomen() {
  return (
    <div className='md:my-18 my-4 flex justify-center'>
        <div className='flex'>
            <div className='sm:flex-row md:mx-2 mx-4 md:row-span-1 flex md: flex-col items-center'>  {/*maybe agregar otro div para controlar las 2 imagenes estas? IDK AAA*/}
             <div className='mt-10'>       
                <div className='relative md:mx-2 mx-1.5'>
                    <img className='h-auto w-full' src={women} alt="/"/>
                        <div className='inset-1/2 w-full text-center text-lg mx-auto absolute bottom-0 left-0 text-white font-bold -mt-2'>
                            <a href='/' className='h-2 md:text-sm text-xs border-3 bg-black py-2 px-3'> ALL WOMEN'S</a>
                        </div>
                </div>
            </div>
            <div>
                <div className='mt-10'>
                <div className='relative md:mx-2 mx-1.5'>
                    <img className='h-auto w-full'src={men} alt="/"/>
                        <div className='inset-1/2 w-full text-center text-lg mx-auto absolute bottom-0 left-0 text-black font-bold -mt-2'>
                            <a href='/'className='h-2 md:text-sm text-xs border-3 bg-white py-2 md:px-5 px:6'> ALL MEN'S</a>
                        </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default MenWomen