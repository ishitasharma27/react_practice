import React from "react";
// stateless functional component
const NavBar = (props) => {
    
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbabr-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;