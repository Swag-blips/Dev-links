import React from "react";
import logo from "../../assets/images/logo-devlinks-large.svg";
import emailIcon from "../../assets/images/icon-email.svg";
import passwordIcon from "../../assets/images/icon-password.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="bg-[#fff] h-screen p-[1px]">
      <div className="mt-[32px] ml-[32px]">
        <img src={logo} alt="DevLinks Logo" />
      </div>
      <div className="mt-[64px] ml-[32px] mr-[32px]">
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

          <button className="bg-[#633CFF] px-[27px] py-[11px] rounded-[8px] text-[12px] text-[#fff]">
            Login
          </button>

          <div className="text-center ">
            <p className="text-[#737373]">Dont have an account?</p>
            <Link to="/signup">
              <p className="text-[#633CFF]">Create an account</p>
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
