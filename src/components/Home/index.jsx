import React from 'react'
import Aboutus from './Aboutus'
import Contact from './Contact'
import Hero from './Hero'
import Service from './Service'
import Work from './Work'
import FullSlider from './FullSlider'

export default function index() {
    return (
        <>
            <Hero />
            <Service />
            <Work/>
            <FullSlider />
            <Aboutus />
            <Contact />
        </>
    )
}
