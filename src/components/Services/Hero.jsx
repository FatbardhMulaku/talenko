import React from 'react';
import MainHero from '../Shared/Hero/MainHero';
import Zoom from 'react-reveal/Zoom';

function Hero() {
    return (
        <MainHero BGimg="Service__hero">
            <div className="container w-screen h-screen flex flex-col text-white justify-center items-center">

                <svg xmlns="http://www.w3.org/2000/svg" width="113.733" height="113.733" viewBox="0 0 113.733 113.733">
                    <path id="Path_15" data-name="Path 15" d="M1217.83,302.157h40.535v-2.7H1217.83a1.142,1.142,0,0,1-.805-1.948l28.661-28.662-1.911-1.91-65.831,65.833,1.912,1.909,28.66-28.661a1.141,1.141,0,0,1,1.949.805v40.536h2.7V306.822a1.141,1.141,0,0,1,1.948-.807l28.66,28.661,1.911-1.91L1217.025,304.1a1.139,1.139,0,0,1,.805-1.946Z" transform="translate(701.048 1135.416) rotate(-135)" fill="#0ff1ca" />
                </svg>


                <Zoom top cascade>
                    <h1 className="mt-4 text-center text-3xl md:text-8xl mb-10 mt-10">We are Creatives</h1>
                </Zoom>

                <Zoom>
                    <p className="text-center text-lg md:text-2xl mt-10">
                        Check out what we can do for you below<br />
                        and feel free to contact us.
                    </p>
                </Zoom>

            </div>
            <svg className="HrLine" xmlns="http://www.w3.org/2000/svg" width="1.5" height="264.072" viewBox="0 0 1.5 264.072">
                <path id="Path_734" data-name="Path 734" d="M2126.854,695.337c-.078,263.953,0,264.072,0,264.072" transform="translate(-2126.104 -695.337)" fill="none" stroke="#0ff1ca" stroke-width="1.5" />
            </svg>

        </MainHero>
    )
}

export default Hero
