import React from 'react'
import ReactPlayer from 'react-player';

function Video() {
    return (
        <>
            <div className="video-area section-bg2 d-flex align-items-center black-bg" data-background="assets/img/gallery/video-bg.png">
                <div className="container">
                    <div className="video-wrap position-relative">
                        <div className="video-icon mx-auto" >
                        <ReactPlayer
                                    className='react-player popup-video btn-icon'
                                    url='https://youtu.be/wnHW6o8WMas'
                                    width='100%'
                                    height='100%'
                                    controls={true}
                                ><i className="fas fa-play"></i></ReactPlayer>
                            {/* <a className="popup-video btn-icon" href="https://www.youtube.com/watch?v=up68UAfH0d0"><i className="fas fa-play"></i></a> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Video
