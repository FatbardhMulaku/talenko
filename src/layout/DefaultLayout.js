import React from "react";
import Footer from "../components/Shared/Footer";
import Header from "../components/Shared/Header/Header";

const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <div id="back-to-top-anchor"></div>
      <Header Bcolor="transparent" />
      <main>{children}</main>
      

      <Footer />
    </div>
  );
};

export default DefaultLayout;