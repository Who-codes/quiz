import React from "react";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <section className="extra">
      <h2 className="extra-title">Instructions</h2>
      <p className="extra-para">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        rem eos quae id, quod pariatur quisquam accusamus. Et saepe veniam quia
        accusantium voluptatem corporis tempora vel quos voluptas quisquam!
        Adipisci provident a minus dicta quis numquam, illum aut veniam natus
        iusto ipsa? Rem laborum eius eveniet nihil accusantium obcaecati
        accusamus.
      </p>
      <Link to={"/"}>
        <button className="btn primary-btn">back home</button>
      </Link>
    </section>
  );
};

export default Help;
