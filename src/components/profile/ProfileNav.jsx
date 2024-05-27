import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import copyLink from "../../assets/images/icon-link-copied-to-clipboard.svg";

const ProfileNav = () => {
  const navigate = useNavigate();
  const backToEditor = () => {
    navigate("/");
  };

  const copyToClipboard = (url) => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        toast(
          <div className="flex items-center">
            <img src={copyLink} alt="success" className="mr-[8px]" />
            <p className="text-[15px]">
              Link has been copied to your clipboard!
            </p>
          </div>,
          {
            duration: 4000,
            style: {
              background: "#333333",
              color: "#ffffff",
              width: "397px",
              height: "56px",
            },
            position: "bottom-center",
          }
        );
      })
      .catch((err) => {});
  };

  const currentUrl = window.location.href;
  return (
    <div className="md:w-full  md:bg-[#633CFF] md:h-[357px] p-[1px] md:rounded-b-[20px]">
      <nav className="flex bg-white md:mt-[40px] items-center gap-[16px] justify-between my-[16px]  md:h-[78px] md:rounded-[12px] md:px-[24px] ml-[24px] mr-[16px]">
        <button
          onClick={backToEditor}
          className="border-[2px] border-[#633CFF] cursor-pointer rounded-[8px] px-6 py-3 text-[#633CFF] text-[16px] font-bold"
        >
          Back to Editor
        </button>
        <button
          onClick={() => copyToClipboard(currentUrl)}
          className="bg-[#633CFF] text-white cursor-pointer   text-[16px] rounded-[8px] px-7 py-3 font-bold"
        >
          Share Link
        </button>
      </nav>
    </div>
  );
};

export default ProfileNav;
