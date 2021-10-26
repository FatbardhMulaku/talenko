import React, { lazy } from "react";
import WrapSupsense from "../components/Shared/WrapSuspense";
import Header from "../components/Shared/Header/Header";
import MenuIcon from "../components/Shared/Menu/MenuIcon";
const LazyLoaded = lazy(() => import("../components/Services/index"))

const Services = (props) => {
  return (
    <WrapSupsense>
      <Header Bcolor="transparent" pageColor="service" />
      <MenuIcon menutoggle={props.toggle} color="#0FF1CA"/>
      <LazyLoaded />
    </WrapSupsense>)
};
export default Services;