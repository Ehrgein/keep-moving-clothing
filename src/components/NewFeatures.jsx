import React from "react"
import {Link} from 'react-router-dom'

function NewFeatures({img1, img2, img3}) {

   
    return (

        <div>
            <div className="flex flex-grow w-full 4k:h-[800px] desktop:h-[600px] laptopL:h-[550px] laptop:h-[512px]">

                <div className="relative tablet:hidden laptopL:block w-[33%] 4k:h-auto desktop:h-[600px] laptopL:h-[550px] laptop:h-[500px]
                 mx-1">
                    <span className="midtext text-white 4k:text-4xl desktop:text-3xl laptopL:text-3xl laptop:text-3xl capitalize" >
                        {img1.text}
                    </span>
                    <div className="h-auto shopnowcenter">
                        <Link>
                            <span className="bg-black text-white hover:text-black hover:bg-white ease-in duration-300 
                            4k:text-4xl desktop:text-2xl laptopL:text-2xl laptop:text-xl 
                            desktop:px-10 tablet:px-6 4k:py-2 desktop:py-2 laptopL:py-2 laptop:py-1 tablet:py-1 font-bold">
                                Shop Now
                            </span> 
                        </Link>
                </div>
                    <img className="max-w-full h-full w-[100%]
                      4k:object-none laptopL:object-cover" src={img1.img} />
                </div>
                <div className="relative laptopL:w-[33%] tablet:w-[50%] tablet:object-cover 4k:h-[800px] desktop:h-[600px] laptopL:h-[550px] laptop:h-[500px]
                 mx-1">
                    <span className="midtext text-white 4k:text-4xl desktop:text-3xl laptopL:text-3xl laptop:text-3xl tablet:text-2xl capitalize" >
                        {img2.text}
                    </span>
                    <div className="h-auto shopnowcenter">
                        <Link>
                        <span className="bg-black text-white hover:text-black hover:bg-white ease-in duration-300   laptop:text-2xl
                        4k:text-4xl desktop:text-2xl laptopL:text-2xl tablet:text-2xl
                        desktop:px-10 tablet:px-6 4k:py-2 desktop:py-2 laptopL:py-2 laptop:py-2 tablet:py-1 font-bold">
                            Shop Now
                        </span> 
                        </Link>
                    </div>
                    <img className="h-full w-[100%] object-cover" src={img2.img} />
                </div>
                <div className="relative laptopL:w-[33%] tablet:w-[50%] 4k:h-[800px] desktop:h-[600px] laptopL:h-[550px]
                laptop:h-[500px] mx-1 ">
                    <span className="midtext text-white 4k:text-4xl desktop:text-3xl laptopL:text-3xl laptop:text-3xl tablet:text-2xl capitalize">
                    {img3.text}
                    </span>
                    <div className="h-auto shopnowcenter">
                        <Link to={"collection/air jordan"}>
                            <span className="bg-black text-white hover:text-black hover:bg-white ease-in duration-300 laptop:text-2xl tablet:text-2xl
                            4k:text-4xl desktop:text-2xl laptopL:text-2xl desktop:px-10 tablet:px-6 4k:py-2 desktop:py-2 laptopL:py-2 laptop:py-2 tablet:py-1 font-bold">
                                Shop Now
                            </span> 
                        </Link>
                    </div>
                    <img className="max-w-full h-full w-[100%] laptopL:object-cover" src={img3.img} />
                </div>
            </div>
        </div>
    )
}

export default NewFeatures