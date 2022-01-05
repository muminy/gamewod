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

    router.push("/");
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

      <Link href={`/user/${user?.username}`}>
        <a className="font-medium text-sm">Ayarlar</a>
      </Link>

      <button
        onClick={onLogout}
        className="font-medium text-sm text-red-500 hover:!bg-red-50"
      >
        Çıkış Yap
      </button>
    </motion.div>
  );
}
