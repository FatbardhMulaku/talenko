import React from 'react'
import Contact from '../Home/Contact'
/* import ContactInfo from './ContactInfo' */
import DotAgency from './DotAgency'
import Hero from './Hero'

function index() {
    return (
        <div className="Work">
            <Hero />
            <DotAgency />
           {/*  <ContactInfo /> */}
            <Contact />
        </div>
    )
}

export default index
