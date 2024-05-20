import React, { useState } from "react";
import logo from "../assets/images/logo-devlinks-small.svg";
import logoMd from "../assets/images/logo-devlinks-large.svg";
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
    <nav className="bg-white w-full md:w-auto h-[74px] md:h-[78px] p-[1px] md:mx-[16px] md:my-[24px] md:rounded-[12px]">
      <div className="flex items-center justify-between ml-[24px] mr-[16px] my-[16px]">
        <figure>
          <img src={logo} className="md:hidden" alt="devlinks logo" />
          <img
            src={logoMd}
            className="hidden md:flex w-[146px] h-[32px]"
            alt="devlinks logo md"
          />
        </figure>
        <div className="flex items-center ">
          <Link to="/">
            <figure
              className={` px-7 py-3 flex items-center gap-[8px] ${
                isActiveLink ? "bg-[#EFEBFF] rounded-[8px]" : ""
              }`}
            >
              <img src={link} alt="dev link" />
              <p
                className={`hidden md:flex ${
                  isActiveLink ? "text-[#633CFF] font-semibold" : ""
                } `}
              >
                Links
              </p>
            </figure>
          </Link>
          <Link to="/updateProfile">
            <figure
              className={`px-7 py-3 flex items-center gap-[8px] ${
                isActiveUser ? "bg-[#EFEBFF] rounded-[8px] " : ""
              }`}
            >
              <img src={user} alt="user" />
              <p
                className={`hidden font- md:flex ${
                  isActiveUser ? "text-[#633CFF] font-semibold" : ""
                }`}
              >
                Profile Details
              </p>
            </figure>
          </Link>
        </div>
        <figure
          onClick={navigateProfile}
          className="border border-[#633CFF] px-4 py-3 rounded-[8px]"
        >
          <img src={eye} className="md:hidden" />
          <p className="hidden md:flex text-[16px] font-semibold text-[#633CFF]">
            Preview
          </p>
        </figure>
      </div>
    </nav>
  );
};

export default Navbar;
