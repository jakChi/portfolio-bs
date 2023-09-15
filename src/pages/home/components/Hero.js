import React from "react";
import "../Home.css";
import video from "../../../assets/videos/gradient.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
				<span className="gradient-word">React</span>
				*/}
				
        <h1 className="welcome-txt">Welcome to my portfolio!</h1>
        <div className="txt-btn-group">
          <div className="contact-div">
            <p className="contact-text">
							everything you need to know about me
            </p>
            <button className="pixel-border">Click me!</button>
          </div>
          <div className="projects-div">
            <p className="projects-text">
              visit my projects page here
            </p>
						<button className="pixel-border">Click me!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
