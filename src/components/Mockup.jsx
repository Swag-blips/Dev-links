import React from "react";
import phoneMockup from "../assets/images/half-mockup.svg";
import { useLocation } from "react-router-dom";

const Mockup = () => {
  const location = useLocation();

  const isUpdateProfile = location.pathname === "/updateProfile";

  return (
    <section
      className={`bg-white rounded-[12px] ${
        isUpdateProfile ? "h-auto" : "min-h-[100%]"
      } mb-[20px] mt-[16px] overflow-hidden ml-[16px]  `}
    >
      <div className="flex items-center justify-center  relative my-[100px]">
        <img src={phoneMockup} alt="phone-mockup" />
      </div>

      <div className=" skelteon-div flex flex-col items-center absolute mt-[130px] top-[11.0rem] left-[18.7rem]">
        <div className="flex flex-col items gap-[24px]">
          <div className="w-[96px] h-[96px] rounded-full bg-[#EEEEEE] ml-[30px]" />

          <div className="bg-[#EEEEEE] w-[160px] h-[16px] rounded-[104px]" />
        </div>
      </div>
    </section>
  );
};

export default Mockup;
