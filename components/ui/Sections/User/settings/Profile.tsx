import Flexible from "components/ui/Flexible";
import useUserdata from "hooks/useUserdata";
import React from "react";
import { useForm } from "react-hook-form";

interface SubmitDataProps {
  username: string;
}

export default function Profile() {
  const { user } = useUserdata();

  const { handleSubmit, register } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const handleAddHeaderPhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;

    if (file?.length === 0) {
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flexible className="space-x-5 mb-10">
        <div className="w-2/4">
          <h3 className="font-semibold text-lg mb-3">Profil Fotoğrafı</h3>
          <label
            htmlFor="pphoto"
            className="flex items-center justify-center w-full border border-dashed h-20 font-medium"
          >
            Profil Fotoğrafı Değiştir
          </label>
          <input id="pphoto" className="hidden" type={"file"} />
        </div>
        <div className="w-2/4">
          <h3 className="font-semibold text-lg mb-3">Kapak Fotoğrafı</h3>
          <label
            htmlFor="headerphoto"
            className="flex items-center justify-center w-full border border-dashed h-20 font-medium"
          >
            Kapak Fotoğrafı Değiştir
          </label>
          <input
            accept="image/*"
            onChange={handleAddHeaderPhoto}
            id="headerphoto"
            className="hidden"
            type={"file"}
          />
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
          defaultValue={user.user?.name}
          {...register("name")}
          placeholder="Adınızı Giriniz"
          className="py-3 px-5 rounded-md w-full border"
        />
      </div>

      <button
        type="submit"
        className="bg-gray-900 mb-10 text-white px-6 font-medium py-2.5 rounded-2xl"
      >
        Kaydet
      </button>

      <div className="mb-10">
        <h3 className="font-semibold text-lg">Kullanıcı Adı</h3>
        <div className="text-gray-500 text-sm mb-3">
          Kullanıcı adınızı girerken Türkçe karakter kullanmayınız.
        </div>
        <input
          id="pphoto"
          defaultValue={user.user?.username}
          {...register("username")}
          type={"text"}
          placeholder="Kullanıcı Adı"
          className="py-3 px-5 rounded-md w-full border"
        />
      </div>

      <button
        type="submit"
        className="bg-gray-900 text-white px-6 font-medium py-2.5 rounded-2xl"
      >
        Değiştir
      </button>
    </form>
  );
}
