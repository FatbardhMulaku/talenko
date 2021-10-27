import React from "react";
import Buttons from "../components/Shared/Button/Buttons";
import Header from "../components/Shared/Header/Header";
import MenuIcon from "../components/Shared/Menu/MenuIcon";

const PageNotFound = (props) => {
  return (
    <> 
    <Header Bcolor="transparent" />
    <MenuIcon menutoggle={props.toggle} color="#fff"/>
    <div className="fullBackground page-notfound">
      <div className="container mx-auto">
        <h1 className="text-center mb-10">Page Not Found 404</h1>
      
        <Buttons 
          name="Go Back"
          hover="< Go Back"
          link="/"
          margin="auto !important"
        />

        <div className="img_404  mx-auto"/> 
      </div>
    </div></>
  );
};

export default PageNotFound;