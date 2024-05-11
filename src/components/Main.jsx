import React from "react";
import emptyIllustration from "../assets/images/illustration-empty.svg";

const Main = () => {
  return (
    <main className="w-full p-[1px]">
      <section className="bg-white mx-[16px] my-[16px] rounded-[12px] h-auto">
        <div className="flex flex-col pt-[24px] mx-[24px] p-[1px]">
          <h2 className="font-bold text-[24px] text-[#333333]">
            Customize your links
          </h2>
          <p className="text-[#737373] text-[16px] mt-[8px]">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
        </div>
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col pt-[40px] mx-[24px] p-[1px]">
            <button className="border border-[#633CFF] text-[#633CFF] rounded-[8px] px-7 py-3">
              + Add a new link
            </button>
          </div>
          <div className="mx-[24px] flex flex-col rounded-[12px] bg-[#FAFAFA] h-auto">
            <div className="flex flex-col items-center my-[46px] mx-[24px] gap-[24px]">
              <img
                src={emptyIllustration}
                alt="mobile img"
                className="w-[124px] h-[80px]"
              />
              <h2 className="text-center font-bold text-[24px] text-[#333333]">
                Let's get you started
              </h2>

              <p className="text-[#737373] text-[16px] text-center">
                Use the “Add new link” button to get started. Once you have more
                than one link, you can reorder and edit them. We’re here to help
                you share your profiles with everyone!
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-[#fafafa] pb-[10px]">
          <div className="mx-[16px] my-[16px]">
            <button className="px-7 py-3 bg-[#D8CEFF] w-full text-white font-bold text-[12px]">
              Save
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
