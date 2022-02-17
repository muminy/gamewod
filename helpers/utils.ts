import { baseURLV2 } from "services/apis";
import TwitterIcon from "components/ui/icons/Twitter.icon";
import GithubIcon from "components/ui/icons/Girhub.icon";
import InstagramIcon from "components/ui/icons/Instagram.icon";
import FacebookIcon from "components/ui/icons/Facebook.icon";

export const defaultUserImage = `${baseURLV2}/uploads/users/default.png`;

export const validateEmail = (email?: string) =>
  email?.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

export const makeProfileImageURL = (url: string | null | undefined) => {
  return url ? `${baseURLV2}/uploads/users/${url}` : defaultUserImage;
};

export const setDescription = (description: string) => {
  if (description && description.length > 100) {
    return `${description.substring(0, 100)}...`;
  } else {
    return description;
  }
};

export const handleSocialLinks = (type: string, value: string) => {
  switch (type) {
    case "twitter":
      return {
        href: `https://twitter.com/${value}`,
        title: "Twitter",
        icon: TwitterIcon,
      };
    case "github":
      return {
        href: `https://github.com/${value}`,
        title: "Github",
        icon: GithubIcon,
      };
    case "instagram":
      return {
        href: `https://twitter.com/${value}`,
        title: "Instagram",
        icon: InstagramIcon,
      };
    case "facebook":
      return {
        href: `https://twitter.com/${value}`,
        title: "Facebook",
        icon: FacebookIcon,
      };
    default:
      return {
        href: `https://github.com/${value}`,
        title: "yok",
        icon: () => null,
      };
  }
};
