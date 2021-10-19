import React from "react";
import { Link } from "react-router-dom";

const Logo = (props) => {
  return <Link className={`logo ${props.style}`} to="/"></Link>;
};

export default Logo;
