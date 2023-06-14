import React from "react";
import "./Landingsection.css";
// import Slider from "react-slick";
import Landingpageimg1 from "../Assets/img1.png";
import Scrollimg1 from "../Assets/scroll-down-arrow.gif";

function Landingsection() {
  //   var settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //   };
  return (
    // <Slider {...settings}>
    //   <div>
    //     <div className='floating-card'>
    //       <h1>We Create</h1>
    //       <p>Lasting Impression</p>
    //     </div>
    //     <img src={Landingpageimg1} id='landingpageimg' alt='landingpageimg' />
    //   </div>
    //   <div>
    //     <div className='floating-card'>
    //       <h1>We Create</h1>
    //       <p>Lasting Impression</p>
    //     </div>
    //     <img src={Landingpageimg1} id='landingpageimg' alt='landingpageimg' />
    //   </div>
    //   <div>
    //     <div className='floating-card'>
    //       <h1>We Create</h1>
    //       <p>Lasting Impression</p>
    //     </div>
    //     <img src={Landingpageimg1} id='landingpageimg' alt='landingpageimg' />
    //   </div>
    // </Slider>

    <div className='Hero'>
      <div className='floating-card'>
        <h1>We Create</h1>
        <p id="Hero-paragrah">Lasting Impression</p>
      </div>
      <img src={Landingpageimg1} id='landingpageimg' alt='landingpageimg' />
      <img src={Scrollimg1} id='Scrollimg' alt='Scrollimg' />
    </div>
  );
}

export default Landingsection;
