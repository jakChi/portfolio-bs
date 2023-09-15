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

const Projects = ({ mobileView }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  //const [themeColor, setThemeColor] = useState("");

  //changes currentProject if it's last one it returns to the first, and if its first and we go back we go to the last
  const changeIndex = (event) => {
    const className = event.target.classList[2];
    if (className === "nextBtn") {
      if (currentIndex === ProjectsArr.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    } else if (className === "prevBtn") {
      if (currentIndex === 0) {
        setCurrentIndex(ProjectsArr.length - 1);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  const currentProject = ProjectsArr[currentIndex];
  return (
    <div className="projects">
      <div className="container">
        <h2 className="project-title">{currentProject.name}</h2>
        <div className="codepenSnippet">
          <FontAwesomeIcon
            className="prevBtn"
            icon={faArrowAltCircleLeft}
            onClick={changeIndex}
          />
          <iframe
            title={currentProject.title}
            src={currentProject.snippet}
            loading="lazy"
          ></iframe>
          <FontAwesomeIcon
            className="nextBtn"
            icon={faArrowAltCircleRight}
            onClick={changeIndex}
          />
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
