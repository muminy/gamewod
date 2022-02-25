import classNames from "classnames";
import { LinkFilledIconPath } from "constants/flaticons";
import { useState } from "react";
import Flaticon from "../Flaticon";
import Flexible from "../Flexible";
import ImageFilledIcon from "../icons/Image";
import Modal from "../EditorModal";
import AddImage from "./tools/add-image";
import AddLink from "./tools/add-link";

interface Props {
  getLink: (url: string) => void;
  getImage: (url: string) => void;
  setPreview: (prev: boolean) => void;
  preview: boolean;
}

export default function Toolbar(props: Props) {
  const [openLinkModal, setOpenLinkModal] = useState(false);
  const [openImageModal, setOpenImageModal] = useState(false);

  const toggle = () => props.setPreview(!props.preview);
  const toggleMLink = () => setOpenLinkModal(!openLinkModal);
  const toggleImageLink = () => setOpenImageModal(!openImageModal);

  return (
    <Flexible className="mb-3 dark:border-dark-border space-x-2">
      <Flexible className="editor-toolbar">
        <button
          onClick={toggleImageLink}
          disabled={props.preview}
          className="editor-icon-btn"
        >
          <ImageFilledIcon size={14} />
        </button>
        <button
          disabled={props.preview}
          onClick={toggleMLink}
          className="editor-icon-btn"
        >
          <Flaticon
            paths={LinkFilledIconPath}
            viewBox="0 0 511.904 511.904"
            size={14}
          />
        </button>
      </Flexible>

      <Flexible className="editor-toolbar">
        <button
          onClick={toggle}
          className={classNames("editor-button", {
            "active-editor-btn": !props.preview,
          })}
        >
          Editor
        </button>
        <button
          onClick={toggle}
          className={classNames("editor-button", {
            "active-editor-btn": props.preview,
          })}
        >
          Ön İzleme
        </button>
      </Flexible>

      <Modal
        open={openLinkModal}
        title="Url Ekle"
        component={() => (
          <AddLink
            handleUrl={(url: string) => {
              props.getLink(url);
              toggleMLink();
            }}
          />
        )}
        onClose={toggleMLink}
      />

      <Modal
        open={openImageModal}
        title="Resim Ekle"
        component={() => (
          <AddImage
            handleUrl={(url: string) => {
              props.getImage(url);
              toggleImageLink();
            }}
          />
        )}
        onClose={toggleImageLink}
      />
    </Flexible>
  );
}
