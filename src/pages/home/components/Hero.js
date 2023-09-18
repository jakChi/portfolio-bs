import React from "react";
import "../Home.css";
import video from "../../../assets/videos/gradient.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
//import { faReact } from "@fortawesome/free-brands-svg-icons";

//document.getElementsByClassName("video").defaultPlaybackRate = 3.0;

const Hero = ({ mobile }) => {
  return (
    <div className="hero">
      <div className="video-frame">
        <video
          className="video"
          src={video}
          autoPlay
          loop
          muted
          preload="auto"
          poster="https://th.bing.com/th/id/OIP.gYyvBOuQwXSWuefMRBZp9gAAAA?pid=ImgDet&rs=1"
        />

        {/*
				<i><FontAwesomeIcon icon={faReact}/></i>
				
				*/}

        <h1 className="welcome-txt">
          <span className="gradient-word">Welcome</span> to my portfolio!
        </h1>
        <div className="txt-btn-group">
          <div className="contact-div">
            <p className="contact-text">everything you need to know about me</p>
            <Link to={"contact"} className="pixelated-btn">Click me!</Link>
          </div>
          <div className="projects-div">
            <p className="projects-text">visit my projects page here</p>
            <Link to={"projects"} className="pixelated-btn">Click me!</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
