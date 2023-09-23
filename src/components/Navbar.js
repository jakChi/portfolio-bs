import React, { useState } from "react";
import "../components/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCaretDown,
  faSquareXmark,
  faHouseFlag,
  faBarsProgress,
  faAt,
} from "@fortawesome/free-solid-svg-icons";

const MENU = <FontAwesomeIcon icon={faSquareCaretDown} />;
const XMARK = <FontAwesomeIcon icon={faSquareXmark} />;
const HOME = <FontAwesomeIcon icon={faHouseFlag} />;
const PROJECTS = <FontAwesomeIcon icon={faBarsProgress} />;
const CONTACT = <FontAwesomeIcon icon={faAt} />;

const Navbar = ({ mobile }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    mobile ? setClicked(!clicked) : setClicked(false);
  };

  //when user scrolls navbar should hide with this but it's not working

  // let navStyle = {top: 0}
  // const hideNavbar = () => {
  //   let prevScrollPos = window.scrollY;
  //   const scrollPos = window.scrollY;
  //   //console.log(Math.round(scrollPos) + " " + Math.round(prevScrollPos));

  //   if (scrollPos > prevScrollPos) {
  //     navStyle = {
  //       top: "-100px",
  //     };
  //   } else {
  //     navStyle = {
  //       top: 0,
  //     };
  //   }
  //   prevScrollPos = scrollPos;
  // };

  //window.addEventListener("scroll", hideNavbar);

  return (
    <div className="navbar">
      <Link
        className="logo"
        to={"/portfolio-bs"}
        onClick={() => setClicked(false)}
      >
        <img src={logo} alt="logo" />
      </Link>
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
        <Link className={`link`} to="/portfolio-bs" title="Home page">
          Home {HOME}
        </Link>
        <Link className={`link`} to="projects" title="Projects page">
          Projects {PROJECTS}
        </Link>
        <Link className={`link`} to="contact" title="Contact page">
          Contact {CONTACT}
        </Link>
        {mobile && clicked ? (
          <h4 className="developer-text">Developed By JakChi</h4>
        ) : null}
      </ul>
    </div>
  );
};

export default Navbar;
