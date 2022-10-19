// import React from 'react'
// import {useEffect, useState} from 'react'
// import axios from 'axios'
// import {Link} from "react-router-dom"

// function NewInventory() {

//     const [products, setProducts] = useState([])

//     useEffect(() => {
//         const fetchAllProducts = async () => {
//             try{
//                 const res = await axios.get("http://localhost:3001/products") // el port 3001 es el backend(quien tiene la data) y products es la table
//                 setProducts(res.data) 
//             }catch(err){
//                 console.log(err)
//             }
//         }
//         fetchAllProducts()


//     }, [])




//   return (
//     <div className='text-3xl flex justify-center mt-12 flex-col w-full'>
//         {products.map(item => (
//             <div key={item.id} className='my-4 gap-4'>
//                 <h1>{item.name}</h1>
//                 <h1>brand: {item.brand}</h1>
//                 <h1>stock: {item.stock}</h1>
//                 <img src={item.prod_img} className='w-[100px] h-[100px]'/>
//                 <h1> $ {item.price} </h1>
//                 <h1></h1>
//             </div>
//         ))}
//     </div>
//   ) 

// }   
// export default NewInventory;























/* <h1 className='flex justify-center'>This is our bookshop</h1>
{books.map(book => (        
<div className='flex justify-center mt-12 flex-col' key={book.id}>
    <div className='flex flex-col'>
    {book.cover && <img src={book.cover} alt="" />}
    <h2 className='flex justify-center mt-4'>{book.title}</h2>
    <h2 className='flex justify-center mt-4'>{book.desc}</h2>
    <span className='flex justify-center mt-4'>{book.price}</span>
    <button className='h-[40px] flex text-xl   mt-4 justify-center' // }onClick={() => handleDelete(book.id)}> <span className='w-[400px] text-xl px-2 py-2 bg-black font-bold  text-white'> Delete </span></button>
    <button className='h-[40px] flex text-xl   mt-4 justify-center' > <Link to={`/update/${book.id}`} className='w-[400px] text-xl px-2 py-2 font-bold bg-black text-white'> Update </Link> </button>
    </div>
</div>))}
<button className='mt-8 text-white font-lg flex justify-center'><Link className='flex justify-center bg-black px-4 py-4 font-bold uppercase text-lg' to="/crud">Go to CRUD</Link></button> */