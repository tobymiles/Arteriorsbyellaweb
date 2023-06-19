import React from "react";
import { useState } from "react";
import "../Components/Projectsection.css";
import Projectimg from "../Assets/arteriorsbyellaproject.png";

function Projectsection() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className='Project'>
      <div className='project-body'>
        <div>
          <h5>Project Gallery</h5>
        </div>
        <div className='project-links'>
          <div className='tab' onClick={() => handleTabClick(0)}>
            <p> Project1</p>
          </div>
          <div className='tab' onClick={() => handleTabClick(1)}>
            <p> Project2</p>
          </div>
          <div className='tab' onClick={() => handleTabClick(2)}>
            <p> Project3</p>
          </div>
          <div className='tab' onClick={() => handleTabClick(3)}>
            <p>Project4</p>
          </div>
        </div>
      </div>
      <div className='project-brief'>
        <div className='project-brief-items'>
          <div>
            {activeTab === 0 && (
              <div className='project-img'>
                <img src={Projectimg} alt='Projectimg' />
                <div className='project-copy'>
                  <h3>Project 1</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Eget leo
                    pellentesque ultrices egestas imperdiet. Semper nec commodo
                    ut leo purus ut eget diam cursus. Vestibulum amet sed
                    dignissim eleifend mi aliquet. Purus integer duis augue
                    eget. Ut augue sagittis rhoncus et tempor eget porttitor
                    pellentesque aliquam. Pharetra porttitor nibh eu commodo
                    sed. Eget lobortis nunc sed sapien nec. Arcu orci tincidunt
                    cursus urna morbi venenatis molestie. Massa cursus sem
                    eleifend condimentum eget eget.
                  </p>
                  <button className='btn-connect3 copy'>
                    <a href='/contact'>Hire Us</a>
                  </button>
                </div>
              </div>
            )}
          </div>
          <div>
            {activeTab === 1 && (
              <div className='project-img'>
                <img src={Projectimg} alt='Projectimg' />
                <div className='project-copy'>
                  <h3>Project 2</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Eget leo
                    pellentesque ultrices egestas imperdiet. Semper nec commodo
                    ut leo purus ut eget diam cursus. Vestibulum amet sed
                    dignissim eleifend mi aliquet. Purus integer duis augue
                    eget. Ut augue sagittis rhoncus et tempor eget porttitor
                    pellentesque aliquam. Pharetra porttitor nibh eu commodo
                    sed. Eget lobortis nunc sed sapien nec. Arcu orci tincidunt
                    cursus urna morbi venenatis molestie. Massa cursus sem
                    eleifend condimentum eget eget.
                  </p>
                  <button className='btn-connect3'>
                    <a href='/contact'>Hire Us</a>
                  </button>
                </div>
              </div>
            )}
          </div>

          <div>
            {activeTab === 2 && (
              <div className='project-img'>
                <img src={Projectimg} alt='Projectimg' />
                <div className='project-copy'>
                  <h3>Project 3</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Eget leo
                    pellentesque ultrices egestas imperdiet. Semper nec commodo
                    ut leo purus ut eget diam cursus. Vestibulum amet sed
                    dignissim eleifend mi aliquet. Purus integer duis augue
                    eget. Ut augue sagittis rhoncus et tempor eget porttitor
                    pellentesque aliquam. Pharetra porttitor nibh eu commodo
                    sed. Eget lobortis nunc sed sapien nec. Arcu orci tincidunt
                    cursus urna morbi venenatis molestie. Massa cursus sem
                    eleifend condimentum eget eget.
                  </p>
                  <button className='btn-connect3'>
                    <a href='/contact'>Hire Us</a>
                  </button>
                </div>
              </div>
            )}
          </div>
          <div>
            {activeTab === 3 && (
              <div className='project-img'>
                <img src={Projectimg} alt='Projectimg' />
                <div className='project-copy'>
                  <h3>Project 4</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Eget leo
                    pellentesque ultrices egestas imperdiet. Semper nec commodo
                    ut leo purus ut eget diam cursus. Vestibulum amet sed
                    dignissim eleifend mi aliquet. Purus integer duis augue
                    eget. Ut augue sagittis rhoncus et tempor eget porttitor
                    pellentesque aliquam. Pharetra porttitor nibh eu commodo
                    sed. Eget lobortis nunc sed sapien nec. Arcu orci tincidunt
                    cursus urna morbi venenatis molestie. Massa cursus sem
                    eleifend condimentum eget eget.
                  </p>
                  <button className='btn-connect3'>
                    <a href='/contact'>Hire Us</a>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectsection;
