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

// { "id": "2", "ellapic": "assets/Arteriorsbyella-20230624-WA0002.jpg" },
// { "id": "3", "ellapic": "assets/Arteriorsbyella-20230624-WA0003.jpg" },
// { "id": "4", "ellapic": "assets/Arteriorsbyella-20230624-WA0006.jpg" },
// { "id": "5", "ellapic": "assets/Arteriorsbyella-20230624-WA0007.jpg" },
// { "id": "6", "ellapic": "assets/Arteriorsbyella-20230624-WA0008.jpg" },
// { "id": "7", "ellapic": "assets/Arteriorsbyella-20230624-WA00010.jpg" },
// { "id": "8", "ellapic": "assets/Arteriorsbyella-20230624-WA00011.jpg" },
// { "id": "9", "ellapic": "assets/Arteriorsbyella-20230624-WA00012.jpg" },
// { "id": "10", "ellapic": "assets/Arteriorsbyella-20230624-WA00013.jpg" },
// { "id": "11", "ellapic": "assets/Arteriorsbyella-20230624-WA00014.jpg" },
// { "id": "12", "ellapic": "assets/Arteriorsbyella-20230624-WA00015.jpg" },
// { "id": "13", "ellapic": "assets/Arteriorsbyella-20230624-WA00016.jpg" },
// { "id": "14", "ellapic": "assets/Arteriorsbyella-20230624-WA00017.jpg" },
// { "id": "15", "ellapic": "assets/Arteriorsbyella-20230624-WA00018.jpg" },
// { "id": "16", "ellapic": "assets/Arteriorsbyella-20230624-WA00019.jpg" },
// { "id": "17", "ellapic": "assets/Arteriorsbyella-20230624-WA00020.jpg" }
