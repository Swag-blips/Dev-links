import React, { useState, useEffect } from "react";
import EmptyLinks from "./home/EmptyLinks";
import SelectLink from "./home/SelectLink";
import {
  doc,
  setDoc,
  collection,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase/config.jsx";
import useAuth from "../../firebase/AuthContext.jsx";
import { toast } from "react-hot-toast";
import validateUrl from "../../utils/Validation.jsx";
import { v4 as uuidv4 } from "uuid";

const Main = () => {
  const [links, setLinks] = useState([]);
  const { currentUser } = useAuth();

  const addNewLink = () => {
    setLinks([
      ...links,
      { id: uuidv4(), platform: "Github", url: "", error: "" },
    ]);
  };

  const removeLink = async (index) => {
    const linkToRemove = links[index];
    const updatedLinks = links.filter((_, i) => i !== index);
    setLinks(updatedLinks);

    if (linkToRemove.saved) {
      try {
        const profileDocRef = doc(db, "Profile", currentUser.uid);
        const profileLinksCollectionRef = collection(
          profileDocRef,
          "ProfileLinks"
        );
        const linkDocRef = doc(
          profileLinksCollectionRef,
          linkToRemove.platform
        );

        await deleteDoc(linkDocRef);
        toast.success("Link deleted successfully!");
      } catch (err) {
        toast.error("Error deleting link.");
      }
    }
  };

  const fetchProfileLinks = async () => {
    try {
      const profileDocRef = doc(db, "Profile", currentUser.uid);
      const profileLinksCollectionRef = collection(
        profileDocRef,
        "ProfileLinks"
      );
      const snapshot = await getDocs(profileLinksCollectionRef);

      const fetchedLinks = snapshot.docs.map((doc) => ({
        id: doc.id,
        platform: doc.id,
        url: doc.data().url,
        error: "",
        saved: true,
      }));

      setLinks(fetchedLinks);
    } catch (err) {
      toast.error("Error fetching links.");
    }
  };

  useEffect(() => {
    if (currentUser) {
      fetchProfileLinks();
    }
  }, [currentUser]);

  const updateLink = (index, newLinkData) => {
    const updatedLinks = links.map((link, i) =>
      i === index ? { ...link, ...newLinkData } : link
    );
    setLinks(updatedLinks);
  };

  const handleSave = async () => {
    const validatedLinks = links.map((link) => {
      const { isValid, message } = validateUrl(link.platform, link.url);
      return {
        ...link,
        error: isValid ? "" : message,
      };
    });
    setLinks(validatedLinks);

    const allValid = validatedLinks.every((link) => link.error === "");
    if (allValid) {
      try {
        const profileDocRef = doc(db, "Profile", currentUser.uid);
        const profileLinksCollectionRef = collection(
          profileDocRef,
          "ProfileLinks"
        );

        await toast.promise(
          Promise.all(
            validatedLinks.map(async (link) => {
              if (link.platform && link.url) {
                const linkDocRef = doc(
                  profileLinksCollectionRef,
                  link.platform
                );
                await setDoc(
                  linkDocRef,
                  { url: link.url, platform: link.platform },
                  { merge: true }
                );
                link.saved = true;
              }
            })
          ),
          {
            loading: "Adding links...",
            success: "Links added successfully!",
            error: (err) => `${err}`,
          }
        );
      } catch (err) {
        toast.error("Error saving links.");
      }
    }
  };

  return (
    <main className="w-full  h-full flex flex-col p-[1px]">
      <section className="bg-white flex-grow mx-[16px] my-[16px] rounded-[12px] flex flex-col justify-between overflow-y-auto">
        <div className="flex flex-col h-full">
          <div className="flex flex-col pt-[24px] mx-[24px] p-[1px]">
            <h2 className="font-bold text-[24px] md:text-[32px] text-[#333333]">
              Customize your links
            </h2>
            <p className="text-[#3e2f2f] text-[16px] mt-[8px]">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>
          </div>
          <div className="flex flex-col flex-grow">
            <div className="flex flex-col pt-[40px] mx-[24px] p-[1px]">
              <button
                onClick={addNewLink}
                className="border border-[#633CFF] hover:bg-[#EFEBFF] text-[16px] text-[#633CFF] rounded-[8px] px-7 py-3"
              >
                + Add a new link
              </button>
            </div>
            <div className="xl:flex-grow xl:overflow-y-auto xl:max-h-[400px]">
              {links.length > 0 &&
                links.map((link, index) => (
                  <div
                    key={link.id}
                    className="mx-[24px] rounded-[12px] bg-[#FAFAFA]"
                  >
                    <SelectLink
                      index={index}
                      link={link}
                      updateLink={updateLink}
                      removeLink={removeLink}
                    />
                  </div>
                ))}
            </div>
            {links.length === 0 && (
              <div
                key="default"
                className="mx-[24px] mt-[24px] pt-[46px] md:pt-[80px] rounded-[12px] bg-[#FAFAFA] h-auto"
              >
                <EmptyLinks />
              </div>
            )}
          </div>
        </div>
        <div className="border-t-[3px] sticky bottom-0 bg-white border-[#fafafa] mt-[10px] pb-[10px] flex justify-end">
          <div className="mx-[16px] my-[16px] w-full md:w-auto">
            <button
              onClick={handleSave}
              disabled={links.length === 0}
              className={`px-7 py-3 rounded-[8px] md:w-[91px] cursor-pointer w-full md:mr-[10px] text-white font-bold text-[12px] ${
                links.length === 0 ? "opacity-50 bg-[#633CFF]" : "bg-[#633CFF]"
              }`}
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
