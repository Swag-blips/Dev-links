import React from "react";
import emptyIllustration from "../../assets/images/illustration-empty.svg";

const EmptyLinks = () => {
  return (
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
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We’re here to help you share
        your profiles with everyone!
      </p>
    </div>
  );
};

export default EmptyLinks;
