import React from "react";
import "../Home.css";
import video from "../../../assets/videos/gradient.mp4";
import Button from "./Button";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAnglesRight, faAnglesLeft } from "@fortawesome/free-solid-svg-icons";

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

        <h1 className="welcome-txt">Welcome to my portfolio!</h1>
        <h3>
          I will help you develop your <span className="gradient-word">React</span> website
        </h3>
        <div className="txt-btn-group">
          <div className="contact-div">
            <p className="contact-text">
              I will try to make your ideas reality look around here and if you
              consider to contacts me here's everything you need to know
            </p>
            <Button
              className={mobile ? "contact-btn-sm" : "contact-btn-lg"}
              value={"Contact"}
            />
          </div>
          <div className="projects-div">
            <Button
              className={mobile ? "projects-btn-sm" : "projects-btn-lg"}
              value={"Projects"}
            />
            <p className="projects-text">
              For your convinience I have created mini review of my work you can
              see below here! or you can visit my projects page here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
