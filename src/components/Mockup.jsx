import React, { useState, useEffect } from "react";
import phoneMockup from "../assets/images/half-mockup.svg";
import { useLocation } from "react-router-dom";
import { db } from "../../firebase/config";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import useAuth from "../../firebase/AuthContext";
import { InitialsMockup } from "../../helpers/InitialsMockup";
import arrowRight from "../assets/images/icon-arrow-right.svg";
import {
  Facebook,
  FrontendMentor,
  Github,
  LinkedIn,
  Twitch,
  Twitter,
  Youtube,
  Dev,
  Codepen,
  Codewars,
  FreeCodeCamp,
  Gitlab,
  Stack,
  Hashnode,
} from "../assets/icons";

const Mockup = () => {
  const location = useLocation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [linksData, setLinksData] = useState([]);
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

  const fetchLinks = async () => {
    const q = query(collection(db, `Profile/${currentUser.uid}/ProfileLinks`));
    const querySnapshot = await getDocs(q);

    const links = [];

    querySnapshot.forEach((doc) => {
      links.push({ id: doc.id, ...doc.data() });
    });

    setLinksData(links);
  };

  const renderLink = (link) => {
    let { platform, url } = link;
    let bgColor, IconComponent, label, border;

    switch (platform) {
      case "Github":
        bgColor = "bg-[#1A1A1A]";
        IconComponent = Github;
        label = "GitHub";
        break;
      case "Youtube":
        bgColor = "bg-[#EE3939]";
        IconComponent = Youtube;
        label = "Youtube";
        break;
      case "LinkedIn":
        bgColor = "bg-[#2D68FF]";
        IconComponent = LinkedIn;
        label = "LinkedIn";
        break;
      case "Twitch":
        bgColor = "bg-fuchsia-500";
        IconComponent = Twitch;
        label = "Twitch";
        break;
      case "Twitter":
        bgColor = "bg-[#43B7E9]";
        IconComponent = Twitter;
        label = "Twitter";
        break;
      case "Frontend mentor":
        bgColor = "bg-[#FFFFFF]";
        IconComponent = FrontendMentor;
        label = "Frontend mentor";
        border = "border-[#D9D9D9]";
        break;
      case "Dev.to":
        bgColor = "bg-[#333333]";
        IconComponent = Dev;
        label = "Dev.to";
        break;
      case "Facebook":
        bgColor = "bg-[#2442AC]";
        IconComponent = Facebook;
        label = "Facebook";
        break;
      case "Codepen":
        bgColor = "bg-[#8A1A50]";
        IconComponent = Codepen;
        label = "Codepen";
        break;
      case "Codewars":
        bgColor = "bg-[#8A1A50]";
        IconComponent = Codewars;
        label = "Codewars";
        break;
      case "freeCodeCamp":
        bgColor = "bg-[#302267]";
        IconComponent = FreeCodeCamp;
        label = "freeCodeCamp";
        break;
      case "Gitlab":
        bgColor = "bg-[#EB4925]";
        IconComponent = Gitlab;
        label = "Gitlab";
        break;
      case "Stack overflow":
        bgColor = "bg-[#EC7100]";
        IconComponent = Stack;
        label = "Stack overflow";
        break;
      case "Hashnode":
        bgColor = "bg-[#0330D1]";
        IconComponent = Hashnode;
        label = "Hashnode";
        break;

      default:
        return null;
    }
    return (
      <div
        key={link.id}
        className={`flex items-center justify-between px-[16px] z-20 space-x-2 w-[237px] h-[56px] rounded-[8px] ${bgColor}`}
      >
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          {IconComponent && (
            <IconComponent color="#ffffff" width="24" height="24" />
          )}
          <p className="text-[16px] text-white">{label}</p>
        </a>
        <img src={arrowRight} alt="arrow right" />
      </div>
    );
  };

  useEffect(() => {
    fetchDetails();
    fetchLinks();
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
            {linksData.length > 0 ? (
              linksData.slice(0, 4).map((link) => renderLink(link))
            ) : (
              <>
                <div className="bg-[#EEEEEE] w-[237px] placeholder h-[44px] rounded-[8px]" />
                <div className="bg-[#EEEEEE] w-[237px] placeholder h-[44px] rounded-[8px]" />
                <div className="bg-[#EEEEEE] w-[237px] placeholder  h-[44px] rounded-[8px]" />
                <div className="bg-[#EEEEEE] w-[237px] placeholder  h-[44px] rounded-[8px]" />
                <div className="bg-[#EEEEEE] w-[237px] placeholder h-[44px] rounded-[8px]" />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mockup;
