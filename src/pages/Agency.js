import React, {lazy} from "react";
import WrapSupsense from "../components/Shared/WrapSuspense"
const LazyLoaded = lazy(() => import("../components/Agency/index"))

const Agency = () => {
  return (
    <WrapSupsense>
        <LazyLoaded />
    </WrapSupsense>)   
};
export default Agency;