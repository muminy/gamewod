import classNames from "classnames";
import { LinkFilledIconPath } from "constants/flaticons";
import { useState } from "react";
import Flaticon from "../Flaticon";
import Flexible from "../Flexible";
import ImageFilledIcon from "../icons/Image";
import Modal from "../Modal";
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
    <Flexible justifyContent="justify-between" className="border-b p-1">
      <Flexible>
        <button
          onClick={toggleImageLink}
          disabled={props.preview}
          className="h-[34px] w-[30px] flex justify-center items-center duration-200 rounded-md hover:bg-gray-100 text-gray-600"
        >
          <ImageFilledIcon size={14} />
        </button>
        <button
          disabled={props.preview}
          onClick={toggleMLink}
          className="h-[34px] w-[30px] flex justify-center items-center duration-200 rounded-md hover:bg-gray-100 text-gray-600"
        >
          <Flaticon
            paths={LinkFilledIconPath}
            viewBox="0 0 511.904 511.904"
            size={14}
          />
        </button>
      </Flexible>

      <Flexible className="space-x-2">
        <button
          onClick={toggle}
          className={classNames(
            "h-[34px] font-medium text-sm px-4 duration-200 hover:bg-gray-100 rounded-md text-gray-400",
            {
              "bg-gray-100 text-gray-900": !props.preview,
            }
          )}
        >
          Editor
        </button>
        <button
          onClick={toggle}
          className={classNames(
            "h-[34px] font-medium text-sm px-4 duration-200 hover:bg-gray-100 rounded-md text-gray-400",
            {
              "bg-gray-100 text-gray-900": props.preview,
            }
          )}
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
