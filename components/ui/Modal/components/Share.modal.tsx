import Flaticon from "components/ui/Flaticon";
import Flexible from "components/ui/Flexible";
import CopyIcon from "components/ui/icons/Copy.icon";
import FacebookIcon from "components/ui/icons/Facebook.icon";
import InstagramIcon from "components/ui/icons/Instagram.icon";
import RedditIcon from "components/ui/icons/Reddit.icon";
import TwitterIcon from "components/ui/icons/Twitter.icon";
import { CancelFilledIconPath } from "constants/flaticons";
import { ReactNode } from "react";

interface IProps {
  toggle: () => void;
}

export default function Share(props: IProps) {
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

      <Flexible className="justify-between mb-10">
        <div className="text-center">
          <Badge icon={<TwitterIcon size={24} />} />
          <div className="font-semibold text-sm">Twitter</div>
        </div>

        <div className="text-center">
          <Badge icon={<InstagramIcon size={24} />} />
          <div className="font-semibold text-sm">Instagram</div>
        </div>

        <div className="text-center">
          <Badge icon={<FacebookIcon size={24} />} />
          <div className="font-semibold text-sm">Facebook</div>
        </div>

        <div className="text-center">
          <Badge icon={<RedditIcon size={24} />} />
          <div className="font-semibold text-sm">Reddit</div>
        </div>
      </Flexible>

      <div className="font-semibold mb-4">Sayfa Linki</div>

      <label
        htmlFor="copy"
        className="flex focus-within:ring-2 ring-offset-2 ring-gray-600 pr-4 bg-gray-100 items-center rounded-md"
      >
        <input
          className="w-full py-3 px-4 outline-none bg-transparent"
          placeholder=""
          id="copy"
        />

        <button className="text-gray-500">
          <CopyIcon size={18} />
        </button>
      </label>
    </div>
  );
}

interface IBadgeProps {
  icon: ReactNode;
}

export const Badge = (props: IBadgeProps) => {
  return (
    <div className="w-14 h-14 mb-2 text-gray-600 flex items-center justify-center rounded-full bg-gray-100">
      {props.icon}
    </div>
  );
};
