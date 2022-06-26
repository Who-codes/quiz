import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="extra">
      <h2 className="extra-title">Nothing Here !</h2>
      <Link to={"/"}>
        <button className="btn primary-btn">back home</button>
      </Link>
    </section>
  );
};

export default Error;
