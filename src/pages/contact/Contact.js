import React, { useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
//import { Link } from "react-router-dom";



const Contact = () => {
  const [input, setInput] = useState("");
  const [email, setEmail] = useState("");
  
  const actionUrlAgent = `mailto:kobachincharauli8@gmail.com?subject=New customer from portfolio&body=Hi, Contact me on this email: ${email}!`;
  const actionUrlGmail = `https://mail.google.com/mail/?view=cm&fs=1&to=kobachincharauli5@gmail.com&su=New+Customer+from+portfolio&body=Hi,+contact+me+on+this+email:+${email}`;
  //const emailVerifier = `https://api.zerobounce.net/v2/validate?api_key=026944d604b143a78d0892c187f0c872&email=${email}`; -- verifier API

  const bulb = <FontAwesomeIcon icon={faLightbulb} />;

  const handleChange = (e) => {
    setInput(e.target.value);
  };


  const handleSubmit = () => {
    setEmail(input);
    setInput("");
    /*
    this should check if email address is valid or not but it costs a money so I won't use it now
    fetch(emailVerifier).then((res) => res.json()).then((data) => console.log(data));
    */ 
  }


  return (
    <div className="contact">
      <form
        className="email-form"
        action={window.innerWidth < 800 ? actionUrlAgent : actionUrlGmail}
        target="_blank"
        method="post"
        onSubmit={handleSubmit}
      >
        <h1 className="title">submit your email & I'll contact</h1>
        <input
          autoFocus
          autoCapitalize="off"
          autoComplete="off"
          req="true"
          className="email-input"
          type="email"
          placeholder="input your email"
          value={input}
          onChange={handleChange}
        />
        <p className={`sub-text ${input ? "active" : null}`}>
          press enter key to submit your email <i>{bulb}</i>
        </p>
        {/* I want to show this button only when user types correctly formated email address it needs regex
          <input className={`sub-button ${input ? "active" : null}`} type="submit" onClick={handleSubmit} />*/}
      </form>
      <h2>{email}</h2>
      <div className="contact-links"></div>
    </div>
  );
};

export default Contact;
