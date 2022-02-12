import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import style from "./style.module.css";

export default function Header() {
  const router = useRouter();

  return (
    <div className="border rounded-md overflow-hidden dark:border-dark-border">
      <Link href={"/settings/general"}>
        <a
          className={classNames(style.menu, {
            "bg-gray-50 dark:bg-dark-border": router.query.slug === "general",
          })}
        >
          Genel
        </a>
      </Link>
      <Link href={"/settings/profile"}>
        <a
          className={classNames(style.menu, {
            "bg-gray-50 dark:bg-dark-border": router.query.slug === "profile",
          })}
        >
          Profil
        </a>
      </Link>
      <Link href={"/settings/security"}>
        <a
          className={classNames(style.menu, {
            "bg-gray-50 dark:bg-dark-border": router.query.slug === "security",
          })}
        >
          Güvenlik
        </a>
      </Link>
    </div>
  );
}
