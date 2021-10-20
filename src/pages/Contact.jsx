import React, {lazy} from "react";
import WrapSupsense from "../components/Shared/WrapSuspense"
const LazyLoaded = lazy(() => import("../components/Home/Contact"))

const Contact = () => {
  return (
    <WrapSupsense>
        <LazyLoaded />
    </WrapSupsense>)   
};
export default Contact;