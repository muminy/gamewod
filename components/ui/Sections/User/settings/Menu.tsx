import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import style from "./style.module.css";

export default function Header() {
  const router = useRouter();

  return (
    <div className="border rounded-md overflow-hidden">
      <Link href={"/settings/profile"}>
        <a
          className={classNames(style.menu, {
            "bg-gray-50": router.query.slug === "profile",
          })}
        >
          Profile
        </a>
      </Link>
      <Link href={"/settings/security"}>
        <a
          className={classNames(style.menu, {
            "bg-gray-50": router.query.slug === "security",
          })}
        >
          Security
        </a>
      </Link>
    </div>
  );
}
