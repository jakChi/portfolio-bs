import React, { useEffect, useState } from "react";
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

const Navbar = ({ title }) => {
  const [mobile, setMobile] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home ");

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleMobile = () => {
    window.innerWidth <= 600 ? setMobile(true) : setMobile(false);
    setClicked(false);
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

  const handlePageChanges = (e) => {
    setClicked(false);
    setCurrentPage(e.target.innerText);
  }

  useEffect(() => {
    handleMobile();
  }, []);
  
  //window.addEventListener("scroll", hideNavbar);
  window.addEventListener("resize", handleMobile);

  return (
    <div className="navbar">
      <div className="logo">
        <Link
          className="logo-img-link"
          to={"/portfolio-bs"}
          onClick={() => setClicked(false)}
        >
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
        <Link
          className={`link ${
            currentPage === "Home " ? "active-page" : null
          }`}
          to="/portfolio-bs"
          onClick={handlePageChanges}
        >
          Home {HOME}
        </Link>
        <Link
          className={`link ${
            currentPage === "Projects " ? "active-page" : null
          }`}
          to="projects"
          onClick={handlePageChanges}
        >
          Projects {PROJECTS}
        </Link>
        <Link
          className={`link ${
            currentPage === "Contact " ? "active-page" : null
          }`}
          to="contact"
          onClick={handlePageChanges}
        >
          Contact {CONTACT}
        </Link>
        {clicked ? (
          <h4 className="developer-text">Developed By JakChi</h4>
        ) : null}
      </ul>
    </div>
  );
};

export default Navbar;
