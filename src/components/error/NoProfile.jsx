import React from "react";
import stop from "../../assets/images/stop.png";
import { useNavigate } from "react-router-dom";

const NoProfile = () => {
  const navigate = useNavigate();

  const backHome = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <figure>
        <img src={stop} alt="no signal" className=" " />
      </figure>
      <h1 className="text-2xl font-bold mt-4">Profile does not exist</h1>
      <button
        onClick={backHome}
        className="bg-[#633CFF] text-white cursor-pointer   text-[16px] rounded-full px-7 py-3 font-bold mt-4"
      >
        Go back home
      </button>
    </div>
  );
};

export default NoProfile;
