import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BrandsContext } from "../App";

function BrandList() {
  const brands = useContext(BrandsContext);

  const onlybrands = brands?.map((item) => item.brand);

  const listedbrands = [];

  onlybrands?.forEach((brand) => {
    const firstletter = brand[0];

    if (listedbrands[firstletter]) {
      listedbrands[firstletter].push(brand);
    } else {
      listedbrands[firstletter] = [brand];
    }
  });

  return (
    <div className="mt-10 mb-10">
      <div className="flex justify-center mt-20 text-4xl font-bold pb-8">
        <h1> Brands</h1>
      </div>
      <div className="flex flex-col gap-2">
        {Object.entries(listedbrands)?.map(([key, val]) => (
          <div className="hidden md:flex items-start justify-center text-6xl capitalize mx-20 brandborder py-10">
            <div className="w-[40%] flex flex-col font-bold self-center">
              <span className="flex justify-center mx-2 w-[100%]"> {key} </span>
            </div>
            <div className="w-[50%] h-auto flex items-center justify-start ">
              <ul className="flex flex-wrap">
                {val.map((item) => (
                  <li className="mx-2  text-2xl mt-5 w-[400px]">
                    <Link to={`/collection/${item}`}> {item} </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      {Object.entries(listedbrands)?.map(([key, val]) => (
        <div className="md:hidden flex items-start justify-start text-6xl capitalize my-10 brandborder">
          <div className="w-[40%] flex flex-col font-bold self-center">
            <p className="flex justify-start w-[100%]"> {key} </p>
          </div>
          <div className="w-[50%] h-auto flex items-start justify-start">
            <ul className="flex flex-wrap">
              {val.map((item) => (
                <li className="mx-2 text-lg mt-5 w-[400px]">
                  <Link to={`/collection/${item}`}> {item} </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BrandList;
