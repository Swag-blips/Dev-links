import React, { useState, useEffect } from "react";
import EmptyLinks from "./home/EmptyLinks";
import SelectLink from "./home/SelectLink";
import { doc, setDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/config.jsx";
import iconLink from "../assets/images/icon-link.svg";
import useAuth from "../../firebase/AuthContext.jsx";
import { toast } from "react-hot-toast";
import { FetchLinks } from "../../utils/FetchLinks.jsx";

const Main = () => {
  const [links, setLinks] = useState([]);

  const addNewLink = () => {
    setLinks([...links, {}]);
  };

  const removeLink = (index) => {
    setLinks(links.filter((_, i) => i !== index));
  };

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
            <button
              onClick={addNewLink}
              className="border border-[#633CFF] text-[#633CFF] rounded-[8px] px-7 py-3"
            >
              + Add a new link
            </button>
          </div>
          {links.map((link, index) => (
            <div
              key={index}
              className="mx-[24px] rounded-[12px]   bg-[#FAFAFA] h-auto"
            >
              <SelectLink index={index} removeLink={removeLink} />
            </div>
          ))}
        </div>
        <div className="border-t-[3px] border-[#fafafa] mt-[10px] pb-[10px]">
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
