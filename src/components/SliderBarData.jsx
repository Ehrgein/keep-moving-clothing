import React, {useState} from 'react'
import {products} from './NewMenuData'

function SliderBarData({text}) {

  const [menuarrow, setMenu] = useState(false)

  const handleMenu = () =>{
    setMenu(!menuarrow)
  }

    const inventory = [{ 

      id: 0,
      name: 'New Balance',
      category: 'sneakers'
    },
    {
      id:1,
      name: 'Nike',
      category: 'sneakers',
    },
    {
      id: 2,
      name: 'Adidas',
      category: 'sneakers'
    },
    {
      id: 3,
      name: 'Converse',
      category: 'sneakers'
    },
    {
      id: 4,
      name: 'Vans',
      category: 'sneakers'
    },
    {
      id: 5,
      name: 'Supreme',
      category: 'hoodies',
    },
    {
      id: 6,
      name: 'The North Face',
      category: 'hoodies',
    },
    {
      id: 7,
      name: 'Champion',
      category: 'hoodies'
    },
    {
      id: 8,
      name: 'Stone Island',
      category: 'hoodies',
    },
    {
      id: 9,
      name: 'Patagonia',
      category: 'hoodies',
    },
    {
      id: 10,
      name: 'King Ice',
      category: 'hoodies',
    },
    {
      id: 11,
      name: 'T-Shirts',
      category: 'tops'
    },
    {
      id: 12,
      name: 'Polos',
      category: 'tops'
    },
    {
      id: 13,
      name: 'Outerwear',
      category: 'tops',
    },
    {
      id: 14,
      name: 'Woven Shirts',
      category: 'tops',
    },
    {
      id: 15,
      name: 'Jerseys',
      category: 'tops',
    },
    {
      id: 16,
      name: 'Shorts',
      category: 'bottoms',
    },
    {
      id: 17,
      name: 'Jeans',
      category: 'bottoms'
    },
    {
      id: 18,
      name: 'Track Pants',
      category: 'bottoms',
    },
    {
      id: 19,
      name: 'Small',
      category: 'sizes',
    },
    {
      id: 20,
      name: 'Medium',
      category: 'sizes',
    },
    {
      id: 21,
      name: 'Large',
      category: 'sizes',
    },
    {
      id: 22,
      name: 'XL',
      category: 'sizes',
    },
    {
      id: 23,
      name: '2XL',
      category: 'sizes',
    },
    {
      id: 24,
      name: '3XL',
      category: 'sizes',
    }

    ]

  

    const filteredinventory = inventory.filter(item => item.category === text)
    const itemList = filteredinventory.map((filtereditem) => <li key={filtereditem.id}>{filtereditem.name}</li>)

    
  return (
    <div>

      <div>{itemList}</div>
    </div>
  
  )
}

export default SliderBarData