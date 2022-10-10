import React from 'react'
import { MdCategory } from 'react-icons/md'
import {products} from './NewMenuData'
import CategoryItem from './CategoryItem'


function NewCategoryList() {

  return (
    <div>
        <div>
            {products.map(categorymenu =>
                <CategoryItem key={categorymenu.id} categories={categorymenu.category} items={categorymenu.items}/>)}
        </div>
    </div>
  )
}

export default NewCategoryList


