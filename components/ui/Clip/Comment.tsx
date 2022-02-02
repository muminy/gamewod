import { RightArrowPath } from "constants/flaticons";
import useToggle from "hooks/useToggle";
import Flaticon from "../Flaticon";
import MakeComment from "../MakeComment";
import Modal from "../Modal";
import Share from "../Modal/components/Share.modal";
import ForumComment from "../Sections/Forums/Content/ForumComment";
import commentlist from "./db.json";

export default function Comments() {
  const { value: openModal, toggle: toogleModal } = useToggle();

  return (
    <div>
      <button
        onClick={toogleModal}
        className="flex mb-10 w-full rounded-xl bg-gray-50 hover:bg-gray-100 px-6 py-3 items-center justify-between"
      >
        <span className="font-semibold text-sm">Klibi paylaş</span>

        <svg
          width="14"
          height="10"
          viewBox="0 0 14 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 5L13.3536 4.64645L13.7071 5L13.3536 5.35355L13 5ZM1 5.5C0.723858 5.5 0.5 5.27614 0.5 5C0.5 4.72386 0.723858 4.5 1 4.5V5.5ZM9.35355 0.646447L13.3536 4.64645L12.6464 5.35355L8.64645 1.35355L9.35355 0.646447ZM13.3536 5.35355L9.35355 9.35355L8.64645 8.64645L12.6464 4.64645L13.3536 5.35355ZM13 5.5H1V4.5H13V5.5Z"
            fill="currentColor"
          />
        </svg>
      </button>

      {/* <div className="mb-10">
        {commentlist.map((item) => (
          <ForumComment {...item} />
        ))}
      </div> */}

      <MakeComment fid={1} setComments={() => {}} />

      <Modal
        open={openModal}
        toggle={toogleModal}
        component={() => <Share toggle={toogleModal} />}
        size="sm"
      />
    </div>
  );
}
