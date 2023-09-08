import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const FACEBOOK = <FontAwesomeIcon icon={faFacebookF} />;
const X = <FontAwesomeIcon icon={faXTwitter} />;
const LINKEDIN = <FontAwesomeIcon icon={faLinkedinIn} />;
const GIT = <FontAwesomeIcon icon={faGithub} />

const Footer = () => {
  return (
    <div className="footer">
      <ul className="soc-links">
        <Link>
          <i>{FACEBOOK}</i>
        </Link>
        <Link>
          <i>{X}</i>
        </Link>
        <Link>
          <i>{LINKEDIN}</i>
        </Link>
        <Link>
          <i>{GIT}</i>
        </Link>
      </ul>
      <ul className="other-links">
        <Link>Create React App</Link>
        <Link>React Router</Link>
        <Link to="contact">sing up</Link>
      </ul>
      <address className="copyright">
        <p>&copy; Developed by jakChi 2023 | All Rights Reserved</p>
      </address>
    </div>
  );
};

export default Footer;

<div class="parent">
  <div class="div1"> </div>
  <div class="div2"> </div>
  <div class="div3"> </div>
</div>;