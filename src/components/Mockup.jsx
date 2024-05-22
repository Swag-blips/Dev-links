import React from "react";
import phoneMockup from "../assets/images/illustration-half-mockup.svg";
import { useLocation } from "react-router-dom";

const Mockup = () => {
  const location = useLocation();

  const isUpdateProfile = location.pathname === "/updateProfile";

  return (
    <div
      className={`bg-white rounded-[12px] ${
        isUpdateProfile ? "h-auto" : "min-h-[100%]"
      } mb-[20px] mt-[16px] overflow-hidden ml-[16px] `}
    >
      <div className="flex items-center justify-center my-[100px]">
        <img src={phoneMockup} alt="phone-mockup" />
      </div>
    </div>
  );
};

export default Mockup;
