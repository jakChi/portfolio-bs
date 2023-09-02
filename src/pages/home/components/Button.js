import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const Button = ({ value, className, handleClick }) => {
  return (
    <button className={className} onClick={handleClick}>
      <Link to={value}>{value}</Link>
    </button>
  );
};

export default Button;
