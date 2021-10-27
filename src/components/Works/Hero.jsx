import React from 'react';
import MainHero from '../Shared/Hero/MainHero';
import Zoom from 'react-reveal/Zoom';

function Hero() {
    return (
        <MainHero BGimg="Work__hero">
            <div className="container w-screen h-screen flex flex-col text-white justify-end px-6 md:px-0">
                <Zoom top cascade>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="53.128" height="53.128" viewBox="0 0 53.128 53.128">
                            <path id="Path_715" data-name="Path 715" d="M26.35,29.859H53.128v1.785H26.35a.754.754,0,0,0-.532,1.287L44.752,51.866,43.49,53.128,0,9.638,1.263,8.377,20.2,27.311a.754.754,0,0,0,1.287-.532V0h1.785V26.778a.754.754,0,0,0,1.287.533L43.49,8.377l1.262,1.262L25.818,28.574a.752.752,0,0,0,.532,1.285Z" transform="translate(0 53.128) rotate(-90)" fill="#f2b100" />
                        </svg>
                        <h1 className="text-left text-3xl md:text-8xl mb-10 pl-5 md:pl-2 pt-4 md:pt-1">Our Work</h1>

                    </div>
                </Zoom>


                <Zoom>
                    <div className="flex flex-row mb-48">
                        <div className="w-40 h-3 hidden md:inline" />
                        <p className="text-left text-lg md:text-2xl">
                            Lorem ipsum dolor sit amet, consectetur madi piscing sed <br />
                            do eiusmod tempor incididunt ut labore et dolore ips.<br />
                            ncididunt ut labore et dolore ips.<br />
                        </p>
                    </div>
                </Zoom>

            </div>

            <svg className="Work-HrLine" xmlns="http://www.w3.org/2000/svg" width="4.5" height="274.016" viewBox="0 0 4.5 274.016">
                <line id="Line_31" data-name="Line 31" x2="3" y2="274" transform="translate(0.75 0.008)" fill="none" stroke="#f2b100" stroke-width="1.5" />
            </svg>

        </MainHero>
    )
}

export default Hero
