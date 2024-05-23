import React from "react";
import Navbar from "../../components/Navbar";
import Main from "../../components/Main";
import Mockup from "../../components/Mockup";

const HomePage = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow xl:flex-row">
        <section className="xl:w-[38.89%] min-h-[100%] hidden xl:block">
          <Mockup />
        </section>
        <section className="xl:w-[61.11%] flex-grow flex flex-col">
          <Main />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
