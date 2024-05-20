import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileNav = () => {
  const navigate = useNavigate();
  const backToEditor = () => {
    navigate("/");
  };
  return (
    <div className="md:w-full  md:bg-[#633CFF] md:h-[357px] p-[1px] md:rounded-b-[20px]">
      <nav className="flex bg-white md:mt-[40px] items-center gap-[16px] justify-between my-[16px]  md:h-[78px] md:rounded-[12px] md:px-[24px] ml-[24px] mr-[16px]">
        <button
          onClick={backToEditor}
          className="border-[2px] border-[#633CFF] rounded-[8px] px-6 py-3 text-[#633CFF] text-[16px] font-bold"
        >
          Back to Editor
        </button>
        <button className="bg-[#633CFF] text-white text-[16px] rounded-[8px] px-7 py-3 font-bold">
          Share Link
        </button>
      </nav>
    </div>
  );
};

export default ProfileNav;
