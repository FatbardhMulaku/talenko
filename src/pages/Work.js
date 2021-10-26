import React, { lazy } from "react";
import WrapSupsense from "../components/Shared/WrapSuspense";
import Header from "../components/Shared/Header/Header";
const LazyLoaded = lazy(() => import("../components/Works/index"))

const Work = () => {
  return (
    <WrapSupsense>
      <Header Bcolor="transparent" pageColor="work" />
      <LazyLoaded />
    </WrapSupsense>)
};
export default Work;