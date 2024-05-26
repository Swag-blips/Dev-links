import React from "react";
import error from "../assets/images/404.png";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const backHome = () => {
    navigate("/");
  };
  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-center gap-10">
      <figure className="flex items-center justify-center">
        <img src={error} className="w-[300px]" alt="404 Error" />
      </figure>
      <div className="flex items-center justify-center flex-col text-center">
        <h1 className="md:text-4xl text-lg font-bold">404 - Page Not Found</h1>
        <button
          onClick={backHome}
          className="bg-[#633CFF] text-white cursor-pointer text-[16px] rounded-full px-6 py-3 font-bold mt-4"
        >
          Go back home
        </button>
      </div>
    </section>
  );
};

export default NotFound;
