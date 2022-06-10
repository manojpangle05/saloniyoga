
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
// import styled from 'styled-components';
// import { useHistory } from 'react-router-dom';


// const Navbar = styled.span `
// color: #fff;
// `;

// (document).ready(function () {
//     ("ul.navbar-nav > li").click(function (e) {
//      ("ul.navbar-nav > li").removeClass("active");
//      (this).addClass("active");
//       });
//   });
function Header2() {


    return (
        <>

            <Navbar className='header-area header-transparent' id="header" style={{width: "100%"}} sticky="top" collapseOnSelect expand="lg" variant="dark">
            <div className="main-header header-sticky" style={{width: "100%"}}>
                <div className="container-fluid d-lg-flex" >
                    <Navbar.Brand href="/" className="logo hero_logo"><h2>Saloniyoga</h2></Navbar.Brand>

                    <Navbar.Toggle className='toggle-nav' aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav" className="my-0 collapsible">
                        <Nav className="mr-auto">


                        </Nav>


                        <Nav className="nav-menu " id="navigation">
                        <LinkContainer to="/" className={'list-item my-auto'} activeClassName="active-link" isActive={checkActive}>
                            <Nav.Link  className="navbar-link text-white linkHere">Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer className={'list-item my-auto'} to="/about">
                            <Nav.Link className="navbar-link text-white linkHere">About</Nav.Link>
                            </LinkContainer>
                            <LinkContainer className={'list-item my-auto'} to="/courses">
                            <Nav.Link className="navbar-link text-white linkHere">Courses</Nav.Link>
                            </LinkContainer>
                            <LinkContainer className={'list-item my-auto'} to="/pricing">
                            <Nav.Link className="navbar-link text-white linkHere">Pricing</Nav.Link>
                            </LinkContainer>
                            {/* <NavDropdown className="area active" style={{ Color: "#58b958", hover: "color:#fff" }} title={"Services"} id="collasible-nav-dropdown">
                                <div className="unorderedList">
                                   
                                    <LinkContainer to="/personal-tasks">
                                    <NavDropdown.Item>Personal VA Service</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/executive">
                                    <NavDropdown.Item>Executive Secretarial Task</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/bookkeeping">
                                    <NavDropdown.Item>Book Keeping</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/website">
                                    <NavDropdown.Item>Website Service</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/linkedin">
                                    <NavDropdown.Item>Linkedin Services</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/digital">
                                    <NavDropdown.Item>Digital Services</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/business">
                                    <NavDropdown.Item>Business Process Support</NavDropdown.Item>
                                    </LinkContainer>
                                </div>
                            </NavDropdown> */}
                            {/* <NavDropdown className="area " style={{ Color: "#58b958", hover: "color:#fff" }} title={"Industry"} id="collasible-nav-dropdown">
                                <div className="unorderedList">
                                    
                                <LinkContainer to="/education-and-training">
                                    <NavDropdown.Item >Education &amp; Training</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/entertainment-and-event-management">
                                    <NavDropdown.Item >Entertainment &amp; Event Management</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/healthcare-and-fitness">
                                    <NavDropdown.Item >Healthcare &amp; Fitness</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/retail-and-ecommerce">
                                    <NavDropdown.Item >Retail &amp; E-Commerce</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/sales-and-marketing">
                                    <NavDropdown.Item >Sales &amp; Marketing</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/realEstate">
                                    <NavDropdown.Item >Real Estate</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/staff">
                                    <NavDropdown.Item >Staffing &amp; Recruitment</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/travel">
                                    <NavDropdown.Item >Travel &amp; Vacation Rentals</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/customerServices">
                                    <NavDropdown.Item >Customer service</NavDropdown.Item>
                                    </LinkContainer>
                                    
                                </div>
                            </NavDropdown> */}
                            {/* <Nav.Link className="drop-down text-white navbar-link"><a href="">Services</a>
                                <ul>

                                    <li className="drop-down"><a href="#">Personal VA Service</a>
                                        <ul>
                                            <li><a href="#">Personal Tasks</a></li>
                                            <li><a href="#">Executive Secretarial Task</a></li>

                                        </ul>
                                    </li>
                                    <BookKeep />
                                    <li><a href="#">Website Service</a></li>
                                    <LinkedinLink />
                                    <li><a href="#">Digital Services</a></li>
                                    <li><a href="#">Business Process Support</a></li>


                                </ul>
                            </Nav.Link>
                            <Nav.Link className="drop-down  text-white navbar-link"><a href="">Industry</a>
                                <ul>
                                    <li><a href="#">Education &amp; Training</a></li>

                                    <li><a href="#">Entertainment &amp; Event Management</a></li>
                                    <li><a href="#">Healthcare &amp; Fitness</a></li>

                                    <li><a href="#">Retail &amp; E-Commerce</a></li>
                                    <li><a href="#">Sales &amp; Marketing</a></li>
                                    <RealEstateLi />
                                    <li><a href="#">Staffing &amp; Recruitment</a></li>
                                    <li><a href="#">Travel &amp; Vacation Rentals</a></li>
                                    <li><a href="#">Customer service</a></li>

                                </ul>
                            </Nav.Link>
                             */}
                             <LinkContainer to="/gallery" className={'list-item my-auto'}>
                            <Nav.Link className="navbar-link text-white linkHere" href="">Gallery</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/blogs" className={'list-item my-auto'}>
                            <Nav.Link className="navbar-link text-white linkHere" href="">Blog</Nav.Link>
                            </LinkContainer>
                            {/* <LinkContainer to="/pricing1">
                            <Nav.Link className="navbar-link text-white linkHere" href="">Pricing &amp; Plans</Nav.Link>
                            </LinkContainer> */}
                            {/* <LinkContainer to="/contact2" className={'list-item my-auto'}>
                            <Nav.Link className="navbar-link text-white linkHere" href="">Contact Us</Nav.Link>
                            </LinkContainer> */}
                            <LinkContainer className={'list-item header-btns d-none d-lg-block'} to="/contact2">
                            <Nav.Link className="navbar-link text-white linkHere btn head-btn" href="">Contact Us</Nav.Link>
                            </LinkContainer>
                            {/* <LinkContainer to="/customerServices"> */}
                            



                            {/* <Nav.Link className="navbar-link text-white" href="#"><span><i class="icofont-search-1"></i></span></Nav.Link> */}

                        </Nav>
                    </Navbar.Collapse>
                </div>
                </div>
            </Navbar>

        </>
    )
}

export default Header2

const checkActive = (match, location) => {
    //some additional logic to verify you are in the home URI
    if(!location) return false;
    const {pathname} = location;
    console.log(pathname);
    return pathname === "/";
}


