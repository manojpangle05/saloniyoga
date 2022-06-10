import React from 'react'

function Foot_link() {
    return (
        <>
            <section className="services-area black-bg">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                            <div className="single-services mb-40 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                                <div className="features-icon">
                                <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="features-caption">
                                    <h3>Location</h3>
                                    <p>Mumbai, India</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                            <div className="single-services mb-40 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                            <div className="features-icon">
                            <i className="fas fa-mobile-alt"></i>
                                </div>
                                <div className="features-caption">
                                    <h3>Phone</h3>
                                    <a href="tel:+919765357797" target="_blank">+91 9765357797</a>
                                    {/* <p> (78) 267 256 2578</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                            <div className="single-services mb-40 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".4s">
                                <div className="features-icon">
                                <i class="fas fa-envelope"></i>
                                </div>
                                <div className="features-caption">
                                    <h3>Email</h3>
                                    <a href="mailto:manojpangle05@gmail.com" target="_blank">manojpangle05@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Foot_link
