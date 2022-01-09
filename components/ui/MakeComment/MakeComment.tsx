import { MakeCommentSkeleton } from "components/Skeleton/MakeComment";
import { IComment } from "constants/types";
import { useState } from "react";
import { handleCreateForumComment } from "services/comment";
import { useAppSelector } from "store/hooks";
import Flexible from "../Flexible";
import Modal from "../Modal";
import LoginModal from "../Modal/components/Login.modal";

import style from "./style.module.css";

interface IProps {
  setComments: (comment: IComment) => void;
  fid: number;
}

export default function MakeComment(props: IProps) {
  const { setComments, fid } = props;

  const [loading, setLoading] = useState(false);
  const [openComment, setOpenComment] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [comment, setComment] = useState("");

  const user = useAppSelector((state) => state.user);

  const handleAddComment = () => {
    setLoading(true);
    handleCreateForumComment({ comment, fid }).then((response) => {
      // get if created comment
      setComments(response.comment);
      setComment("");
      setLoading(false);
      console.log(response);
    });
  };

  const toggle = () => setOpenComment(!openComment);
  const toggleModal = () => setOpenModal(!openModal);

  if (user.loading) {
    return <MakeCommentSkeleton />;
  } else if (user.user) {
    return (
      <div className="mb-10">
        <div className="text-gray-600 text-opacity-70 dark:text-gray-500 text-sm font-medium mb-3">
          Yorum yaparak görüşlerinizi bildirebilirsiniz.
        </div>

        {openComment ? (
          <div className="relative">
            <textarea
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="rounded-md w-full border-2 resize-none px-3 py-3 text-sm"
              placeholder="Yorum içeriği"
            />

            <Flexible justifyContent="justify-end" className="space-x-2">
              <button
                onClick={handleAddComment}
                className="text-sm font-medium rounded-md bg-[#f3effd] px-3 py-1.5"
              >
                {loading ? "Yorum yapılıyor..." : "Yorum yap"}
              </button>

              <button
                onClick={toggle}
                className="text-sm text-gray-500 font-medium rounded-md block bg-[#f5f5f5] px-3 py-1.5"
              >
                İptal
              </button>
            </Flexible>
          </div>
        ) : (
          <button onClick={toggle} className={style.button}>
            Yorum Yap
          </button>
        )}
      </div>
    );
  } else {
    return (
      <div className="mb-10">
        <div className={style.title}>
          Yorum yapabilmek için ilk önce giriş yapmalısınız
        </div>

        <button onClick={toggleModal} className={style.button}>
          Giriş Yap
        </button>

        <Modal
          toggle={toggleModal}
          open={openModal}
          size="sm"
          component={() => <LoginModal toggle={toggleModal} />}
        />
      </div>
    );
  }
}
