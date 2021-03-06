/**
 * Created by Shubham Singh on 29/03/19.
 */
import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Header.css";

const Header = () => (
  <div className="uk-container">
    <header uk-sticky="show-on-up: true;animation: uk-animation-slide-top;">
      <nav className="uk-navbar uk-navbar-container uk-navbar-transparent">
        <div className="uk-navbar-right uk-nav-center-sm">
          <ul className="uk-navbar-nav">
            <li>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" activeClassName="active">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/resume" activeClassName="active">
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacts" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
);

export default Header;
