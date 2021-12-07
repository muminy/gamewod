import style from "./style.module.css";
import ReactMarkdown from "react-markdown";
export interface Props {
  content: string;
}

export default function Content(props: Props) {
  return (
    <ReactMarkdown className={style.content}>
      {props.content}
    </ReactMarkdown>
  );
}
