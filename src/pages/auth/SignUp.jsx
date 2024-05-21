import React, { useState } from "react";
import logo from "../../assets/images/logo-devlinks-large.svg";
import SignUpInput from "../../components/auth/SignUpInput";

const SignUp = () => {
  return (
    <div className="md:flex md:justify-center md:flex-col md:items-center h-screen rounded-[12px]">
      <div className="hidden md:block mt-[32px] ml-[32px]">
        <img src={logo} alt="DevLinks Logo" />
      </div>
      <main className="bg-[#fff] md:w-[476px] md:mt-[51px] md:h-[618px] p-[1px] h-screen">
        <div className="md:hidden mt-[32px] ml-[32px]">
          <img src={logo} alt="DevLinks Logo" />
        </div>
        <div className="mt-[64px] md:mt-[40px] ml-[32px] mr-[32px]">
          <div className="flex justify-center gap-[8px] flex-col">
            <h2 className="font-bold text-[24px] md:text-[32px]">Create account</h2>
            <p className="text-[16px] font-regular text-[#737373]">
              Let’s get you started sharing your links!
            </p>
          </div>
          <SignUpInput />
        </div>
      </main>
    </div>
  );
};

export default SignUp;
