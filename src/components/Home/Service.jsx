import React from 'react'
import Buttons from '../Shared/Button/Buttons'
import Diver from '../Shared/Divider'
import Fade from 'react-reveal/Fade';
/* import ServiceSlider from './ServiceSlider'; */
import ServiceSlider2 from './ServiceSlider2';

function Service() {
    return (
        <div className="Home__Service ">
            <div className="container py-16 pt-24 bg-black">
                <div className="flex pl-6">
                    <div className="Home__Service--icon BG" />
                    <h5 className="mt-2 text-lg md:text-2xl">WHAT  WE  DO</h5>
                </div>
                <Diver width="100%" color="white" />
                <div className="flex flex-col justify-center md:flex-row md:justify-between mt-4 mt-10">
                    <Fade left  >
                        <h2 className="my-auto">You can count on us for <br />
                            a wide range of needs</h2>
                    </Fade>
                    <Fade right className="my-auto">
                        <Buttons
                            name="See All"
                            link="/Services"
                            margin="auto 10px"
                            hover="CHOOSE YOUR SERVICE"
                        />
                    </Fade>
                </div>



            </div>
            <ServiceSlider2 />
            {/*  <ServiceSlider /> */}


        </div>
    )
}

export default Service
