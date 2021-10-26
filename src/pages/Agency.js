import React, {lazy} from "react";
import WrapSupsense from "../components/Shared/WrapSuspense"
import Header from "../components/Shared/Header/Header";
const LazyLoaded = lazy(() => import("../components/Agency/index"))

const Agency = () => {
  return (
    <WrapSupsense>
        <Header Bcolor="transparent" pageColor="agency"/>
        <LazyLoaded />
    </WrapSupsense>)   
};
export default Agency;