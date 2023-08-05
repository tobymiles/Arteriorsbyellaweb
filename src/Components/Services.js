import React from "react";
import "./Services.css";
import Arteriorimg1 from "../Assets/arteriorsbyellaimg1.png";
import Arteriorimg2 from "../Assets/arteriorsbyella2.png";
import Arteriorimg3 from "../Assets/arteriorsbyella3.png";

function Services() {
  return (
    <div className='Service-details' id='service'>
      <div className='Services'>
        <div className='service-wrapper'>
          <div>
            <h3>Services</h3>
          </div>
          <div id='small-copy1'>
            <p>We Make It Simpler Than You Think.</p>
          </div>
          <div>
            <p id='small-copy'>
              Let us help you create a space that reflects your unique
              personality
            </p>
          </div>
          <button className='btn-connect2 copy'>
            <a href='/contact'>Hire Us</a>
          </button>
        </div>
        <div className='service-img'></div>
      </div>
      <div>
        <div className='service-gallery'>
          <div className='service-img1'>
            <img src={Arteriorimg1} alt='Arteriorimg1' />
            <div id='background-1'>
              <h4>Interior Design and Styling</h4>
              <p>
                From conceptualisation to creation, we aim to bring to life
                aesthetically pleasing interior spaces. We ensure all our design
                elements are well balanced with a view to providing visually
                appealing, yet functional interiors, true to our clients’ needs.
                Our creative flair is ever present in all our design
              </p>
            </div>
          </div>
          <div className='service-img2'>
            <img src={Arteriorimg2} alt='Arteriorimg2' />
            <div id='background-1'>
              <h4>Space Planning</h4>
              <p>
                We visualize, then analyze different interior sections based on
                their intended use and turn them into purposeful and gorgeous
                spaces, ensuring that their uses are maximized for efficient and
                effective living. It’s a behind the scenes activity, fundamental
                to achieving excellent results. We do this by balancing
                structure, symmetry, circulation and lighting with the
                functional uses of each space. The idea is to create optimal
                interiors that deliver on balance, practicality and style.
              </p>
            </div>
          </div>
          <div className='service-img3'>
            <img src={Arteriorimg3} alt='Arteriorimg3' />
            <div id='background-1'>
              <h4>Advisory and Consultation</h4>
              <p>
                Whether it’s a renovation, remodeling or an entirely new build,
                transforming a space could be overwhelming, mentally draining
                and comes with a lot of decision making that requires domain
                knowledge. We assist clients with beautifying
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
