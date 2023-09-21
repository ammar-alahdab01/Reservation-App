import React from 'react'
import './fullscreenvideo.css'
import video from "../../videos/video.mp4"

function FullScreenVideo() {
  return (
    <div className="fullScreenVideo">
    <video src={video} type="video/mp4" autoPlay loop muted>Ops Sorry, Your Browser Doesn't Support This Video
      +_+</video>
    <div className="text">
      <h2>Awesome Video About Our Services' Features</h2>
      <p>It's All You Need</p>
      <button>See More</button>
    </div>
  </div>
  )
}

export default FullScreenVideo