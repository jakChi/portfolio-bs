import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngry } from "@fortawesome/free-solid-svg-icons";

const FACEBOOK = <FontAwesomeIcon icon={faAngry} />

const Footer = () => {
  return (
    <div className="footer">
      <ul className="soc-links">
        <Link><i>{FACEBOOK}</i></Link>
        <Link>Tweeter</Link>
        <Link>Linkedin</Link>
      </ul>
      <p>&copy;2021 Nadine Coelho | All Rights Reserved</p>
    </div>
  );
};

export default Footer;
