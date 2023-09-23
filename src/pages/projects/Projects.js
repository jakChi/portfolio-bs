import React, { useState } from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import ProjectsArr from "./ProjectsData";

const BULB = <FontAwesomeIcon icon={faLightbulb} />;
const NEXT_BTN = <FontAwesomeIcon icon={faArrowAltCircleRight} />;
const PREV_BTN = <FontAwesomeIcon icon={faArrowAltCircleLeft} />;

const Projects = ({ mobileView }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  //const [themeColor, setThemeColor] = useState("");

  //changes currentProject if it's last one it returns to the first, and if its first and we go back we go to the last
  const goForward = () => {
    if (currentIndex === ProjectsArr.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const changeBack = () => {
    if (currentIndex === 0) {
      setCurrentIndex(ProjectsArr.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentProject = ProjectsArr[currentIndex];
  return (
    <div className="projects">
      <div className="container">
        <Link
          className="project-title"
          title={currentProject.githubUrl}
          to={currentProject.githubUrl}
          target="_blank"
        >
          {currentProject.name}
        </Link>
        <div className="codepenSnippet">
          <button className="prevBtn" onClick={changeBack}>
            {PREV_BTN}
          </button>
          <iframe
            title={currentProject.title}
            src={currentProject.snippet}
            loading="lazy"
          ></iframe>
          <button className="nextBtn" onClick={goForward}>
            {NEXT_BTN}
          </button>
          <p
            className={mobileView ? "snippetSizeTip active" : "snippetSizeTip"}
          >
            please choose 0.5x size below to see content clearly {BULB}
          </p>
        </div>
        <Link to={currentProject.githubUrl} />
      </div>
    </div>
  );
};

//theme color must be added to this objects

export default Projects;
