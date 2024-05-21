import React from "react";
import phoneMockup from "../../assets/images/illustration-phone-mockup.svg";

const Mockup = () => {
  return (
    <div className="bg-white rounded-[12px] min-h-[100%] mb-[20px]  mt-[16px] overflow-hidden ml-[16px] ">
      <div className="flex items-center justify-center mt-[100px]">
        <img src={phoneMockup} alt="phone-mockup" />
      </div>
    </div>
  );
};

export default Mockup;
