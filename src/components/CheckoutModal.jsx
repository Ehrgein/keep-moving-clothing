import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FcCheckmark } from "react-icons/fc";

function CheckoutModal({ purchasemodal, setonPurchasemodal }) {
  return (
    <div className="checkoutmodal fixed  inset-0 z-55 overflow-y-scroll">
      <div className="h-screen flex justify-center  items-center text-black text-2xl ">
        <motion.div className="flex flex-col cartshadow relative rounded-md justify-center bg-white md:py-12 py-8  md:px-24 px-4 cart-anim">
          <div className="absolute top-0 right-0 mt-2 mr-3">
            <button
              className="4k:text-2xl desktop:text-xl laptop:text-xl  mobileL:text-xl font-medium"
              onClick={() => setonPurchasemodal(false)}
            >
              X
            </button>
          </div>
          <div className="flex flex-col justify-center items-center w-[100%] opacity-100 h-[100%] font-medium">
            {purchasemodal}
            <div className="flex mobilexs:flex-col tablet:flex-row items-center">
              <FcCheckmark className="h-8 w-8 ml-2 tablet:hidden flex justify-center items-center" />
              <h1 className="laptopL:h-8 4k:text-2xl desktop:text-xl laptopL:text-lg font-medium tablet:text-xl mobilexs:text-lg">
                Purchase successful, thank you!
              </h1>
              <FcCheckmark className="h-8 4k:h-14 w-8 ml-2 mobilexs:hidden tablet:block" />
            </div>
            <h1 className="mt-3 4k:text-2xl desktop:text-xl laptopL:text-lg tablet:text-xl mobilexs:text-lg font-medium">
              You can find your purchase details
              <Link
                className="text-[#0000FF] mobilexs:text-lg ml-2 4k:text-2xl desktop:text-xl"
                to={`/account/orders`}
              >
                here
              </Link>
            </h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default CheckoutModal;
