import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="title">submit your email & I'll contact</h1>
      <form className="email-form">
        <input
          className="email-input"
          type="email"
          autoComplete="off"
          placeholder="your email..."
        />
        <input className="sub-button" type="submit" />
      </form>
      <h2>Here are everything you should know about me</h2>
      <div className="contact-links">
        <ul>
          <Link to="" />
        </ul>
      </div>
    </div>
  );
};

export default Contact;
