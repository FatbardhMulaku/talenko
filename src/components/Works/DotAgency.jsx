import React from 'react'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { useHistory } from "react-router-dom";

function DotAgency() {

    const history = useHistory();
    const onClick = () => {
        history.push('Info');
    }

    return (
        <div onClick={onClick} className="Work-DotAgency container flex flex-col md:flex-row py-20 md:my-48 px-5 md:px-0 cursor-pointer">
            <div className="w-100 md:w-1/2 flex px-4 md:px-0 my-auto mt-24">
                <Fade top big>
                    <h3 className="my-auto pr-3 md:pr-8 text-3xl md:text-4xl text-yellow-600">01/</h3>
                </Fade>
                <div>
                    <Fade>
                        <h1 className="text-left text-3xl md:text-7xl mb-6">Dot Agency</h1>
                    </Fade>
                    <Fade bottom big>
                        <p className="text-left text-lg md:text-2xl text-gray-400">
                            Dot Agency is a web-design & development studio operating in Switzerland. 
                            Our task was therefore to deliver a highly customized and fully integrated web
                            development solution at a competitive cost, by bringing brand awareness, web-
                            designing  and customer interaction.
                        </p>
                    </Fade>
                </div>
            </div>
            <div className="w-100 md:w-1/2 mt-12 md:mt-0 flex justify-center">
                <Zoom >
                    <div className="Work-DotAgency__img BG" />
                </Zoom>
            </div>
        </div>
    )
}

export default DotAgency
