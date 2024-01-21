import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    //the "data-bs-theme="dark"" allows us to change the color scheme of the navbar
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme={`${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/about/">
                About
              </a>
            </li> */}
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className={`btn btn-${props.mode === 'light'? 'dark':'light'}`} type="submit">
              Search
            </button>
          </form>

          {/* theme changer */}
          <div className={`form-check form-switch ms-3 text-${props.mode === 'light'? 'dark':'light'}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Enable Dark Mode
            </label>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;

//specifying the type of props to ensure we pass values of proper types
Navbar.prototype = {
  title: PropTypes.string,
};

//if no props are given then display these default props
Navbar.defaultProps = {
  title: "Your brand title",
};
