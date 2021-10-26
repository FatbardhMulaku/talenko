import React, { lazy } from "react";
import WrapSupsense from "../components/Shared/WrapSuspense";
import Header from "../components/Shared/Header/Header";
import MenuIcon from "../components/Shared/Menu/MenuIcon";
const LazyLoaded = lazy(() => import("../components/Works/index"))

const Work = (props) => {
  return (
    <WrapSupsense>
      <Header Bcolor="transparent" pageColor="work" />
      <MenuIcon menutoggle={props.toggle} color="#F2B100"/>
      <LazyLoaded />
    </WrapSupsense>)
};
export default Work;