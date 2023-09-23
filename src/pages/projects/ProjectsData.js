import calc from "../../assets/images/calc.png";
import shopList from "../../assets/images/shopping-list.png";
import ticTacToe from "../../assets/images/tictactoe.png";
import RandomQuote from "../../assets/images/randomQuote.png";
import bmiCalc from "../../assets/images/BMI.png";

const ProjectsArr = [
  {
    id: 1,
    name: "Retro Calculator",
    githubUrl: "https://github.com/jakChi/retro-calculator",
    snippet: `https://codepen.io/CamperIO/embed/GRGmQxm?default-tab=result&editable=true&theme-id=dark`,
    className: "calc",
    picSrc: calc,
    caption: "Retro Style React Calculator",
  },
  {
    id: 2,
    name: "Shopping List",
    githubUrl: "https://github.com/jakChi/Shopping-list",
    snippet: `https://codepen.io/CamperIO/embed/qBQvPVL?default-tab=result&editable=true&theme-id=dark`,
    className: "shop-list",
    picSrc: shopList,
    caption: "Simple shopping list",
  },
  {
    id: 3,
    name: "Tic-Tac-Toe",
    githubUrl: "https://github.com/jakChi/Tic-Tac-Toe",
    snippet: `https://codepen.io/CamperIO/embed/oNaJVbO?default-tab=result&editable=true&theme-id=dark`,
    className: "tictactoe",
    picSrc: ticTacToe,
    caption: "Tic-Tac-Toe game",
  },
  {
    id: 4,
    name: "Random Quotes",
    githubUrl: "",
    snippet: `https://codepen.io/CamperIO/embed/ExLaPgZ?default-tab=result&editable=true&theme-id=dark`,
    className: "random-qoute",
    picSrc: RandomQuote,
    caption: "Random Quote Generator",
  },
  {
    id: 5,
    name: "BMI Calculator",
    githubUrl: "",
    snippet: `https://codepen.io/CamperIO/embed/YzRMVBo?default-tab=result&editable=true&theme-id=dark`,
    className: "bmiCalc",
    picSrc: bmiCalc,
    caption: "Body Mass Index calculator",
  },
];

export default ProjectsArr;
