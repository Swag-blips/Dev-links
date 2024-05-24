import React, { useState, useEffect } from "react";
import phoneMockup from "../assets/images/half-mockup.svg";
import { useLocation } from "react-router-dom";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import useAuth from "../../firebase/AuthContext";
import { InitialsMockup } from "../../helpers/InitialsMockup";
const Mockup = () => {
  const location = useLocation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const { currentUser } = useAuth();

  const isUpdateProfile = location.pathname === "/updateProfile";

  const fetchDetails = async () => {
    try {
      const docRef = doc(db, "Profile", currentUser.uid);
      const snapshot = await getDoc(docRef);

      if (snapshot.exists()) {
        const data = snapshot.data();
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setEmail(data.email);
        setProfileImg(data.profileImg);
      } else {
        setError("An error occurred while fetching data");
      }
    } catch (error) {
      console.log(error);
      setError("An error occurred while fetching data");
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <section
      className={`bg-white rounded-[12px] ${
        isUpdateProfile ? "pb-[24px]" : "pb-[69px]"
      } mb-[20px] mt-[16px] overflow-hidden ml-[16px] relative flex items-center justify-center`}
    >
      <div className="relative mt-[100px]">
        <img src={phoneMockup} alt="phone-mockup" />
        <div className="absolute inset-0 flex flex-col items-center mt-[70px]">
          <div className="flex flex-col items-center gap-[24px]">
            {profileImg ? (
              <img
                src={profileImg}
                alt="profile"
                className="w-[96px] h-[96px] rounded-full object-cover"
              />
            ) : (
              <div className="w-[96px] h-[96px] rounded-full bg-[#EEEEEE] flex items-center justify-center">
                <InitialsMockup firstName={firstName} lastName={lastName} />
              </div>
            )}
            {firstName ? (
              <div className="text-center">
                <h1 className="text-[24px] font-bold">{firstName}</h1>
              </div>
            ) : (
              <div className="bg-[#EEEEEE] w-[160px] h-[16px] rounded-[104px]" />
            )}
          </div>
          {email ? (
            <div className="mt-[13px] text-center">
              <p className="text-[#737373]">{email}</p>
            </div>
          ) : (
            <div className="bg-[#EEEEEE] email w-[72px] mt-[13px] h-[16px] rounded-[104px]" />
          )}
          <div className="flex flex-col items-center gap-[20px] mt-[40px]">
            <div className="bg-[#EEEEEE] w-[237px] h-[44px] rounded-[8px]" />
            <div className="bg-[#EEEEEE] w-[237px] h-[44px] rounded-[8px]" />
            <div className="bg-[#EEEEEE] w-[237px] h-[44px] rounded-[8px]" />
            <div className="bg-[#EEEEEE] w-[237px] h-[44px] rounded-[8px]" />
            <div className="bg-[#EEEEEE] w-[237px] h-[44px] rounded-[8px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mockup;
