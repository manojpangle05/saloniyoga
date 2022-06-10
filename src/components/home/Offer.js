import React from 'react'
import { Link } from 'react-router-dom'

function Offer() {
    return (
        <>
         <section className="team-area fix black-bg">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="section-tittle text-center mb-55 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                        <h2 >What We Offer</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="single-cat text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s" >
                        <div className="cat-icon">
                            <img src="assets/img/gallery/yoga2.jfif" alt=""/>
                        </div>
                        <div className="cat-cap">
                            <h5><Link to="/courses">Improve Posture</Link></h5>
                            <p>You’ll look at graphs and charts in Task One, how to approach the task </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-cat text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                        <div className="cat-icon">
                            <img src="assets/img/gallery/yoga3.jfif" alt=""/>
                        </div>
                        <div className="cat-cap">
                            <h5><Link to="/courses">Increase flexibility</Link></h5>
                            <p>You’ll look at graphs and charts in Task One, how to approach the task </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-cat text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                        <div className="cat-icon">
                            <img src="assets/img/gallery/yoga1.jfif" alt=""/>
                        </div>
                        <div className="cat-cap">
                            <h5><Link to="/courses">Build muscle strength</Link></h5>
                            <p>You’ll look at graphs and charts in Task One, how to approach the task </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>   
        </>
    )
}

export default Offer
