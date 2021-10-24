import React from 'react';
import Contact from '../Home/Contact';
import Hero from './Hero';
import TextInfo from './TextInfo';
import { sectionText } from "./data";
import Cards from './Cards';

function index() {
    return (
        <>
            <Hero />
            <TextInfo data={sectionText[0]} />
            <Cards />
            <TextInfo data={sectionText[1]} />
            <Contact />
        </>
    )
}

export default index