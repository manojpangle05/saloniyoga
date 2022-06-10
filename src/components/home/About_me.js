import React from 'react'
import { Link } from 'react-router-dom'

function About_me() {
    return (
        <>
          <section className="about-area2 fix pb-padding pt-50 pb-80 black-bg">
        <div className="support-wrapper align-items-center">
            <div className="right-content2">
                {/* <!-- img --> */}
                <div className="right-img wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                    <img src="assets/img/gallery/sal.png" alt=""/>
                </div>
            </div>
            <div className="left-content2">
                {/* <!-- section tittle --> */}
                <div className="section-tittle2 mb-20 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                    <div className="front-text">
                        <h2 className="">About Me</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. a galley of type and scrambled Lorem Ipsum is simply dummy typesetting industry. a galley of type and scrambled...</p>
                        <p className="mb-40">Lorem Ipsum is simply dummy text of the printing and typesetting industry. a galley of type and scrambled Lorem Ipsum is simply dummy typesetting industry. a galley of type and scrambled...</p>
                        <Link to="/courses" className="border-btn border-btn3">My Courses</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>  
        </>
    )
}

export default About_me
