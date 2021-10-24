import React from 'react'
import Zoom from 'react-reveal/Zoom';

function ImgSection() {
    return (
        <div style={{ backgroundColor: "#868686" }}>
            <Zoom cascade>
                <div className="Info_ImgSection container flex flex-col md:flex-row flex-wrap justify-evenly py-16">
                    <div className="Info_ImgSection_1" />
                    <div className="Info_ImgSection_2" />
                </div>
            </Zoom>
        </div>
    )
}

export default ImgSection
