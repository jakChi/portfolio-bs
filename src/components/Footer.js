import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faLinkedinIn,
  faGithub,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
//import { faAt } from "@fortawesome/free-solid-svg-icons";

const FACEBOOK = <FontAwesomeIcon icon={faFacebookF} />;
const X = <FontAwesomeIcon icon={faXTwitter} />;
const LINKEDIN = <FontAwesomeIcon icon={faLinkedinIn} />;
const GIT = <FontAwesomeIcon icon={faGithub} />;
const CODE_PEN = <FontAwesomeIcon icon={faCodepen} />;
//const MAIL = <FontAwesomeIcon icon={faAt} />;

const Footer = () => {
  return (
    <div className="footer">
      <ul className="soc-links">
        <Link
          to={"https://www.facebook.com/jacob.tchintcharauli"}
          target="_blank"
          title="Facebook profile"
        >
          <i>{FACEBOOK}</i>
        </Link>
        <Link
          to={"https://twitter.com/iakob23499435"}
          target="_blank"
          title="Twitter profile"
        >
          <i>{X}</i>
        </Link>
        <Link
          to={"https://www.linkedin.com/in/jakob-tchintcharauli-b11553252/"}
          target="_blank"
          title="Linkedin profile"
        >
          <i>{LINKEDIN}</i>
        </Link>
        <Link
          to={"https://github.com/jakChi"}
          target="_blank"
          title="Github profile"
        >
          <i>{GIT}</i>
        </Link>
        <Link
          to={"https://codepen.io/CamperIO"}
          target="_blank"
          title="Codepen profile"
        >
          <i>{CODE_PEN}</i>
        </Link>
      </ul>
      <ul className="other-links">
        <Link>Create React App</Link>
        <Link>React Router</Link>
        <Link to="contact">sing up</Link>
      </ul>
      <address className="copyright">
        <p>
          &copy; Designed and developed by jakChi 2023 | All Rights Reserved
        </p>
      </address>
    </div>
  );
};

export default Footer;
