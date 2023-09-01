import React from "react";
import "../Home.css";
import video from "../../../videos/gradient.mp4";


const Hero = () => {
  return (
    <div className="hero">
      <video className="hero-video" src={video} loop />
    </div>
  );
};

export default Hero;
