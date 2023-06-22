import React from "react";
import { useEffect, useRef } from "react";
import "../Components/Foundersection.css";
import Founder from "../Assets/founder.png";

function Foundersection() {
  const ref = useRef();

  useEffect(() => {
    const fadeInElement = ref.current;
    const handleScroll = () => {
      const elementPosition = fadeInElement.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (elementPosition < screenHeight) {
        fadeInElement.classList.add("fade-in");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className='founder-section fade-in-container' ref={ref}>
      <div className='founder-wrapper '>
        <h2 className='fade-in-element'>Why Us?</h2>
        <p id='founder-copy-big' className='fade-in-element'>
          We Make We are committed to delivering exceptional service,<br></br>{" "}
          working with strategic partners to exceed your expectations<br></br>{" "}
          Simpler Than You Think.
        </p>
        <p id='founder-copy-small' className='fade-in-element'>
          Our team of experts thoughtfully source a selection of products, just
          for you.<br></br> We partner with an extensive list of professionals
          and brands to ensure that every design<br></br>is uniquely tailored to
          your style, your needs and your budget.
        </p>
      </div>
      <button className='btn-connect4 fade-in-element'>
        <a href='/contact'>Hire Us</a>
      </button>
      <div className='About-founder'>
        <div>
          <img src={Founder} alt='arteriorsbyellafounder' />
        </div>
        <div className='founder-details'>
          <p>FOUNDER / DIRECTOR</p>
          <h3>Stella Chibuike-Ezike</h3>
          <p id='aboutfounder'>
            Hi! I’m Stella, Founder and Director, Arteriors By Ella. I am an
            interior decorator by passion and a picture perfect planner &
            organizer. Arteriors By Ella is the vehicle through which I feed my
            penchant for delivering elegant, sophisticated and inspiring
            interiors with memorable experiences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Foundersection;
