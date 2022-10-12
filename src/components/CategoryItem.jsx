import React, {useState} from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function CategoryItem({categories, items}) {

    const [menuarrow, setMenu] = useState(false)

    const handleMenu = () =>{
    setMenu(!menuarrow)
    }


  return (

    
    <div>
        <div className="flex justify-between items-end border">
          <a className='flex pl-2 text-lg font-bold py-2 w-[100%] uppercase tracking-widest'>{categories}</a>
          <MdOutlineKeyboardArrowDown className="self-center border-l" onClick={handleMenu} size={30}/>
        </div>
          <div className={menuarrow ? 'text-xsm' : 'hidden'}>
            <ul className="pl-2 text-sm py-1 ease-in-out duration-500">
                {items.map(item => 
                <li key={item.id} name={item.name}>{item.name}</li>)}
            </ul>
          </div>
    </div>
  )
}

export default CategoryItem