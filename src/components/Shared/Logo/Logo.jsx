import React from "react";
import { Link } from "react-router-dom";
import {  animateScroll as scroll } from 'react-scroll'

const Logo = (props) => {
  return <Link onClick={() => scroll.scrollToTop()} className={`logo ${props.style}`} to="/"></Link>;
};

export default Logo;
