import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function SignUp() {
  const initialvalues = { username: "", password: "", email: "" };
  const [formvalues, setFormValues] = useState(initialvalues);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [duplicateuser, setDuplicateuser] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formvalues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formvalues));
    setIsSubmit(true);
    handleRegister();
    setFormValues(initialvalues);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be longer than 4 characters";
    } else if (values.password.length > 12) {
      errors.password = "Password cannot be longer than 12 characters";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Not a valid email format";
    }
    return errors;
  };

  const handleRegister = () => {
    if (
      formvalues.username.length &&
      formvalues.password.length &&
      formvalues.email.length > 1
    ) {
      axios
        .post(
          "https://clothingstorebackend-production.up.railway.app/userdata",
          {
            username: formvalues.username,
            password: formvalues.password,
            email: formvalues.email,
          }
        )
        .then((response) => {
          console.log(response);
          console.log(response.data.errno); // 1062
          if (response.data.errno == 1062) {
            setDuplicateuser("Username/Email already exists");
          } else {
            setDuplicateuser("");
          }
        });
    }
  };

  return (
    <div>
      <div className="h-[80vh] flex justify-center">
        <div className="flex flex-col mt-12 items-center text-center h-24">
          <div className="mt-12 flex justify-center w-[400px] h-auto mb-4">
            <h3 className="text-3xl font-bold"> Create Account</h3>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-start text-black 4k:w-[600px] laptopL:w-[400px] mobilem:w-[340px] mobilexs:w-[285px] h-auto"
          >
            <label className="flex items-start font-bold laptopL:text-xl mt-1">
              Username
            </label>
            <input
              onChange={handleChange}
              name="username"
              value={formvalues.username}
              placeholder="Username"
              className="pl-2 inpborder mt-2 h-14 desktop:text-2xl laptopL:text-xl"
            />
            <p className="text-red-500 text-start mt-1">{formError.username}</p>

            <label className="flex items-start font-bold laptopL:text-xl  mt-1">
              Password
            </label>
            <input
              onChange={handleChange}
              name="password"
              value={formvalues.password}
              type="password"
              autoComplete="off"
              placeholder="Password"
              className="inpborder mt-2 h-14 pl-2 desktop:text-2xl laptopL:text-xl"
            />
            <p className="text-red-500 text-start mt-1">{formError.password}</p>

            <label className="flex items-start font-bold laptopL:text-xl mt-1">
              Email
            </label>
            <input
              onChange={handleChange}
              name="email"
              value={formvalues.email}
              placeholder="Email"
              className="pl-2 inpborder mt-2 h-14 desktop:text-2xl laptopL:text-xl"
            />
            <p className="text-red-500 text-start mt-1">{formError.email}</p>

            <button className="mt-2 desktop:text-2xl laptopL:text-xl font-bold px-12 py-2 bg-black text-white ease-in duration-300">
              CREATE
            </button>
            <div className="flex justify-center items-center mt-3 text-center">
              <Link to="/login">
                <p className="w-auto border-b-2 border-black desktop:text-2xl laptopL:text-xl ">
                  Back to Login
                </p>
              </Link>
            </div>
            <h1 className="text-red-500 text-base mt-2">{duplicateuser}</h1>
            {Object.keys(formError).length === 0 &&
            isSubmit &&
            duplicateuser.length == 0 ? (
              <div className="text-green-500 mt-2">Signed up successfully</div>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
