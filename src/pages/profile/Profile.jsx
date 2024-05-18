import React from "react";
import ProfileNav from "../../components/profile/ProfileNav";
import ProfileLinks from "../../components/profile/ProfileLinks";
import { useParams } from "react-router-dom";
import useAuth from "../../../firebase/AuthContext";

const Profile = () => {
  const { currentUser } = useAuth();
  const { id } = useParams();

  const isProfile = currentUser && currentUser.uid === id;

  
  return (
    <section className="p-[1px] bg-[#fff] h-[100vh]">
      <ProfileNav isProfile={isProfile} />
      <main className="flex flex-col items-center justify-center mt-[60px]">
        <ProfileLinks isProfile={isProfile} />
      </main>
    </section>
  );
};

export default Profile;
