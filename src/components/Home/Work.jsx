import React from 'react'
import Buttons from '../Shared/Button/Buttons'
import Diver from '../Shared/Divider'
import Fade from 'react-reveal/Fade';

function Work() {
    return (
        <div className="HomeWork bg-black text-white py-24">

            <div className="container flex flex-col">
                <div className="flex justify-self-end self-end mb-4">
                    <div className="Home__Service--icon BG" />
                    <h5 className="mt-2 mr-4">WORK</h5>
                </div>
                <Diver width="100%" color="white" />
                <div className="HomeWork__lover flex flex-col justify-center md:flex-row md:justify-between mt-4 mt-10">
                    <Fade left  >
                        <Buttons
                            name="See All"
                            hover="SEE OUR PROJECTS"
                            link="/Service"
                            margin="auto 10px"
                        />
                    </Fade>
                    <Fade right className="my-auto">

                        <h2 className="my-auto text-lg md:text-4xl text-center md:text-left mt-8 md:mt-0">Want to know what you <br />
                            can expect? Scroll below! </h2>
                    </Fade>
                </div>
            </div>

        </div>
    )
}

export default Work
