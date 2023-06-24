import React from "react";
import "./Services.css";
import Arteriorimg1 from "../Assets/arteriorsbyellaimg1.png";
import Arteriorimg2 from "../Assets/arteriorsbyella2.png";
import Arteriorimg3 from "../Assets/arteriorsbyella3.png";

function Services() {
  return (
    <div className='Service-details'>
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
                From conceptualisation to creation, we aim to bring to life
                aesthetically pleasing interior spaces. We ensure all our design
                elements are well balanced with a view to providing visually
                appealing, yet functional interiors, true to our clients’ needs.
                Our creative flair is ever present in all our design
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
