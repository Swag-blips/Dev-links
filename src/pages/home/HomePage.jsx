import React from "react";
import Navbar from "../../components/Navbar";
import Main from "../../components/Main";
import Mockup from "../../components/home/Mockup";

const HomePage = () => {
  return (
    <div classname="min-h-screen">
      <Navbar />
      <div className="xl:flex  xl:items-start ">
        <section className="xl:w-[38.89%] h-[100vh] hidden xl:block">
          <Mockup />
        </section>
        <section className="xl:w-full xl:min-h-screen ">
          <Main />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
