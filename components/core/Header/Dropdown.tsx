import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { handleAddUser } from "store/actions/user";
import { useAppSelector } from "store/hooks";
import style from "./style.module.css";

export default function Dropdown() {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useAppSelector((state) => state.user.user);

  const onLogout = () => {
    localStorage.removeItem("usertoken");
    dispatch(handleAddUser(null));

    router.push(router.asPath);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={style.dropdown}
      tabIndex={1}
    >
      <Link href={`/user/${user?.username}`}>
        <a className="font-medium text-sm">Profilim</a>
      </Link>

      <Link href={`/settings/profile`}>
        <a className="font-medium text-sm">Ayarlar</a>
      </Link>

      <div
        role={"button"}
        onClick={onLogout}
        className="font-medium text-left py-1.5 rounded-md text-sm dark:hover:!bg-opacity-10 text-red-500 hover:!bg-red-50"
      >
        Çıkış Yap
      </div>
    </motion.div>
  );
}
