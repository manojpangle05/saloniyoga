import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <>
            <div className="slider-area position-relative">
        <div className="slider-active">
            {/* <!-- Single Slider --> */}
            <div className="single-slider slider-height d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-9 col-md-10">
                            <div className="hero__caption">
                                <span data-animation="fadeInLeft" data-delay="0.1s">Experience the joy  of yoga</span>
                                <h1 data-animation="fadeInLeft" data-delay="0.4s">Saloni Yoga</h1>
                                <Link to="/courses" className="border-btn border-btn3" data-animation="fadeInLeft" data-delay="0.8s">My Courses</Link>
                            </div>
                        </div>
                    </div>
                </div>          
            </div>
        </div>
    </div>
        </>
    )
}

export default Hero
