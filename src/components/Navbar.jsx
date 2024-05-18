import React, { useState } from "react";
import logo from "../assets/images/logo-devlinks-small.svg";
import link from "../assets/images/link-bold.svg";
import user from "../assets/images/icon-user.svg";
import eye from "../assets/images/icon-eye.svg";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuth from "../../firebase/AuthContext";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const isActiveLink = location.pathname === "/";
  const isActiveUser = location.pathname === "/updateProfile";

  const navigateProfile = () => {
    navigate(`/profile/${currentUser.uid}`);
  };

  return (
    <nav className="bg-white w-full h-[74px] p-[1px]">
      <div className="flex items-center justify-between ml-[24px] mr-[16px] my-[16px]">
        <figure>
          <img src={logo} className="" alt="devlinks logo" />
        </figure>
        <div className="flex items-center ">
          <Link to="/">
            <figure
              className={` px-7 py-3 ${
                isActiveLink ? "bg-[#EFEBFF] rounded-[8px]" : ""
              }`}
            >
              <img src={link} alt="dev link" />
            </figure>
          </Link>
          <Link to="/updateProfile">
            <figure
              className={`px-7 py-3 ${
                isActiveUser ? "bg-[#EFEBFF] rounded-[8px] " : ""
              }`}
            >
              <img src={user} alt="user" />
            </figure>
          </Link>
        </div>
        <figure className="border border-[#633CFF] px-4 py-3 rounded-[8px]">
          <img onClick={navigateProfile} src={eye} className="" />
        </figure>
      </div>
    </nav>
  );
};

export default Navbar;
