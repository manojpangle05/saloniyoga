import React from 'react'
import About_me from "./components/home/About_me";
// import About_me fr
import Blog from './components/home/Blog';

import Gallery from "./components/home/Gallery";
import Pricing from "./components/home/Pricing";
import Hero from "./components/home/Hero";
import Offer from "./components/home/Offer";
import Training from "./components/home/Training";
import Video from "./components/home/Video";

function Home() {
    return (
        <>
            <Hero />
            <Training />
            <Offer />
            <Gallery />
            <About_me />
            <Pricing />
            
            <Blog />
            {/* <Video /> */}
        </>
    )
}

export default Home
