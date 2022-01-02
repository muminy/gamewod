import type { NextPage, GetServerSideProps } from "next";
import { useEffect, useState } from "react";

// ** components
import Grid from "components/ui/Grid";
import BlogSection from "components/ui/Sections/Blogs";
import Hero from "components/ui/Sections/Hero";
import Forums from "components/ui/Sections/Forums";
import STYLE from "constants/style";

// node packages
import classNames from "classnames";
import qs from "qs";

// api

import style from "styles/signup.module.css";

import Flexible from "components/ui/Flexible";
import Link from "next/link";
import Head from "next/head";
import {
  handleCheckUserEmail,
  handleCheckUserUsername,
  handleUserSignup,
} from "services/user";
import { useDispatch } from "react-redux";
import { handleAddUser } from "store/actions/user";
import { useRouter } from "next/router";

type IAvailable = "LOADED" | "LOADING" | "EXIST" | "AVAILABLE";

const Signup: NextPage = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [availableUsername, setAvailableUsername] =
    useState<IAvailable>("LOADED");
  const [availableEmail, setAvailableEmail] = useState<IAvailable>("LOADED");

  const dispatch = useDispatch();
  const router = useRouter();

  const match = /^[A-Za-z0-9]*$/;

  const handleCheckUsername = () => {
    setAvailableUsername("LOADING");
    handleCheckUserUsername({ username, id: -1 }).then((response) => {
      // check username
      setAvailableUsername(response.available ? "AVAILABLE" : "EXIST");
    });
  };

  const handleCheckEmail = () => {
    setAvailableEmail("LOADING");
    handleCheckUserEmail({ email, id: -1 }).then((response) => {
      // check email
      setAvailableEmail(response.available ? "AVAILABLE" : "EXIST");
    });
  };

  const handleSignup = () => {
    setLoading(true);

    if (rePassword !== password) {
      setErrorMessage("Şifreler eşleşmiyor");
      setTimeout(() => setErrorMessage(""), 1000);
      setLoading(false);
      return;
    }

    if (!name || !password || !email || !username) {
      setErrorMessage("Lütfen tüm alanları doldurunuz");
      setTimeout(() => setErrorMessage(""), 1000);
      setLoading(false);
      return;
    }

    handleUserSignup({ name, username, password, email }).then((response) => {
      // response user singup
      console.log(response);
      setSuccessMessage("Kayıt olundu");
      setLoading(false);
      dispatch(handleAddUser(response.user));

      // set localstorage token
      localStorage.setItem("usertoken", response.jwt);
      router.push("/");
    });
  };

  useEffect(() => {
    if (username.length) {
      handleCheckUsername();
    }
  }, [username]);

  useEffect(() => {
    if (email.length) {
      handleCheckEmail();
    }
  }, [email]);

  return (
    <Flexible className={style.userform_area}>
      <Head>
        <title>Gamewod.com | Kayıt ol</title>
      </Head>

      <div className={style.form_sidebar}>
        <img src="https://rarible.com/9db0a6651f2ce1120811.jpg" />

        <Link href={"/"}>
          <a className={style.logo}>GW</a>
        </Link>
      </div>

      <div className={style.form_area}>
        <div className="xl:w-2/4 lg:w-3/4 w-full mx-auto">
          <div className="text-3xl font-black text-gray-700 mb-3">Kayıt ol</div>

          <div className="font-medium text-gray-600 mb-10">
            Güvenli bir şekilde kayıt olup topluluğumuza katılabilirsiniz.
          </div>

          <div className="xl:flex lg:flex block xl:space-x-4 lg:space-x-4 mb-3">
            <div className={style.form_container}>
              <label
                htmlFor="name"
                className="font-semibold text-sm mb-1 block"
              >
                İsim
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                className={style.form_input}
              />
            </div>

            <div className={style.form_container}>
              <label
                htmlFor="surname"
                className="font-semibold text-sm mb-1 block"
              >
                Kullanıcı adı
              </label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id="surname"
                autoComplete="false"
                autoCorrect="false"
                className={style.form_input}
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
          </div>

          <div className="w-full mb-3">
            <label htmlFor="mail" className="font-semibold text-sm mb-1 block">
              E-Mail
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="mail"
              autoComplete="false"
              className={style.form_input}
            />
            {availableEmail === "LOADING" ? (
              <span>Kullanıcı kontrol ediliyor...</span>
            ) : availableEmail === "AVAILABLE" ? (
              <span className="text-sm text-green-500 font-medium">
                Bu kullanıcı Email kullanılabilir
              </span>
            ) : (
              availableEmail === "EXIST" && (
                <span className="text-sm text-red-500 font-medium">
                  Bu kullanıcı Email mevcut
                </span>
              )
            )}
          </div>

          <div className="xl:flex lg:flex block xl:space-x-4 lg:space-x-4 mb-3">
            <div className={style.form_container}>
              <label
                htmlFor="password"
                className="font-semibold text-sm mb-1 block"
              >
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                type={"password"}
                className={style.form_input}
              />
            </div>

            <div className={style.form_container}>
              <label
                htmlFor="repassword"
                className="font-semibold text-sm mb-1 block"
              >
                Re-Password
              </label>
              <input
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
                id="repassword"
                type={"password"}
                className={style.form_input}
              />
            </div>
          </div>

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
            onClick={handleSignup}
            disabled={
              !availableUsername || !availableEmail || !username.match(match)
            }
            className="mt-4 px-4 mb-10 disabled:bg-opacity-75 rounded-md py-1.5 text-sm font-medium bg-gray-900 text-gray-100"
          >
            {loading ? "Kayıt olunuyor.." : "Kayıt ol"}
          </button>

          <div className="font-medium">
            Hesabın var mı?
            <Link href="/login">
              <a className="text-blue-600 ml-1">Giriş yap</a>
            </Link>
          </div>
        </div>
      </div>
    </Flexible>
  );
};

export default Signup;
