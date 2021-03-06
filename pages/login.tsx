import type { NextPage } from "next";
import { useState } from "react";

// node packages
import classNames from "classnames";

// api

import style from "styles/signup.module.css";

import Link from "next/link";
import Head from "next/head";

import { handleUserLogin } from "services/user";
import { handleAddUser } from "store/actions/user";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import Notify from "components/ui/Notify";
import Logo from "components/ui/Logo";

const Login: NextPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogin = () => {
    setLoading(true);

    handleUserLogin({ username, password }).then((response) => {
      // check user login

      if (response.status === 200) {
        dispatch(handleAddUser(response.user));
        setSuccessMessage(true);
        setTimeout(() => router.push("/"), 1000);
        console.log("user logged");
        // set user token
        localStorage.setItem("usertoken", response.jwt);
      } else {
        setErrorMessage(response.error);
        setTimeout(() => setErrorMessage(""), 2000);
      }

      setLoading(false);
    });
  };

  return (
    <div className={style.userform_area}>
      <Head>
        <title>Gamewod.com | Giriş</title>
      </Head>
      <div className={style.form_sidebar}>
        <img src="https://rarible.com/9db0a6651f2ce1120811.jpg" />

        <Link href={"/"}>
          <a className={style.logo}>
            <Logo />
          </a>
        </Link>
      </div>

      <div className={style.form_area}>
        <div className="xl:w-1/4 lg:w-2/4 w-full mx-auto">
          <div className="font-bold text-gray-700 dark:text-gray-100 mb-1">
            Giriş yap
          </div>

          <div className="text-3xl font-black text-gray-700 dark:text-gray-100 mb-3">
            Hoşgeldiniz!
          </div>

          <div className="font-medium text-gray-600 dark:text-gray-400  mb-10">
            Hesabınıza güvenli bir şekilde giriş yapabilirsiniz
          </div>

          <label htmlFor="username" className={style.label}>
            Kullanıcı adı
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            className={classNames(style.form_input, "mb-4")}
          />

          <label htmlFor="password" className={style.label}>
            Şifre
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type={"password"}
            className={classNames(style.form_input, "mb-4")}
          />

          {errorMessage && (
            <div className="text-red-500 text-sm font-medium mb-2">
              {errorMessage}
            </div>
          )}

          <button
            onClick={handleLogin}
            className="mt-4 px-4 mb-10 rounded-md py-1.5 text-sm font-medium dark:bg-dark-border bg-gray-900 text-gray-100"
          >
            {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
          </button>

          <div className="font-medium">
            Hesabın yok mu?
            <Link href="/signup">
              <a className="text-blue-600 ml-1">Kayıt ol</a>
            </Link>
          </div>
        </div>
      </div>

      {successMessage && <Notify.Success title="Giriş Başarılı" />}
    </div>
  );
};

export default Login;
