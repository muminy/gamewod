import classNames from "classnames";
import Flexible from "components/ui/Flexible";
import { clipmenu } from "constants/datas";
import { useState } from "react";

import style from "./style.module.css";

export default function Header() {
  const [selected, setSelected] = useState("yeni");

  return (
    <Flexible className={style.menu}>
      {clipmenu.map((item) => (
        <button
          onClick={() => setSelected(item.id)}
          className={classNames(
            "px-3 font-semibold text-[14px] py-2 rounded-xl hover:bg-gray-100 duration-200",
            {
              "!bg-gray-900 text-white": item.id === selected,
            }
          )}
          key={item.id}
        >
          # {item.title}
        </button>
      ))}
    </Flexible>
  );
}
