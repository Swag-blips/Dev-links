import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { renderLink } from "../../../helpers/RenderLink";
import { db } from "../../../firebase/config";
import { doc, getDocs, getDoc, collection, query } from "firebase/firestore";
import useAuth from "../../../firebase/AuthContext";
import Spinner from "../../../helpers/Spinner";
import { useNavigate } from "react-router-dom";

const ProfileLinks = ({ isProfile }) => {
  const { id } = useParams();
  const [profileData, setProfileData] = useState(null);
  const [linksData, setLinksData] = useState(null);
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
      console.log(`an error occured ${err}`);
      setError(`An error occurred: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const fetchLinks = async (e) => {
    try {
      const q = query(collection(db, `Profile/${id}/ProfileLinks`));
      const querySnapShot = await getDocs(q);

      const links = [];

      querySnapShot.forEach((doc) => {
        links.push({ id: doc.id, ...doc.data() });
      });

      setLinksData(links);
    } catch (err) {
      console.log(`an error occured ${err}`);
      setError(` an error occured${err}`);
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
    return <p>Page does not exist</p>;
  }

  const { firstName, lastName, email, profileImage } = profileData;

  return (
    <div>
      <div className="flex flex-col items-center gap-[24px]">
        <img
          src={profileImage}
          alt="profile image"
          className="w-[104px] h-[104px] rounded-full object-cover border-[4px] border-[#633CFF]"
        />
        <div className="flex flex-col gap-[8px] items-center text-center ">
          <h1 className="text-[#333333] text-[32px] font-bold">{firstName}</h1>
          <p className="text-[#737373] text-[16px] ">{email}</p>
        </div>
      </div>
      <div className="flex items-center mt-[56px] flex-col gap-[20px] mx-[69px]">
        {linksData.map((link) => renderLink(link))}
      </div>
    </div>
  );
};

export default ProfileLinks;
