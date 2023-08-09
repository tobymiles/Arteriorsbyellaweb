import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "../src/Layouts/Navbar";
import Homepage from "./Pages/Homepage";
import Footer from "../src/Layouts/Footer";
import Blog from "./Pages/Blog";
import Gallery from "./Pages/Gallery";
import SingleBlog from "./Pages/Singleblog";
import Contact from "./Pages/Contact";
// import Services from "./Components/Services";
import Errorpage from "./Components/Errorpage";

// Styled
import "./App.css";

function App() {
  const [blogPost, setBlogPost] = useState({});
  return (
    <div className='App'>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/blog' element={<Blog setBlogPost={setBlogPost} />} />
          <Route path='gallery' element={<Gallery />} />
          <Route
            path='singleblog'
            element={<SingleBlog blogPost={blogPost} />}
          />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<Errorpage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
