import React from 'react'
import { Link } from 'react-router-dom'

function Gallery() {
    return (
        <>
           <div className="gallery-area section-padding30 black-bg">
           <div class="container-fluid ">
                    <div class="row">
                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div class="box snake mb-30">
                                <div class="gallery-img big-img" style={{ backgroundImage: "url(" + "assets/img/gallery/yoga12.jpg" + ")" }} ></div>
                                <div class="overlay">
                                    <div class="overlay-content">
                                        <h3>Increase flexibility </h3>
                                        <Link to="/gallery"><i class="ti-plus"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div class="box snake mb-30">
                                <div class="gallery-img big-img" style={{ backgroundImage: "url(" + "assets/img/gallery/yoga8.jpg" + ")" }}></div>
                                <div class="overlay">
                                    <div class="overlay-content">
                                        <h3>Increase flexibility </h3>
                                        <Link to="/gallery"><i class="ti-plus"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div class="box snake mb-30">
                                <div class="gallery-img big-img" style={{ backgroundImage: "url(" + "assets/img/gallery/yoga13.jpg" + ")" }}></div>
                                <div class="overlay">
                                    <div class="overlay-content">
                                        <h3>Increase flexibility </h3>
                                        <Link to="/gallery"><i class="ti-plus"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div class="box snake mb-30">
                                <div class="gallery-img big-img" style={{ backgroundImage: "url(" + "assets/img/gallery/yoga14.jpg" + ")" }}></div>
                                <div class="overlay">
                                    <div class="overlay-content">
                                        <h3>Increase flexibility </h3>
                                        <Link to="/gallery"><i class="ti-plus"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div class="box snake mb-30">
                                <div class="gallery-img big-img" style={{ backgroundImage: "url(" + "assets/img/gallery/yoga11.jpg" + ")" }}></div>
                                <div class="overlay">
                                    <div class="overlay-content">
                                        <h3>Increase flexibility </h3>
                                        <Link to="/gallery"><i class="ti-plus"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <div class="box snake mb-30">
                                <div class="gallery-img big-img" style={{ backgroundImage: "url(" + "assets/img/gallery/yogas.jpg" + ")" }}></div>
                                <div class="overlay">
                                    <div class="overlay-content">
                                        <h3>Increase flexibility </h3>
                                        <Link to="/gallery"><i class="ti-plus"></i></Link>
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

export default Gallery
