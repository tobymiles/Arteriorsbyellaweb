import React from "react";
import "../Components/Projectsection.css";
function Projectsection() {
  return (
    <div className='Project'>
      <div className='project-body'>
        <div>
          <h5>Project Gallery</h5>
        </div>
        <div className='project-links'>
          <a href='/home'>Project1</a>
          <a href='/service'>Project2</a>
          <a href='/blog'>Project3</a>
          <a href='/blog'>Project4</a>
        </div>
      </div>
    </div>
  );
}

export default Projectsection;
