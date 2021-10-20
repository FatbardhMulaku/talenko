import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ServiceData } from "./data";
import Fade from 'react-reveal/Fade';

export class ServiceSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            speed: 1500,
            autoplaySpeed: 2000,
            cssEase: "linear",
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 0,
                        infinite: true,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 0,
                        infinite: true,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 0,
                        arrows: false,
                        infinite: true,
                    },
                },
            ],
        };
        return (
            <div className="ServiceSlider">
             <Fade bottom cascade> 
                <Slider {...settings}>
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
                </Slider>
                </Fade>
            </div>
        )
    }
}

export default ServiceSlider
