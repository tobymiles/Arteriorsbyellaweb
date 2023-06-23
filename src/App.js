import "./App.css";
import Navbar from "../src/Layouts/Navbar";
import Landingsection from "./Components/Landingsection";
import Whowearesection from "./Components/Whowearesection";
import Services from "./Components/Services";
import Projectsection from "./Components/Projectsection";
import Foundersection from "./Components/Foundersection";
import Blogsection from "./Components/Blogsection";
import Footer from "../src/Layouts/Footer";

function App() {
  return (
    <div className='App'>
      <div>
        <Navbar />
        <Landingsection />
        <Whowearesection />
        <Services />
        <Projectsection />
        <Foundersection />
        <Blogsection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
