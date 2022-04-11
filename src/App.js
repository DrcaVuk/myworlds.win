import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from "./shared/components/navbar/Navbar";
import Footer from "./shared/components/footer/Footer";

import MyWorlds from "./myworlds/pages/MyWorlds";
import AboutMe from "./aboutme/pages/AboutMe";
import Game from "./game/pages/Game";
import Contact from "./contact/pages/Contact";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MyWorlds />} />
          <Route path="/game" element={<Game />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
