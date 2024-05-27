import React from "react";
import noSignal from "../../assets/images/no-signal.png";

const Offline = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <figure>
        <img src={noSignal} alt="no signal" />
      </figure>
      <h1 className="text-2xl font-bold text-red-600">You are offline</h1>
      <p className="text-lg text-gray-700">
        Please check your internet connection.
      </p>
    </div>
  );
};

export default Offline;
