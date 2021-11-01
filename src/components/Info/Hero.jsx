import React from 'react';
import MainHero from '../Shared/Hero/MainHero';
import Fade from 'react-reveal/Fade';
import Buttons from '../Shared/Button/Buttons';

function Hero() {
    return (
        <MainHero BGimg="Info__hero">
            <Fade bottom cascade>
                <div className="container w-screen h-screen flex flex-col text-white justify-center md:justify-end px-6 md:px-0">

                    <div>
                        <h1 className="text-left text-center md:text-left text-5xl md:text-8xl mb-10">Dot <br /> Agency</h1>
                    </div>

                    <div className="flex flex-row mb-8 md:mb-48">
                        <Buttons
                            name="Visit Website"
                            hover="Visit Website"
                            link="/Agency"
                            margin="20px 0"
                        />
                    </div>
                </div>
            </Fade>
        </MainHero>
    )
}

export default Hero
