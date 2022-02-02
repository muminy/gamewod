import PlayerCardSkeleton from "components/Skeleton/Player";
import Flexible from "components/ui/Flexible";
import { defaultUserImage, makeProfileImageURL } from "helpers/utils";
import useFetchUser from "hooks/useFetchUser";
import useToggle from "hooks/useToggle";
import Link from "next/link";
import style from "../style.module.css";

interface IProps {
  username: string;
}

export default function Player(props: IProps) {
  const { value, toggle } = useToggle();

  return (
    <span
      onMouseLeave={toggle}
      onMouseEnter={toggle}
      className="group relative"
    >
      <Link href={`/user/${props.username}`}>
        <a>@{props.username}</a>
      </Link>

      {value && <PlayerCard {...props} />}
    </span>
  );
}

const PlayerCard = (props: IProps) => {
  const { loading, data, error } = useFetchUser(props);
  return (
    <div className="py-1.5 absolute top-5">
      <Link href={`/user/${props.username}`}>
        <a className={style.modal_card}>
          {loading ? (
            <PlayerCardSkeleton />
          ) : data && data.user ? (
            <Flexible className="space-x-3 items-center">
              <div className="w-10 h-10 rounded-full">
                <img
                  src={
                    data.user.image
                      ? makeProfileImageURL(data.user.image)
                      : defaultUserImage
                  }
                  className={style.modal_image}
                />
              </div>

              <div className="">
                <div className="font-medium dark:text-white text-gray-800">
                  {data.user.name}
                </div>
                <div className="text-gray-400 font-medium text-sm">
                  @{data.user.username}
                </div>
              </div>
            </Flexible>
          ) : (
            <div>Uppps</div>
          )}
        </a>
      </Link>
    </div>
  );
};
