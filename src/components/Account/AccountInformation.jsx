import React, {useContext} from 'react'
import { ProductsContext } from '../../App'
import {VscAccount} from 'react-icons/vsc'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


function AccountInformation() {

    // const {loggedUser, setLoggedUser} = useContext(LoginContext)
    // const {loggedIn, setLoggedIn} = useContext(LoginContext)

    
    const productspurchased = useContext(ProductsContext)


    const navigate = useNavigate()
    
    const handleLogout = () => {
        axios.get("http://localhost:3001/logout").then((response)=>{
            navigate("/login")
        })
    }


  return (
    <div>
        <div className='flex justify-center h-[20vh]'>
            <div className='w-full mt-10 flex flex-col items-center capitalize'>
                    <VscAccount size={35}/>
                    <h1 className='mx-2 my-2 font-bold'>My Account</h1>
                    <h1 className='mx-2 my-2'>Welcome  </h1>
            </div>
        </div>
        <div className='flex justify-center mx-44 w-auto flex-col-2 h-auto'>
            <div className='flex flex-col-3 menuborder py-6'>
                <div className='flex h-auto flex-col items-end my-4'>
                    <div className='h-auto w-auto'>
                        <ul className='h-auto w-auto ml-4'>
                            <li className='my-2 botbordercustom w-auto h-auto'> Account Info </li>
                            <li className='my-2 botbordercustom'> My Address </li>
                            <li className='my-2 botbordercustom'> My Wishlist </li>
                            <li onClick={handleLogout} className='my-2 botbordercustom'> Sign Out </li>
                        </ul>
                    </div>
            </div>
        <div >
            <div className='flex ml-14 capitalize font-bold text-lg'>
                Previous Orders
            </div>
            <div className='flex w-[900px] h-auto mx-12 justify-start accountborder py-4'>
                <div className='flex w-auto h-auto pl-8  mt-4'>
                    <img className='w-[120px] h-[120px]' src={productspurchased[35].prod_img}/>
                </div>
                <div className='w-[350px] flex flex-col items-center mt-10'>
                    <h1 className='flex capitalize'>{productspurchased[35].name}</h1>
                    <h1 className='flex capitalize'>{productspurchased[35].brand}</h1>
                    <h1 className='flex capitalize'>$ {productspurchased[35].price}</h1>
                </div>
                <div className='flex justify-center items-start mt-16'>
                    <button>View Purchase ticket</button>
                </div>  
            </div>
            <div className='flex w-[940px] h-auto ml-12 justify-start accountborder py-4'>
                    <div className='flex w-auto h-auto pl-8 mt-4'>
                        <img className='w-[120px] h-[120px]' src={productspurchased[32].prod_img}/>
                    </div>
                    <div className='w-[350px] flex flex-col items-center mt-10'>
                        <h1 className='flex capitalize'>{productspurchased[32].name}</h1>
                        <h1 className='flex capitalize'>{productspurchased[32].brand}</h1>
                        <h1 className='flex capitalize'>$ {productspurchased[32].price}</h1>
                    </div>
                    <div className='flex justify-center items-start mt-16'>
                        <button>View Purchase ticket</button>
                    </div>  
            </div>
            <div className='flex w-[940px] h-auto mx-12 justify-start accountborder py-4'>
                <div className='flex w-auto h-auto pl-8  mt-4'>
                    <img className='w-[120px] h-[120px]' src={productspurchased[39].prod_img}/>
                </div>
                <div className='w-[350px] flex flex-col items-center mt-10'>
                    <h1 className='flex capitalize'>{productspurchased[39].name}</h1>
                    <h1 className='flex capitalize'>{productspurchased[39].brand}</h1>
                    <h1 className='flex capitalize'>$ {productspurchased[39].price}</h1>
                </div>
                <div className='flex justify-center items-start mt-16'>
                    <button>View Purchase ticket</button>
                </div>  
            </div>
        </div>
        </div>           
        </div>
    </div>
  )
}

export default AccountInformation