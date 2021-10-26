import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FullSliderdata } from "./data";
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';


export class FullSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            speed: 1500,
            autoplaySpeed: 2000,
            cssEase: "linear",
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        dots:false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 0,
                        infinite: true,
                        nextArrow:"",
                        prevArrow:""
                    },
                },
            ]
        };
        return (
            <div className="FullSlider BG py-20 pt-10 md:py-40">
            <Zoom>
                <div className="container">
                    <Slider {...settings}>
                        {FullSliderdata.map((item, i) => {
                            return (
                                <div key={i} className="FullSlider__Box">
                                    <div className="px-5 md:px-0">
                                        <div className="flex mb-12 md:mb-32">
                                            <p>0{i + 1}</p>
                                            <div style={{ width: "160px" }} className="border-b-4 border-gray-700 my-auto mx-3">
                                                <div style={{ width: `${(i + 1) * 40}px`, position:"absolute",top:"82px" }} className="text-white border-b-4 border-white h-1 my-auto  " />
                                            </div> 
                                            <p>0{FullSliderdata.length}</p>
                                        </div>

                                        <h5 className="text-lg md:text-2xl mb-0">{item.subtitle}</h5>
                                        <h2 className="text-2xl md:text-5xl mb-8">{item.title}</h2>
                                        <p className="text-base md:text-lg mb-4">{item.desc}</p>

                                        <Link to="#">RIDE ALONG</Link>
                                    </div>

                                    <div>
                                        <div className={`FullSliderA${i+1} BG object-left-top`}/>
                                        <div className="FullSliderB BG object-right-bottom"/>
                                    </div> 
                                </div>
                            )
                        })}
                    </Slider>
                </div>
                </Zoom>    
            </div>
        )
    }
}

export default FullSlider
