import React from "react";
import github from "./github-2.png";
import gmail from "./gmail.png";
import linkedin from "./linkedin.png";
import github_color from "./github_color.png";
import gmail_color from "./gmail_color.png";
import linkedin_color from "./linkedin_color.png";
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
                <img
                  src={gmail}
                  onMouseOver={(e) => (e.currentTarget.src = gmail_color)}
                  onMouseOut={(e) => (e.currentTarget.src = gmail)}
                  alt="gmail"
                />
              </a>
            </div>
            <div className="icon">
              <a href="https://github.com/abhishekdubey94" target="_blank">
                <img
                  src={github}
                  onMouseOver={(e) => (e.currentTarget.src = github_color)}
                  onMouseOut={(e) => (e.currentTarget.src = github)}
                  alt="github"
                />
              </a>
            </div>
            <div className="icon">
              <a
                href="https://www.linkedin.com/in/abhishekdubey94/"
                target="_blank"
              >
                <img
                  src={linkedin}
                  onMouseOver={(e) => (e.currentTarget.src = linkedin_color)}
                  onMouseOut={(e) => (e.currentTarget.src = linkedin)}
                  alt="linkedin"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
