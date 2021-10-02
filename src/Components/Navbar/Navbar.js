import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/service">Service</Link>
        </div>
    )
}

export default Navbar;