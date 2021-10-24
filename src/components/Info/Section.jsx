import React from 'react';
import Zoom from 'react-reveal/Zoom';

const data = [
    "Unique website experience thanks to scrolling animation and drone clip",
    "Complex range of services presented in a tangible and interactive way",
    "New look & feel for the cosmetics product portfolio",
    "Accompaniment of a traditional cosmetics company in a new business chapter"
];

function Section(props) {
    return (
        <div className="Info-Section">
            <div className={`container flex flex-col md:${props.styles}`}>
                <div className="w-100 md:w-1/2 p-5 md:px-16 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-4xl">Highlights</h3>
                    <Zoom top cascade>
                        <div className="mt-10">
                            {data.map((item, idx) => (
                                <p key={idx} className=" text-lg md:text-2xl mb-6">{item}</p>
                            ))}
                        </div>
                    </Zoom>
                </div>
                <div className="w-100 md:w-1/2">
                    <Zoom>
                        <div className={`Info-Section__${props.img}`} />
                    </Zoom>
                </div>
            </div>
        </div>
    )
}

Section.defaultProps = {
    style: "flex-row"
};

export default Section
