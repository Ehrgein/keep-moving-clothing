import React, { useContext } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { CartContext } from "../Cart/CartFunctionality";
import { Link } from "react-router-dom";

function Wishlist() {
  const cart = useContext(CartContext);

  const addWish = (id) => {
    cart.addOneToCart(id);
    cart.openCart();
  };

  return (
    <div>
      <div className="h-auto bg-white w-full flex mb-20 mt-10 justify-start flex-col">
        <div className="flex flex-col items-center gap-4 justify-start">
          <AiOutlineHeart className="4k:w-10 4k:h-10 md:w-8 md:h-8" />
          <h3 className="font-bold 4k:text-2xl text-lg">
            {" "}
            My Wishlist ({cart.wishitems.length}){" "}
          </h3>
        </div>
        <div className="flex flex-row flex-wrap justify-center h-auto mt-10 md:mt-16">
          {cart.wishitems.map((wishitem) => (
            <div
              className="flex flex-col  items-center justify-center
            4k:w-[400px] 4k:h-[400px] desktop:w-[350px] desktop:h-[350px] laptopL:w-[300px] laptopL:h-[300px] laptop:w-[280px] laptop:h-[280px] tablet:w-[240px] tablet:h-[240px]
             mobileL:w-[200px] mobileL:h-[200px] mobilem:w-[160px] mobilem:h-[160px] mobilexs:w-[150px] mobilexs:h-[150px]
             capitalize  laptopL:my-20 laptop:my-24 md:my-16 md:mx-4 mobilem:mx-1 mobileL:my-20 mobilem:my-24 mobilexs:my-24"
            >
              <div
                className="flex items-end justify-end mr-20 laptopL:w-[400px] md:w-[280px] mobileL:w-[240px] mobilem:w-[240px] mobilexs:w-[230px]"
                onClick={() => cart.deleteFromWish(wishitem.id)}
              >
                <button>
                  <FiHeart
                    aria-label="remove or add to wishlist"
                    className="heart mt-2 4k:w-7 4k:h-7 laptopL:w-5 laptopL:h-5 laptop:w-5 laptop:h-5 mobilem:w-5 mobilem:h-5 mobilexs:w-5 mobilexs:h-5"
                  />
                </button>
              </div>
              <Link to={`/products/${wishitem.categories}/${wishitem.id}`}>
                <img
                  className="4k:w-[250px] 4k:h-[250px] desktop:w-[225px] desktop:h-[225px] laptopL:w-[200px]
                   laptopL:h-[200px] laptop:w-[230px] laptop:h-[230px]
                    tablet:w-[200px] tablet:h-[200px] mobileL:w-[150px] mobileL:h-[150px] mobilem:w-[140px] mobilem:h-[140px] mobilexs:w-[140px] mx-3"
                  src={wishitem.img}
                />
              </Link>
              <div className="md:flex md:flex-col justify-start text-center">
                <p className="4k:text-xl laptopL:text-lg laptop:text-base mobileL:text-sm mobilem:text-sm tracking-wide font-normal">
                  {" "}
                  {wishitem.brand}
                </p>
                <p
                  className="4k:text-xl laptopL:text-lg laptop:text-base mobilexs:text-sm
                   mobilem:text-sm my-2 tracking-wide font-normal h-auto md:h-7 mobileL:h-8 mobilem:h-8 mobilexs:h-8"
                >
                  {" "}
                  {wishitem.name}
                </p>
                <p className="4k:text-xl  laptopL:text-lg laptop:text-base mobilexs:text-sm mt-1 tracking-wide font-normal mobilem:mt-2">
                  $ {wishitem.price}
                </p>
              </div>
              <div
                className="bg-black text-white desktop:text-lg laptopL:text-2xl laptop:text-lg md:text-base font-black h-12 mobileL:h-12
               4k:w-[320px] desktop:w-[250px] laptopL:w-[200px] laptop:w-[150px] md:w-[200px] mobileL:w-[150px] mobilem:w-[140px] mobilexs:w-[130px] py-2 4k:mt-2 text-center mt-4"
              >
                <button
                  onClick={() => addWish(wishitem.id)}
                  className="uppercase"
                >
                  add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
