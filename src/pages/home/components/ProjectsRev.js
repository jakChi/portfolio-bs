import React from "react";
import "../Home.css";
import retroCalc from "../../../images/calc.png";
import jazz from "../../../images/jazz-blog.png";
import searchFilter from "../../../images/search-filter.png";
import shoppingList from "../../../images/shopping-list.png";
import ticTacToe from "../../../images/tictactoe.png";
import Item from "./Item";


const dummyImg = "https://dummyimage.com/300x200";

const ProjectsRev = () => {
  const projects = [
    {
      className: "calc",
      picSrc: retroCalc,
      caption: "Retro Style React Calculator",
    },
    {
      className: "shop-list",
      picSrc: shoppingList,
      caption: "Retro Style Shopping list",
    },
    {
      className: "weather",
      picSrc: jazz,
      caption: "Solid Weather app with Changing colors",
    },
    {
      className: "search",
      picSrc: searchFilter,
      caption: "Search Filter with simple design",
    },
    {
      className: "tictactoe",
      picSrc: ticTacToe,
      caption: "Tic-Tac-Toe game with ongoing play history",
    },
  ];

  return (
    <div className="projects-rev">
      <h2 className="grid-title">Projects Review</h2>
      <div className="grid">
        {projects.map((project, index) => (
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
