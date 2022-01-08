import cn from "classnames";
import Flexible from "components/ui/Flexible";
import { IComment, IForum } from "constants/types";
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

interface IProps {
  forums: IForum[];
  comments: IComment[];
}

export default function Tabs(props: IProps) {
  const [selectedTab, setSelectedTab] = useState("topluluk");

  return (
    <div>
      <Flexible
        className="border-b space-x-2 mb-4 dark:border-dark-border"
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

      {selectedTab === "topluluk" && <Forums forums={props.forums} />}
      {selectedTab === "yorum" && <Comments comments={props.comments} />}
    </div>
  );
}
