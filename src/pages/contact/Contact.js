import React, { useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
//import { Link } from "react-router-dom";
//import resume from "../../assets/files/resume2.docx.pdf";

const Contact = () => {
  const [input, setInput] = useState("");
  const [email, setEmail] = useState("");
  // const [pdfOpen, setPdfOpen] = useState(false);

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
  };

  return (
    <div className="contact">
      <section className="email">
        <form
          className="email-form"
          action={window.innerWidth < 800 ? actionUrlAgent : actionUrlGmail}
          target="_blank"
          method="post"
          onSubmit={handleSubmit}
        >
          <label className="email-label">
            Sumbit your email and I will contact
            <input
              req="true"
              className="email-input"
              type="email"
              placeholder="input your email"
              value={input}
              onChange={handleChange}
            />
          </label>
          <p className={`sub-text ${input ? "active" : null}`}>
            press enter key to submit your email <i>{bulb}</i>
          </p>
          {/* I want to show this button only when user types correctly formated email address it needs regex
          <input className={`sub-button ${input ? "active" : null}`} type="submit" onClick={handleSubmit} />*/}
        </form>
      </section>
      <section className="info">
        <h1 className="title">About me</h1>
        <ul className="about-list">
          <li>I am a self taught React developer</li>
          <li>Currently my study field is Computational biology</li>
          <li>I can provide you with my full attention</li>
          <li>I will always be in touch with you and you can contact me any time</li>
        </ul>
        <h1 className="title">What I offer</h1>
        <ul className="product-list">
          <li>Development of your SPA's frontend</li>
          <li>Written with newest technologies</li>
          <li>React functional components & hooks</li>
          <li>React class based components</li>
          <li>ES6 javascript</li>
          <li>Fully Responsive Design with CSS3</li>
          <li>3 months free bug fix</li>
          <li>1 months free changes for new customers</li>
        </ul>
        {/* <button className="resume-btn" onClick={() => setPdfOpen(!pdfOpen)}>
          {pdfOpen ? "close" : "open"} resume
        </button>
        {pdfOpen ? (
          <embed src={resume} type="application/pdf" className="resume" />
        ) : null} */}
      </section>
    </div>
  );
};

export default Contact;
