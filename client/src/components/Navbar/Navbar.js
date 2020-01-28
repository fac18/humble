import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">Landing</Link>
      <Link to="/about">About</Link>
      <Link to="/search">Search</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
}

export default Navbar;
