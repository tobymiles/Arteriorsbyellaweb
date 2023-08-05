import React from "react";
import Pictures from "../Data/gallery.json";
import "./Gallery.css";

function Gallery() {
  return (
    <div className='Gallerytitle'>
      <h3>Project Gallery</h3>
      <div className='Gallerybody'>
        {Pictures.map((item) => {
          return (
            <div className='Artimg' key={item.id}>
              <img src={item.ellapic} alt='arteriorbyellaimg' />
            </div>
          );
        })}
      </div>
    </div>
  );
}



export default Gallery;


