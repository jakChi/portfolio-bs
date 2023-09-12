import React from "react";
import "../Home.css";
import Item from "./Item";
import ProjectsArr from "../../projects/ProjectsData";

//const dummyImg = "https://dummyimage.com/300x200";

const ProjectsRev = () => {
  return (
    <div className="projects-rev">
      <h2 className="grid-title">Projects Review</h2>
      <div className="grid">
        {ProjectsArr.map((project, index) => (
          <Item
            key={index}
            className={project.className}
            picSrc={project.picSrc}
            caption={project.caption}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsRev;
