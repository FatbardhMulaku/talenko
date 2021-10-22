import React from 'react';
import Diver from '../Shared/Divider';
import Fade from 'react-reveal/Fade';
import { OurStoryData } from "./data";

function OurStory() {
    return (
        <div className="Agency-OurStory container py-16 px-3 md:px-0">
            <div className="flex mb-6"><div className="Home__Service--icon BG" />
                <h5 className="mt-2 text-lg md:text-2xl">SERVICES</h5>
            </div>
            <Diver width="100%" color="white" />

            <div className="flex flex-col py-10">
                <div>
                    {OurStoryData.map((item, idx) => {
                        return (
                            <div key={idx} className="flex flex-col md:flex-row my-10 mb-20">
                                <div className="w-100 md:w-2/5 px-0 md:px-6">
                                    <Fade top big>
                                        <h5 className="text-2xl md:text-5xl pb-6">{item.title}</h5>
                                    </Fade>
                                </div>

                                <Fade bottom cascade>
                                    <div className="w-100 md:w-3/5 px-0 md:px-6">
                                        {item.items.map((item, idx) => {
                                            return (
                                                <div key={idx+10} className="flex">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="25.628" height="25.628" viewBox="0 0 23.628 23.628">
                                                            <path id="Path_723" data-name="Path 723" d="M1189.662,277.283h11.91v-.794h-11.91a.335.335,0,0,1-.236-.572l8.421-8.421-.561-.561-19.342,19.342.561.561,8.421-8.421a.335.335,0,0,1,.572.237v11.91h.794V278.653a.335.335,0,0,1,.572-.237l8.421,8.421.561-.561-8.421-8.421a.335.335,0,0,1,.236-.572Z" transform="translate(1201.572 290.563) rotate(180)" fill="#ff156f" />
                                                        </svg>

                                                    </div>
                                                    <p className="ml-4 text-lg md:text-2xl mb-8">{item.item}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </Fade>
                            </div>
                        )
                    })}

                </div>


            </div>
        </div>
    )
}

export default OurStory
