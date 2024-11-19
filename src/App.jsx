import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Blue from "./Components/Blue";
import Red from "./Components/Red";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <div id="container">
        <h1>Hello React Router!</h1>
        <div id="navbar">
          <Link to="/blue">Blue</Link>
          <Link to="/red"> Red</Link>
          <Link to="/"> Home</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
          </Routes>
        </div>
      </div>
      <footer>
        <div id="footer">
          <Link to="/blue">Blue</Link>
          <Link to="/red"> Red</Link>
          <Link to="/"> Home</Link>
        </div>
      </footer>
    </>
  );
}

export default App;
