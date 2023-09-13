import React from "react";
import "../Home.css";
import { Link } from "react-router-dom";

const Item = ({ className, picSrc, caption }) => {
  return (
    <div className={className}>
      <figure className="screenshot">
        <img src={picSrc} alt="screenshot of the project" />
        <Link className="middle-link">See details</Link>
        <figcaption>{caption}</figcaption>
      </figure>
    </div>
  );
};

export default Item;
