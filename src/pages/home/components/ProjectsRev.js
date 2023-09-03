import React from "react";
import "../Home.css";
import retroCalc from "../../../images/retro-calc.png";
import jazz from "../../../images/jazz-blog.png";
import randomQuotes from "../../../images/random-quotes.png";
import searchFilter from "../../../images/search-filter.png";
import shoppingList from "../../../images/shopping-list.png";
import ticTacToe from "../../../images/tictactoe.png";
import MiniProject from "./MiniProject";


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
      caption: "Retro Style Shopping list(Yeah I like retro stuff;))",
    },
    {
      className: "weather",
      picSrc: jazz,
      caption: "Solid Weather app with API and Changing colors",
    },
    {
      className: "search",
      picSrc: searchFilter,
      caption: "Search Filter with simple design and random names API",
    },
    {
      className: "recipes",
      picSrc: randomQuotes,
      caption: "API based Meal Recipes App",
    },
    {
      className: "tictactoe",
      picSrc: ticTacToe,
      caption: "Tic-Tac-Toe game with ongoing play history",
    },
  ];

  return (
    <div className="projects-rev">
      <div className="grid">
        {projects.map((project, index) => (
          <MiniProject
            key={index}
            className={project.className}
            picSrc={dummyImg}
            caption={project.caption}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsRev;
