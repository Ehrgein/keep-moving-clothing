import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductMenus from "./ProductMenus";
import { ProductsContext } from "../../App";

function AllProducts() {
  let { productscategory } = useParams();

  const productscontext = useContext(ProductsContext);
  const [sortedItems, setSortedItems] = useState();

  const sortedItemsSelect = (e) => {
    const value = e.target.value;

    if (value === "ascending") {
      const ascendingOrder = [...productscontext]
        .filter((item) => item.categories === productscategory)
        .sort((a, b) => a.price - b.price);
      setSortedItems(ascendingOrder);
    }
    if (value === "descending") {
      const descendingOrder = [...productscontext]
        .filter((item) => item.categories === productscategory)
        .sort((a, b) => b.price - a.price);
      setSortedItems(descendingOrder);
    }
    if (value === "az") {
      const ascendingaz = [...productscontext]
        .filter((item) => item.categories === productscategory)
        .sort((a, b) => (a.name > b.name ? 1 : -1));
      setSortedItems(ascendingaz);
    }
    if (value === "za") {
      const descendingza = [...productscontext]
        .filter((item) => item.categories === productscategory)
        .sort((a, b) => (a.name > b.name ? -1 : 1));
      setSortedItems(descendingza);
    }
  };

  return (
    <div>
      <div className="hidden laptop:flex text-4xl justify-center flex-col">
        <div className="flex justify-center capitalize text-4xl font-bold mt-12">
          {productscategory}
        </div>
        <div className="flex justify-end mr-4">
          <select
            onChange={sortedItemsSelect}
            id="sortedproducts"
            className="mx-6 w-64 menuborder text-lg my-4 h-11 px-4"
          >
            <option value="ascending">Price low to high</option>
            <option value="descending">Price high to low</option>
            <option value="az">A to Z</option>
            <option value="za">Z to A</option>
          </select>
        </div>
      </div>
      <div className="hidden laptop:flex">
        <div className="flex flex-wrap justify-center  desktop:pl-16 desktop:my-10 laptopL:my-6 laptopL:mx-2 laptop:my-6 laptop:pl-2">
          {productscontext
            ? productscontext?.map((item) => (
                <div
                  key={item.id}
                  photo={item.prod_img}
                  name={item.name}
                  brand={item.brand}
                  price={item.price}
                  className="flex justify-center flex-col desktop:my-10 laptopL:my-8 laptopL:mx-2 laptop:my-8 tracking-wide
                 desktop:w-[370px] desktop:h-[370px] laptopL:w-[350px] laptopL:h-[350px]
                  items-center laptop:w-[250px] laptop:h-[250px] md:w-[220px] md:h-[220px]"
                >
                  <div className="flex flex-col">
                    <Link to={`${item.id}`}>
                      <img
                        className="desktop:h-[295px] desktop:w-[295px]
                      laptopL:w-[570px] laptopL:h-[570px] laptop:w-[185px] laptop:h-[185px] md:w-[130px] md:h-[130px]"
                        src={item.prod_img}
                      />
                    </Link>
                  </div>
                  <ul className="desktop:mt-9 laptopL:mt-2 laptop:text-xs laptopL:text-xs text-center">
                    <li className="font-bold text-sm  uppercase mt-1">
                      {item.name}
                    </li>
                    <li className="text-center text-sm  uppercase mt-1">
                      {" "}
                      {item.brand}
                    </li>
                    <li className="text-base uppercase text-center mt-1">
                      {" "}
                      ${item.price}
                    </li>
                  </ul>
                </div>
              ))
            : sortedItems
                ?.filter((item) => item.categories === productscategory)
                .sort((a, b) => a.price - b.price)
                .map((item) => (
                  <div
                    key={item.id}
                    photo={item.prod_img}
                    name={item.name}
                    brand={item.brand}
                    price={item.price}
                    className="flex justify-center flex-col desktop:my-10 laptopL:my-8 laptopL:mx-2 laptop:my-8 tracking-wide
                   desktop:w-[370px] desktop:h-[370px] laptopL:w-[260px] laptopL:h-[260px] items-center laptop:w-[250px] laptop:h-[250px] md:w-[220px] md:h-[220px]"
                  >
                    <div className="flex flex-col">
                      <Link to={`${item.id}`}>
                        <img
                          className="desktop:h-[295px] desktop:w-[295px]
                        laptopL:w-[210px] laptopL:h-[210px] laptop:w-[185px] laptop:h-[185px] md:w-[130px] md:h-[130px]"
                          src={item.prod_img}
                        />
                      </Link>
                    </div>
                    <ul className="desktop:mt-9 laptopL:mt-2 laptop:text-xs laptopL:text-xs text-center">
                      <li className="font-bold text-sm  uppercase mt-1">
                        {item.name}
                      </li>
                      <li className="text-center text-sm  uppercase mt-1">
                        {" "}
                        {item.brand}
                      </li>
                      <li className="text-base uppercase text-center mt-1">
                        {" "}
                        ${item.price}
                      </li>
                    </ul>
                  </div>
                ))}
        </div>
      </div>

      {/*mobile starts here */}

      <div className="laptop:hidden flex text-4xl justify-center flex-col mb-20">
        <div className="flex justify-center capitalize text-3xl font-bold mt-12">
          {productscategory}
        </div>
        <div className="laptop:hidden flex justify-end text-sm px-1 h-20 mt-6 mb-8">
          <select
            onChange={sortedItemsSelect}
            id="mobilesortedproducts"
            className="mx-2 w-44 menuborder text-lg mt-10 h-11 px-2"
          >
            <option value="ascending">Price low to high</option>
            <option value="descending">Price high to low</option>
            <option value="az">A to Z</option>
            <option value="za">Z to A</option>
          </select>
        </div>
        <div className="flex flex-col justify-center columns-2">
          <div className="grid tablet:grid-cols-3 mobilexs:grid-cols-2 gap-4 place-content-center my-2 tablet:my-4">
            {sortedItems
              ? sortedItems.map((item) => (
                  <div
                    key={item.id}
                    className="mx-auto tablet:my-4 md:w-[250px] md:h-[250px]"
                  >
                    <div className="my-2">
                      <Link to={`/products/${item.categories}/${item.id}`}>
                        <img
                          className="md:w-[250px] md:h-[250px] mobilem:w-[190px] mobilem:h-[190px] mobilexs:w-[175px] mobilexs:h-[175px] mx-auto my-auto"
                          src={item.prod_img}
                        />
                      </Link>
                    </div>
                    <div className="text-sm capitalize text-center h-auto my-2">
                      <h1 className="font-bold">{item.name}</h1>
                      <p className="text-center text-sm capitalize mr-1 mt-1">
                        {" "}
                        {item.brand}
                      </p>
                      <p className="text-center text-sm font-medium mr-1 mt-1">
                        {" "}
                        $ {item.price}
                      </p>
                    </div>
                  </div>
                ))
              : productscontext
                  ?.filter((item) => item.categories === productscategory)
                  .sort((a, b) => a.price - b.price)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="mx-auto tablet:my-4 md:w-[250px] md:h-[250px]"
                    >
                      <div className="my-2">
                        <Link to={`/products/${item.categories}/${item.id}`}>
                          <img
                            className="md:w-[250px] md:h-[250px] mobilem:w-[190px] mobilem:h-[190px] mobilexs:w-[175px] mobilexs:h-[175px] mx-auto my-auto"
                            src={item.prod_img}
                          />
                        </Link>
                      </div>
                      <div className="text-sm capitalize text-center h-auto my-2">
                        <h1 className="font-bold">{item.name}</h1>
                        <p className="text-center text-sm capitalize mr-1 mt-1">
                          {" "}
                          {item.brand}
                        </p>
                        <p className="text-center text-sm font-medium mr-1 mt-1">
                          {" "}
                          $ {item.price}
                        </p>
                      </div>
                    </div>
                  ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
