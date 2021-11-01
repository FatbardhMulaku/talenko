import React from 'react';
import MainHero from '../Shared/Hero/MainHero';
import Button from '../Shared/Button/Buttons';
import Fade from 'react-reveal/Fade';

function Hero() {
    return (
        <MainHero BGimg="HomeHero">
            <Fade bottom cascade>
            <div className="Home__hero container flex flex-col my-auto">

                <svg xmlns="http://www.w3.org/2000/svg" width="113.733" height="113.733" viewBox="0 0 113.733 113.733">
                    <path id="Path_15" data-name="Path 15" d="M1217.83,302.157h40.535v-2.7H1217.83a1.142,1.142,0,0,1-.805-1.948l28.661-28.662-1.911-1.91-65.831,65.833,1.912,1.909,28.66-28.661a1.141,1.141,0,0,1,1.949.805v40.536h2.7V306.822a1.141,1.141,0,0,1,1.948-.807l28.66,28.661,1.911-1.91L1217.025,304.1a1.139,1.139,0,0,1,.805-1.946Z" transform="translate(701.048 1135.416) rotate(-135)" fill="#fff" />
                </svg>
                {/* <Fade bottom> */}
                    <h1 className="mt-4">All Eyes on the Digital Hype</h1>
               {/*  </Fade> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="2.993" height="68.663" viewBox="0 0 1.993 68.663">
                    <path id="Path_18" data-name="Path 18" d="M1349.346,424.926h38.768v-1.993H1319.45v1.992Z" transform="translate(424.926 -1319.45) rotate(90)" fill="#fff" />
                </svg>
               {/*  <Fade bottom> */}
                    <p>
                        Lorem ipsum dolor sit amet, consectetur <br />
                        adipiscing sed do eiusmod tempor incididunt<br />
                        ut labore et dolore ips.
                    </p>
               {/*  </Fade> */}
                <div className="flex justify-center mt-4">
                    <Button
                        name="GET TO KNOW US"
                        hover="GET TO KNOW US"
                        link="Home__Service"
                        margin="50px auto !important"
                    />
                </div>

                <div className="flex justify-center">

                    <svg id="Group_1564" data-name="Group 1564" xmlns="http://www.w3.org/2000/svg" width="21.201" height="35.706" viewBox="0 0 21.201 35.706">
                        <g id="Rectangle_929" data-name="Rectangle 929" fill="none" stroke="#fff" strokeWidth="1.3">
                            <rect width="21.201" height="35.706" rx="10.6" stroke="none" />
                            <rect x="0.65" y="0.65" width="19.901" height="34.406" rx="9.95" fill="none" />
                        </g>
                        <rect id="Rectangle_930" data-name="Rectangle 930" width="2.232" height="7.811" rx="1.116" transform="translate(10.042 8.927)" fill="#fff" />
                    </svg>

                    <p className="my-auto text-white ml-4">Erleben sie unseren Arbeitsprozess</p>
                </div>

            </div>
            </Fade>
        </MainHero>
    )
}

export default Hero
