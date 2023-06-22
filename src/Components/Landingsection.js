import React from "react";
import "./Landingsection.css";
// import Slider from "react-slick";

import Landingpageimg1 from "../Assets/img1.png";
import Scrollimg1 from "../Assets/scroll-down-arrow.gif";

function Landingsection() {
  return (
    <div className='Hero'>
      <div className='floating-card'>
        <h1>We Create</h1>
        <p id='Hero-paragrah'>Lasting Impression</p>
      </div>
      <img src={Landingpageimg1} id='landingpageimg' alt='landingpageimg' />
      <img src={Scrollimg1} id='Scrollimg' alt='Scrollimg' />
    </div>
  );
}

export default Landingsection;
