import React from 'react'
import { Link } from 'react-router-dom'
import Offer from '../home/Offer'
import Training from '../home/Training'
import Video from '../home/Video'

function Courses() {
    return (
        <>
            <div className="slider-area2">
                <div className="slider-height2 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap hero-cap2 pt-70">
                                    <h2>Courses</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Offer/>

            <Training />

           <Video />
        </>
    )
}

export default Courses
