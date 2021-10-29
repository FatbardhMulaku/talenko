import React, { Component } from 'react'
import { ServiceData } from "./data";
import ScrollContainer from 'react-indiana-drag-scroll'
import { Tooltip } from "@material-ui/core"
import Fade from 'react-reveal/Fade';

export class ServiceSlider2 extends Component {
    render() {
        return (
            <div className="ServiceSlider ">
                <Fade bottom>
                    <div className="container ServiceSlider__full">
                        <ScrollContainer hideScrollbars={false} className="scroll-container">
                            {ServiceData.map((item, i) => {
                                return (
                                    <div key={i} className={`ServiceSliderBG${i + 1}`}>
                                        <Tooltip title="Drag" followCursor={true}>
                                            <div className={`ServiceSlider__box flex flex-col`}>
                                                <div className="flex justify-between">
                                                    <h4>{item.title}</h4>
                                                    <span>0{i + 1}</span>
                                                </div>
                                                <p>{item.desc}</p>
                                            </div>
                                        </Tooltip>
                                    </div>
                                )
                            })}
                        </ScrollContainer>
                    </div>
                </Fade>
            </div>

        )
    }
}

export default ServiceSlider2