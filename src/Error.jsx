import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <h2>Nothing Here !</h2>
      <Link to={"/"}>
        <button className="btn primary-btn">back home</button>
      </Link>
    </div>
  );
};

export default Error;
