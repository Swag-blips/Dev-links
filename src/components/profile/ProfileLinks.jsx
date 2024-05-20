import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebase/config";
import { doc, getDocs, getDoc, collection, query } from "firebase/firestore";
import useAuth from "../../../firebase/AuthContext";
import Spinner from "../../../helpers/Spinner";
import { Github, Youtube, LinkedIn, Twitch } from "../../../src/assets/icons";
import arrowRight from "../../../src/assets/images/icon-arrow-right.svg";

const ProfileLinks = ({ isProfile }) => {
  const { id } = useParams();
  const [profileData, setProfileData] = useState(null);
  const [linksData, setLinksData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { currentUser } = useAuth();

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
      console.log(`An error occurred: ${err}`);
      setError(`An error occurred: ${err.message}`);
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
      console.log(`An error occurred: ${err}`);
      setError(`An error occurred: ${err}`);
    }
  };

  useEffect(() => {
    fetchDetails();
    fetchLinks();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const { firstName, lastName, email, profileImage } = profileData || {};

  const renderLink = (link) => {
    const { platform, url } = link;
    let bgColor, IconComponent, label;

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

  return (
    <div>
      <div className="flex flex-col items-center gap-[24px]">
        {profileImage && (
          <img
            src={profileImage}
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
    </div>
  );
};

export default ProfileLinks;
