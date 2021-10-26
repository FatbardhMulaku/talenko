import React, {lazy} from "react";
import WrapSupsense from "../components/Shared/WrapSuspense"
import Header from "../components/Shared/Header/Header";
const LazyLoaded = lazy(() => import("../components/Info/index"))

const Info = () => {
  return (
    <WrapSupsense>
    <Header Bcolor="transparent" pageColor="info" />
        <LazyLoaded />
    </WrapSupsense>)   
};
export default Info;