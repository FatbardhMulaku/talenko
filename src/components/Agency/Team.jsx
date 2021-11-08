import React from 'react'
import Card from './Card'
import { TeamData } from "./data";

function Team() {
    return (
        <div className="Agency-Team container">
            <div className="flex px-6 md:px-0"><div className="Home__Service--icon BG" />
                <h5 className="mt-1 text-2xl md:text-3xl">Meet the team</h5>
            </div>
                                                   {/*  items-center justify-center */}
            <div className="flex flex-col md:flex-row justify-center">
                <div className="w-100 md:w-1/2 p-0 md:p-6">
                    <Card data={TeamData[0]} img={1}/>
                </div>
                <div className="w-100 md:w-1/2 p-0 md:p-6">
                    <Card data={TeamData[1]} img={5}/>
                </div>
            </div>


        </div>
    )
}

export default Team
