import React, { useState } from "react";
import EmptyLinks from "./home/EmptyLinks";
import SelectLink from "./home/SelectLink";
import { doc, setDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/config.jsx";
import useAuth from "../../firebase/AuthContext.jsx";
import { toast } from "react-hot-toast";

const Main = () => {
  const [link, setLink] = useState("");
  const [platform, setPlatform] = useState("");
  const [error, setError] = useState("");
  const { currentUser } = useAuth();
  const handleSave = async () => {
    try {
      if (!link || !platform) {
        setError("Link or platform must be provided");
        toast.error("Link or platfrom must be provided");
        console.error("link or platform must be provided");
        return;
      }

      const profileDocRef = doc(db, "Profile", currentUser.uid);
      const linksCollectionRef = collection(profileDocRef, "ProfileLinks");
      const newLinksDocRef = doc(linksCollectionRef);
      const data = {
        link,
        platform,
      };

      const docSubmitted = await toast.promise(setDoc(newLinksDocRef, data), {
        loading: "adding link",
        success: "Link added Successfully",
        error: (err) => console.error(err),
      });

      console.log("Link saved Successfully");
    } catch (error) {
      console.error(error);
      toast.error(error);
    }
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
            <button className="border border-[#633CFF] text-[#633CFF] rounded-[8px] px-7 py-3">
              + Add a new link
            </button>
          </div>
          <div className="mx-[24px] rounded-[12px]  bg-[#FAFAFA] h-auto">
            <SelectLink
              platform={platform}
              setPlatform={setPlatform}
              link={link}
              setLink={setLink}
              error={error}
              setError={error}
            />
          </div>
        </div>
        <div className="border-t-[3px] border-[#fafafa] mt-[10px] pb-[10px]">
          <div className="mx-[16px] my-[16px]">
            <button
              onClick={handleSave}
              className="px-7 py-3 bg-[#D8CEFF] w-full text-white font-bold text-[12px]"
            >
              Save
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
