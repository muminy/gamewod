import Flaticon from "components/ui/Flaticon";
import Flexible from "components/ui/Flexible";
import CopyIcon from "components/ui/icons/Copy.icon";
import FacebookIcon from "components/ui/icons/Facebook.icon";
import InstagramIcon from "components/ui/icons/Instagram.icon";
import RedditIcon from "components/ui/icons/Reddit.icon";
import TwitterIcon from "components/ui/icons/Twitter.icon";
import Notify from "components/ui/Notify";
import { CancelFilledIconPath } from "constants/flaticons";
import { makeRedditLink, makeTwitterLink } from "helpers/sharelinks";
import useToggle from "hooks/useToggle";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface IProps {
  toggle: () => void;
  title: string;
}

export default function Share(props: IProps) {
  const { value, toggle } = useToggle();

  const handleClipboard = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    toggle();
    setTimeout(toggle, 2000);
  };

  return (
    <div className="py-6 px-8">
      <Flexible className="justify-between items-center mb-10">
        <div className="font-semibold text-lg">Paylaş</div>

        <button
          onClick={props.toggle}
          className="h-8 w-8 bg-gray-100 flex items-center justify-center rounded-full"
        >
          <Flaticon paths={CancelFilledIconPath} />
        </button>
      </Flexible>

      <Flexible className="mb-10 space-x-10">
        <Badge
          href={makeTwitterLink(`${props.title} ${window.location.href}`)}
          title="Twitter"
          icon={<TwitterIcon size={24} />}
        />
        {/* <Badge
          href={makeTwitterLink(`${props.title} ${window.location.href}`)}
          title="Instagram"
          icon={<InstagramIcon size={24} />}
        /> */}
        {/* <Badge
          href={makeTwitterLink(`${props.title} ${window.location.href}`)}
          title="Facebook"
          icon={<FacebookIcon size={24} />}
        /> */}
        <Badge
          href={makeRedditLink(props.title)}
          title="Reddit"
          icon={<RedditIcon size={24} />}
        />
      </Flexible>

      <div className="font-semibold mb-4">Sayfa Linki</div>

      <label
        htmlFor="copy"
        className="flex focus-within:ring-2 ring-offset-2 ring-gray-600 pr-4 bg-gray-100 items-center rounded-md"
      >
        <input
          className="w-full py-3 px-4 outline-none bg-transparent"
          placeholder=""
          value={window.location.href}
          id="copy"
        />

        <button onClick={handleClipboard} className="text-gray-500">
          <CopyIcon size={18} />
        </button>
      </label>

      {value && <Notify.Success title="Panoya Kopyalandı" />}
    </div>
  );
}

interface IBadgeProps {
  icon: ReactNode;
  title: string;
  href: string;
}

export const Badge = (props: IBadgeProps) => {
  return (
    <a
      href={props.href}
      target={"_blank"}
      rel="noreferrer"
      className="text-center block"
    >
      <div className="w-14 h-14 mb-2 text-gray-600 flex items-center justify-center rounded-full bg-gray-100">
        {props.icon}
      </div>
      <div className="font-semibold text-sm">{props.title}</div>
    </a>
  );
};
