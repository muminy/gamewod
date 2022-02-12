import classNames from "classnames";
import Layout from "components/core/Layout";
import InputV2 from "components/ui/FormElements/Inputv2";
import TextareaV2 from "components/ui/FormElements/Textareav2";
import Notify from "components/ui/Notify";
import F from "constants/style";
import useToggle from "hooks/useToggle";
import React, { useState } from "react";
import { handleCreateContact } from "services/contact";
import style from "styles/about.module.css";

export default function Contact() {
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
      type: "CONTACT",
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
      seo={{ title: "İletişim" }}
      className={classNames(
        style.staticcontainer,
        "bg-pink-50 h-full dark:bg-black"
      )}
    >
      <div className="max-w-5xl mx-auto">
        <h3 className="font-bold dark:text-white mb-1 text-lg text-gray-700 text-opacity-90">
          İletişim
        </h3>
        <div className="text-gray-600 dark:text-darktext-color mb-5">
          Bizimle iletişime geçebilirsiniz
        </div>
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
            className="py-3 dark:bg-dark-border px-6 bg-gray-900 text-white rounded-xl focus:ring-2 ring-gray-900 ring-offset-2"
          >
            {loading ? "Gönderiliyor..." : "Gönder"}
          </button>
        </div>

        <div className="mb-4">
          <div className="font-bold dark:text-opacity-90 dark:text-white text-lg">
            Genel İletişim
          </div>
          <div className="font-medium dark:font-normal dark:text-white dark:text-opacity-60 text-gray-700 text-opacity-80">
            info@gamewod.com
          </div>
        </div>
      </div>

      {success && <Notify.Success title="Geri Bildiriminiz Aldık" />}
      {error && <Notify.Error title="Gerekli Alanları Doldurunuz" />}
    </Layout>
  );
}
