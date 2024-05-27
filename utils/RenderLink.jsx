import { Github, Youtube, LinkedIn, Twitch, Twitter, FrontendMentor, Dev, Facebook, Codepen, Codewars, FreeCodeCamp, Gitlab, Stack, Hashnode } from "../src/assets/icons";
import arrowRight from "../src/assets/images/icon-arrow-right.svg";

export const renderLink = (link) => {
  let { platform, url } = link;
  let bgColor, IconComponent, label, border;

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
      bgColor = "bg-fuchsia-500";
      IconComponent = Twitch;
      label = "Twitch";
      break;
    case "Twitter":
      bgColor = "bg-[#43B7E9]";
      IconComponent = Twitter;
      label = "Twitter";
      break;
    case "Frontend mentor":
      bgColor = "bg-[#FFFFFF]";
      IconComponent = FrontendMentor;
      label = "Frontend mentor";
      border = "border-[#D9D9D9]";
      break;
    case "Dev.to":
      bgColor = "bg-[#333333]";
      IconComponent = Dev;
      label = "Dev.to";
      break;
    case "Facebook":
      bgColor = "bg-[#2442AC]";
      IconComponent = Facebook;
      label = "Facebook";
      break;
    case "Codepen":
      bgColor = "bg-[#8A1A50]";
      IconComponent = Codepen;
      label = "Codepen";
      break;
    case "Codewars":
      bgColor = "bg-[#8A1A50]";
      IconComponent = Codewars;
      label = "Codewars";
      break;
    case "freeCodeCamp":
      bgColor = "bg-[#302267]";
      IconComponent = FreeCodeCamp;
      label = "freeCodeCamp";
      break;
    case "Gitlab":
      bgColor = "bg-[#EB4925]";
      IconComponent = Gitlab;
      label = "Gitlab";
      break;
    case "Stack overflow":
      bgColor = "bg-[#EC7100]";
      IconComponent = Stack;
      label = "Stack overflow";
      break;
    case "Hashnode":
      bgColor = "bg-[#0330D1]";
      IconComponent = Hashnode;
      label = "Hashnode";
      break;

    default:
      return null;
  }
  return (
    <div
      key={link.id}
      className={`flex items-center justify-between cursor-pointer px-[16px] z-20 space-x-2 w-[237px] h-[56px] rounded-[8px] ${bgColor}`}
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
