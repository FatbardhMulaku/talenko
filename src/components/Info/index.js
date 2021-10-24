import React from 'react'
import Hero from './Hero'
import Flip from 'react-reveal/Flip';
import Section from './Section';
import ImgSection from './ImgSection';

function index() {
    return (
        <div>
            <Hero />
            <div className="container">
                <Flip right cascade>
                    <h1 className="py-16 md:py-40 text-3xl sm:text-5xl lg:text-8xl px-5 lg:px-16">
                        Garage Hebeisen has been
                        at your side with help and
                        advice on questions about
                        vehicles of all kinds since
                        the 1940s.
                    </h1>
                </Flip>
            </div>
            <Section img="img1"/>
            <div className="container">
                <Flip right cascade>
                    <h1 className="pb-16 pt-0 md:py-48 text-3xl sm:text-5xl lg:text-8xl px-5 lg:px-40">
                        Web design, Design, Web
                        Development, Branding,
                        Campaging, Texting
                    </h1>
                </Flip>
            </div>
            <Section img="img2" styles="flex-row-reverse"/>
            <ImgSection />
            <div className="Info_End-Img BG"/>
        </div>
    )
}

export default index
