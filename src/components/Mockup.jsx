import React from "react";
import phoneMockup from "../assets/images/half-mockup.svg";
import { useLocation } from "react-router-dom";

const Mockup = () => {
  const location = useLocation();

  const isUpdateProfile = location.pathname === "/updateProfile";

  return (
    <section
      className={`bg-white rounded-[12px]  ${
        isUpdateProfile ? "pb-[24px]" : "pb-[39px]"
      }
mb-[20px] mt-[16px] overflow-hidden ml-[16px] relative flex items-center justify-center`}
    >
      <div className="relative mt-[100px]">
        <img src={phoneMockup} alt="phone-mockup" />
        <div className="absolute inset-0 flex flex-col items-center mt-[70px]">
          <div className="flex flex-col items-center gap-[24px]">
            <div className="w-[96px] h-[96px] rounded-full bg-[#EEEEEE]" />
            <div className="bg-[#EEEEEE] w-[160px] h-[16px] rounded-[104px]" />
          </div>
          <div className="bg-[#EEEEEE] w-[72px] mt-[13px] h-[16px] rounded-[104px]" />

          <div className="flex flex-col items-center gap-[20px] mt-[56px]">
            <div className="bg-[#EEEEEE] w-[237px] h-[44px] rounded-[8px]" />
            <div className="bg-[#EEEEEE] w-[237px] h-[44px] rounded-[8px]" />
            <div className="bg-[#EEEEEE] w-[237px] h-[44px] rounded-[8px]" />
            <div className="bg-[#EEEEEE] w-[237px] h-[44px] rounded-[8px]" />
            <div className="bg-[#EEEEEE] w-[237px] h-[44px] rounded-[8px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mockup;
