import { CancelFilledIconPath } from "constants/flaticons";
import STYLE from "constants/style";

// **components
import Layout from "components/core/Layout";
import Editor from "components/ui/Editor";
import Flaticon from "components/ui/Flaticon";
import Flexible from "components/ui/Flexible";
import Select from "components/ui/FormElements/Select";

// ** packages
import Link from "next/link";
import slugify from "slugify";
import classNames from "classnames";
import React, { useState } from "react";

import { IForum } from "constants/types";
import { handleCreateForum } from "services/forum";
import Input from "components/ui/FormElements/Input";
import { useAppSelector } from "store/hooks";
import NotFound from "components/ui/NotFound";
import Inputv2 from "components/ui/FormElements/Inputv2";

const categories = ["CSGO", "Valorant", "PUBG"];

export default function Article() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [creating, setCreating] = useState(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [forum, setForum] = useState<IForum>();
  const [category, setCategory] = useState<string[]>([]);

  const user = useAppSelector((state) => state.user);

  const handleCreate = () => {
    if (!title || !content) {
      setErrorMessage("Lütfen zorunlu alanları doldurunuz");
      setTimeout(() => setErrorMessage(""), 2000);
      return;
    }

    setCreating(true);
    handleCreateForum({ title, content, category }).then((response) => {
      // creating response data
      if (response.status === 200) {
        console.log("forum created");
        setSuccess(true);
        setForum(response.forum);
        setContent("");
        setTitle("");
      }
      setCreating(false);
    });
  };

  if (user.loading) {
    return <div className="">Yükleniyor</div>;
  } else if (!user.user) {
    return <NotFound />;
  }

  return (
    <Layout>
      <div
        className={classNames(
          STYLE.paddingHorizontal,
          "max-w-5xl mx-auto xl:py-10 lg:py-8 py-0"
        )}
      >
        {errorMessage && (
          <div className="text-red-400 mb-4 font-medium text-sm">
            {errorMessage}
          </div>
        )}
        <div className="mb-10">
          <label className="font-semibold text-lg">Başlık</label>
          <p className="shadow-text mb-5">
            Lütfen argo ve hakaret içeren kelimeler kullanmayınız
          </p>
          <input
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(event.target.value)
            }
            value={title}
            className="border-b-2 placeholder-inputs outline-none focus:border-gray-300 border-gray-200 w-full py-2"
            placeholder="Sorum size..."
          />
        </div>

        <div className="mb-10">
          <div className="font-semibold text-lg">Konu İçeriği</div>
          <div className="shadow-text mb-5">
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

        <div className="mb-10">
          <div className="font-semibold mb-2 text-lg">Konu Kategorisi</div>

          <select
            className="py-3 mb-4 border-b-2 placeholder-inputs w-full"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setCategory(category.concat(e.target.value))
            }
          >
            <option selected>Bir Kategori Seçin</option>
            {categories
              .filter((cate) => !category.includes(cate))
              .map((item) => (
                <option
                  disabled={category.includes(item)}
                  value={item}
                  key={item}
                  className="disabled:bg-green-500 text-gray-900 py-3"
                >
                  {item}
                </option>
              ))}
          </select>

          <div className="flex items-center">
            {category.map((item) => (
              <button
                onClick={() =>
                  setCategory(category.filter((cate) => cate !== item))
                }
                className="forum-category-selected-items"
                key={item}
              >
                <span>{item}</span>
                <Flaticon paths={CancelFilledIconPath} size={14} />
              </button>
            ))}
          </div>
        </div>

        {success && forum ? (
          <div className="text-gray-900 font-medium dark:text-gray-300">
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
        ) : (
          <button
            disabled={creating}
            onClick={handleCreate}
            className={"btn-dark"}
          >
            {creating ? "Konuyu Paylaşılıyor.." : "Konuyu Paylaş"}
          </button>
        )}
      </div>
    </Layout>
  );
}
