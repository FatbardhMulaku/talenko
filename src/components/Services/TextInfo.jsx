import React from 'react'
import Fade from 'react-reveal/Fade';

function TextInfo({...props}) {
    const {...data} =  props.data
    return (
        <div className="container mx-auto py-32 px-3 md:px-0">
            <Fade top cascade>
                <div className="w-100 md:w-3/4 mx-auto mb-10    ">
                    <h3 className="text-center md:text-right text-2xl md:text-8xl">{data.title1}</h3>
                    <h3 className="text-center md:text-left text-2xl md:text-8xl">{data.title2} <br />{data.title3}</h3>
                </div>
            </Fade>
            <Fade bottom cascade>
                <div className="w-100 md:w-3/4 mx-auto">
                    <p className="text-right text-gray-400 text-base md:text-3xl">{data.desc1}</p>
                    <p className="text-left text-gray-400 text-base md:text-3xl">{data.desc2} </p>
                </div>
            </Fade>
        </div>

    )
}

export default TextInfo
