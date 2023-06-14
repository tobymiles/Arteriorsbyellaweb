import "./App.css";
import Navbar from "../src/Layouts/Navbar";
import Landingsection from "./Components/Landingsection";
import Whowearesection from "./Components/Whowearesection";
import Services from "./Components/Services";
import Projectsection from "./Components/Projectsection";
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
      </div>
      <Footer />
    </div>
  );
}

export default App;
