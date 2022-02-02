import classNames from "classnames";
import F from "constants/style";
import useToggle from "hooks/useToggle";

import style from "styles/about.module.css";

import { useEffect, useState } from "react";
import { handleCreateContact } from "services/contact";

import Layout from "components/core/Layout";
import InputV2 from "components/ui/FormElements/Inputv2";
import TextareaV2 from "components/ui/FormElements/Textareav2";
import Notify from "components/ui/Notify";

export default function Tasks() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [thread, setThread] = useState("");
  const [content, setContent] = useState("");

  const { value: loading, toggle: loadingToggle } = useToggle();
  const { value: success, toggle: successToggle } = useToggle();
  const { value: error, toggle: errorToggle } = useToggle();

  const clearData = () => {
    setName("");
    setEmail("");
    setThread("");
    setContent("");
  };

  const handleNewContact = async () => {
    if (!name || !email || !thread || !content) {
      errorToggle();
      setTimeout(errorToggle, 2000);
      return;
    }

    loadingToggle();

    const contact = await handleCreateContact({
      content,
      name,
      email,
      thread,
      type: "BUG",
    });

    if (contact.status === 200) {
      successToggle();
      setTimeout(successToggle, 2000);
      clearData();
    }

    loadingToggle();
  };

  return (
    <Layout
      seo={{ title: "Hakkımızda", openGraph: { title: "Hakkımızda" } }}
      className={classNames(F.paddingHorizontal)}
    >
      <div
        className={classNames(
          "bg-blue-50 dark:bg-black",
          style.staticcontainer
        )}
      >
        <div className="max-w-5xl mx-auto">
          <h3 className="font-bold dark:text-white mb-10 text-lg text-gray-700 text-opacity-90">
            Bug & Hata Bildirimi
          </h3>
          <div className={classNames(style.content, "mb-10")}>
            <InputV2
              placeholder="Emare"
              value={name}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setName(event.target.value)
              }
              label="Adınız"
              isRequired
            />

            <InputV2
              placeholder="aaaa@aaa.com"
              value={email}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(event.target.value)
              }
              label="Email Adresiniz"
              isRequired
            />

            <InputV2
              placeholder="x hatası"
              value={thread}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setThread(event.target.value)
              }
              label="Konu"
              isRequired
            />

            <TextareaV2
              placeholder="x hatası detayı"
              value={content}
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                setContent(event.target.value)
              }
              label="İçerik"
              isRequired
            />

            <button
              onClick={handleNewContact}
              className="py-3 px-6 dark:bg-dark-border bg-gray-900 text-white rounded-xl focus:ring-2 ring-gray-900 ring-offset-2"
            >
              {loading ? "Gönderiliyor..." : "Gönder"}
            </button>
          </div>
        </div>
      </div>

      {success && (
        <Notify.Success title="Teşekkürler, Geri Bildiriminiz Aldık" />
      )}
      {error && <Notify.Error title="Gerekli Alanları Doldurunuz" />}
    </Layout>
  );
}
