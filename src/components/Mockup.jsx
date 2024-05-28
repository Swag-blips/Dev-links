import React, { useState, useEffect } from "react";
import phoneMockup from "../assets/images/half-mockup.svg";
import { useLocation } from "react-router-dom";
import { db } from "../../firebase/config";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import useAuth from "../../firebase/AuthContext";
import { InitialsMockup } from "../../helpers/InitialsMockup";
import {
  Github,
  Youtube,
  LinkedIn,
  Twitch,
  Twitter,
  FrontendMentor,
  Dev,
  Facebook,
  Codepen,
  Codewars,
  FreeCodeCamp,
  Gitlab,
  Stack,
  Hashnode,
  ArrowRight,
} from "../../src/assets/icons";


const Mockup = () => {
  const location = useLocation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
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

  useEffect(() => {
    fetchDetails();
    fetchLinks();
  }, []);

  const renderLink = (link) => {
    let { platform, url } = link;
    let bgColor, textColor, arrowColor, IconComponent, label, border;

    switch (platform) {
      case "Github":
        bgColor = "bg-[#1A1A1A]";
        textColor = "text-white";
        arrowColor = "text-white";
        IconComponent = Github;
        label = "GitHub";
        break;
      case "Youtube":
        bgColor = "bg-[#EE3939]";
        textColor = "text-white";
        arrowColor = "text-white";
        IconComponent = Youtube;
        label = "Youtube";
        break;
      case "LinkedIn":
        bgColor = "bg-[#2D68FF]";
        textColor = "text-white";
        arrowColor = "text-white";
        IconComponent = LinkedIn;
        label = "LinkedIn";
        break;
      case "Twitch":
        bgColor = "bg-fuchsia-500";
        textColor = "text-white";
        arrowColor = "text-white";
        IconComponent = Twitch;
        label = "Twitch";
        break;
      case "Twitter":
        bgColor = "bg-[#43B7E9]";
        textColor = "text-white";
        arrowColor = "text-white";
        IconComponent = Twitter;
        label = "Twitter";
        break;
      case "Frontend mentor":
        bgColor = "bg-[#FFFFFF]";
        textColor = "text-[#333333]";
        arrowColor = "text-[#737373]";
        IconComponent = FrontendMentor;
        label = "Frontend mentor";
        border = "border border-[#D9D9D9]";
        break;
      case "Dev.to":
        bgColor = "bg-[#333333]";
        textColor = "text-white";
        arrowColor = "text-white";
        IconComponent = Dev;
        label = "Dev.to";
        break;
      case "Facebook":
        bgColor = "bg-[#2442AC]";
        textColor = "text-white";
        arrowColor = "text-white";
        IconComponent = Facebook;
        label = "Facebook";
        break;
      case "Codepen":
        bgColor = "bg-[#8A1A50]";
        textColor = "text-white";
        arrowColor = "text-white";
        IconComponent = Codepen;
        label = "Codepen";
        break;
      case "Codewars":
        bgColor = "bg-[#8A1A50]";
        textColor = "text-white";
        arrowColor = "text-white";
        IconComponent = Codewars;
        label = "Codewars";
        break;
      case "freeCodeCamp":
        bgColor = "bg-[#302267]";
        textColor = "text-white";
        arrowColor = "text-white";
        IconComponent = FreeCodeCamp;
        label = "freeCodeCamp";
        break;
      case "Gitlab":
        bgColor = "bg-[#EB4925]";
        textColor = "text-white";
        arrowColor = "text-white";
        IconComponent = Gitlab;
        label = "Gitlab";
        break;
      case "Stack overflow":
        bgColor = "bg-[#EC7100]";
        textColor = "text-white";
        arrowColor = "text-white";
        IconComponent = Stack;
        label = "Stack overflow";
        break;
      case "Hashnode":
        bgColor = "bg-[#0330D1]";
        textColor = "text-white";
        arrowColor = "text-white";
        IconComponent = Hashnode;
        label = "Hashnode";
        break;

      default:
        return null;
    }
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        key={link.id}
        className={`flex items-center justify-between cursor-pointer px-[16px] z-20 space-x-2 w-[237px] h-[56px] rounded-[8px] ${bgColor} ${
          border ? border : ""
        }`}
      >
        <div className="flex items-center space-x-2">
          {IconComponent && (
            <IconComponent
              color={platform === "Frontend mentor" ? "#333333" : "#ffffff"}
              width="24"
              height="24"
            />
          )}
          <p className={`text-[16px] ${textColor}`}>{label}</p>
        </div>
        <ArrowRight
          color={platform === "Frontend mentor" ? "#737373" : "#ffffff"}
          height="16"
          width="16"
        />
      </a>
    );
  };
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
                className="w-[96px] h-[96px] rounded-full object-cover border-[4px] border-[#633CFF]"
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
