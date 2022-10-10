import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import {IconContext} from 'react-icons'

function HeaderDropdown({text}) {
  return (
    <div>     
        <div className="flex items-center uppercase ">
        <p>{text}</p>
        <IconContext.Provider value={{ color: 'white', size: '20px' }}>
            <MdOutlineKeyboardArrowDown/>
        </IconContext.Provider>
        </div>
    </div>
  )
}

export default HeaderDropdown