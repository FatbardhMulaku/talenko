import React, {lazy} from "react";
import WrapSupsense from "../components/Shared/WrapSuspense"
const LazyLoaded = lazy(() => import("../components/Services/index"))

const Services = () => {
  return (
    <WrapSupsense>
        <LazyLoaded />
    </WrapSupsense>)   
};
export default Services;