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


{/* <div className="flex w-100 py-32 justify-center items-center bg-black text-white border-b-2 border-gray-800">
            <div>
                    
                    <h2 className="text-6xl">Working...</h2>
            </div>
        </div> */}