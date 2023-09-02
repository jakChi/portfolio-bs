import React from "react";
import Hero from "./components/Hero";
import ProjectsRev from "./components/ProjectsRev";
import "../../index.css";

const Home = () => {
  return (
    <div className="home">
      <Hero mobile={false} />
      <ProjectsRev />
    </div>
  );
};

export default Home;
