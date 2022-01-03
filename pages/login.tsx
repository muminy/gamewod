import type { NextPage } from "next";
import { useState } from "react";

// node packages
import classNames from "classnames";

// api

import style from "styles/signup.module.css";

import Flexible from "components/ui/Flexible";
import Link from "next/link";
import { handleUserLogin } from "services/user";
import { handleAddUser } from "store/actions/user";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";

const Login: NextPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogin = () => {
    setLoading(true);

    handleUserLogin({ username, password }).then((response) => {
      // check user login
      console.log(response);

      if (response.status === 200) {
        dispatch(handleAddUser(response.user));
        setSuccessMessage("Giriş başarılı");
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
          <a className={style.logo}>GW</a>
        </Link>
      </div>

      <div className={style.form_area}>
        <div className="xl:w-1/4 lg:w-2/4 w-full mx-auto">
          <div className="font-bold text-gray-700 mb-1">Giriş yap</div>

          <div className="text-3xl font-black text-gray-700 mb-3">
            Hoşgeldiniz!
          </div>

          <div className="font-medium text-gray-600 mb-10">
            Hesabınıza güvenli bir şekilde giriş yapabilirsiniz
          </div>

          <label
            htmlFor="username"
            className="font-semibold text-sm mb-1 block"
          >
            Kullanıcı adı
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            className={classNames(style.form_input, "mb-4")}
          />

          <label
            htmlFor="password"
            className="font-semibold block text-sm mb-1"
          >
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

          {successMessage && (
            <div className="text-green-700 text-sm font-medium mb-2">
              {successMessage}
            </div>
          )}

          <button
            onClick={handleLogin}
            className="mt-4 px-4 mb-10 rounded-md py-1.5 text-sm font-medium bg-gray-900 text-gray-100"
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
    </div>
  );
};

export default Login;
