import React, { lazy } from "react";
import WrapSupsense from "../components/Shared/WrapSuspense"
import Header from "../components/Shared/Header/Header";
import MenuIcon from "../components/Shared/Menu/MenuIcon";
const LazyLoaded = lazy(() => import("../components/Home/Contact"))

const Contact = (props) => {
  return (
    <WrapSupsense>
      <Header Bcolor="transparent" pageColor="home" />
      <MenuIcon menutoggle={props.toggle} color="#fff"/>
      <LazyLoaded />
    </WrapSupsense>)
};
export default Contact;