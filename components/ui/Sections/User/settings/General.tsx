import classNames from "classnames";
import Inputv2 from "components/ui/FormElements/Inputv2";
import Textareav2 from "components/ui/FormElements/Textareav2";
import Notify from "components/ui/Notify";
import { IUser } from "constants/types";
import useToggle from "hooks/useToggle";
import useUserdata from "hooks/useUserdata";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { handleUpdateGeneral } from "services/user";
import { handleAddUser } from "store/actions/user";

import style from "./style.module.css";
import Title from "./Title";

export default function General() {
  const { data } = useUserdata();
  const { value: loading, toggle } = useToggle(false);
  const { value: success, toggle: successToggle } = useToggle(false);
  const { handleSubmit, register } = useForm();

  const [bio, setBio] = useState(data.user?.bio || "");
  const [website, setWebsite] = useState(data.user?.website || "");

  const dispatch = useDispatch();

  const setUser = (user: IUser, jwt: string) => {
    dispatch(handleAddUser(user));
    localStorage.setItem("usertoken", jwt);
  };

  const onSubmit = handleSubmit((formdata) => {
    toggle();
    const socials = formdata;
    const payload = {
      socials,
      bio,
      website,
      id: data.user?.id,
    };

    handleUpdateGeneral(payload)
      .then((response) => {
        // ** get new user data
        setUser(response.user, response.jwt);
        successToggle();
        setTimeout(successToggle, 2000);
      })
      .finally(toggle);
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-10">
        <Title>Biyografiniz</Title>

        <Textareav2
          value={bio}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            setBio(event.target.value)
          }
          label="Genel Bilgi"
        />
      </div>

      <div className="mb-10">
        <Title>Sosyal Medya Hesaplarınız</Title>
        <div className="grid grid-cols-12 items-center gap-5">
          <label className={style.sociallabel}>
            <div className="px-4 py-3 dark:text-darktext-color font-semibold text-sm dark:bg-dark-border bg-gray-50">
              twitter.com
            </div>
            <input
              className={style.socialinput}
              {...register("twitter")}
              defaultValue={data.user?.socials.twitter}
              placeholder="Username"
            />
          </label>

          <label className={style.sociallabel}>
            <div className="px-4 py-3 dark:text-darktext-color font-semibold text-sm dark:bg-dark-border bg-gray-50">
              instagram.com
            </div>
            <input
              className={style.socialinput}
              placeholder="Username"
              defaultValue={data.user?.socials.instagram}
              {...register("instagram")}
            />
          </label>

          <label className={style.sociallabel}>
            <div className="px-4 dark:text-darktext-color py-3 font-semibold text-sm dark:bg-dark-border bg-gray-50">
              faceit.com
            </div>
            <input
              className={style.socialinput}
              {...register("faceit")}
              defaultValue={data.user?.socials.faceit}
              placeholder="Username"
            />
          </label>
        </div>
      </div>

      <div className="mb-10">
        <Title>Kişisel Websiteniz</Title>

        <Inputv2
          defaultValue={website}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setWebsite(event.target.value)
          }
          placeholder="https://gamewod.com"
          label="Website"
        />
      </div>

      <button type="submit" className={classNames(style.button, "!mb-10")}>
        {loading ? "Kayıt Ediliyor..." : "Kaydet"}
      </button>

      {success && <Notify.Success title="Değişiklikler Kayıt Edildi" />}
    </form>
  );
}
