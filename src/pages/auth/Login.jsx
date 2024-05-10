import React, { useState } from "react";
import logo from "../../assets/images/logo-devlinks-large.svg";
import emailIcon from "../../assets/images/icon-email.svg";
import passwordIcon from "../../assets/images/icon-password.svg";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { login } from "../../../helpers/Auth";
import { getErrorMessage } from "../../../utils/ErrorHandler";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateForm = () => {
    let isValid = true;
    const newError = { email: "", password: "" };

    if (!email) {
      newError.email = "Can't be empty";
      isValid = false;
    }
    if (!password) {
      newError.password = "Please check again";
      isValid = false;
    }

    setErrors(newError);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        toast.promise(login(email, password), {
          loading: "logging in",
          success: () => {
            setEmail("");
            setPassword("");
            return "login successful";
          },
          error: (err) => getErrorMessage(err),
        });
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  const labelStyle = (fieldName) => {
    return `text-[12px] ${
      errors[fieldName] ? "text-[#FF3939]" : "text-[#333333]"
    } `;
  };

  const inputStyle = (fieldName) => {
    return `border ${
      errors[fieldName] ? "border-[#FF3939]" : "border-[#D9D9D9]"
    } px-4 outline-none py-3 rounded-[8px] pl-[40px] pr-[100px] w-full focus-within:border-[#633CFF] focus:border-[1px] focus:shadow-[0_0_8px_2px_rgba(99,60,255,0.6)]`;
  };

  const handleInputChange = (fieldName, value) => {
    if (fieldName === "email") setEmail(value);
    else if (fieldName === "password") setPassword(value);

    setErrors({ ...errors, [fieldName]: "" });
  };

  return (
    <div className="md:flex md:justify-center md:flex-col md:items-center h-screen rounded-[12px]">
      <div className="hidden md:block mt-[32px] ml-[32px]">
        <img src={logo} alt="DevLinks Logo" />
      </div>
      <main className="bg-[#fff] md:w-[476px] md:mt-[51px] md:h-[573px] p-[1px] h-screen">
        <div className="md:hidden mt-[32px] ml-[32px]">
          <img src={logo} alt="DevLinks Logo" />
        </div>
        <div className="mt-[64px] md:mt-[40px] ml-[32px] mr-[32px]">
          <div className="flex justify-center gap-[8px] flex-col">
            <h2 className="font-bold text-[24px]">Login</h2>
            <p className="text-[16px] font-regular text-[#737373]">
              Add your details below to get back into the app
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mt-[40px] flex flex-col justify-center gap-[24px]"
          >
            <div className="flex justify-center flex-col gap-[4px] text-[#333333]">
              <label htmlFor="email" className={labelStyle("email")}>
                Email address
              </label>
              <div className="relative">
                <img
                  src={emailIcon}
                  alt="Email Icon"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="e.g. alex@email.com"
                  className={inputStyle("email")}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
                {errors.email && (
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#FF3939] text-xs">
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div className="flex justify-center flex-col gap-[4px] text-[#333333]">
              <label htmlFor="password" className={labelStyle("password")}>
                Password
              </label>
              <div className="relative">
                <img
                  src={passwordIcon}
                  alt="Password Icon"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2"
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className={inputStyle("password")}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                />
                {errors.password && (
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#FF3939] text-xs">
                    {errors.password}
                  </span>
                )}
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="bg-[#633CFF] hover:bg-[#BEADFF]  px-[27px] py-[11px] rounded-[8px] text-[12px] text-[#fff]"
            >
              Login
            </button>

            <div className="text-center md:flex md:items-center md:justify-center gap-[3px] ">
              <p className="text-[#737373]">Dont have an account?</p>
              <Link to="/signup">
                <p className="text-[#633CFF]">Create an account</p>
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
