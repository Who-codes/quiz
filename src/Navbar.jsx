import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="center">
        <Link to="/">
          <h2 className="title">Quiz</h2>
        </Link>
        <div className="link">
          <Link to="/">Home</Link>
          <Link to="/help">Help</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
