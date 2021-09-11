import React from "react";
import github from "./github-2.png";
import gmail from "./gmail.png";
import linkedin from "./linkedin.png";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <>
      <div className="contact-me-container">
        <div className="contact-me">
          <h3>Contact Me</h3>
          <div className="icon-container">
            <div className="icon">
              <a href="mailto:abhishekdubey94@gmail.com" target="_blank">
                <img src={gmail} alt="gmail" />
              </a>
            </div>
            <div className="icon">
              <a href="https://github.com/abhishekdubey94" target="_blank">
                <img src={github} alt="github" />
              </a>
            </div>
            <div className="icon">
              <a
                href="https://www.linkedin.com/in/abhishekdubey94/"
                target="_blank"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
