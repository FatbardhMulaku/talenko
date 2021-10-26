import React, { lazy } from "react";
import WrapSupsense from "../components/Shared/WrapSuspense";
import Header from "../components/Shared/Header/Header";
const LazyLoaded = lazy(() => import("../components/Services/index"))

const Services = () => {
  return (
    <WrapSupsense>
      <Header Bcolor="transparent" pageColor="service" />
      <LazyLoaded />
    </WrapSupsense>)
};
export default Services;