import React from 'react'
import { ServiceData } from "../Home/data";
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';

function Cards() {
    return (
        <div className="Service-Cards container">
            {ServiceData.map((item, idx) => {
                return (
                    <div className="Service-Cards__box BG">
                        <h5>0{idx + 1}</h5>

                        <div className={`flex ${item.class} py-20 flex-col md:flex-row`}>
                            <div className="w-100 md:w-2/5 my-auto">
                                <Bounce top>
                                    <h2 className="text-2xl md:text-5xl mb-8">{item.title}</h2>
                                </Bounce>
                                <Bounce bottom>
                                    <p className="text-base md:text-lg text-gray-400 mb-4">{item.desc}</p>
                                </Bounce>
                            </div>
                            <Zoom>
                                <div className="w-100 md:w-3/5 flex justify-center">
                                    <div className={`Service-CardsA${idx + 1} BG object-left-top`} />
                                   {/*  <div className={`Service-CardsB${idx + 1} BG object-right-bottom`} /> */}
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
