import React from "react";
import "./../Navbar/Navbar.css";
import logo from "./../../../Assets/logosalesforce.svg";
import { NavLink, useLocation } from "react-router-dom";
function Navbar() {
  return (
    <div className="main_div_navbar">
      <div className="row">
        <div className="col-lg-1 col-md-1 col-1"></div>
        <div className="col-lg-10 col-md-10 col-10">
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <NavLink to="/" className="navbar-brand">
                <img className="salesforcelogo" src={logo} alt="salesforcelogo" />
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 main_center_navbar_items">
                  <li className="nav-item nav_item_links_style">
                    <NavLink
                      to="/"
                      exact
                      className="nav-link"
                      activeClassName="active"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item nav_item_links_style">
                    <NavLink
                      to="/whyus"
                      className="nav-link"
                      activeClassName="active"
                    >
                      Why us
                    </NavLink>
                  </li>
                  <li className="nav-item nav_item_links_style">
                    <NavLink
                      to="/integration"
                      className="nav-link"
                      activeClassName="active"
                    >
                      Integration
                    </NavLink>
                  </li>
                </ul>
                <form className="main_btn_signup">
                  <NavLink to="/aboutus">
                    <button className="sign_up_button_style">About Us</button>
                  </NavLink>
                </form>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-lg-1 col-md-1 col-1"></div>
      </div>
    </div>
  );
}

export default Navbar;
