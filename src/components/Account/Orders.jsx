import React, { useState, useContext, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import axios from "axios";
function Wishlist() {
  const [data, setData] = useState([]);

  const usercontext = useContext(UserContext);

  useEffect(() => {
    axios
      .post(
        "https://clothingstorebackend-production.up.railway.app/purchase_list",
        {
          userid: usercontext.userid,
        }
      )
      .then((response) => {
        setData(response.data);
      });
  }, []);

  


  return (
    <div>
      <div className="h-auto bg-white w-full flex mb-20 mt-10 justify-start flex-col">
        <div className="flex flex-col items-center  justify-start">
          <AiOutlineHeart size={30} />
          <h3 className="font-bold text-lg"> Order Details </h3>
        </div>
        <div className="flex justify-center mt-20 items-center tablet">
          <div className="mobilexs:mx-2 laptop:mx-6 tablet:mx-4 flex flex-col items-center">
            <h1 className="4k:text-2xl">Order ID</h1>
            {data?.map((item) => (
              <Link to={`${item.id}`}>
                <p className="cursor-pointer my-1 4k:text-xl">{item.id}</p>
              </Link>
            ))}
          </div>
          <div className="mobilexs:mx-2 laptop:mx-6 tablet:mx-4 flex flex-col items-center">
            <h1 className="4k:text-2xl">Customer</h1>
            {data?.map((item) => (
              <p className="cursor-pointer my-1 4k:text-xl">{item.username}</p>
            ))}
          </div>
          <div className="mobilexs:mx-2 laptop:mx-6 tablet:mx-4 flex flex-col items-center">
            <h1 className="4k:text-2xl">Purchase Date</h1>
            {data?.map((item) => (
              <p className="cursor-pointer my-1 4k:text-xl">
                {item.purchase_date.split("T")[0]}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
