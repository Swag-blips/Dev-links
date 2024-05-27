import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebase/config";
import { doc, getDocs, getDoc, collection, query } from "firebase/firestore";
import Spinner from "../../../helpers/Spinner";
import Offline from "../error/Offline";
import NoProfile from "../error/NoProfile";
import { renderLink } from "../../../utils/RenderLink";

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
