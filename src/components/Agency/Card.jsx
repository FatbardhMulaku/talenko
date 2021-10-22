import React from 'react'
import Fade from 'react-reveal/Fade';

function Card(props) {
    return (
        <div className="Agency-card">
            {props.data.map((item, idx) => {
                return (
                    <Fade bottom>
                        <div className={`Agency-card__img${props.img + idx} BG flex flex-col justify-end p-12`}>
                            <h6 className="text-2xl text-gray-400">{item.title}</h6>
                            <h2 className="text-3xl mb-1">{item.name}</h2>
                            <p className="text-lg mb-3">{item.desc}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22.999" height="23" viewBox="0 0 22.999 23">
                                <g id="Gruppe_676" data-name="Gruppe 676" transform="translate(0)">
                                    <path id="Pfad_396" d="M0,0H23V23H0Z" transform="translate(0)" fill="none" />
                                    <path id="Path_656" data-name="Path 656" d="M20.891,6.792h0A2.62,2.62,0,0,0,18.3,4.3H4.887A2.558,2.558,0,0,0,2.3,6.792h0v9.679a2.679,2.679,0,0,0,2.683,2.683H18.4a2.679,2.679,0,0,0,2.683-2.683V6.887A.335.335,0,0,1,20.891,6.792Zm-16-1.054H18.3a1.238,1.238,0,0,1,1.15.862L11.6,11.775,3.737,6.5A1.156,1.156,0,0,1,4.887,5.738ZM18.3,17.717H4.887a1.165,1.165,0,0,1-1.15-1.15V8.229l7.475,4.983a.576.576,0,0,0,.383.1.576.576,0,0,0,.383-.1l7.475-4.983v8.242A1.188,1.188,0,0,1,18.3,17.717Z" transform="translate(-0.096 -0.179)" fill="#fff" />
                                </g>
                            </svg>

                        </div>
                    </Fade>
                )
            })}
        </div>

    )
}

export default Card
