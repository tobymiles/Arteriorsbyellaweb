import React from "react";
import "./Whowearesection.css";
import Whoweare from "../Assets/whoweare.png";

function Whowearesection() {
  return (
    <div className='About-Us'>
      <div className='wrapper row'>
        <div id='aboutsection'>
          <img src={Whoweare} alt='aboutarteriorsbyellaimg' />
        </div>
        <div>
          <div className='copy1 copy'>
            <h3>Who We Are</h3>
            <p>Interior Design and Décor Experts</p>
          </div>
          <div className='copy2 copy'>
            <h3>What We Do</h3>
            <p>
              Aiming to consistently deliver innovative and impactful interiors,
              we constantly create a delightful experience for our customers
              through the infusion of originality, integrity, reliability and
              unparalleled customer service, into our works.
            </p>
          </div>
          <div className='copy3 copy'>
            <h3>How We Do What We Do</h3>
            <br></br>
            <p>
              <span id='short-text'>Creativity:</span> At Arteriors by Ella,
              everything you imagine can be brought to life. This is because we
              are driven by the desire to create, working out ingenuities, one
              space at a time.
            </p>
            <br></br>
            <p>
              <span id='short-text'>Passion:</span> We love what we do as well
              as the challenge that comes with interpreting every client’s
              unique design style.
            </p>
            <br></br>
            <p>
              <span id='short-text'>Professionalism:</span> We uphold our
              commitment to quality operations and to deliver exceptional
              service to our clients.
            </p>
            <br></br>
            <p>
              <span id='short-text'>Service:</span> We never compromise on
              exceptional customer service as long as client satisfaction is at
              stake.
            </p>
            <br></br>
          </div>
          <button className='btn-connect copy'>
            <a href='/contact'>Connect</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Whowearesection;
