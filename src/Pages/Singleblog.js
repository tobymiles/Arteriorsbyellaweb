import React from "react";
import "./Singleblog.css";

function Singleblog({ blogPost }) {
  return (
    <div className='Singleblog'>
      <img src={blogPost.imageURL} alt='Arteriorimg1' />
      <h3>{blogPost?.blogTitle}</h3>
      <p>{blogPost?.blogBody}</p>
    </div>
  );
}

export default Singleblog;
