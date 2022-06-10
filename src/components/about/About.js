import React from 'react'
import { Link } from 'react-router-dom'
import About_me from '../home/About_me'
import Blog from '../home/Blog'

import Video from '../home/Video'

function About() {
    return (
        <>
            <div className="slider-area2">
                <div className="slider-height2 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap hero-cap2 pt-70">
                                    <h2>About Us</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            

            
            <About_me/>
            <Blog/>

           <Video/>

           
        </>
    )
}

export default About
