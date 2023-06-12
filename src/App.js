import "./App.css";
import Navbar from "../src/Layouts/Navbar";
import Landingsection from "./Components/Landingsection";
import Whowearesection from "./Components/Whowearesection";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Landingsection />
      <Whowearesection />
    </div>
  );
}

export default App;
