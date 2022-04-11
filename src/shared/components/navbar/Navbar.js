import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAlignJustify, FaTimes } from "react-icons/fa"; 

import './Navbar.css' 

const Navbar = (props) => {
  const [ active , setActive ] = useState(false);

  const handlerActive = () => {
    setActive(!active);
    console.log("Proslo")
  }

  return (
    <nav>
      <div className="container">
        <div className="logo">MYWORLDS.WIN</div>
        <div className={active ?"navbar active":"navbar" }>
          <NavLink to="/">MY WORLDS</NavLink>
          <NavLink to="/game">GAME</NavLink>
          <NavLink to="/about-me">ABOUT ME</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
        </div>
        <div className="hamburger">
           {!active && <FaAlignJustify onClick={handlerActive} />}
           {active && <FaTimes onClick={handlerActive}/> }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
