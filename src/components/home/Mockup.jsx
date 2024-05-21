import React from "react";
import phoneMockup from "../../assets/images/illustration-phone-mockup.svg";

const Mockup = () => {
  return (
    <div className="bg-white rounded-[12px] p-[1px]  ml-[24px] ">
      <div className="flex items-center justify-center my-[100px]">
        <img src={phoneMockup} alt="phone-mockup" />
      </div>
    </div>
  );
};

export default Mockup;
