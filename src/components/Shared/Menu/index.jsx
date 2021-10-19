import React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'

const link = [
    { name: "Home", link: "" },
    { name: "Services", link: "Services" },
    { name: "Work", link: "Work" },
    { name: "Agency", link: "Agency" },
    { name: "Contact", link: "Contact" }
]



function index(props) {

    return (
        <div className="FullMenu flex justify-center items-center">
            {props.open && <spna to="#" onClick={props.handleOpen} className="FullMenu__close">&#10006;</spna>}
            <div className="FullMenu__wrapper">


                {link.map((item, index) => {
                    return (
                        <Link className="FullMenu__item" onClick={props.handleOpen} to={`/${item.link}`} key={index}>{item.name}</Link>
                    )
                })}



            </div>
        </div>
    )
}

export default index
