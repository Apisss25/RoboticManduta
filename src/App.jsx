import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import About from "./pages/About";
import Project from "./pages/Project";
import Materials from "./pages/Materials";
import ButtonFloating from "./component/ButtonFloating";

const App = () => {
  return (
    <Router>
      <div className="app-Container">
        <Navbar />
        <Routes>
          <Route path="/RoboticManduta" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Materials" element={<Materials />} />
        </Routes>
        <Footer />
        <ButtonFloating />
      </div>
    </Router>
  );
};

export default App;
