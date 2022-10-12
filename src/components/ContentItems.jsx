import React from 'react'

function ContentItems({items}) {

  const slicedarr = items.slice(-5)


  return (
    <div className='flex justify-center flex-wrap'>
        {slicedarr.map((item) => 
          <div className='flex uppercase justify-center desktop:w-[280px] laptopL:w-[160px] md:w-[150px] mt-11 text-sm laptopL:mx-12 md:mx-20 lg:mx-12'>
          <ul>
            <img className='h-auto text-center mb-4' src={item.prod_img}/>
            <li className='font-bold text-center 4k:text-lg' key={item.id} name={item.name} brand={item.brand} img={item.prod_img}> {item.name} </li>
            <p className='text-base mt-1 font-semibold text-center 4k:text-lg'>$ {item.price}</p>
          </ul>
          </div>
       )}
    </div>

  )
}

export default ContentItems