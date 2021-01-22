import React from "react";
import { Link } from "react-router-dom";
import { INTERNAL_LINKS } from "../../enum";

import "./style.scss";

const NavBar = () => (
  <nav>
    <div className="nav-wrapper grey darken-4">
      <Link to={INTERNAL_LINKS.PUBLISH} className="header-menu-item">
        Publish
      </Link>
      <Link to={INTERNAL_LINKS.SUBSCRIBE} className="header-menu-item">
        Subscribe
      </Link>
    </div>
  </nav>
);

export default NavBar;
