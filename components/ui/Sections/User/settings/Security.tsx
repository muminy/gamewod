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
import Title from "./Title";

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
      setErrorMessagePassword("Yeni ??ifreler Uyu??muyor");
      setTimeout(() => setErrorMessagePassword(""), 2000);
    }
    pToggle();
  };

  return (
    <div>
      <form className="mb-10" onSubmit={handleSubmit(handleUpdatePassword)}>
        <label className="mb-5 block">
          <Title className="!mb-3">Eski ??ifreniz</Title>
          <input
            type={"password"}
            id="pass"
            {...register("old_password", { required: true })}
            placeholder="Kullan??c?? Ad??"
            className={style.input}
          />
        </label>

        <Flexible className="mb-10 space-x-5">
          <label className="w-2/4">
            <Title className="!mb-3">Yeni ??ifreniz</Title>
            <input
              type={"password"}
              id="new_pass"
              {...register("new_password", { required: true })}
              placeholder="Kullan??c?? Ad??"
              className={style.input}
            />
          </label>
          <label className="w-2/4">
            <Title className="!mb-3">Yeni ??ifre Tekrar</Title>
            <input
              type={"password"}
              id="new_pas"
              {...register("new_repassword", { required: true })}
              placeholder="Kullan??c?? Ad??"
              className={style.input}
            />
          </label>
        </Flexible>

        <button type="submit" className={style.button}>
          {pLoading ? "De??i??tiriliyor..." : "De??i??tir"}
        </button>
      </form>

      <div className="mb-10">
        <label>
          <Title className="!mb-1">Email Adresiniz</Title>
          <div className="text-gray-500 shadow-text text-sm mb-3">
            E-mail adresinizi sadece sizin istedi??iniz kullan??c??lar taraf??ndan
            g??r??lecektir.
          </div>
          <input
            type={"text"}
            id="email"
            defaultValue={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email Adresiniz"
            className={style.input}
          />
        </label>

        {!validateEmail(email) && (
          <span className="text-sm mb-2 block text-red-500 font-medium">
            Ge??erli Bir Email Adresi Giriniz.
          </span>
        )}
      </div>

      <button
        onClick={handleUpdateEmail}
        disabled={!validateEmail(email)}
        className={style.button}
      >
        {eLoading ? "Kay??t Ediliyor..." : "Kaydet"}
      </button>

      {success && <Notify.Success title="De??i??iklikler Kay??t Edildi" />}
      {(errorMessage || errorMessagePassword) && (
        <Notify.Error title={errorMessage || errorMessagePassword} />
      )}
    </div>
  );
}
