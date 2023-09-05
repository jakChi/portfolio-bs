import React from "react";
import "../Home.css";
import { Link } from "react-router-dom";

const Item = ({ className, picSrc, caption }) => {
  return (
    <div className={className}>
      <figure className="screenshot">
        <img src={picSrc} alt="screenshot of the project" />
        <div className="middle-link">
          <Link to="projects">See Details</Link>
        </div>
        <figcaption>{caption}</figcaption>
      </figure>
    </div>
  );
};

export default Item;
