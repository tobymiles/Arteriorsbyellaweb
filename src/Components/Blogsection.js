import React from "react";
import "./Blogsection.css";
import Arteriorimg1 from "../Assets/arteriorsbyellaimg1.png";
import Arteriorimg2 from "../Assets/arteriorsbyella2.png";
import Arteriorimg3 from "../Assets/arteriorsbyella3.png";

function Blogsection() {
  return (
    <div className='Blog-section'>
      <h3 className='Blog-title'>Blog</h3>
      <p className='Blog-subtitle'>Latest Blog Posts</p>

      <div className='Blog-gallery'>
        <div className='Blog-img1'>
          <img src={Arteriorimg1} alt='Arteriorimg1' />
          <div id='blog-background'>
            <h4>Planning A Nursery – Series I</h4>
            <div className='blog-status'>
              <p>April 22 2023</p>
              <p>Posted by Stella Chibuike-Ezike</p>
              <p>0 Comments</p>
            </div>
            <br></br>
            <hr className='solid'></hr>
            <p>
              The New Addition! It’s always an exciting time to be expecting a
              bundle of joy. Motherhood is a joyous experience and planning a
              nursery is one of those pr...
            </p>
          </div>
        </div>
        <div className='Blog-img2'>
          <img src={Arteriorimg2} alt='Arteriorimg2' />
          <div id='blog-background'>
            <h4>Space Planning</h4>
            <div className='blog-status'>
              <p>April 22 2023</p>
              <p>Posted by Stella Chibuike-Ezike</p>
              <p>0 Comments</p>
            </div>
            <br></br>
            <hr className='solid'></hr>
            <p>
              From conceptualisation to creation, we aim to bring to life
              aesthetically pleasing interior spaces. We ensure all our design
              elements are well balanced with a view to providing visually
              appealing, yet functional interiors, true to our clients’ needs.
              Our creative flair is ever present in all our design
            </p>
          </div>
        </div>
        <div className='Blog-img3'>
          <img src={Arteriorimg3} alt='Arteriorimg3' />
          <div id='blog-background'>
            <h4>Advisory and Consultation</h4>
            <div className='blog-status'>
              <p>April 22 2023</p>
              <p>Posted by Stella Chibuike-Ezike</p>
              <p>0 Comments</p>
            </div>
            <br></br>
            <hr className='solid'></hr>
            <p>
              Whether it’s a renovation, remodeling or an entirely new build,
              transforming a space could be overwhelming, mentally draining and
              comes with a lot of decision making that requires domain
              knowledge. We assist clients with beautifying
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogsection;
