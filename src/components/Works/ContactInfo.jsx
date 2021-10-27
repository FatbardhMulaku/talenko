import React from 'react'
import Button from "../Shared/Button/Buttons";
import Fade from 'react-reveal/Fade';

function ContactInfo() {
    return (
        <Fade bottom big cascade>
            <div className="Work-ContactInfo container flex flex-col md:flex-row px-6 md:px-0 border-b-2 border-gray-900 border-t-2 py-20">
                <div className="w-100 md:w-1/3 pb-8 md:pb-1">
                    <h3 className="text-left text-lg md:text-3xl mb-6 pr-6 md:br-0">Do you have a project that needs some love?</h3>
                    <h3 className="text-left text-lg md:text-3xl mb-8">Be ready to work with us</h3>
                    <Button
                        name="contact"
                        hover="GET TO KNOW US"
                        link="/Contact"
                        margin="10px 0"
                    />
                </div>

                <div className="w-100 md:w-1/3 flex justify-start md:justify-center items-center text-gray-400 mb-6 md:mb-0">
                    <div>
                        <p>rruga B , KAWA group , nr.5 <br />
                            Prishtina, Kosovo<br />
                            10000</p>
                    </div>
                </div>

                <div className="w-100 md:w-1/3 flex justify-start md:justify-center items-center text-gray-400">
                    <div>
                        <p>Info@talenko-ks.com <br /> +384 48 979 979</p>
                    </div>

                </div>
            </div>
        </Fade>
    )
}

export default ContactInfo
