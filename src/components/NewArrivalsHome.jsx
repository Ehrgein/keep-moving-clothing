import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../App";
import { motion } from "framer-motion";

function NewArrivalsHome() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  const productscontext = useContext(ProductsContext);

  useEffect(() => {
    setWidth(4200 - 900);
  }, []);

  return (
    <div>
      <div className="flex justify-center text-center mt-11">
        <p className="4k:text-4xl text-2xl px-4 py-2 capitalize">
          {" "}
          New Arrivals{" "}
        </p>
      </div>
      <motion.div ref={carousel} className="carouselallitems">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel ml-6"
        >
          {productscontext?.slice(-13).map((item) => (
            <motion.div
              className="flex flex-col uppercase justify-center 4k:w-[400px] 4k:h-[400px] desktop:w-[370px] desktop:h-[380px]  laptopL:w-[330px] laptopL:h-[330px] laptop:w-[310px] laptop:h-[310px] md:w-[300px] md:h-[300px]
            4k:my-20 4k:mx-12 desktop:mx-18 desktop:mt-12 text-sm laptopL:mx-4 laptop:mx-3 tablet:mx-2 laptop:mt-8 md:mt-8 mb-4 items-center"
              key={item.id}
              categories={item.categories}
              itemname={item.name}
              itemprice={item.price}
              itemimg={item.prod_img}
            >
              <motion.div className="4k:w-[350px] 4k:h-[350px] desktop:w-[300px] desktop:h-[300px] laptopL:w-[250px] laptopL:h-[250px] laptop:w-[220px] laptop:h-[220px] md:w-[230px] md:h-[230px]">
                <Link to={`/products/${item.categories}/${item.id}`}>
                  <img
                    alt={`${item.name} ${item.brand} $${item.price}`}
                    className="grabimg"
                    onMouseDown={(e) => e.preventDefault()}
                    src={item.prod_img}
                  />
                </Link>
              </motion.div>
              <div className="4k:mt-4 desktop:mt-4 laptopL:mt-4 tablet:mt-2 ">
                <p className="font-bold text-center 4k:text-lg desktop:text-base">
                  {" "}
                  {item.name}
                </p>
                <Link>
                  <p className="text-center 4k:text-lg text-sm mt-2">
                    {" "}
                    {item.brand}{" "}
                  </p>
                </Link>
                <p className="text-base mt-1 font-semibold text-center 4k:text-lg desktop:text-base">
                  {" "}
                  $ {item.price}{" "}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <div className="flex justify-center my-12">
        <Link
          className="text-white font-bold text-xl px-7 py-2 bg-black"
          to={`/newarrivals`}
        >
          VIEW ALL
        </Link>
      </div>

      <div></div>
    </div>
  );
}

export default NewArrivalsHome;
