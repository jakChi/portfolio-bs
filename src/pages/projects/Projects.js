import React, { useState } from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faLightbulb,
} from "@fortawesome/free-regular-svg-icons";
import ProjectsArr from "./ProjectsData";

const NEXT = <FontAwesomeIcon icon={faArrowAltCircleRight} />;
const BACK = <FontAwesomeIcon icon={faArrowAltCircleLeft} />;
const BULB = <FontAwesomeIcon icon={faLightbulb} />;

const Projects = ({ mobileView }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [editable, setEditable] = useState(false);
  //const [themeColor, setThemeColor] = useState("");

  //changes currentProject if it's last one it returns to the first, and if its first and we go back we go to the last
  const changeIndex = (event) => {
    const className = event.target.className;
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

  const makeProjectEditable = () => {
    setEditable(!editable);
  };

  const currentProject = ProjectsArr[currentIndex];
  return (
    <div className="projects">
      <h1>This is my Projects</h1>
      <div className="container">
        <div className="title-bar">
          <h2 className="project-title">{currentProject.name}</h2>
        </div>
        <div className="codepenSnippet">
          <button className="prevBtn" onClick={(event) => changeIndex(event)}>
            <i>{BACK}</i>
          </button>
          <button onClick={makeProjectEditable}>
            {editable ? "leave as it is" : "edit code"}
          </button>
          <p
            className={mobileView ? "snippetSizeTip active" : "snippetSizeTip"}
          >
            please choose 0.5x size below to see content clearly {BULB}
          </p>
          <iframe
            title={currentProject.title}
            src={currentProject.snippet}
            loading="lazy"
            allowFullScreen
            allowTransparency
          ></iframe>
          <button className="nextBtn" onClick={(event) => changeIndex(event)}>
            <i>{NEXT}</i>
          </button>
        </div>
        <Link to={currentProject.githubUrl} />
      </div>
    </div>
  );
};

//theme color must be added to this objects

export default Projects;
