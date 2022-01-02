import type { NextPage, GetServerSideProps } from "next";
import { useEffect } from "react";

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

const Signup: NextPage = () => {
  return (
    <Flexible className={style.userform_area}>
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

          <div className="xl:flex lg:flex block xl:space-x-4 lg:space-x-4">
            <div className={style.form_container}>
              <label
                htmlFor="name"
                className="font-semibold text-sm mb-1 block"
              >
                Adı
              </label>
              <input id="name" className={style.form_input} />
            </div>

            <div className={style.form_container}>
              <label
                htmlFor="surname"
                className="font-semibold text-sm mb-1 block"
              >
                Soyadı
              </label>
              <input id="surname" className={style.form_input} />
            </div>
          </div>

          <div className="w-full">
            <label htmlFor="mail" className="font-semibold text-sm mb-1 block">
              E-Mail
            </label>
            <input id="mail" className={style.form_input} />
          </div>

          <div className="xl:flex lg:flex block xl:space-x-4 lg:space-x-4">
            <div className={style.form_container}>
              <label
                htmlFor="password"
                className="font-semibold text-sm mb-1 block"
              >
                Password
              </label>
              <input id="password" className={style.form_input} />
            </div>

            <div className={style.form_container}>
              <label
                htmlFor="repassword"
                className="font-semibold text-sm mb-1 block"
              >
                Re-Password
              </label>
              <input id="repassword" className={style.form_input} />
            </div>
          </div>

          <button className="mt-4 px-4 mb-10 rounded-md py-1.5 text-sm font-medium bg-gray-900 text-gray-100">
            Kayıt ol
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
