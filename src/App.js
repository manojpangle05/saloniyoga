
import React from 'react'
import Header from "./components/home/header";
import Footer from "./components/home/Footer";
import Foot_link from "./components/home/Foot_link";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom'
import Home from './Home';
import Main_gallery from './components/Gallery/Main_gallery';
import About from './components/about/About';
import Courses from './components/Courses/Courses';
import Contact from './components/Contact/Contact';
import Main_pricing from './components/Pricing/Main_pricing';
import Blogs from './components/Blogs/Blogs';
import BlogDetails from './components/Blogs/BlogDetails';
import BlogDetails1 from './components/Blogs/BlogDetails1';
import BlogDetails2 from './components/Blogs/BlogDetails2';
import BlogDetails3 from './components/Blogs/BlogDetails3';
import BlogDetails4 from './components/Blogs/BlogDetails4';
import Header2 from './components/Header2';

function App() {
  return (

    <>

      <Router>





        <Header2 />
        <Routes>
          <Route exact path="/" element={<Home/>} ></Route>
          <Route exact path="/gallery" element={<Main_gallery/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/courses" element={<Courses/>}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
          <Route exact path="/pricing" element={<Main_pricing/>}></Route>
          <Route exact path="/blogs" element={<Blogs/>}></Route>
          <Route exact path="/blogdetails" element={<BlogDetails/>}></Route>
          <Route exact path="/blogdetails1" element={<BlogDetails1/>}></Route>
          <Route exact path="/blogdetails2" element={<BlogDetails2/>}></Route>
          <Route exact path="/blogdetails3" element={<BlogDetails3/>}></Route>
          <Route exact path="/blogdetails4" element={<BlogDetails4/>}></Route>
          </Routes>
          {/* <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
          <Foot_link />
          <Footer />

          {/* <!-- Scroll Up --> */}
          <div id="back-top" >
            <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt"></i></a>
          </div>
        
      </Router>

    </>
  );
}

export default App;
