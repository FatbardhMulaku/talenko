import React, {lazy} from "react";
import WrapSupsense from "../components/Shared/WrapSuspense";
import Header from "../components/Shared/Header/Header";
import MenuIcon from "../components/Shared/Menu/MenuIcon";

const LazyLoaded = lazy(() => import("../components/Home/index"))

const Home = (props) => {
  return (
    <WrapSupsense>
        <Header Bcolor="transparent" pageColor="home"/>
        <MenuIcon menutoggle={props.toggle} color="#f24200"/>
        <LazyLoaded />
    </WrapSupsense>)   
};
export default Home;