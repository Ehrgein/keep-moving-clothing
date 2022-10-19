import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const Update = () => {

    // const [itemName, setitemName] = useState('')
    // const [brand, setBrand] = useState('')
    // const [stock, setStock] = useState(0)
    // const [price, setPrice] = useState(0)
    // const [itemImg, setitemImg] = useState('')


    const [book, setBook] = useState({
        title: "",
        desc:  "",
        price: null,
        cover: "",

    })

    const newid = useParams()
        

    const navigate = useNavigate()
    const location = useLocation()

    const bookId= (location.pathname.split("/")[2])

    console.log(location.pathname.split("/")[2]);   /// same thing
    console.log(newid.id)                               // same thing

    const handleChange = (e) =>{
        setBook((prev) => ({...prev, [e.target.name]: e.target.value }))

    } 

    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.put("http://localhost:3001/books/"+ bookId, book)
            navigate("/newinventory")
        }catch(err){
            console.log(err);

        }
    }



  return (
    <div className=''>
        <div className='flex justify-center text-2xl'>
            <h1>UPDATE APP</h1>
        </div>
        <div className='form flex flex-col justify-center w-full mt-10 items-center uppercase'>
            <input type="text"placeholder="title" onChange={handleChange} name="title" className='border-2 border-black w-[300px] h-[40px]'/> 

            <input type="text"  placeholder="desc" onChange={handleChange} name="desc" className='border-2 border-black w-[300px] h-[40px]'/> 

            <input type="number"  placeholder="price" onChange={handleChange} name="price" className='border-2 border-black w-[300px] h-[40px]'/> 

            <input type="text"  placeholder="cover" onChange={handleChange} name="cover" className='border-2 border-black w-[300px] h-[40px]'/> 

            <button className='text-xl h-[40px] border-2 border-black mt-4 w-[200px]' onClick={handleClick}> Update </button>
            
        </div>
    </div>
  )
}

export default Update