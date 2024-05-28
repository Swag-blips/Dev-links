import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebase/config";
import { doc, getDocs, getDoc, collection, query } from "firebase/firestore";
import Spinner from "../../../helpers/Spinner";
import Offline from "../error/Offline";
import NoProfile from "../error/NoProfile";
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
} from "../../../src/assets/icons";

const ProfileLinks = ({ isProfile }) => {
  const { id } = useParams();
  const [profileData, setProfileData] = useState(null);
  const [linksData, setLinksData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDetails = async () => {
    try {
      const docRef = doc(db, "Profile", id);
      const snapshot = await getDoc(docRef);

      if (snapshot.exists()) {
        setProfileData(snapshot.data());
      } else {
        setError("This page does not exist");
      }
    } catch (err) {
      if (err.message.includes("client is offline")) {
        setError("offline");
      } else {
        setError(`An error occurred: ${err.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchLinks = async () => {
    try {
      const q = query(collection(db, `Profile/${id}/ProfileLinks`));
      const querySnapShot = await getDocs(q);

      const links = [];

      querySnapShot.forEach((doc) => {
        links.push({ id: doc.id, ...doc.data() });
      });

      setLinksData(links);
    } catch (err) {
      setError(`An error occurred: ${err}`);
    }
  };

  const { firstName, lastName, email, profileImg } = profileData || {};

  useEffect(() => {
    fetchDetails();
    fetchLinks();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (error === "offline") {
    return <Offline />;
  } else if (error === "This page does not exist") {
    return <NoProfile />;
  }
  if (error) {
    return <p>{error}</p>;
  }

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
    <section className=" md:bg-white md:w-[349px] w-full md:py-[48px] md:mt-[-180px] md:rounded-[24px] md:shadow-md">
      <div className="flex flex-col items-center gap-[24px]">
        {profileImg && (
          <img
            src={profileImg}
            alt="profile image"
            className="w-[104px] h-[104px] rounded-full object-cover border-[4px] border-[#633CFF]"
          />
        )}
        <div className="flex flex-col gap-[8px] items-center text-center ">
          <h1 className="text-[#333333] text-[32px] font-bold">{firstName}</h1>
          <p className="text-[#737373] text-[16px]">{email}</p>
        </div>
      </div>
      <div className="flex items-center mt-[56px] flex-col gap-[20px] mx-[69px]">
        {linksData.length > 0 ? (
          linksData.map((link) => renderLink(link))
        ) : (
          <p>No links available</p>
        )}
      </div>
    </section>
  );
};

export default ProfileLinks;
