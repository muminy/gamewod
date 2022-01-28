import style from "./style.module.css";
import MarkdownToJsx from "markdown-to-jsx";
import Player from "./components/Player";
import Image from "./components/Image";

export interface Props {
  content: string;
}

const overrides = {
  Player,
  img: { component: (props: any) => <Image {...props} /> },
};

export default function Markdown(props: Props) {
  return (
    <MarkdownToJsx
      options={{
        overrides,
      }}
      className={style.content}
    >
      {props.content}
    </MarkdownToJsx>
  );
}
