import React from "react";
import logo from "../../assets/images/logo-devlinks-large.svg";
import emailIcon from "../../assets/images/icon-email.svg";
import passwordIcon from "../../assets/images/icon-password.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    // Step 1: Use a flex container to allow centering of the main element
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
          <form className="mt-[40px] flex flex-col justify-center gap-[24px]">
            <div className="flex justify-center flex-col gap-[4px] text-[#333333]">
              <label htmlFor="email" className="text-[12px]">
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
                  className="border border-[#D9D9D9] px-4 py-3 rounded-[8px] pl-[40px] w-full"
                />
              </div>
            </div>

            <div className="flex justify-center flex-col gap-[4px] text-[#333333]">
              <label htmlFor="password" className="text-[12px]">
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
                  className="border border-[#D9D9D9] px-4 py-3 rounded-[8px] pl-[40px] w-full"
                />
              </div>
            </div>

            <button className="bg-[#633CFF] hover:bg-[#BEADFF]  px-[27px] py-[11px] rounded-[8px] text-[12px] text-[#fff]">
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
