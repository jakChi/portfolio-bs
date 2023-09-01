import React, { useEffect, useState } from "react";
import "../components/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCaretDown,
  faSquareXmark,
} from "@fortawesome/free-solid-svg-icons";

const MENU = <FontAwesomeIcon icon={faSquareCaretDown} />;
const XMARK = <FontAwesomeIcon icon={faSquareXmark} />;

const Navbar = ({ title }) => {
  const [mobile, setMobile] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleMobile = () => {
    window.innerWidth <= 550 ? setMobile(true) : setMobile(false);
    setClicked(false);
  };

  useEffect(() => {
    handleMobile();
  }, []);

  window.addEventListener('resize', handleMobile);

  return (
    <div className="navbar">
      <div className="logo">
        <Link className="logo-img-link" to={"/portfolio-bs"} onClick={() => setClicked(false)}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      {mobile ? (
        <i className="menu-icon" onClick={handleClick}>
          {clicked ? XMARK : MENU}
        </i>
      ) : null}
      <ul
        className={
          mobile
            ? `${clicked ? "nav-links-mob active" : "nav-links-mob"}`
            : "nav-links"
        }
        onClick={() => setClicked(false)}
      >
        <Link className="link" to="/portfolio-bs" onClick={() => setClicked(false)}>
          Home
        </Link>
        <Link className="link" to="projects" onClick={() => setClicked(false)}>
          Projects
        </Link>
        <Link className="link" to="contact" onClick={() => setClicked(false)}>
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
