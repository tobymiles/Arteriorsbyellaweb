import React from "react";
import Joinimg from "../Assets/join.gif";
import "../Components/Joinsection.css";

function Joinsection() {
  return (
    <div className='Joinsection'>
      <img src={Joinimg} alt='Joinimg' />
      <h4>Join Our Community</h4>
      <p>
        Join the Arteriors by Ella Community and get home design and decor tips
        delivered to your inbox.
      </p>
      <div className='join-input'>
        <div>
          <input type='text' placeholder='Name' />
        </div>
        <div>
          <input type='email' placeholder='Email' />
        </div>
        <div>
          <button className='btn-join'>Join</button>
        </div>
      </div>
      <p id='policy-text'>
        Opt out anytime. Your details are safe with our Privacy Policy
      </p>
    </div>
  );
}

export default Joinsection;
