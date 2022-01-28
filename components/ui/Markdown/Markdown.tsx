import style from "./style.module.css";
import MarkdownToJsx from "markdown-to-jsx";
import Player from "./components/Player";

export interface Props {
  content: string;
}

const overrides = {
  Player,
};

export default function Markdown(props: Props) {
  return (
    <MarkdownToJsx options={{ overrides }} className={style.content}>
      {props.content}
    </MarkdownToJsx>
  );
}
