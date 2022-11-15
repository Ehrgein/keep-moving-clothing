import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import { CartContext } from "../Cart/CartFunctionality";

function LoginForm() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usercontext = useContext(UserContext);
  const cartcontext = useContext(CartContext);

  const [loginMessage, setMessage] = useState("");

  const handleLogin = () => {
    axios
      .post("https://clothingstorebackend-production.up.railway.app/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response);
        if (response.data.message) {
          console.log(response);
          setMessage(response.data.message);
        } else {
          console.log(response);
          usercontext.setUser(response.data[0].username);
          usercontext.setIsLoggedIn(true);
          navigate("/account");
        }
      });
  };

  return (
    <div className="pb-48">
      <div className="flex flex-col justify-center items-center text-center h-auto mt-6 4k:mt-24">
        <div className="mt-12 flex justify-start laptopL:w-[400px] h-auto">
          <h3 className="laptopL:text-4xl mobilexs:text-2xl font-bold">
            {" "}
            Login
          </h3>
        </div>
        <form className="flex flex-col justify-start text-black laptopL:w-[400px] mobilem:w-[340px] mobilexs:w-[285px] h-auto">
          <input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            className="pl-2 inpborder mt-2 h-14"
          />
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="pl-2 inpborder mt-2 h-14"
          />
        </form>
        <div className="flex laptopL:w-[400px] mobilexs:w-[285px]  mobilem:w-[340px] justify-center bg-[#1f2021] px-2 py-2 text-white mt-4">
          <button
            onClick={handleLogin}
            className="laptopL:text-2xl mobilexs:text-lg uppercase font-sans tracking-wide"
          >
            {" "}
            Sign In{" "}
          </button>
        </div>
        <div className="flex justify-start font-bold text-lg h-12 laptopL:w-[400px] mobilem:w-[340px] mobilexs:w-[280px] mt-2">
          <h1> Forgot your password?</h1>
        </div>

        <div className="flex laptopL:w-[400px] mobilem:w-[340px] mobilexs:w-[285px] justify-start h-14 py-1 text-black mt-2 text-lg font-normal">
          <p className="pr-2"> No account ? </p>
          <Link onClick={() => cartcontext.closeCart()} to="/account/register">
            <button className="tracking-wide text-black border-black border-b-2">
              Register here
            </button>
          </Link>
        </div>
        <div className="flex w-[400px] justify-center h-14 px-1 py-1 mt-2 text-lg font-normal text-red-500">
          <p className="pr-2"> {loginMessage} </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
