import React, { useContext } from "react";
import { UserContext } from "../../App";
import { VscAccount } from "react-icons/vsc";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function AccountInformation() {
  const usercontext = useContext(UserContext);
  console.log(usercontext.isLoggedIn);

  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .get("https://clothingstorebackend-production.up.railway.app/logout")
      .then((response) => {
        usercontext.setIsLoggedIn(false);
        navigate("/login");
        window.location.reload();
      });
  };

  console.log(usercontext.userid);

  return (
    <div className="pb-32">
      <div className="flex justify-center desktop:h-40 laptopL:h-32">
        <div className="w-full mt-10 flex flex-col items-center capitalize">
          <div>
            <VscAccount
              className="4k:w-[45px] 4k:h-[45px] desktop:w-[35px] desktop:h-[35px]
                  laptopL:w-[30px] laptopL:h-[30px] laptop:w-[30px] laptop:h-[30px]
                   tablet:w-[25px] tablet:h-[25px] mobileL:w-[30px] mobileL:h-[30px] mobilem:w-[30px] mobilem:h-[30px] mobilexs:w-[30px] mobilexs:h-[30px]"
            />
          </div>
          <h1 className="4k:text-2xl laptopL:text-xl laptop:text-lg tablet:text-lg mx-2 my-2 font-bold">
            {" "}
            My Account
          </h1>
          <h1 className="4k:text-xl laptop:text-lg tablet:text-lg mobileL:text-base mx-2 my-2">
            Welcome {usercontext.user}{" "}
          </h1>
        </div>
      </div>
      <div
        className="flex desktop:w-[60%] laptopL:w-[60%] laptop:w-[40%] mobilexs:w-[100%] tablet:w-[80%] flex-col-2 pb-6 h-[35vh] mb-6
              justify-start laptop:justify-center"
      >
        <div className="flex h-auto flex-col items-start mb-4">
          <ul
            className="ml-4 4k:text-3xl laptopL:text-xl
                         laptop:text-lg tablet:text-lg mobileL:text-lg mobilexs:text-lg font-medium"
          >
            <li className="my-6  font-bold"> Account Info </li>
            <Link to="wishlist">
              <li className="my-6 botbordercustom"> My Wishlist </li>
            </Link>
            <Link to="orders">
              <li className="my-6 botbordercustom"> My Orders </li>
            </Link>
            <li onClick={handleLogout} className="my-6 botbordercustom">
              {" "}
              Sign Out{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AccountInformation;
