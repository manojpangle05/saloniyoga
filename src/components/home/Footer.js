import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
          <footer>
    {/* <!--? Footer Start--> */}
    <div className="footer-area black-bg">
        <div className="container">
            <div className="footer-top footer-padding">
                {/* <!-- Footer Menu --> */}
                <div className="row">
                    <div className="col-xl-12">
                        <div className="single-footer-caption mb-50 text-center">
                            {/* <!-- logo --> */}
                            <div className="footer-logo wow fadeInUp hero_logo" data-wow-duration="1s" data-wow-delay=".2s">
                            
                                    <Link to="/"><h2>Saloniyoga</h2></Link>
                                
                            </div>
                            {/* <!-- Menu -->
                            <!-- Header Start --> */}
                            <div className="header-area main-header2 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".4s">
                                <div className="main-header main-header2">
                                    <div className="menu-wrapper menu-wrapper2">
                                        {/* <!-- Main-menu --> */}
                                        <div className="main-menu main-menu2 text-center">
                                            <nav>
                                                <ul>
                                                    <li><Link to="/">Home</Link></li>
                                                    <li><Link to="/about">About</Link></li>
                                                    <li><Link to="/courses">Courses</Link></li>
                                                    <li><Link to="/pricing">Pricing</Link></li>
                                                    <li><Link to="/gallery">Gallery</Link></li>
                                                    <li><Link to="/contact">Contact</Link></li>
                                                </ul>
                                            </nav>
                                        </div>   
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Header End --> */}
                            {/* <!-- social --> */}
                            <div className="footer-social mt-30 wow fadeInUp" data-wow-duration="3s" data-wow-delay=".8s">
                                <a href="https://twitter.com/manoj_pangle" target="_blank"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.facebook.com/manoj.pangale.7/"  target="_blank"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://www.instagram.com/itz_mandy_05/" target="_blank"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/in/manoj-pangale-12a826180/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer Bottom --> */}
            <div className="footer-bottom">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-12">
                        <div className="footer-copy-right text-center">
                            <p>
                              Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | <Link to="#">Saloniyoga</Link>
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* <!-- Footer End--> */}
  </footer>  
        </>
    )
}

export default Footer
