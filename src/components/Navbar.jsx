import React, { useState } from "react";
import logo from "../assets/images/logo-devlinks-small.svg";
import link from "../assets/images/link-bold.svg";
import user from "../assets/images/icon-user.svg";
import eye from "../assets/images/icon-eye.svg";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActiveLink = location.pathname === "/";
  const isActiveUser = location.pathname === "/updateProfile";

  return (
    <nav className="bg-white w-full h-[74px] p-[1px]">
      <div className="flex items-center justify-between ml-[24px] mr-[16px] my-[16px]">
        <div>
          <img src={logo} className="" alt="devlinks logo" />
        </div>
        <div className="flex items-center ">
          <Link to="/">
            <div
              className={` px-7 py-3 ${
                isActiveLink ? "bg-[#EFEBFF] rounded-[8px]" : ""
              }`}
            >
              <img src={link} alt="dev link" />
            </div>
          </Link>
          <Link to="/updateProfile">
            <div
              className={`px-7 py-3 ${
                isActiveUser ? "bg-[#EFEBFF] rounded-[8px] " : ""
              }`}
            >
              <img src={user} alt="user" />
            </div>
          </Link>
        </div>
        <div className="border border-[#633CFF] px-4 py-3 rounded-[8px]">
          <img src={eye} className="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
