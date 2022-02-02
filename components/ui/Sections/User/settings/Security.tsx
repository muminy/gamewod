import Flexible from "components/ui/Flexible";
import Notify from "components/ui/Notify";
import { IUser } from "constants/types";
import { validateEmail } from "helpers/utils";
import useToggle from "hooks/useToggle";
import useUserdata from "hooks/useUserdata";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { handleChangeEmail, handleChangePassword } from "services/user";
import { handleAddUser } from "store/actions/user";
import style from "./style.module.css";

export default function Security() {
  const { data } = useUserdata();

  const dispatch = useDispatch();

  const { handleSubmit, register } = useForm();
  const { value: eLoading, toggle: eToggle } = useToggle();
  const { value: pLoading, toggle: pToggle } = useToggle();

  const [email, setEmail] = useState(data.user?.email);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessagePassword, setErrorMessagePassword] = useState("");
  const [success, setSuccess] = useState(false);

  const setUser = (user: IUser, jwt: string) => {
    dispatch(handleAddUser(user));
    localStorage.setItem("usertoken", jwt);
  };

  const handleUpdateEmail = async () => {
    eToggle();

    const response = await handleChangeEmail({
      id: data.user?.id,
      email,
    });

    if (response.status === 200) {
      setUser(response.user, response.jwt);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } else {
      setErrorMessage(response.error);
      setTimeout(() => setErrorMessage(""), 2000);
    }

    eToggle();
  };

  const handleUpdatePassword = async (formdata: any) => {
    pToggle();
    if (formdata.new_password === formdata.new_repassword) {
      const response = await handleChangePassword({
        id: data.user?.id,
        new_password: formdata.new_password,
        old_password: formdata.old_password,
      });

      if (response.status === 200) {
        setUser(response.user, response.jwt);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 2000);
      } else {
        setErrorMessagePassword(response.error);
        setTimeout(() => setErrorMessagePassword(""), 2000);
      }
    } else {
      setErrorMessagePassword("Yeni Şifreler Uyuşmuyor");
      setTimeout(() => setErrorMessagePassword(""), 2000);
    }
    pToggle();
  };

  return (
    <div>
      <form className="mb-10" onSubmit={handleSubmit(handleUpdatePassword)}>
        <div className="mb-5">
          <label htmlFor="pass" className={style.formTitle}>
            Eski Şifreniz
          </label>
          <input
            type={"password"}
            id="pass"
            {...register("old_password", { required: true })}
            placeholder="Kullanıcı Adı"
            className={style.input}
          />
        </div>

        <Flexible className="mb-10 space-x-5">
          <div className="w-2/4">
            <label htmlFor="new_pass" className={style.formTitle}>
              Yeni Şifreniz
            </label>
            <input
              type={"password"}
              id="new_pass"
              {...register("new_password", { required: true })}
              placeholder="Kullanıcı Adı"
              className={style.input}
            />
          </div>
          <div className="w-2/4">
            <label htmlFor="new_pas" className={style.formTitle}>
              Yeni Şifre Tekrar
            </label>
            <input
              type={"password"}
              id="new_pas"
              {...register("new_repassword", { required: true })}
              placeholder="Kullanıcı Adı"
              className={style.input}
            />
          </div>
        </Flexible>

        <button type="submit" className={style.button}>
          {pLoading ? "Değiştiriliyor..." : "Değiştir"}
        </button>
      </form>

      <div className="mb-10">
        <label htmlFor="email" className="font-semibold text-lg">
          Email Adresiniz
        </label>
        <div className="text-gray-500 text-sm mb-3">
          E-mail adresinizi sadece sizin istediğiniz kullanıcılar tarafından
          görülecektir.
        </div>
        <input
          type={"text"}
          id="email"
          defaultValue={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email Adresiniz"
          className={style.input}
        />

        {!validateEmail(email) && (
          <span className="text-sm mb-2 block text-red-500 font-medium">
            Geçerli Bir Email Adresi Giriniz.
          </span>
        )}
      </div>

      <button
        onClick={handleUpdateEmail}
        disabled={!validateEmail(email)}
        className={style.button}
      >
        {eLoading ? "Kayıt Ediliyor..." : "Kaydet"}
      </button>

      {success && <Notify.Success title="Değişiklikler Kayıt Edildi" />}
      {(errorMessage || errorMessagePassword) && (
        <Notify.Error title={errorMessage || errorMessagePassword} />
      )}
    </div>
  );
}
