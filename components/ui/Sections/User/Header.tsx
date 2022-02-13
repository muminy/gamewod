import Flexible from "components/ui/Flexible";
import { IUser } from "constants/types";
import { makeProfileImageURL } from "helpers/utils";
import useCurrentUser from "hooks/useCurrentUser";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header(props: IUser) {
  const router = useRouter();

  const [current] = useCurrentUser({
    username: router.query.username as string,
  });

  return (
    <Flexible className="flex-col mb-4" alignItem="items-center">
      <div className="relative overflow-hidden w-full group xl:h-[360px] lg:h-[280px]  h-[200px]  dark:bg-dark-border bg-gray-100">
        {current && (
          <Link href={"/settings/profile"}>
            <a className="absolute hidden ov group-hover:block bottom-0 bg-gray-300 bg-opacity-20 text-sm rounded-md px-3 py-2 font-medium">
              Kapak Fotoğrafı Ekle
            </a>
          </Link>
        )}

        {props.headerImage && (
          <img
            className="w-full h-full object-cover"
            src={makeProfileImageURL(props.headerImage)}
          />
        )}
      </div>
      <div className="w-[140px] h-[140px] group overflow-hidden relative dark:border-black dark:bg-dark-border bg-gray-200 rounded-full mt-[-100px] border-white border-4">
        {current && (
          <Link href={"/settings/profile"}>
            <a className="absolute hidden w-full text-center group-hover:block bottom-0 bg-gray-300 bg-opacity-60 text-sm rounded-md px-3 py-2 font-medium">
              Ekle
            </a>
          </Link>
        )}

        <img
          className="w-full h-full object-cover"
          src={makeProfileImageURL(props.image)}
        />
      </div>
    </Flexible>
  );
}
