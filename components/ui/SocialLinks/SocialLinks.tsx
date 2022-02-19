import FacebookIcon from "../icons/Facebook.icon";
import FaceitIcon from "../icons/Faceit.icon";
import InstagramIcon from "../icons/Instagram.icon";
import TwitterIcon from "../icons/Twitter.icon";

interface IProps {
  id: string;
  value: string;
}

export default function SocialLinks(props: IProps) {
  const social = handleSocialLinks(props.id, props.value);

  if (social) {
    return (
      <a
        target="_blank"
        rel="noreferrer"
        href={social.href}
        className="flex items-center space-x-2 border dark:border-dark-border px-5 h-[40px] text-sm rounded-full leading-[18px]"
      >
        {social.icon}
        <span className="font-semibold text-sm">{social.title}</span>
      </a>
    );
  } else {
    return null;
  }
}

const handleSocialLinks = (type: string, value: string) => {
  if (!value) return null;

  switch (type) {
    case "twitter":
      return {
        href: `https://twitter.com/${value}`,
        title: "Twitter",
        icon: <TwitterIcon />,
      };
    case "faceit":
      return {
        href: `https://www.faceit.com/tr/players/${value}`,
        title: "faceit",
        icon: <FaceitIcon />,
      };
    case "instagram":
      return {
        href: `https://instagram.com/${value}`,
        title: "Instagram",
        icon: <InstagramIcon />,
      };
    case "facebook":
      return {
        href: `https://twitter.com/${value}`,
        title: "Facebook",
        icon: <FacebookIcon />,
      };
    default:
      return null;
  }
};
