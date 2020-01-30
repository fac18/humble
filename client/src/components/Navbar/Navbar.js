import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import NavContainer from "../styled/NavContainer";
import NavIcon from "../styled/NavIcon";

function Navbar() {
  return (
    <NavContainer direction="row">
      <NavIcon>
        <Link to="/profile">
          <i class="fas fa-user" />
        </Link>
      </NavIcon>
      <NavIcon>
        <Link to="/search">
          <i class="fas fa-search" />
        </Link>
      </NavIcon>
      <NavIcon>
        <Link to="/about">
          <i class="fas fa-info" />
        </Link>
      </NavIcon>
    </NavContainer>
  );
}

export default Navbar;
