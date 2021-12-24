import Flexible from "components/ui/Flexible";
import { FC, useEffect } from "react";
import style from "./style.module.css";
import { getRandomPairOfColors } from "helpers/generateColor";

// fake db
import db from "./db.json";

// ** Team Props
export interface TeamProps {
  logo: string;
  name: string;
}

export interface ChatContent {
  name: string;
  message: string;
}

export default function Chat() {
  useEffect(() => {
    console.log(getRandomPairOfColors());
  }, []);
  return (
    <Flexible className={style.chat_area}>
      <div className="w-full">
        {db.map((item, index) => (
          <Userchat {...item} key={index} />
        ))}
      </div>

      <Chatfrom />
    </Flexible>
  );
}

const Userchat: FC<ChatContent> = (props) => {
  const randomColor = getRandomPairOfColors();

  return (
    <div className={style.chattext}>
      <span style={{ color: randomColor[0], fontWeight: "500" }}>
        {props.name}
      </span>
      <span style={{ marginRight: 5, marginLeft: 2 }}>:</span>
      {props.message}
    </div>
  );
};

const Chatfrom: FC = () => {
  return (
    <Flexible className="w-full px-3 py-2">
      <textarea className={style.chat_form} placeholder="Wooow" />
    </Flexible>
  );
};
