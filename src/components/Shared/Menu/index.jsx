import { Link } from '@material-ui/core'
import React from 'react'

const link = [
    {name: "Home", link:"/"},
    {name: "Services", link:"/Services"},
    {name: "Work", link:"/Work"},
    {name: "Agency", link:"/Agency"},
    {name: "Contact", link:"/Contact"}
]



function index(props) {
    console.log(props.handleOpen)
    return (
        <div className="FullMenu flex justify-center items-center">
            {props.open && <spna to="#" onClick={props.handleOpen} className="FullMenu__close">X</spna>}
            <div className="FullMenu__wrapper">
            {link.map((item, index) => {
                return(
                    <a className="FullMenu__item" href={item.link} key={index}>{item.name}</a>
                )
            })}
            </div>
        </div>
    )
}

export default index
