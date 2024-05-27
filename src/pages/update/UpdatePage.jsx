import React, { useEffect, useState } from "react";
import UpdateProfile from "./UpdateProfile";
import Mockup from "../../components/Mockup";
import Navbar from "../../components/Navbar";
import { db } from "../../../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import useAuth from "../../../firebase/AuthContext";
import Offline from "../../components/error/Offline";

const UpdatePage = () => {
  const [isOffline, setIsOffline] = useState(false);
  const { currentUser } = useAuth();

  const checkConnection = async () => {
    try {
      const dbRef = doc(db, "Profile", currentUser.uid);
      await getDoc(dbRef);
      setIsOffline(false);
    } catch (error) {
      if (
        error.message.includes(
          "Failed to get document because the client is offline."
        )
      ) {
        setIsOffline(true);
      }
    }
  };

  useEffect(() => {
    if (currentUser) {
      checkConnection();
    }

    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [currentUser]);

  if (isOffline) {
    return <Offline />;
  }
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow xl:flex-row">
        <section className="xl:w-[38.89%] min-h-[100%] hidden xl:block">
          <Mockup />
        </section>
        <section className="xl:w-[61.11%] min-h-[100%] flex-grow">
          <UpdateProfile />
        </section>
      </div>
    </div>
  );
};

export default UpdatePage;
