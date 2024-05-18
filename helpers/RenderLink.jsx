import { Github, Youtube, LinkedIn, Twitch } from "../src/assets/icons";
import arrowRight from "../src/assets/images/icon-arrow-right.svg";
export const renderLink = (link) => {
  const { platform, url } = link;
  let bgColor, IconComponent, label;

  switch (platform) {
    case "Github":
      bgColor = "bg-[#1A1A1A]";
      IconComponent = Github;
      label = "GitHub";
      break;
    case "Youtube":
      bgColor = "bg-[#EE3939]";
      IconComponent = Youtube;
      label = "Youtube";
      break;
    case "LinkedIn":
      bgColor = "bg-[#2D68FF]";
      IconComponent = LinkedIn;
      label = "LinkedIn";
      break;
    case "Twitch":
      bgColor = "bg-[#EE3FC8]";
      IconComponent = Twitch;
      label = "Twitch";
      break;
    default:
      return null;
  }

  return (
    <div
      key={link.id}
      className={`flex items-center justify-between px-[16px] space-x-2 w-[237px] h-[56px] rounded-[8px] ${bgColor}`}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2"
      >
        {IconComponent && (
          <IconComponent color="#ffffff" width="24" height="24" />
        )}
        <p className="text-[16px] text-white">{label}</p>
      </a>
      <img src={arrowRight} alt="arrow right" />
    </div>
  );
};
