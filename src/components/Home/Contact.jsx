import React from 'react'
import Buttons from '../Shared/Button/Buttons';
import Zoom from 'react-reveal/Zoom';

function Contact() {
    return (
        <div className="Home_Contact BG text-white">
            <div className="container flex justify-center md:justify-end py-32 px-6 md:px-0">
            <Zoom cascade>
                <div className="w-100 md:w-1/2">
                    <h3 className="text-lg md:text-3xl mb-2 pr-4 md:pr-0">Do you have a project that needs some love?
                        Fill in the form below, or  holla at us at
                    </h3>
                    <div><a href="mailto:info@talenko-ks.com?body=My custom mail body" className="bg-white text-black py-1 px-4 rounded-2xl my-2 text-lg md:text-2xl">
                        info@talenko-ks.com</a></div>
                    <h3 className="text-lg md:text-3xl mt-10 mb-16">We can't wait to get back to you!</h3>

                    <form className="flex flex-col">
                        <input className="bg-transparent my-4 p-4 border-b-2 " placeholder="Your email"/>
                        <input className="bg-transparent my-4 mb-16 p-4 border-b-2" placeholder="A few words about your projects (maybe?)"/>
                        <Buttons 
                            name="LET'S WORK TOGETHER"
                            hover="LET'S WORK TOGETHER"
                            link="HomeHero"
                            margin="0"
                        />
                    </form>
                </div>
                </Zoom>
            </div>
        </div>
    )
}

export default Contact
