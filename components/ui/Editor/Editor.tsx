import { useState } from "react";
import { trimStart } from "lodash";
import classNames from "classnames";
import ReactMarkdown from "react-markdown";

import { plugins } from "./markdown";

import Toolbar from "./Toolbar";
import style from "../Sections/News/style.module.css";

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
    <div className="dark:border-dark-border rounded-md z-10">
      {preview ? (
        <ReactMarkdown
          className={classNames(
            "border-2 border-dashed p-3 mb-3 rounded-md",
            style.content
          )}
        >
          {content}
        </ReactMarkdown>
      ) : (
        <textarea
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            setContent(event.target.value)
          }
          className="w-full border-2 border-dashed placeholder-inputs p-3 mb-3 rounded-md border-gray-200 resize-none outline-none focus:border-gray-400"
          placeholder="İçerik"
          rows={content.split("\n").length > 6 ? content.split("\n").length : 6}
          value={content}
        />
      )}
      <Toolbar
        preview={preview}
        setPreview={(prev) => setPreview(prev)}
        getLink={handleAddLink}
        getImage={handleAddImage}
      />
    </div>
  );
}
