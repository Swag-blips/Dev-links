import React from "react";
import emptyIllustration from "../../assets/images/illustration-empty.svg";

const EmptyLinks = () => {
  return (
    <div className="flex flex-col items-center  mb-[60px] mx-[24px] gap-[24px] md:gap-0">
      <img
        src={emptyIllustration}
        alt="mobile img"
        className="w-[124px] h-[80px] md:w-[249px] md:h-[160px]"
      />
      <h2 className="text-center font-bold md:text-[32px] md:mt-[40px] text-[24px] text-[#333333]">
        Let's get you started
      </h2>

      <p className="text-[#737373] text-[16px] md:hidden text-center w-auto md:mt-[24px]">
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We’re here to help you share
        your profiles with everyone!
      </p>
      <p className="text-[#737373] hidden md:flex text-[16px] text-center w-auto md:mt-[24px]">
        Use the “Add new link” button to get started. Once you have more <br /> than
        one link, you can reorder and edit them. We’re here to help <br /> you share
        your profiles with everyone!
      </p>
    </div>
  );
};

export default EmptyLinks;
