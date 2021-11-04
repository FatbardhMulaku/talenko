import React from 'react'
import { Link } from 'react-router-dom'

const link = [
    { name: "Home", link: "" },
    { name: "Services", link: "Services" },
    { name: "Work", link: "Work" },
    { name: "Agency", link: "Agency" },
    { name: "Contact", link: "Contact" }
]

 


function index(props) {

/*     const HandleX = (props) => (
        props.handleOpen
        scroll.scrollTo(10);
    ) */
       

    return (
        <div className="FullMenu flex justify-center items-center" style={{'overflow-y': "scroll"}}>
            {props.open && <span onClick={props.handleOpen} className="FullMenu__close">

                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                    <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" stroke="#fff" />
                </svg>

            </span>}
            <div className="FullMenu__wrapper container">

                {link.map((item, index) => {
                    return (
                        <Link className="FullMenu__item flex justify-between" onClick={props.handleOpen} to={`/${item.link}`} key={index}>
                            <p>{item.name}</p>
                            <span className="my-auto mr-6 FullMenu__item--icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24.316" height="23.609" viewBox="0 0 24.316 23.609">
                                    <g id="Group_3807" data-name="Group 3807" transform="translate(1.998 1.997)">
                                        <g id="Group_3807-2" data-name="Group 3807">
                                            <path id="Path_709" data-name="Path 709" d="M4581.654,343.911l20.321,9.614" transform="translate(-4581.654 -343.911)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3" />
                                            <path id="Path_736" data-name="Path 736" d="M4601.975,343.911l-20.321,9.614" transform="translate(-4581.654 -333.911)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3" />
                                        </g>
                                    </g>
                                </svg>

                            </span>
                        </Link>
                    )
                })}

            </div>
        </div>

    )
}

export default index
