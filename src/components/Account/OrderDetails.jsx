import React, {useEffect, useState, useContext} from 'react'
import { Link, useParams } from 'react-router-dom'
import { UserContext } from '../../App'
import { CartContext } from '../Cart/CartFunctionality'
import axios from 'axios'

function OrderDetails() {

    const [data, setData] = useState([])

    let {orderid} = useParams()


    useEffect(() => {
      axios.post("http://localhost:3001/purchase_history", {
          orderid : orderid
      }).then((response) => {
          setData(response.data)
      })
  }, [])


  const getTotal = () => {

    let totalcost = 0

    data.map(item => {
        totalcost += (item.price * item.quantity)
    })

    return totalcost
}



  return (
    <div>
        <div className='hidden tablet:flex h-auto bg-white w-full  mb-20 mt-10 justify-start flex-col'>
            <div className='flex flex-col items-center gap-4 justify-start'>
                <h4 className='font-bold text-xl'>Order Details</h4>
            </div>
            <div className='flex tablet:flex-row mobilexs:flex-col desktop:justify-end laptopL:justify-center desktop:w-[85%] h-auto'>
                <div className='flex flex-col h-auto desktop:w-[35%] md:w-[60%] laptopL:w-[40%] laptop:w-[55%] md:ml-2  mt-20 justify-start items-start desktop:mr-20 topleftrightborder border-r-2'>
                        {data.map(item => 
                        <div key={item.product_id} className='flex w-full accountborder '>
                            <img className='w-[150px] h-[150px] my-4 ml-2' src={item.prod_img}/>
                            <div className='flex flex-col w-full'>
                                <p className='capitalize font-semibold mt-2 ml-2 '>{item.name}</p>
                                <p className='capitalize mt-1 ml-2'>{item.brand}</p>
                                <p className='capitalize mt-1 ml-2'>{item.quantity} units</p>

                            </div>
                        </div>)}
                </div>
                <div className='flex flex-col items-start justify-start h-[100%] w-auto desktop:mt-20 md:mt-20 laptopL:ml-8 laptop:ml-4 tablet:my-20 md:mx-4  menuborder'>
                    <h1 className='items-start justify-start mx-1 font-bold'>Payment Details</h1>
                    <p className='mx-1 mt-1 text-xs'>Purchase id: {orderid}</p>
                    {data.map(item =>
                    <div key={item.product_id} className='mt-3' >
                        <h1 className='capitalize mx-1'>
                            {item.name} - {item.quantity} x - ${item.price} = ${(item.quantity * item.price)}
                        </h1>
                    </div>)}
                    <div className='w-full mt-1 cartborder'>
                        <h1 className='mt-1 font-semibold  w-full mx-1'>Subtotal: $ {getTotal()} </h1>
                    </div>
                </div>
            </div>
        </div>
        {/*mobile starts here*/}        



        <div className='md:hidden flex h-auto bg-white w-full  mb-20 mt-10 justify-start flex-col'>
            <div className='flex flex-col items-center gap-4 justify-start'>
                <h4 className='font-bold text-xl'>Order Details</h4>
            </div>
            <div className='flex  mobilexs:flex-col desktop:justify-end laptopL:justify-center h-auto'>
                <div className='flex flex-col h-auto md:ml-2  mt-20 justify-start items-start desktop:mr-20 topleftrightborder border-r-2'>
                        {data.map(item => 
                        <div key={item.product_id} className='flex w-full accountborder '>
                            <img className='mobileL:w-[150px] mobilem:w-[130px] mobilexs:w-[110px]  my-4 mobileL:ml-2 mobilem:ml-3' src={item.prod_img}/>
                            <div className='flex flex-col w-full ml-2'>
                                <p className='capitalize font-semibold mt-2 ml-2 '>{item.name}</p>
                                <p className='capitalize mt-1 ml-2'>{item.brand}</p>
                                <p className='capitalize mt-1 ml-2'>{item.quantity} units</p>

                            </div>
                        </div>)}
                </div>
                <div className='flex flex-col items-start justify-start h-[100%] tablet:my-20 mobileL:my-20 mobilem:my-10 mobilexs:my-8 w-auto menuborder '>
                    <h1 className='items-start justify-start mx-1 font-bold'>Payment Details</h1>
                    <p className='mx-1 mt-1 text-xs'>Purchase id: {orderid}</p>
                    {data.map(item =>
                    <div key={item.product_id} className='mt-3' >
                        <h1 className='capitalize mx-1'>
                            {item.name} - {item.quantity} x - ${item.price} = ${(item.quantity * item.price)}
                        </h1>
                    </div>)}
                    <div className='w-full mt-1 cartborder'>
                        <h1 className='mt-1 font-semibold  w-full mx-1'>Subtotal: $ {getTotal()} </h1>
                    </div>
                </div>
                <div className=' flex justify-center items-center w-full'>
                    <Link className='text-center' to="/account">
                        <p className='bg-black text-white hover:text-black hover:bg-white px-4 py-1 capitalize'>go back to account</p>
                    </Link>
                </div>
            </div>
        </div>

    </div>
  )
}

export default OrderDetails