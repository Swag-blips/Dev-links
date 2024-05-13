import React from "react";
import Navbar from "../../components/Navbar";
import uploadImage from "../../assets/images/icon-upload-image.svg";

const UpdateProfile = () => {
  return (
    <section>
      <Navbar />

      <main className="p-[1px]">
        <div className="my-[16px] mx-[16px] bg-[#fff] rounded-[8px] h-auto flex flex-col gap-[40px] justify-center">
          <div className="flex flex-col gap-[8px]  mx-[24px] mt-[24px]">
            <h2 className="text-[24px] font-bold">Profile Details</h2>
            <p className="text-[#737373] text-[16px] ">
              Add your details to create a personal touch to your profile.
            </p>
          </div>

          <div className="flex flex-col justify-center h-auto rounded-[12px] bg-[#fafafa] mx-[24px]">
            <div className="flex flex-col justify-center gap-[16px] mx-[20px] my-[20px]">
              <h2 className="text-[#737373] text-[16px]">Profile picture</h2>

              <div className="flex flex-col gap-[24px] rounded-[12px] justify-center">
                <div className="bg-[#EFEBFF] w-[193px] h-[193px] flex flex-col items-center">
                  <img src={uploadImage} alt="upload-image" />
                  <p className="text-[#633CFF] text-[16px]">+Upload image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default UpdateProfile;
