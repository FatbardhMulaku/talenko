import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'


const FootetLinks = [
    {name: "Home", link:""},
    {name: "Services", link:"Services"},
    {name: "Work", link:"Work"},
    {name: "Agency", link:"Agency"},
]

function index() {
    return (
        <div className="Footer bg-black text-white py-16">
            <div className="container flex flex-col justify-center md:flex-row md:justify-between">
                <Logo />
                <div className="flex justify-center md:justify-end mt-8 md:mt-0">
                    {FootetLinks.map((item, index) => {
                        return (
                            <Link className="Footer__links" to={`/${item.link}`} key={index}>{item.name}</Link>
                        )
                    })}
                </div>
            </div>
            <div className="container flex flex-col justify-center md:flex-row md:justify-between pt-8 md:pt-24">
                    <p className="text-center md:text-left">© 2021 Talenko Agency. All rights reserved</p>
                    <p className="cursor-pointer mt-6 md:mt-0 text-center md:text-left">Privacy Policy</p>
            </div>
        </div>
    )
}

export default index
