import Flexible from "components/ui/Flexible";
import { IUser } from "constants/types";
import { validateEmail } from "helpers/utils";
import useToggle from "hooks/useToggle";
import useUserdata from "hooks/useUserdata";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { handleChangeEmail, handleChangePassword } from "services/user";
import { handleAddUser } from "store/actions/user";

export default function Security() {
  const { data } = useUserdata();

  const dispatch = useDispatch();

  const { handleSubmit, register } = useForm();
  const { value: eLoading, toggle: eToggle } = useToggle();
  const { value: pLoading, toggle: pToggle } = useToggle();

  const [email, setEmail] = useState(data.user?.email);
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorMessagePassword, setErrorMessagePassword] = useState("");

  const setUser = (user: IUser, jwt: string) => {
    dispatch(handleAddUser(user));
    localStorage.setItem("usertoken", jwt);
  };

  const handleUpdateEmail = async () => {
    eToggle();

    const response = await handleChangeEmail({
      id: data.user?.id || -1,
      email,
    });

    if (response.status === 200) {
      setUser(response.user, response.jwt);
    } else {
      setErrorMessage(response.error);
    }

    eToggle();
  };

  const handleUpdatePassword = async (formdata: any) => {
    pToggle();
    if (formdata.new_password === formdata.new_repassword) {
      const response = await handleChangePassword({
        id: data.user?.id || -1,
        new_password: formdata.new_password,
        old_password: formdata.old_password,
      });

      if (response.status === 200) {
        setUser(response.user, response.jwt);
      } else {
        setErrorMessagePassword(response.error);
      }
    } else {
      setErrorMessagePassword("Yeni Şifreler Uyuşmuyor");
    }
    pToggle();
  };

  return (
    <div>
      <form className="mb-10" onSubmit={handleSubmit(handleUpdatePassword)}>
        <div className="mb-5">
          <h3 className="font-semibold mb-1">Eski Şifreniz</h3>
          <input
            type={"password"}
            {...register("old_password", { required: true })}
            placeholder="Kullanıcı Adı"
            className="py-3 px-5 rounded-md w-full border"
          />
        </div>

        <Flexible className="mb-10 space-x-5">
          <div className="w-2/4">
            <h3 className="font-semibold mb-1">Yeni Şifreniz</h3>
            <input
              type={"password"}
              {...register("new_password", { required: true })}
              placeholder="Kullanıcı Adı"
              className="py-3 px-5 rounded-md w-full border"
            />
          </div>
          <div className="w-2/4">
            <h3 className="font-semibold mb-1">Yeni Şifre Tekrar</h3>
            <input
              type={"password"}
              {...register("new_repassword", { required: true })}
              placeholder="Kullanıcı Adı"
              className="py-3 px-5 rounded-md w-full border"
            />
          </div>
        </Flexible>

        <button
          type="submit"
          className="bg-gray-900 text-white mb-2 px-6 font-medium py-2.5 rounded-2xl"
        >
          {pLoading ? "Değiştiriliyor..." : "Değiştir"}
        </button>

        {errorMessagePassword && (
          <span className="text-sm block text-red-500 font-medium">
            {errorMessagePassword}
          </span>
        )}
      </form>

      <div className="mb-10">
        <h3 className="font-semibold text-lg">Email Adresiniz</h3>
        <div className="text-gray-500 text-sm mb-3">
          E-mail adresinizi sadece sizin istediğiniz kullanıcılar tarafından
          görülecektir.
        </div>
        <input
          type={"text"}
          defaultValue={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email Adresiniz"
          className="py-3 px-5 rounded-md w-full border mb-1"
        />

        {!validateEmail(email) && (
          <span className="text-sm mb-2 block text-red-500 font-medium">
            Geçerli Bir Email Adresi Giriniz.
          </span>
        )}

        {errorMessage && (
          <span className="text-sm block text-red-500 font-medium">
            {errorMessage}
          </span>
        )}
      </div>

      <button
        onClick={handleUpdateEmail}
        disabled={!validateEmail(email)}
        className="bg-gray-900 focus:ring-2 ring-offset-2 ring-gray-900 mb-4 text-white px-6 font-medium py-2.5 rounded-2xl"
      >
        {eLoading ? "Kayıt Ediliyor..." : "Kaydet"}
      </button>
    </div>
  );
}
