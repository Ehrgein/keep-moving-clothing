import React, { useContext, useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext, UserContext } from "../../App";
import Header from "../Header";
import { Link } from "react-router-dom";
import { CartContext } from "../Cart/CartFunctionality";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { IconContext } from "react-icons";

const wishitems = JSON.parse(localStorage.getItem("wish"));

function ProductInfo() {
  const [wishlist, setwishList] = useState([]);
  const [wishstatus, setWishStatus] = useState(wishitems);

  let { productinfo } = useParams();

  const productscontext = useContext(ProductsContext);
  const cart = useContext(CartContext);

  const AddCart = () => {
    cart.openCart();
    cart.addOneToCart(productinfo);
  };

  const filtered = cart.wishitems?.filter((item) => item.id == productinfo);

  useEffect(() => {
    setwishList(wishstatus);
  }, [cart.wishitems]);

  return (
    <div className="">
      <div className="hidden laptop:flex w-full h-auto bg-white flex-col items-center 4k:items-center mt-10 desktop:mt-20 desktop:mb-20 mb-10 ml-14">
        {productscontext.map((item) =>
          item.id == productinfo ? (
            <div key={item.id} className="flex">
              <div className="flex justify-center w-[75%] flex-grow">
                <img
                  className="4k:w-[690px] 4k:h-[690px] desktop:h-[560px] desktop:w-[560px] laptopL:w-[475px] laptopL:h-[475px] laptop:w-[400px] laptop:h-[400px]"
                  src={item.prod_img}
                  alt={`${item.name} ${item.brand} $${item.price} `}
                />
              </div>
              <div className="flex flex-col desktop:ml-20 laptopL:ml-8 laptop:ml-12 desktop:mt-10 laptop:mt-6 4k:w-[38%] desktop:w-[35%] laptopL:w-[50%]">
                <div className="flex w-full">
                  <div className="flex">
                    <h4
                      className="font-bold 4k:text-3xl desktop:text-2xl laptopL:text-xl laptop:text-xl capitalize 4k:w-[500px] desktop:w-[400px] laptopL:w-[335px] laptop:w-[300px]
                      4k:h-auto laptop:h-12 laptopL:h-12  gap-4"
                    >
                      {item.name}
                    </h4>
                  </div>
                  {filtered[0]?.id === productinfo ? (
                    <div
                      className="flex justify-start items-start"
                      onClick={() => cart.deleteFromWish(productinfo)}
                    >
                      <button>
                        <FiHeart
                          className="heart 4k:mb-1 laptop:mt-2  
                        4k:w-[30px] 4k:h-[30px] desktop:w-[24px] desktop:h-[24px] laptopL:w-[20px] laptopL:h-[20px] laptop:w-[22px] laptop:h-[22px]  laptopL:ml-2 "
                        />
                      </button>
                    </div>
                  ) : (
                    <div onClick={() => cart.addToWishList(productinfo)}>
                      <IconContext.Provider value={{ color: "black" }}>
                        <button>
                          <FiHeart
                            className="4k:mb-1 laptop:mt-2
                         4k:w-[30px] 4k:h-[30px] desktop:w-[24px] desktop:h-[24px] laptopL:w-[20px] laptopL:h-[20px] laptop:w-[22px] laptop:h-[22px] laptopL:ml-2"
                          />
                        </button>
                      </IconContext.Provider>
                    </div>
                  )}
                </div>

                <div className="max-w-xs">
                  <Link to={`/collection/${item.brand}`}>
                    <h1 className="mt-1 inline-block h-auto capitalize 4k:text-2xl desktop:text-xl laptopL:text-lg text-medium opacity-75">
                      {item.brand}
                    </h1>
                  </Link>
                </div>
                <div>
                  <h1 className="flex mt-1 font-bold 4k:text-2xl laptopL:text-xl">
                    {" "}
                    ${item.price}
                  </h1>
                </div>
                <h1 className="mt-4 desktop:text-2xl laptopL:text-xl tracking-widest h-auto">
                  S M L XL
                </h1>
                <div></div>
                {item.stock >= 1 ? (
                  <div className="flex">
                    <div className="rounded-full bg-green-500 desktop:w-[25px] desktop:h-[25px] laptopL:w-[20px] laptopL:h-[20px] laptop:w-[20px] laptop:h-[20px] mt-6"></div>
                    <p className="mt-[20px] ml-2 4k:text-lg">In stock</p>
                  </div>
                ) : (
                  <div className="flex">
                    <div className="rounded-full bg-red-500 desktop:w-[25px] desktop:h-[25px] laptopL:w-[20px] laptopL:h-[20px] laptop:w-[20px] laptop:h-[20px] mt-6"></div>
                    <p className="mt-[20px] ml-2 4k:text-lg">Out of stock</p>
                  </div>
                )}
                <div>
                  <button
                    onClick={AddCart}
                    className="flex justify-center items-center 
                    uppercase laptop:mt-4 mt-10 text-center 4k:text-2xl desktop:text-xl laptopL:text-xl laptop:text-lg
                    bg-black text-white font-black 4k:h-14 desktop:h-8  laptop:h-8 h-12 desktop:py-3
                     4k:w-auto desktop:w-[450px]  laptop:w-[320px]"
                  >
                    add to cart
                  </button>
                </div>
                <div>
                  <h4
                    className="flex justify-center items-center mt-2 text-center
                   desktop:py-3 desktop:h-8 4k:text-2xl 4k:h-14 desktop:text-xl laptopL:text-xl laptop:text-lg
                    bg-yellow-500 text-black h-12 laptop:h-8 py-1 4k:w-auto desktop:w-[450px] laptop:w-[320px]"
                  >
                    {" "}
                    Buy with Paypal
                  </h4>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>

      {/*Mobile starts here*/}

      <div className="laptop:hidden">
        {productscontext
          ?.filter((item) => item.id == productinfo)
          .map((item) => (
            <div key={item.id}>
              <div className="flex mt-6 mobilexs:mx-6 tablet:mx-0 tablet:w-full justify-center">
                <img className="w-[350px] h-[350px]" src={item.prod_img} />
              </div>
              <div className="flex justify-center my-2 items-center text-center flex-col">
                <h1 className="flex-start items-start text-2xl font-bold capitalize">
                  {" "}
                  {item.name}
                </h1>
                <h1 className="mt-2 uppercase text-lg font-normal ">
                  {item.brand}
                </h1>
                <h1 className="mt-2 font-bold text-lg">$ {item.price}</h1>
              </div>
              <div className="flex justify-center">
                <div
                  className={
                    item.stock === 0
                      ? "mt-4 bg-red-500 w-6 h-6 rounded-full"
                      : "mt-5 bg-green-500 w-5 h-5 rounded-full"
                  }
                />
                {item.stock == 0 ? (
                  <p className="mt-3 mx-1 h-6 text-lg"> Out of Stock</p>
                ) : (
                  <p className="mt-4 mx-1 h-6 text-lg">
                    In stock, ready to ship
                  </p>
                )}
              </div>
              <div className="flex flex-col justify-center items-center">
                <h2
                  onClick={AddCart}
                  className="uppercase mt-6 text-center text-2xl bg-black text-white font-black h-12  py-1 tablet:w-[410px] mx-3 mobilexs:w-[290px]"
                >
                  add to cart
                </h2>
                <h2 className="mt-3 text-center text-2xl  h bg-yellow-500 text-black  h-12 px-2 py-1 w-[390px] tablet:w-[410px] mobilexs:w-[290px] mx-3">
                  {" "}
                  Buy with Paypal
                </h2>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProductInfo;
