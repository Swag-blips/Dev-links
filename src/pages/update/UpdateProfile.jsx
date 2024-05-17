import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import uploadImage from "../../assets/images/icon-upload-image.svg";
import { validateProfileDetails } from "../../../utils/Validation";

const UpdateProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleSave = (e) => {
    e.preventDefault();

    if (validateProfileDetails({ email, lastName, firstName, setErrors })) {
      console.log(" Your details check out");
    } else {
      console.log(" Error during sign up");
    }
  };

  const inputStyle = (fieldName) => {
    return ` border-[1px]  w-full  ${
      errors[fieldName] ? "border-[#FF3939]" : "border-[#D9D9D9]"
    } px-4 py-3 rounded-[8px] outline-none`;
  };

  return (
    <section>
      <Navbar />
      <main className="p-[1px]">
        <div className="my-[16px] mx-[16px] bg-[#fff] rounded-[8px] h-auto flex flex-col justify-center">
          <div className="flex flex-col gap-[8px]  mx-[24px] mt-[24px]">
            <h2 className="text-[24px] font-bold">Profile Details</h2>
            <p className="text-[#737373] text-[16px] ">
              Add your details to create a personal touch to your profile.
            </p>
          </div>

          <div className="flex flex-col justify-center h-auto rounded-[12px] mt-[40px] bg-[#fafafa] mx-[24px]">
            <div className="flex flex-col justify-center gap-[16px] mx-[20px] my-[20px]">
              <h2 className="text-[#737373] text-[16px]">Profile picture</h2>

              <div className="flex flex-col gap-[24px] rounded-[12px] justify-center">
                <div className="bg-[#EFEBFF] w-[193px] h-[193px] flex flex-col justify-center rounded-[12px] items-center">
                  <img src={uploadImage} alt="upload-image" />
                  <p className="text-[#633CFF] text-[16px] font-bold">
                    + Upload image
                  </p>
                </div>
                <p className="text-[#737373] text-[12px]">
                  Image must be below 1024x1024px. Use PNG or JPG format.
                </p>
              </div>
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
              className="my-[16px] w-full py-[16px]  text-[16px] font-bold bg-[#633CFF] rounded-[8px] text-[#fff]"
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
