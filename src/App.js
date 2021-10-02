import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Service from "./Pages/Service";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/contact"><Contact /></Route>
          <Route path="/portfolio"><Portfolio /></Route>
          <Route path="/service"><Service /></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
