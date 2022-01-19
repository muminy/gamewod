import "../styles/font.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import { FunctionComponent, useEffect, ReactNode, Fragment } from "react";

import { Provider, useDispatch } from "react-redux";
import { ThemeProvider } from "next-themes";
import store from "store";
import getUsertoken from "helpers/usertoken";
import { verify } from "helpers/jwt";
import { handleAddUser } from "store/actions/user";
// ** components

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Provider store={store}>
        <ProvideUser>
          <Component {...pageProps} />
        </ProvideUser>
      </Provider>
    </ThemeProvider>
  );
}

interface IProps {
  children: ReactNode;
}

const ProvideUser: FunctionComponent<IProps> = (props: IProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const usertoken = getUsertoken();

    verify(usertoken || "", (error, document) => {
      if (error) {
        dispatch(handleAddUser(null));
        console.log("Token expired");
        return;
      }
      dispatch(handleAddUser(document));
    });
  }, []);

  return <div>{props.children}</div>;
};

export default MyApp;
