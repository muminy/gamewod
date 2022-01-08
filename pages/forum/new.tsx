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

const categories = ["CSGO", "Valorant", "PUBG"];

export default function Article() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [creating, setCreating] = useState(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [forum, setForum] = useState<IForum>();
  const [category, setCategory] = useState<string[]>([]);

  const user = useAppSelector((state) => state.user);

  const handleCreate = () => {
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
        <div className="mb-10">
          <div className="font-semibold mb-2">Konu Başlığı</div>
          <Input
            value={title}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(event.target.value)
            }
            placeholder="Sorum size..."
            className="focus:ring-2 dark:focus:ring-0 ring-offset-2 mb-2 rounded-md ring-gray-200 border px-5 py-3 outline-none w-full focus:border-gray-200"
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

        <div className="mb-10">
          <div className="font-semibold mb-2">Konu Kategorisi</div>

          <Select
            className="py-3 px-6 mb-4"
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
          </Select>

          <Flexible className="space-x-2">
            {category.map((item) => (
              <button
                onClick={() =>
                  setCategory(category.filter((cate) => cate !== item))
                }
                className="px-3 py-1 text-sm hover:bg-gray-200 duration-200 bg-gray-100 flex items-center space-x-2 rounded-full"
                key={item}
              >
                <span>{item}</span>
                <Flaticon paths={CancelFilledIconPath} size={14} />
              </button>
            ))}
          </Flexible>
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
          <div className="text-gray-500 dark:text-gray-300">
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
