import React from "react";
import iconGithub from "../../assets/images/icon-github.svg";
import iconFrontendMentor from "../../assets/images/icon-frontend-mentor.svg";
import iconStackOverflow from "../../assets/images/icon-stack-overflow.svg";
import iconTwitch from "../../assets/images/icon-twitch.svg";
import iconTwitter from "../../assets/images/icon-twitter.svg";
import iconLinkedIn from "../../assets/images/icon-linkedin.svg";
import iconGitLab from "../../assets/images/icon-gitlab.svg";
import iconFreeCodeCamp from "../../assets/images/icon-freecodecamp.svg";
import iconFacebook from "../../assets/images/icon-facebook.svg";
import iconHashNode from "../../assets/images/icon-hashnode.svg";
import iconYoutube from "../../assets/images/icon-youtube.svg";
import iconDevto from "../../assets/images/icon-devto.svg";
import iconCodeWars from "../../assets/images/icon-codewars.svg";
import iconCodePen from "../../assets/images/icon-codepen.svg";
import iconLink from "../../assets/images/icon-link.svg";

import Select from "react-select";

const options = [
  { value: "Github", label: "Github", icon: iconGithub },
  {
    value: "Frontend mentor",
    label: "Frontend mentor",
    icon: iconFrontendMentor,
  },
  { value: "Twitter", label: "Twitter", icon: iconTwitter },
  { value: "LinkedIn", label: "LinkedIn", icon: iconLinkedIn },
  { value: "Youtube", label: "Youtube", icon: iconYoutube },
  { value: "Facebook", label: "Facebook", icon: iconFacebook },
  { value: "Twitch", label: "Twitch", icon: iconTwitch },
  { value: "Dev.to", label: "Dev.to", icon: iconDevto },
  { value: "Codewars", label: "Codewars", icon: iconCodeWars },
  { value: "Codepen", label: "Codepen", icon: iconCodePen },
  { value: "freeCodeCamp", label: "freeCodeCamp", icon: iconFreeCodeCamp },
  { value: "Gitlab", label: "Gitlab", icon: iconGitLab },
  { value: "Stack overflow", label: "Stack overflow", icon: iconStackOverflow },
  { value: "Hashnode", label: "Hashnode", icon: iconHashNode },
];

const formatOptionLabel = ({ label, icon }, { context }) => {
  if (context === "menu") {
    return (
      <div className="flex items-center gap-[12px] w-full">
        {icon && <img src={icon} alt={`${label} icon`} className="pb-[10px]" />}
        <div className="w-full border-b border-gray-300 pb-[10px]">
          <div>{label}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-[12px] absolute left-1 bottom-[10%]">
      {icon && <img src={icon} alt={`${label} icon`} />}
      <div>{label}</div>
    </div>
  );
};

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    borderColor: state.isFocused ? "#633CFF" : provided.borderColor,
    borderWidth: state.isFocused ? "1px" : provided.borderWidth,
    padding: "6px 12px",
    borderRadius: "8px",
    cursor: "pointer",
  }),
  option: (provided, { isSelected, isFocused }) => ({
    ...provided,
    backgroundColor: isSelected ? "#633CFF" : isFocused ? "lightgray" : "white",
    color: isSelected ? "white" : provided.color,
  }),
};

const SelectLink = ({ index, link, updateLink, removeLink }) => {
  const handleLinkChange = (e) => {
    const newLink = e.target.value;
    updateLink(index, { url: newLink });
  };

  const handlePlatformChange = (option) => {
    updateLink(index, { platform: option.value });
  };

  const inputStyle = (error) => {
    return `border ${
      error ? "border-[#FF3939]" : "border-[#D9D9D9]"
    } px-4 outline-none py-3 rounded-[8px] pl-[40px] pr-[40px] cursor-pointer w-full focus-within:border-[#633CFF] mb-[20px] focus:border-[1px] focus:shadow-[0_0_8px_2px_rgba(99,60,255,0.6)]`;
  };

  return (
    <div className="mx-[24px] mt-[20px] flex flex-col gap-[12px]">
      <div className="flex justify-between mt-[20px]">
        <div className="flex items-center gap-[3px]">
          <div className="flex flex-col justify-center gap-[4px]">
            <span className="bg-[#737373] w-[12px] h-[1px]"></span>
            <span className="bg-[#737373] w-[12px] h-[1px]"></span>
          </div>
          <p className="font-bold text-[16px] text-[#737373]">
            Link #{index + 1}
          </p>
        </div>
        <p
          onClick={() => removeLink(index)}
          className="text-[#737373] text-[16px] cursor-pointer"
        >
          Remove
        </p>
      </div>

      <form className="flex flex-col gap-[12px]">
        <div className="flex flex-col gap-[4px]">
          <label htmlFor="platform" className="text-[12px] text-[#333333]">
            Platform
          </label>
          <Select
            defaultValue={options.find(
              (option) => option.value === link.platform
            )}
            onChange={handlePlatformChange}
            options={options}
            formatOptionLabel={formatOptionLabel}
            styles={customStyles}
          />
        </div>
        <div className="flex flex-col gap-[4px] relative">
          <label htmlFor="link" className="text-[12px] text-[#333333]">
            Link
          </label>
          <div className="relative">
            <input
              type="text"
              name="link"
              id="link"
              value={link.url}
              placeholder="e.g. https://www.github.com/johnappleseed"
              className={inputStyle(link.error)}
              onChange={handleLinkChange}
            />
            <img
              src={iconLink}
              alt="Link Icon"
              className="absolute left-[14px] top-[50%] translate-y-[-90%] w-[20px] h-[20px]"
            />
            {link.error && (
              <p className="absolute right-[14px] hidden md:block top-[50%] translate-y-[-90%] text-red-500 text-[12px]">
                {link.error}
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SelectLink;
