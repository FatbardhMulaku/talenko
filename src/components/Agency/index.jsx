import React from 'react';
import Aboutus from "../Home/Aboutus"
import OurStory from './OurStory';
import Service from './Service';
import Team from './Team';
import Text from './Text';
import Contact from "../Home/Contact";

function index() {
    return (
        <div className="Agency">
            <Aboutus />
            <div className="Agency__Section2 BG"/>
            <Service />
            <Team />
            <OurStory />
            <Text />
            <Contact />
        </div>
    )
}

export default index
