import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "../src/Layouts/Navbar";
import Homepage from "./Pages/Homepage";
import Footer from "../src/Layouts/Footer";
import Blog from "./Pages/Blog";
import Services from "./Components/Services";
import Errorpage from "./Components/Errorpage";
import api from "./Client";
// import { Server } from "./Config";
import { useEffect } from "react";

function App() {
  const getUser = () => {
    const user = api.createSession(
      "ekwealortobechukwu22@gmail.com",
      "animalfarm1$"
    );

    user.then(
      (res) => {
        console.log({ res });
      },
      (error) => {
        console.error({ error });
      }
    );
  };
  const getPosts = () => {
    const blogPosts = api.listDocuments(
      "64aaa40f6f1f7fe37cac",
      "64aaa465525bdcb03129"
    );
    blogPosts.then(
      (res) => {
        console.log({ res });
      },
      (error) => {
        console.error({ error });
      }
    );
  };

  useEffect(() => {
    getPosts();
    getUser();
  }, []);

  return (
    <div className='App'>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='#services' element={<Services />} />
          <Route path='*' element={<Errorpage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
