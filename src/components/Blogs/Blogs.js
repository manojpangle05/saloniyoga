import React from 'react'
import { Link } from 'react-router-dom'

function Blogs() {
    return (
        <>
            <div className="slider-area2">
                <div className="slider-height2 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap hero-cap2 pt-70">
                                    <h2>Blog</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="blog_area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mb-5 mb-lg-0">
                            <div className="blog_left_sidebar">
                                <article className="blog_item">
                                    <div className="blog_item_img">
                                        <img className="card-img rounded-0" src="assets/img/blog/woman1.jpg" alt="" />
                                        <Link to="#" className="blog_item_date">
                                            <h3>15</h3>
                                            <p>Jan</p>
                                        </Link>
                                    </div>
                                    <div className="blog_details">
                                        <Link className="d-inline-block" to="/blogdetails1">
                                            <h2 className="blog-head" style={{ color: "#2d2d2d" }}>Breathe into your backbends</h2>
                                        </Link>
                                        <p>Yoga is a mirror to look at ourselves from within.</p>
                                        <ul className="blog-info-link">
                                            <li><Link to="#"><i className="fa fa-user"></i> Yoga, Fitness</Link></li>
                                            <li><Link to="#"><i className="fa fa-comments"></i> 03 Comments</Link></li>
                                        </ul>
                                    </div>
                                </article>
                                <article className="blog_item">
                                    <div className="blog_item_img">
                                        <img className="card-img rounded-0" src="assets/img/blog/woman2.jpg" alt="" />
                                        <Link to="#" className="blog_item_date">
                                            <h3>15</h3>
                                            <p>Jan</p>
                                        </Link>
                                    </div>
                                    <div className="blog_details">
                                        <Link className="d-inline-block" to="/blogdetails2">
                                            <h2 className="blog-head" style={{ color: "#2d2d2d" }}>When life is a drag, Yoga is there to lift you up</h2>
                                        </Link>
                                        <p>Yoga does not just change the way we see things, it transforms the person who sees.</p>
                                        <ul className="blog-info-link">
                                            <li><Link to="#"><i className="fa fa-user"></i> Yoga, Fitness</Link></li>
                                            <li><Link to="#"><i className="fa fa-comments"></i> 03 Comments</Link></li>
                                        </ul>
                                    </div>
                                </article>
                                <article className="blog_item">
                                    <div className="blog_item_img">
                                        <img className="card-img rounded-0" src="assets/img/blog/woman3.jpg" alt="" />
                                        <Link to="#" className="blog_item_date">
                                            <h3>15</h3>
                                            <p>Jan</p>
                                        </Link>
                                    </div>
                                    <div className="blog_details">
                                        <Link className="d-inline-block" to="/blogdetails">
                                            <h2 className="blog-head" style={{ color: "#2d2d2d" }}>A path to a happier better life</h2>
                                        </Link>
                                        <p>When you listen to yourself, everything comes naturally. It comes from inside, like a kind of will to do something. Try to be sensitive. That is yoga.</p>
                                        <ul className="blog-info-link">
                                            <li><Link to="#"><i className="fa fa-user"></i> Yoga, Fitness</Link></li>
                                            <li><Link to="#"><i className="fa fa-comments"></i> 03 Comments</Link></li>
                                        </ul>
                                    </div>
                                </article>
                                <article className="blog_item">
                                    <div className="blog_item_img">
                                        <img className="card-img rounded-0" src="assets/img/blog/woman4.jpg" alt="" />
                                        <Link to="#" className="blog_item_date">
                                            <h3>15</h3>
                                            <p>Jan</p>
                                        </Link>
                                    </div>
                                    <div className="blog_details">
                                        <Link className="d-inline-block" to="/blogdetails3">
                                            <h2 className="blog-head" style={{ color: "#2d2d2d" }}>Do what feels good in the moment</h2>
                                        </Link>
                                        <p>Yoga takes you into the present moment. The only place where life exists.</p>
                                        <ul className="blog-info-link">
                                            <li><Link to="#"><i className="fa fa-user"></i> Yoga, Fitness</Link></li>
                                            <li><Link to="#"><i className="fa fa-comments"></i> 03 Comments</Link></li>
                                        </ul>
                                    </div>
                                </article>
                                <article className="blog_item">
                                    <div className="blog_item_img">
                                        <img className="card-img rounded-0" src="assets/img/blog/woman5.jpg" alt="" />
                                        <Link to="#" className="blog_item_date">
                                            <h3>15</h3>
                                            <p>Jan</p>
                                        </Link>
                                    </div>
                                    <div className="blog_details">
                                        <Link className="d-inline-block" to="/blogdetails4">
                                            <h2 className="blog-head" style={{ color: "#2d2d2d" }}>Yoga is a process, not a pose</h2>
                                        </Link>
                                        <p>We all wish for world peace, but world peace will never be achieved unless we first establish peace within our own minds.</p>
                                        <ul className="blog-info-link">
                                            <li><Link to="#"><i className="fa fa-user"></i> Yoga, Fitness</Link></li>
                                            <li><Link to="#"><i className="fa fa-comments"></i> 03 Comments</Link></li>
                                        </ul>
                                    </div>
                                </article>
                                <nav className="blog-pagination justify-content-center d-flex">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <Link to="#" className="page-link" aria-label="Previous">
                                                <i className="ti-angle-left"></i>
                                            </Link>
                                        </li>
                                        <li className="page-item">
                                            <Link to="#" className="page-link">1</Link>
                                        </li>
                                        <li className="page-item active">
                                            <Link to="#" className="page-link">2</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link to="#" className="page-link" aria-label="Next">
                                                <i className="ti-angle-right"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog_right_sidebar">
                                <aside className="single_sidebar_widget search_widget">
                                    <form action="#">
                                        <div className="form-group">
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder='Search Keyword'
                                                    onfocus="this.placeholder = ''"
                                                    onblur="this.placeholder = 'Search Keyword'" />
                                                {/* <div className="input-group-append">
                                                    <button className="btns" type="button"><i className="ti-search"></i></button>
                                                </div> */}
                                            </div>
                                        </div>
                                        <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                                            type="submit">Search</button>
                                    </form>
                                </aside>
                                <aside className="single_sidebar_widget post_category_widget">
                                    <h4 className="widget_title" style={{ color: "#2d2d2d" }}>Category</h4>
                                    <ul className="list cat-list">
                                        <li>
                                            <Link to="#" className="d-flex">
                                                <p>Resaurant food</p>
                                                <p>(37)</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="d-flex">
                                                <p>Travel news</p>
                                                <p>(10)</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="d-flex">
                                                <p>Modern technology</p>
                                                <p>(03)</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="d-flex">
                                                <p>Product</p>
                                                <p>(11)</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="d-flex">
                                                <p>Inspiration</p>
                                                <p>21</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="d-flex">
                                                <p>Health Care (21)</p>
                                                <p>09</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </aside>
                                <aside className="single_sidebar_widget popular_post_widget">
                                    <h3 className="widget_title" style={{ color: "#2d2d2d" }}>Recent Post</h3>
                                    <div className="media post_item">
                                        <img src="assets/img/post/yog1.jpg" alt="post" />
                                        <div className="media-body">
                                            <Link to="#">
                                                <h3 style={{ color: "#2d2d2d" }}>From life was you fish...</h3>
                                            </Link>
                                            <p>January 12, 2019</p>
                                        </div>
                                    </div>
                                    <div className="media post_item">
                                        <img src="assets/img/post/yog2.jpg" alt="post" />
                                        <div className="media-body">
                                            <Link to="#">
                                                <h3 style={{ color: "#2d2d2d" }}>The Amazing Hubble</h3>
                                            </Link>
                                            <p>02 Hours ago</p>
                                        </div>
                                    </div>
                                    <div className="media post_item">
                                        <img src="assets/img/post/yog3.jpg" alt="post" />
                                        <div className="media-body">
                                            <Link to="#">
                                                <h3 style={{ color: "#2d2d2d" }}>Astronomy Or Astrology</h3>
                                            </Link>
                                            <p>03 Hours ago</p>
                                        </div>
                                    </div>
                                    <div className="media post_item">
                                        <img src="assets/img/post/yog4.jpg" alt="post" />
                                        <div className="media-body">
                                            <Link to="#">
                                                <h3 style={{ color: "#2d2d2d" }}>Asteroids telescope</h3>
                                            </Link>
                                            <p>01 Hours ago</p>
                                        </div>
                                    </div>
                                </aside>
                                <aside className="single_sidebar_widget tag_cloud_widget">
                                    <h4 className="widget_title" style={{ color: "#2d2d2d" }}>Tag Clouds</h4>
                                    <ul className="list">
                                        <li>
                                            <Link to="#">project</Link>
                                        </li>
                                        <li>
                                            <Link to="#">love</Link>
                                        </li>
                                        <li>
                                            <Link to="#">technology</Link>
                                        </li>
                                        <li>
                                            <Link to="#">travel</Link>
                                        </li>
                                        <li>
                                            <Link to="#">restaurant</Link>
                                        </li>
                                        <li>
                                            <Link to="#">life style</Link>
                                        </li>
                                        <li>
                                            <Link to="#">design</Link>
                                        </li>
                                        <li>
                                            <Link to="#">illustration</Link>
                                        </li>
                                    </ul>
                                </aside>

                                <aside className="single_sidebar_widget instagram_feeds">
                                    <h4 className="widget_title" style={{ color: "#2d2d2d" }}>Instagram Feeds</h4>
                                    <ul className="instagram_row flex-wrap">
                                        <li>
                                            <Link to="#">
                                                <img className="img-fluid" src="assets/img/post/yog5.jpg" alt="" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <img className="img-fluid" src="assets/img/post/yog6.jpg" alt="" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <img className="img-fluid" src="assets/img/post/yog2.jpg" alt="" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <img className="img-fluid" src="assets/img/post/yog1.jpg" alt="" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <img className="img-fluid" src="assets/img/post/yog4.jpg" alt="" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <img className="img-fluid" src="assets/img/post/yog3.jpg" alt="" />
                                            </Link>
                                        </li>
                                    </ul>
                                </aside>
                                <aside className="single_sidebar_widget newsletter_widget">
                                    <h4 className="widget_title" style={{ color: "#2d2d2d" }}>Newsletter</h4>
                                    <form action="#">
                                        <div className="form-group">
                                            <input type="email" className="form-control" onfocus="this.placeholder = ''"
                                                onblur="this.placeholder = 'Enter email'" placeholder='Enter email' required />
                                        </div>
                                        <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                                            type="submit">Subscribe</button>
                                    </form>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blogs
