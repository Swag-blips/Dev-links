import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileNav = () => {
  const navigate = useNavigate();
  const backToEditor = () => {
    navigate("/");
  };
  return (
    <nav className="flex items-center gap-[16px] justify-between my-[16px] ml-[24px] mr-[16px]">
      <button
        onClick={backToEditor}
        className="border-[2px] border-[#633CFF] rounded-[8px] px-7 py-3 text-[#633CFF] text-[16px] font-bold"
      >
        Back to Editor
      </button>
      <button className="bg-[#633CFF] text-white text-[16px] rounded-[8px] px-7 py-3.5 font-bold">
        Share Link
      </button>
    </nav>
  );
};

export default ProfileNav;
