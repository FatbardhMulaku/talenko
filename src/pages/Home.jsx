import React, {lazy} from "react";
import WrapSupsense from "../components/Shared/WrapSuspense";
import Header from "../components/Shared/Header/Header";

const LazyLoaded = lazy(() => import("../components/Home/index"))

const Home = () => {
  return (
    <WrapSupsense>
        <Header Bcolor="transparent" pageColor="home"/>
        <LazyLoaded />
    </WrapSupsense>)   
};
export default Home;