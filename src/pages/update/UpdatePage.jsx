import React from "react";
import UpdateProfile from "./UpdateProfile";
import Mockup from "../../components/Mockup";
import Navbar from "../../components/Navbar";

const UpdatePage = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow xl:flex-row">
        <section className="xl:w-[38.89%] h-auto hidden xl:block">
          <Mockup />
        </section>
        <section className="xl:w-[61.11%] flex-grow">
          <UpdateProfile />
        </section>
      </div>
    </div>
  );
};

export default UpdatePage;
