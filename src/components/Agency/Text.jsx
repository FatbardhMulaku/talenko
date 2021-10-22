import React from 'react';
import { texts } from "./data";
import Fade from 'react-reveal/Fade';

function Text() {
    return (
        <div className="Agency-Text BG">
            <Fade bottom big cascade>
                <div className="container">
                    {texts.map((text, idx) => (
                        <p key={idx} className="text-2xl md:text-4xl lg:text-6xl text-center py-6">{text.item}</p>
                    ))}
                </div>
            </Fade>
        </div>
    )
}

export default Text
