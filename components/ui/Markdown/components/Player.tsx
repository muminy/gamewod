import PlayerCardSkeleton from "components/Skeleton/Player";
import Flexible from "components/ui/Flexible";
import { makeProfileImageURL } from "helpers/utils";
import useFetchUser from "hooks/useFetchUser";
import Link from "next/link";
import style from "../style.module.css";

interface IProps {
  username: string;
}

export default function Player(props: IProps) {
  const { loading, data, error } = useFetchUser(props);

  return (
    <span className="group relative">
      <Link href={`/user/${props.username}`}>
        <a>@{props.username}</a>
      </Link>

      <div className="py-1.5 hidden group-hover:block absolute top-5">
        <div className={style.modal_card}>
          {loading ? (
            <PlayerCardSkeleton />
          ) : data && data.user ? (
            <Flexible className="space-x-3 items-center group-hover:flex ">
              <div className="w-10 h-10 rounded-full bg-gray-200">
                {data.user.image && (
                  <img
                    src={makeProfileImageURL(data.user.image)}
                    className={style.modal_image}
                  />
                )}
              </div>

              <div className="">
                <div className="font-medium">{data.user.name}</div>
                <div className="text-gray-400 font-medium text-sm">
                  @{data.user.username}
                </div>
              </div>
            </Flexible>
          ) : (
            <div>Uppps</div>
          )}
        </div>
      </div>
    </span>
  );
}
