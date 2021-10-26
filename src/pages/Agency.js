import React, {lazy} from "react";
import WrapSupsense from "../components/Shared/WrapSuspense"
import Header from "../components/Shared/Header/Header";
import MenuIcon from "../components/Shared/Menu/MenuIcon";
const LazyLoaded = lazy(() => import("../components/Agency/index"))

const Agency = (props) => {
  return (
    <WrapSupsense>
        <Header Bcolor="transparent" pageColor="agency"/>
        <MenuIcon menutoggle={props.toggle} color="#FF156F"/>
        <LazyLoaded />
    </WrapSupsense>)   
};
export default Agency;