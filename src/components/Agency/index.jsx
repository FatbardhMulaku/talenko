import React from 'react';
import Aboutus from "./Aboutus"
import OurStory from './OurStory';
import Service from './Service';
import Team from './Team';
import Contact from "../Home/Contact";
import Scroll from './Scroll';

function index() {
    return (
        <div className="Agency">
            <Aboutus />
            <div className="Agency__Section2 BG"/>
            <Service />
            <Team />
            <OurStory />
            <Scroll />
            <Contact />
        </div>
    )
}

export default index
