import React, { useState, useEffect, useCallback } from 'react';
import MainHero from '../Shared/Hero/MainHero';
import Zoom from 'react-reveal/Fade';

const names = [
    'Creative', 'Professional', 'Besties'
]

function Aboutus() {
    const [newName, setnewName] = useState("Creative");

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        setnewName(names[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 2000);
        return () => clearInterval(intervalID);
    }, [shuffle])

    return (
        <MainHero BGimg="HomeAboutus">
            <div className="container w-screen h-screen flex flex-col text-white justify-center">

                <svg xmlns="http://www.w3.org/2000/svg" width="180.893" height="55.947" viewBox="0 0 161.893 55.947">
                    <g id="Group_3748" data-name="Group 3748" transform="translate(-973 -4349.053)">
                        <text id="ABOUT_US" data-name="ABOUT US" transform="translate(1003.893 4398)" fill="#fff" fontSize="28" fontFamily="Reg"><tspan x="0" y="0">ABOUT US</tspan></text>
                        <path id="Path_25" data-name="Path 25" d="M1197.729,284.407h20.107v-1.34h-20.107a.566.566,0,0,1-.4-.967l14.217-14.218-.948-.948-32.656,32.656.948.947,14.217-14.217a.566.566,0,0,1,.967.4v20.108h1.34V286.72a.566.566,0,0,1,.966-.4l14.217,14.217.948-.948-14.217-14.218a.565.565,0,0,1,.4-.965Z" transform="translate(2190.837 4655.881) rotate(180)" fill="#fff" />
                    </g>
                </svg>

                <Zoom>
                    <div className="HomeAboutus__text flex w-full">
                        <div className="w-1/2 flex justify-end pr-4"> <h1 className="mt-4 text-left text-3xl md:text-8xl mb-10 mt-10">We are </h1></div>
                        <div className="w-1/2 flex justify-self-start"><span className="mt-4 text-left text-3xl md:text-8xl mb-10 mt-10">{newName}</span></div>
                    </div>
                </Zoom>
                <svg xmlns="http://www.w3.org/2000/svg" width="2.993" height="68.663" viewBox="0 0 1.993 68.663">
                    <path id="Path_18" data-name="Path 18" d="M1349.346,424.926h38.768v-1.993H1319.45v1.992Z" transform="translate(424.926 -1319.45) rotate(90)" fill="#fff" />
                </svg>
                <Zoom>
                    <p className="text-center text-lg md:text-2xl mt-20">
                        Lorem ipsum dolor sit amet, consectetur<br />
                        adipiscing sed do eiusmod tempor incididunt<br />
                        ut labore et dolore ips.
                    </p>
                </Zoom>

            </div>
        </MainHero>
    )
}

export default Aboutus
