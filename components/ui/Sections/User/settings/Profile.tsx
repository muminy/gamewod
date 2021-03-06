import classNames from "classnames";
import Flexible from "components/ui/Flexible";
import Notify from "components/ui/Notify";
import { IUser } from "constants/types";
import { makeProfileImageURL } from "helpers/utils";
import useToggle from "hooks/useToggle";
import useUserdata from "hooks/useUserdata";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  handleChangeUsername,
  handleCheckUserUsername,
  handleUpdateUserDetail,
} from "services/user";
import { handleAddUser } from "store/actions/user";
import style from "./style.module.css";
import Title from "./Title";

type IAvailable = "LOADED" | "LOADING" | "EXIST" | "AVAILABLE";

export default function Profile() {
  const { data } = useUserdata();
  const { value: loading, toggle } = useToggle(false);
  const { value: usernameLoading, toggle: unameToggle } = useToggle(false);

  const [username, setUsername] = useState("");
  const [availableUsername, setAvailableUsername] =
    useState<IAvailable>("LOADED");
  const [success, setSuccess] = useState(false);

  const match = /^[A-Za-z0-9]*$/;

  const dispatch = useDispatch();
  const { handleSubmit, register } = useForm();

  const setUser = (user: IUser, jwt: string) => {
    dispatch(handleAddUser(user));
    localStorage.setItem("usertoken", jwt);
  };

  const handleCheckUsername = () => {
    setAvailableUsername("LOADING");
    handleCheckUserUsername({ username, id: data.user?.id || -1 }).then(
      (response) => {
        // check username
        setAvailableUsername(response.available ? "AVAILABLE" : "EXIST");
      }
    );
  };

  const handleUpdateUsername = async () => {
    unameToggle();

    const response = await handleChangeUsername({
      username,
      id: data.user?.id || -1,
    });

    if (response.status === 200) {
      setUser(response.user, response.jwt);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }

    unameToggle();
  };

  const onSubmit = async (formData: any) => {
    const payload = { name: formData.name, image: null, headerImage: null };

    toggle();

    if (formData.image.length) {
      payload.image = formData.image[0];
    }

    if (formData.headerImage.length) {
      payload.headerImage = formData.headerImage[0];
    }

    const userdata = await handleUpdateUserDetail({
      ...payload,
      id: data.user?.id,
    });

    if (userdata.status === 200) {
      setUser(userdata.user, userdata.jwt);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }

    toggle();
  };

  useEffect(() => {
    if (username) {
      handleCheckUsername();
    }
  }, [username]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flexible className="grid grid-cols-12 gap-5 mb-10">
        <div className="xl:col-span-6 lg:col-span-6 col-span-12">
          <Title>Profil Foto??raf??</Title>
          <label htmlFor="pphoto" className={style.uplaodlabel}>
            Profil Foto??raf?? De??i??tir
          </label>
          <input
            id="pphoto"
            {...register("image")}
            className="hidden"
            type={"file"}
          />

          {data.user?.image && (
            <img
              alt="User profile"
              className="w-10 h-10 rounded-full"
              src={makeProfileImageURL(data.user.image)}
            />
          )}
        </div>
        <div className="xl:col-span-6 lg:col-span-6 col-span-12">
          <Title>Kapak Foto??raf??</Title>
          <label htmlFor="headerphoto" className={style.uplaodlabel}>
            Kapak Foto??raf?? De??i??tir
          </label>
          <input
            accept="image/*"
            id="headerphoto"
            {...register("headerImage")}
            className="hidden"
            type={"file"}
          />

          {data.user?.headerImage && (
            <img
              alt="user header"
              className="w-full h-20 rounded-md"
              src={makeProfileImageURL(data.user.headerImage)}
            />
          )}
        </div>
      </Flexible>

      <div className="mb-10">
        <label>
          <Title>Ad??n??z</Title>
          <input
            id="name"
            type={"text"}
            defaultValue={data.user?.name}
            {...register("name")}
            placeholder="Ad??n??z?? Giriniz"
            className={style.input}
          />
        </label>
      </div>

      <button type="submit" className={classNames(style.button, "!mb-10")}>
        {loading ? "Kay??t Ediliyor..." : "Kaydet"}
      </button>

      <div className="mb-10">
        <label>
          <Title>Kullan??c?? Ad??</Title>
          <input
            id="username"
            defaultValue={data.user?.username}
            onChange={(event) => setUsername(event.target.value)}
            type={"text"}
            placeholder="Kullan??c?? Ad??"
            className={style.input}
          />
        </label>

        {!username.match(match) ? (
          <span className="text-sm text-red-500 font-medium">
            L??tfen T??rk??e karakter kullanmay??n??z
          </span>
        ) : availableUsername === "LOADING" ? (
          <span>Kullan??c?? kontrol ediliyor...</span>
        ) : availableUsername === "AVAILABLE" ? (
          <span className="text-sm text-green-500 font-medium">
            Bu kullan??c?? ad?? kullan??labilir
          </span>
        ) : (
          availableUsername === "EXIST" && (
            <span className="text-sm text-red-500 font-medium">
              Bu kullan??c?? ad?? mevcut
            </span>
          )
        )}
      </div>

      <button
        type="button"
        onClick={handleUpdateUsername}
        className={style.button}
      >
        {usernameLoading ? "De??i??tiriliyor..." : "De??i??tir"}
      </button>

      {success && <Notify.Success title="De??i??iklikler Kay??t Edildi" />}
    </form>
  );
}
