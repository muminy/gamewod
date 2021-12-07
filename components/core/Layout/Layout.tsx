import * as React from "react";
import Footer from "../Footer";
import Header from "../Header";

type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  return (
    <div className="min-h-screen dark:bg-black">
      <Header />
      {props.children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
