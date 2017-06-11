import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import classNames from "classnames";

const NavBar = ({ location }) => (
  <nav className="nav">
    <div className="container">
      <div className="nav-left">
        <Link to="/" className="nav-item">
          <h1>Da Ralph Parkison Site</h1>
        </Link>
      </div>
      <span className="nav-toggle">
        <span />
        <span />
        <span />
      </span>
      <div className="nav-right nav-menu">
        <Link
          to="/"
          className={classNames(
            "nav-item",
            "is-tab",
            "is-hidden-mobile",
            location.pathname === "/" ? "is-active" : ""
          )}
        >
          About
        </Link>
        <Link
          to="/coding/"
          className={classNames(
            "nav-item",
            "is-tab",
            "is-hidden-mobile",
            location.pathname === "/coding/" ? "is-active" : ""
          )}
        >
          Coding
        </Link>
        <Link
          to="/blog/"
          className={classNames(
            "nav-item",
            "is-tab",
            "is-hidden-mobile",
            location.pathname === "/blog/" ? "is-active" : ""
          )}
        >
          Blog
        </Link>
        <Link
          to="/contact/"
          className={classNames(
            "nav-item",
            "is-tab",
            "is-hidden-mobile",
            location.pathname === "/contact/" ? "is-active" : ""
          )}
        >
          Contact
        </Link>
      </div>
    </div>
  </nav>
);

export default withRouter(NavBar);
