import React from "react";
import "./Landingsection.css";
// import ReactPlayer from 'react-player';
import videoFile from "../video.mp4"
// import Slider from "react-slick";

// import Landingpageimg1 from "../Assets/img1.jpg";
// import Scrollimg1 from "../Assets/scroll-down-arrow.gif";

function Landingsection() {
  return (
    <div className='Hero'>
       <video className="back-video" loop muted autoPlay playsInline>
        <source src={videoFile} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      <div className='floating-card'>
        <h1>We Create</h1>
        <p id='Hero-paragrah'>Lasting Impression</p>
      </div>
      {/* <img src={Landingpageimg1} id='landingpageimg' alt='landingpageimg' /> */}
      {/* <img src={Scrollimg1} id='Scrollimg' alt='Scrollimg' /> */}
    </div>
  );
}

export default Landingsection;
