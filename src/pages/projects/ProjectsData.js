import calc from "../../assets/images/calc.png";
import shopList from "../../assets/images/shopping-list.png";
import ticTacToe from "../../assets/images/tictactoe.png";
import RandomQuote from "../../assets/images/randomQuote.png";
import bmiCalc from "../../assets/images/BMI.png";
import pomodoro from "../../assets/images/pomodoro.png";
import jlog from "../../assets/images/jlog.png";

const ProjectsArr = [
  {
    id: 1,
    name: "Retro Calculator",
    githubUrl: "https://github.com/jakChi/retro-calculator",
    snippet: `https://codepen.io/CamperIO/embed/preview/GRGmQxm?default-tab=result&editable=true&theme-id=dark`,
    className: "calc",
    picSrc: calc,
    caption: "Retro Style React Calculator",
  },
  {
    id: 2,
    name: "Shopping List",
    githubUrl: "https://github.com/jakChi/Shopping-list",
    snippet: `https://codepen.io/CamperIO/embed/preview/qBQvPVL?default-tab=result&editable=true&theme-id=dark`,
    className: "shop-list",
    picSrc: shopList,
    caption: "Simple shopping list",
  },
  {
    id: 3,
    name: "Tic-Tac-Toe",
    githubUrl: "https://github.com/jakChi/Tic-Tac-Toe",
    snippet: `https://codepen.io/CamperIO/embed/preview/oNaJVbO?default-tab=result&editable=true&theme-id=dark`,
    className: "tictactoe",
    picSrc: ticTacToe,
    caption: "Tic-Tac-Toe game",
  },
  {
    id: 4,
    name: "Random Quotes",
    githubUrl: "",
    snippet: `https://codepen.io/CamperIO/embed/preview/ExLaPgZ?default-tab=result&editable=true&theme-id=dark`,
    className: "random-qoute",
    picSrc: RandomQuote,
    caption: "Random Quote Generator",
  },
  {
    id: 5,
    name: "BMI Calculator",
    githubUrl: "",
    snippet: `https://codepen.io/CamperIO/embed/preview/YzRMVBo?default-tab=result&editable=true&theme-id=dark`,
    className: "bmiCalc",
    picSrc: bmiCalc,
    caption: "Body Mass Index calculator",
  },
  {
    id: 6,
    name: "Pomodoro Timer",
    githubUrl: "https://github.com/jakChi/Pomodoro-timer",
    snippet: `https://codepen.io/CamperIO/embed/preview/yLwJYRg?default-tab=result&editable=true&theme-id=dark`,
    className: "pomodoro",
    picSrc: pomodoro,
    caption: "Pomodoro Timer",
  },
  {
    id: 7,
    name: "Jlog",
    githubUrl: "https://github.com/jakChi/Jlog",
    snippet: ``,
    className: "jlog",
    picSrc: jlog,
    caption: "Blogging Website",
  },
];

export default ProjectsArr;
