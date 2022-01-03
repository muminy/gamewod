import cn from "classnames";
import Flexible from "components/ui/Flexible";
import { useState } from "react";
import style from "../style.module.css";
import Comments from "./Comment";

import Forums from "./Forums";

const tabs = [
  {
    title: "Topluluklar",
    id: "topluluk",
    disabled: false,
  },
  {
    title: "Yorumlar",
    id: "yorum",
    disabled: false,
  },
  {
    title: "Oylamalar",
    id: "oy",
    disabled: true,
  },
];

export default function Tabs() {
  const [selectedTab, setSelectedTab] = useState("topluluk");

  return (
    <div>
      <Flexible
        className="border-b space-x-2 mb-4"
        justifyContent="justify-center"
      >
        {tabs.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedTab(item.id)}
            className={cn(style.tabbtn, {
              [style["active-tab"]]: selectedTab === item.id,
            })}
            disabled={item.disabled}
          >
            {item.title}
            {item.disabled && <span>Yakında</span>}
          </button>
        ))}
      </Flexible>

      {selectedTab === "topluluk" && <Forums />}
      {selectedTab === "yorum" && <Comments />}
    </div>
  );
}
