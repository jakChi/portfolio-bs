import React, { useEffect, useState } from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";

const NEXT = <FontAwesomeIcon icon={faArrowAltCircleRight} />;
const BACK = <FontAwesomeIcon icon={faArrowAltCircleLeft} />;

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  //const [themeColor, setThemeColor] = useState("");

  //changes currentProject if it's last one it returns to the first, and if its first and we go back we go to the last
  const changeIndex = (event) => {
    const className = event.target.className;
    if (className === "nextBtn") {
      if (currentIndex === projectsArr.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    } else if (className === "prevBtn") {
      if (currentIndex === 0) {
        setCurrentIndex(projectsArr.length - 1);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  //apperently this doesn't work codepen snippet isn't being rendered
  // useEffect(() => {
  //   const script = document.createElement("script");

  //   script.src = projectsArr[currentIndex].snippet;
  //   script.async = true;

  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, [currentIndex]);

  const currentProject = projectsArr[currentIndex];
  return (
    <div className="projects">
      <h1>This is my Projects</h1>
      <div className="container">
        <div className="title-bar">
          <h2 className="project-title">
            {currentProject.name}
          </h2>
        </div>
        <div className="codepenSnippet">
          <button className="prevBtn" onClick={(event) => changeIndex(event)}>
            P
          </button>
          <p className="snippetSizeTip">please choose 0.5x size below to see content clearly</p>
          <iframe
            title={currentProject.title}
            src={currentProject.snippet}
          ></iframe>
          <button className="nextBtn" onClick={(event) => changeIndex(event)}>
            N
          </button>
        </div>
        <Link to={currentProject.githubUrl} />
      </div>
    </div>
  );
};


//theme color must be added to this objects
const projectsArr = [
  {
    id: 1,
    name: "Retro Calculator",
    githubUrl: "",
    snippet:
      "https://codepen.io/CamperIO/embed/GRGmQxm?default-tab=result&theme-id=dark",
  },
  {
    id: 2,
    name: "Shopping List",
    githubUrl: "",
    snippet:
      "https://codepen.io/CamperIO/embed/qBQvPVL?default-tab=result&theme-id=dark",
  },
  {
    id: 3,
    name: "Tic-Tac-Toe",
    githubUrl: "",
    snippet: "",
  },
  {
    id: 4,
    name: "React Tetris",
    githubUrl: "",
    snippet: "",
  },
  {
    id: 5,
    name: "Food Recipes",
    githubUrl: "",
    snippet: "",
  },
  {
    id: 6,
    name: "Hang Man",
    githubUrl: "",
    snippet: "",
  },
];

export default Projects;
