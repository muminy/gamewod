import classNames from "classnames";
import Layout from "components/core/Layout";
import Editor from "components/ui/Editor";
import { IForum } from "constants/types";
import Link from "next/link";
import { useState } from "react";
import { handleCreateForum } from "services/forum";
import slugify from "slugify";

export default function Article() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [creating, setCreating] = useState(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [forum, setForum] = useState<IForum>();

  const handleCreate = () => {
    setCreating(true);
    handleCreateForum({ title, content }).then((response) => {
      // creating response data
      console.log("forum created");

      if (response.status === 200) {
        setSuccess(true);
        setForum(response.forum);
        setContent("");
        setTitle("");
      }

      setCreating(false);
    });
  };

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-20">
        <div className="mb-10">
          <div className="font-semibold mb-2">Konu Başlığı</div>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Sorum size..."
            className="focus:ring-2 ring-offset-2 mb-2 rounded-md ring-gray-200 border px-3 py-3 outline-none w-full focus:border-gray-200"
          />
          <p className="text-sm text-gray-500">
            Lütfen argo ve hakaret içeren kelimeler kullanmayınız
          </p>
        </div>

        <div className="mb-10">
          <div className="font-semibold">Konu İçeriği</div>
          <div className="text-sm mb-2 text-gray-500">
            Konu içeriği{" "}
            <a
              className="text-blue-600 font-medium"
              href="https://github.com/kaymal/Markdown#:~:text=Markdown%2C%20yaz%C4%B1lar%C4%B1m%C4%B1z%C4%B1%20d%C3%BCz%20metin%20olarak,bile%20metnin%20rahat%C3%A7a%20okunmas%C4%B1n%C4%B1%20sa%C4%9Flamakt%C4%B1r."
            >
              markdown
            </a>{" "}
            ile güçlendirilmiştir
          </div>

          <Editor
            content={content}
            setContent={(con: string) => setContent(con)}
          />
        </div>

        <button
          disabled={creating || success}
          onClick={handleCreate}
          className={classNames(
            "bg-blue-600 text-white py-3 px-10 rounded-full",
            {
              "bg-green-400 font-semibold mb-10 !text-gray-900": success,
              "disabled:opacity-40": !success,
            }
          )}
        >
          {success
            ? "Konu Açıldı"
            : creating
            ? "Konuyu Paylaşılıyor.."
            : "Konuyu Paylaş"}
        </button>

        {forum && (
          <div className="text-gray-500">
            Konunuz Açıldı, konunuza gitmek için{" "}
            <Link
              href={`/forum/${forum.id}/${slugify(forum.title, {
                replacement: "-",
                lower: true,
              })}`}
            >
              <a className="text-blue-600 font-medium">buraya</a>
            </Link>{" "}
            tıklayın.
          </div>
        )}
      </div>
    </Layout>
  );
}
