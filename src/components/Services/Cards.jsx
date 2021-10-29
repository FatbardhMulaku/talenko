import React from 'react'
import { ServiceData } from "../Home/data";
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Fade';

function Cards() {
    return (
        <div className="Service-Cards container">
            {ServiceData.map((item, idx) => {
                return (
                    <div key={idx} className="Service-Cards__box BG">
                        <h5>0{idx + 1}</h5>

                        <div className={`flex Service-Cards__row${idx+1}`}>
                            <div className="w-100 md:w-2/5 py-40 my-auto pl-0 md:pl-12">
                                <Bounce >
                                    <h2 className="text-2xl md:text-5xl mb-8">{item.title}</h2>
                                </Bounce>
                                <Bounce >
                                    <p className="text-base md:text-lg text-gray-400 mb-4">{item.desc}</p>
                                </Bounce>
                            </div>
                            <Zoom>
                                <div className="w-100 md:w-3/5 flex justify-center items-center">
                                    <div className={`Service-CardsA${idx + 1} BG object-left-top`} />
                                    <div className={`Service-CardsB${idx + 1} BG object-right-bottom`} />
                                </div>
                            </Zoom>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Cards
