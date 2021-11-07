import React from 'react'
import Hero from './Hero'
import Fade from 'react-reveal/Fade';
import Section from './Section';
import ImgSection from './ImgSection';
import Buttons from '../Shared/Button/Buttons';

function index() {
    return (
        <div className="Info">
            <Hero />
            <div className="container">
                <Fade bottom  >
                    <h1 className="Info__texth1 py-16 md:py-40 text-3xl sm:text-5xl lg:text-8xl px-5 lg:px-16">
                    Dot Agency is a web-design & development studio operating in Switzerland.
                    </h1>
                </Fade>
            </div>
            <Section img="img1" styles="1"/>
            <div className="container">
                <Fade bottom  >
                    <h1 className="Info__texth1 pb-16 pt-0 md:py-48 text-3xl sm:text-5xl lg:text-8xl px-5 lg:px-40">
                        Web design, Design, Web
                        Development, Branding,
                        Campaging, Texting
                    </h1>
                </Fade>
            </div>
            <Section img="img2" styles="2"/>
            <ImgSection />
            <div className="Info_2-Img BG"/>
            <div className="Info_End-Img BG"/>
            <div className="Info-next flex py-20 justify-center">
                <Buttons 
                    name="next to"
                    hover="next to"
                    link="/Info"
                    margin="20px auto"
                />
            </div>
           
        </div>
    )
}

export default index
