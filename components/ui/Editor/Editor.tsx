import classNames from "classnames";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Textarea from "../FormElements/Textarea";
import { plugins } from "./markdown";
import Toolbar from "./Toolbar";

import style from "../Sections/News/style.module.css";
import { trimStart } from "lodash";

interface IProps {
  content: string;
  setContent: (con: string) => void;
}

export default function Editor({ content, setContent }: IProps) {
  const [preview, setPreview] = useState(false);

  const handleAddLink = (url: string) => {
    setContent(trimStart(content.concat(plugins.url(url))));
  };

  const handleAddImage = (url: string) => {
    setContent(trimStart(content.concat(plugins.image(url))));
  };

  return (
    <div className="border dark:border-dark-border rounded-md z-10">
      <Toolbar
        preview={preview}
        setPreview={(prev) => setPreview(prev)}
        getLink={handleAddLink}
        getImage={handleAddImage}
      />

      {preview ? (
        <ReactMarkdown className={classNames("px-2 py-1", style.content)}>
          {content}
        </ReactMarkdown>
      ) : (
        <Textarea
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            setContent(event.target.value)
          }
          rows={content.split("\n").length > 6 ? content.split("\n").length : 6}
          value={content}
          classes="!ring-0 !ring-offset-0 border-0"
        />
      )}
    </div>
  );
}
