import Flexible from "components/ui/Flexible";
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

type IAvailable = "LOADED" | "LOADING" | "EXIST" | "AVAILABLE";

export default function Profile() {
  const { data } = useUserdata();
  const { value: loading, toggle } = useToggle(false);
  const { value: usernameLoading, toggle: unameToggle } = useToggle(false);

  const [username, setUsername] = useState("");
  const [availableUsername, setAvailableUsername] =
    useState<IAvailable>("LOADED");

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
      <Flexible className="space-x-5 mb-10">
        <div className="w-2/4">
          <h3 className="font-semibold text-lg mb-3">Profil Fotoğrafı</h3>
          <label
            htmlFor="pphoto"
            className="flex items-center cursor-pointer mb-3 justify-center w-full border border-dashed h-20 font-medium"
          >
            Profil Fotoğrafı Değiştir
          </label>
          <input
            id="pphoto"
            {...register("image")}
            className="hidden"
            type={"file"}
          />

          {data.user?.image && (
            <img
              className="w-10 h-10 rounded-full"
              src={makeProfileImageURL(data.user.image)}
            />
          )}
        </div>
        <div className="w-2/4">
          <h3 className="font-semibold text-lg mb-3">Kapak Fotoğrafı</h3>
          <label
            htmlFor="headerphoto"
            className="flex items-center mb-3 cursor-pointer justify-center w-full border border-dashed h-20 font-medium"
          >
            Kapak Fotoğrafı Değiştir
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
              className="w-full h-20 rounded-md"
              src={makeProfileImageURL(data.user.headerImage)}
            />
          )}
        </div>
      </Flexible>

      <div className="mb-10">
        <h3 className="font-semibold text-lg">Adınız</h3>
        <div className="text-gray-500 text-sm mb-3">
          Adınızın herkes tarafından görülebileceğini unutumayınız.
        </div>
        <input
          id="pphoto"
          type={"text"}
          defaultValue={data.user?.name}
          {...register("name")}
          placeholder="Adınızı Giriniz"
          className="py-3 px-5 rounded-md w-full border"
        />
      </div>

      <button
        type="submit"
        className="bg-gray-900 focus:ring-2 ring-offset-2 ring-gray-900 mb-10 text-white px-6 font-medium py-2.5 rounded-2xl"
      >
        {loading ? "Kayıt Ediliyor..." : "Kaydet"}
      </button>

      <div className="mb-10">
        <h3 className="font-semibold text-lg">Kullanıcı Adı</h3>
        <div className="text-gray-500 text-sm mb-3">
          Kullanıcı adınızı girerken Türkçe karakter kullanmayınız.
        </div>
        <input
          id="pphoto"
          defaultValue={data.user?.username}
          onChange={(event) => setUsername(event.target.value)}
          type={"text"}
          placeholder="Kullanıcı Adı"
          className="py-3 px-5 rounded-md w-full border"
        />

        {!username.match(match) ? (
          <span className="text-sm text-red-500 font-medium">
            Lütfen Türkçe karakter kullanmayınız
          </span>
        ) : availableUsername === "LOADING" ? (
          <span>Kullanıcı kontrol ediliyor...</span>
        ) : availableUsername === "AVAILABLE" ? (
          <span className="text-sm text-green-500 font-medium">
            Bu kullanıcı adı kullanılabilir
          </span>
        ) : (
          availableUsername === "EXIST" && (
            <span className="text-sm text-red-500 font-medium">
              Bu kullanıcı adı mevcut
            </span>
          )
        )}
      </div>

      <button
        type="button"
        onClick={handleUpdateUsername}
        className="bg-gray-900 focus:ring-2 ring-offset-2 ring-gray-900 text-white px-6 font-medium py-2.5 rounded-2xl"
      >
        {usernameLoading ? "Değiştiriliyor..." : "Değiştir"}
      </button>
    </form>
  );
}
