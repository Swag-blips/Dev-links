import React from "react";
import logo from "../assets/images/logo-devlinks-small.svg";
import link from "../assets/images/link-bold.svg";
import user from "../assets/images/icon-user.svg";
import eye from "../assets/images/icon-eye.svg";

const Navbar = () => {
  return (
    <nav className="bg-white w-full h-[74px] p-[1px]">
      <div className="flex items-center justify-between ml-[24px] mr-[16px] my-[16px]">
        <div>
          <img src={logo} className="" alt="devlinks logo" />
        </div>
        <div className="flex items-center ">
          <div className="bg-[#EFEBFF] rounded-[8px] px-7 py-3">
            <img src={link} alt="dev link" />
          </div>
          <div className="px-7 py-3">
            <img src={user} alt="user" />
          </div>
        </div>
        <div className="border border-[#633CFF] px-4 py-3 rounded-[8px]">
          <img src={eye} className="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
