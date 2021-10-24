import React from 'react'
import Fade from 'react-reveal/Fade';

function DotAgency() {
    return (
        <div className="Work-DotAgency container flex flex-col md:flex-row py-20 px-5 md:px-0">
            <div className="w-100 md:w-1/2 flex">
            <Fade top big>
                    <h3 className="my-auto pr-3 md:pr-8 text-3xl md:text-4xl text-yellow-600">01/</h3>
              </Fade>
                <div>
                <Fade>
                <h1 className="text-left text-3xl md:text-7xl mb-6">Dot Agency</h1>
                </Fade>
                <Fade bottom big>
                <p className="text-left text-lg md:text-2xl text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur madi piscing sed <br />
                    do eiusmod tempor incididunt ut labore et dolore ips.<br />
                    ncididunt ut labore et dolore ips.<br />
                </p>
                </Fade>
                </div>
            </div>
           <div className="w-100 md:w-1/2 px-0 md:px-4 mt-12 md:mt-0">
           <Fade left>
                <div className="Work-DotAgency__img BG" />
                </Fade>
           </div>
        </div>
    )
}

export default DotAgency
