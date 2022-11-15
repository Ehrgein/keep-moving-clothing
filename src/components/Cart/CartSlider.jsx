import React, { useState, useContext, useRef, useEffect } from "react";
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { ProductsContext, UserContext } from "../../App";
import { CartContext } from "../Cart/CartFunctionality";
import axios from "axios";
import CheckoutModal from "../CheckoutModal";
import ErrorModal from "../ErrorModal";

function CartSlider() {
  const [errorMsg, seterrorMsg] = useState("");

  const [cleancart, setCleanCart] = useState([]);
  const [onpurchasemodal, setonPurchasemodal] = useState(false);
  const [onerrormodal, setonErrorModal] = useState(false);

  const productscontext = useContext(ProductsContext);
  const cart = useContext(CartContext);
  const usercontext = useContext(UserContext);

  let idsquant = cart.items?.map((item) => ({
    id: Number(item.id),
    quant: item.quantity,
  }));

  const idarray = idsquant?.map(({ id }) => id); // id first, quantity second
  const values = idsquant?.map(Object.values);

  console.log(usercontext.userid);

  const handleCheckout = () => {
    if (cart.items.length > 0) {
      axios
        .post(
          "https://clothingstorebackend-production.up.railway.app/checkout",
          {
            userid: usercontext.userid,
            values: values,
          }
        )
        .then((response) => {
          if (response.status === 200 && usercontext.user) {
            seterrorMsg("");
            setonPurchasemodal(true);
            cart.setCartProducts([]);
            cart.handleCart();
          } else {
            setonErrorModal(true);
          }
        });
    } else {
      seterrorMsg("Cannot make purchases on an empty cart");
    }
  };

  
  return (
    <div className="overflow-x-hidden">
      <div
        onClick={() => cart.handleCart()}
        className="md:mr-4 mobilexs:mr-1 text-base flex"
      >
        <AiOutlineShoppingCart className="4k:w-[35px] 4k:h-[35px] desktop:w-[25px]  laptopL:w-[22px]  tablet:w-[25px] h-auto mobilexs:w-5 mobilexs:h-5  mobileL:h-6 mobileL:w-6 mx-1" />
      </div>
      <div
        className={
          cart.cartSlider
            ? "fixed  cartshadow top-0 bottom-0 right-0 h-screen 4k:w-[20%] desktop:w-[20%] laptopL:w-[30%] laptop:w-[40%] tablet:w-[50%] mobileL:w-[80%]  mobilexs:w-[90%] text-black bg-white ease-in-out duration-700 overflow-y-scroll"
            : "fixed  cartshadow  top-0 bottom-0 h-screen desktop:w-[20%] mobileL:w-[80%] mobilexs:w-[85%] ease-in-out duration-700 right-[-140%]"
        }
      >
        <div className="text-black text-xl flex mt-4 ml-4 justify-between text-center items-start">
          <h1 className="">CART</h1>
          <h1
            onClick={() => cart.handleCart()}
            className="mx-6 text-base text-thin"
          >
            X
          </h1>
        </div>
        {cart.items?.length > 0 ? (
          <div className="mt-10 mx-4 cart-anim overflow-y-scroll mobilexs:text-sm">
            {cart.items?.map((item) => (
              <div
                key={item.id}
                className="scrollcart cart-anim flex justify-start cartborder my-2"
              >
                <div className=" my-4 mobilem:h-32 mobilem:w-32 mobileL:w-[120px] mobileL:h-[120px]  mobilexs:w-[120px] mobilexs:h-[120px]">
                  <img
                    alt={`${item.name} ${item.brand} $${item.price}`}
                    src={item.img}
                    className="w-[120px] h-[120px]"
                  />
                </div>
                <div
                  className="uppercase font-medium ml-2 my-6 tracking-wide
                             mobileL:w-[65%] mobilexs:w-[80%]"
                >
                  <div className="h-[65%] 4k:text-xl laptop:text-sm tablet:text-sm mobilexs:text-xs ">
                    <p className="">{item.name}</p>
                  </div>
                  <div className="flex items-center h-10 gap-6 ">
                    <AiOutlineMinus
                      className="4k:w-[15px] 4k:h-[15px]"
                      onClick={() => cart.removeOneFromCart(item.id)}
                    />
                    <p className="4k:text-lg text-base">
                      {cart.getProductQuantity(item.id)}
                    </p>
                    <AiOutlinePlus
                      className="4k:w-[15px] 4k:h-[15px]"
                      onClick={() => cart.addOneToCart(item.id)}
                    />
                    <p onClick={() => cart.addOneToCart(item.id)}></p>
                  </div>
                  <div className="ml-2 mb-2 w-[55px] h-6 4k:text-base">
                    <button
                      onClick={() => cart.deleteFromCart(item.id)}
                      className="uppercase"
                    >
                      {" "}
                      remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-between topborder mt-1 uppercase text-sm">
              <h1 className="mt-2">Subtotal</h1>
              <h1 className="mt-2">$ {cart.getTotalCost()}</h1>
            </div>
            <div className="flex justify-center mt-12 mb-12">
              <button
                onClick={handleCheckout}
                className="bg-black text-white tracking-widest uppercase font-bold px-20 py-2 text-lg"
              >
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-10 ml-4 flex  4k:text-2xl laptopL:text-lg laptop:text-lg tablet:text-lg mobilexs:text-lg font-normal ">
            Cart is currently empty.
          </div>
        )}
      </div>

      {onpurchasemodal && usercontext.user ? (
        <CheckoutModal
          onpurchasemodal={onpurchasemodal}
          setonPurchasemodal={setonPurchasemodal}
          user={usercontext.user}
        />
      ) : null}
      {onerrormodal ? (
        <ErrorModal
          onerrormodal={onerrormodal}
          setonErrorModal={setonErrorModal}
          handleCart={() => cart.handleCart()}
        />
      ) : null}
    </div>
  );
}

export default CartSlider;
