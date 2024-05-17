import React, { useState, useRef, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { validateProfileDetails } from "../../../utils/Validation";
import { UploadImage } from "../../assets/icons";
import { storage, db } from "../../../firebase/config";
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import toast from "react-hot-toast";
import useAuth from "../../../firebase/AuthContext.jsx";

const UpdateProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);
  const { currentUser } = useAuth();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
      generatePreview(selectedFile);
    }
  };

  const uploadImage = async () => {
    try {
      const storageRef = ref(storage, `Profile/images/${currentUser.uid}`);
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      return downloadURL;
    } catch (err) {
      console.error(`An error occurred during image upload: ${err}`);
    }
  };

  const saveImageMetaData = async (downloadURL) => {
    try {
      const docRef = doc(db, "Profile", currentUser.uid);
      await setDoc(
        docRef,
        {
          profileImage: downloadURL,
        },
        { merge: true }
      );
      console.log("Document successfully uploaded");
    } catch (err) {
      console.error(`An error occurred while saving metadata: ${err}`);
    }
  };

  const handleUpload = async () => {
    if (file) {
      const downloadURL = await uploadImage();
      if (downloadURL) {
        await saveImageMetaData(downloadURL);
      }
    } else {
      console.warn("No file selected for upload");
    }
  };

  const generatePreview = (file) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleImageSelect = () => {
    fileInputRef.current.click();
  };

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      if (
        validateProfileDetails({ email, lastName, firstName, setErrors, file })
      ) {
        const docRef = doc(db, "Profile", currentUser.uid);
        await toast.promise(
          setDoc(
            docRef,
            {
              firstName,
              lastName,
              email,
            },
            { merge: true }
          ),
          {
            loading: "Saving details...",
            success: "Details successfully saved!",
            error: (errors) => `${errors}`,
          }
        );
        await handleUpload();
      }
    } catch (err) {
      console.error(`An error occurred during profile update: ${err}`);
    }
  };

  const inputStyle = (fieldName) => {
    return `border-[1px] w-full ${
      errors[fieldName] ? "border-[#FF3939]" : "border-[#D9D9D9]"
    } px-4 py-3 rounded-[8px] outline-none focus-within:border-[#633CFF] focus:border-[1px] focus:shadow-[0_0_8px_2px_rgba(99,60,255,0.6)]`;
  };

  return (
    <section>
      <Navbar />
      <main className="p-[1px]">
        <div className="my-[16px] mx-[16px] bg-[#fff] rounded-[8px] h-auto flex flex-col justify-center">
          <div className="flex flex-col gap-[8px] mx-[24px] mt-[24px]">
            <h2 className="text-[24px] font-bold">Profile Details</h2>
            <p className="text-[#737373] text-[16px]">
              Add your details to create a personal touch to your profile.
            </p>
          </div>

          <div className="flex flex-col justify-center h-auto rounded-[12px] mt-[40px] bg-[#fafafa] mx-[24px]">
            <div className="flex flex-col justify-center gap-[16px] mx-[20px] my-[20px]">
              <h2 className="text-[#737373] text-[16px]">Profile picture</h2>

              <div className="flex flex-col gap-[24px] rounded-[12px] justify-center">
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />

                {previewUrl ? (
                  <div
                    className="relative group w-auto 2xs:w-[193px] h-[193px] rounded-[12px] overflow-hidden cursor-pointer"
                    onClick={handleImageSelect}
                  >
                    <img
                      src={previewUrl}
                      alt="Image Preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-[16px] font-bold opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300">
                        <UploadImage color="#FFFFFF" height="40" width="40" />
                        Change Image
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={handleImageSelect}
                    className="bg-[#EFEBFF] w-[193px] h-[193px] cursor-pointer flex flex-col justify-center rounded-[12px] items-center"
                  >
                    <UploadImage color="#633CFF" width="40" height="40" />
                    <p className="text-[#633CFF] text-[16px] font-bold">
                      + Upload image
                    </p>
                  </div>
                )}
              </div>
              <p className="text-[#737373] text-[12px]">
                Image must be below 1024x1024px. Use PNG or JPG format.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center h-auto rounded-[12px] mt-[24px] bg-[#fafafa] mx-[24px]">
            <form className="flex flex-col mx-[20px] gap-[12px] my-[20px]">
              <div className="flex flex-col gap-[4px]">
                <label htmlFor="first-name">First name*</label>
                <div className="relative">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    className={inputStyle("firstName")}
                    placeholder="What is your first name?"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  {errors.firstName && (
                    <p className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#FF3939] text-xs">
                      {errors.firstName}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-[4px]">
                <label htmlFor="last-name">Last name*</label>
                <div className="relative">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    className={inputStyle("lastName")}
                    placeholder="What is your last name?"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  {errors.lastName && (
                    <p className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#FF3939] text-xs">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-[4px]">
                <label htmlFor="email">Email*</label>
                <div className="relative">
                  <input
                    type="email"
                    className={inputStyle("email")}
                    placeholder="Type your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <p className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#FF3939] text-xs">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>

          <div className="mx-[16px] my-[16px] border-t-[1px] border-[#D9D9D9]">
            <button
              onClick={handleSave}
              className="my-[16px] w-full py-[16px] text-[16px] font-bold bg-[#633CFF] rounded-[8px] text-[#fff]"
            >
              Save
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default UpdateProfile;
