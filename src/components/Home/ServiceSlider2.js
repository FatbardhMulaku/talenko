import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import { ServiceData } from "./data";
import ScrollContainer from 'react-indiana-drag-scroll'

export class ServiceSlider2 extends Component {
    render() {
        return (
            <div className="ServiceSlider ">

                <div className="container ServiceSlider__full">
                <ScrollContainer hideScrollbars={false} className="scroll-container">
                    {/* <Fade bottom cascade> */}
                   
                        {ServiceData.map((item, i) => {
                            return (
                                <div key={i} className={`ServiceSliderBG${i + 1}`}>
                                    <div className={`ServiceSlider__box flex flex-col`}>
                                        <div className="flex justify-between">
                                            <h4>{item.title}</h4>
                                            <span>0{i + 1}</span>
                                        </div>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                   
                   {/*  </Fade> */}
                    </ScrollContainer>
                </div>
            </div>
        )
    }
}

export default ServiceSlider2