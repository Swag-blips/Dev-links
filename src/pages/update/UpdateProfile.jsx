import React from "react";
import Navbar from "../../components/Navbar";
import uploadImage from "../../assets/images/icon-upload-image.svg";

const UpdateProfile = () => {
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
                <input
                  className="border-[#D9D9D9] border-[1px] px-4 py-3 rounded-[8px] outline-none"
                  placeholder="What is your first name?"
                />
              </div>

              <div className="flex flex-col gap-[4px]">
                <label htmlFor="last-name">Last name*</label>
                <input
                  className="border-[#D9D9D9] border-[1px] px-4 py-3 rounded-[8px] outline-none"
                  placeholder="What is your last name?"
                />
              </div>

              <div className="flex flex-col gap-[4px]">
                <label htmlFor="email">Email*</label>
                <input
                  className="border-[#D9D9D9] border-[1px] px-4 py-3 rounded-[8px] outline-none"
                  placeholder="Type your email"
                />
              </div>
            </form>
          </div>

          <div className="mx-[16px] my-[16px] border-t-[1px] border-[#D9D9D9]">
            <button className="my-[16px] w-full py-[16px]  text-[16px] font-bold bg-[#633CFF] rounded-[8px] text-[#fff]">
              Save
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default UpdateProfile;
