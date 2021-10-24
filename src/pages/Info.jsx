import React, {lazy} from "react";
import WrapSupsense from "../components/Shared/WrapSuspense"
const LazyLoaded = lazy(() => import("../components/Info/index"))

const Info = () => {
  return (
    <WrapSupsense>
        <LazyLoaded />
    </WrapSupsense>)   
};
export default Info;