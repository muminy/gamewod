import classNames from "classnames";
import Layout from "components/core/Layout";
import Flaticon from "components/ui/Flaticon";
import Flexible from "components/ui/Flexible";
import ImageFilledIcon from "components/ui/icons/Image";
import { LinkFilledIconPath } from "constants/flaticons";
import { useState } from "react";

import ReactMarkdown from "react-markdown";

export default function Article() {
  const [preview, setPreview] = useState(false);
  const [content, setContent] = useState("");

  const addLink = () => {
    setContent(content.concat("2222"));
  };

  const toggle = () => setPreview(!preview);

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-20">
        <div className="mb-10">
          <div className="font-semibold mb-2">Konu Başlığı</div>
          <input
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

          <Flexible
            justifyContent="justify-between"
            className="mb-3 border p-1 rounded-md"
          >
            <Flexible>
              <button className="h-[34px] w-[30px] flex justify-center items-center duration-200 rounded-md hover:bg-gray-100 text-gray-600">
                <ImageFilledIcon size={14} />
              </button>
              <button
                onClick={addLink}
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
                    "bg-gray-100 text-gray-900": !preview,
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
                    "bg-gray-100 text-gray-900": preview,
                  }
                )}
              >
                Ön İzleme
              </button>
            </Flexible>
          </Flexible>

          {preview ? (
            <ReactMarkdown className="border rounded-md resize-none outline-none w-full p-5">
              {content}
            </ReactMarkdown>
          ) : (
            <textarea
              placeholder="İçerik..."
              rows={6}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="border focus:ring-2 ring-offset-2 mb-2 rounded-md ring-gray-200 resize-none outline-none w-full p-5"
            />
          )}
        </div>

        <button className="bg-blue-600 text-white py-3 px-10 rounded-full">
          Konuyu Paylaş
        </button>
      </div>
    </Layout>
  );
}
