import React from 'react';
import Diver from '../Shared/Divider';
import Fade from 'react-reveal/Fade';
import { AgencyService } from "./data";

function Service() {
    return (
        <div className="Agency__Service container py-16 px-3 md:px-0">
            <div className="flex mb-6"><div className="Home__Service--icon BG" />
                <h5 className="mt-2 text-lg md:text-2xl">VALUES</h5>
            </div>
            <Diver width="100%" color="white" />

            <div className="flex flex-col md:flex-row pt-16">
                <div className="w-100 md:w-1/3 px-0 md:px-6">
                    <Fade top big>
                        <h4 className="text-2xl md:text-5xl pb-6">Talenko is</h4>
                    </Fade>
                </div>
                <Fade bottom cascade>
                    <div className="w-100 md:w-1/3 px-0 md:px-6">
                        {AgencyService[0].map((item, idx) => {
                            return (
                                <div key={idx} className="flex mb-10">
                                    <div> {item.svg} </div>
                                    <p className="ml-4 text-lg md:text-2xl">{item.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                </Fade>
                <Fade bottom cascade>
                    <div className="w-100 md:w-1/3 px-0 md:px-6">
                        {AgencyService[1].map((item, idx) => {
                            return (
                                <div key={idx} className="flex mb-10">
                                    <div> {item.svg} </div>
                                    <p className="ml-4 text-lg md:text-2xl">{item.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Service
