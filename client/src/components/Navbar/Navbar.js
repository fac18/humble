import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import NavContainer from "../styled/NavContainer";
import NavIcon from "../styled/NavIcon";

function Navbar() {
  return (
    <NavContainer direction="row" justify="space-around">
      <Link to="/profile">
        <NavIcon>
          <i class="fas fa-user" />
        </NavIcon>
      </Link>
      <Link to="/search">
        <NavIcon>
          <i class="fas fa-search" />
        </NavIcon>
      </Link>
      <Link to="/about">
        <NavIcon>
          <i class="fas fa-info" />
        </NavIcon>
      </Link>
    </NavContainer>
  );
}

export default Navbar;
