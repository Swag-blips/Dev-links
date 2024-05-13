import React from "react";
import ProfileNav from "../../components/profile/ProfileNav";
import ProfileLinks from "../../components/profile/ProfileLinks";

const Profile = () => {
  return (
    <section className="p-[1px]">
      <ProfileNav />
      <main className="flex flex-col items-center justify-center mt-[60px]">
        <ProfileLinks />
      </main>
    </section>
  );
};

export default Profile;
