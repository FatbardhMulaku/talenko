import React, {lazy} from "react";
import WrapSupsense from "../components/Shared/WrapSuspense"
const LazyLoaded = lazy(() => import("../components/Works/index"))

const Work = () => {
  return (
    <WrapSupsense>
        <LazyLoaded />
    </WrapSupsense>)   
};
export default Work;