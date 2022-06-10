import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            {/* <div id="preloader-active">
                <div className="preloader d-flex align-items-center justify-content-center">
                    <div className="preloader-inner position-relative">
                        <div className="preloader-circle"></div>
                        <div className="preloader-img pere-text">
                            <img src="assets/img/logo/loder.png" alt="" />
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <!-- Preloader Start --> */}
            <header>
                
                <div className="header-area header-transparent">
                    <div className="main-header header-sticky">
                        <div className="container-fluid">
                            <div className="menu-wrapper d-flex align-items-center justify-content-between">
                                
                                <div className="logo hero_logo">
                                    <Link to="/"><h2>Saloniyoga</h2></Link>
                                </div>
                                
                                <div className="main-menu f-right d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/about">About</Link></li>
                                            <li><Link to="/courses">Courses</Link></li>
                                            <li><Link to="/pricing">Pricing</Link></li>
                                            <li><Link to="/gallery">Gallery</Link></li>
                                            <li><Link to="/blogs">Blog</Link>
                                                <ul className="submenu">
                                                    <li><Link to="/blogs">Blog</Link></li>
                                                    <li><Link to="/blogs">Latest Blogs</Link></li>
                                                    <li><Link to="/blogs">Elements</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/contact">Contact</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                                
                                <div className="header-btns d-none d-lg-block f-right">
                                    <Link to="/contact" className="btn">Contact Us</Link>
                                </div>
                                
                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </header>
        </>
    )
}

export default Header
