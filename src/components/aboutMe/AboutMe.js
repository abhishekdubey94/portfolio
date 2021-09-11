import React from "react";
import "./AboutMe.css";
import myPhoto from "./MyPhoto.png";

const AboutMe = () => {
  return (
    <>
      <div className="about-me-container">
        <div className="about-me">
          <h3>About Me</h3>
          <div className="photo">
            <img src={myPhoto} alt="Abhishek" />
          </div>
          I'm a Software Enginer based in Bengluru, India. I enjoy turning
          complex problems into simple, beautiful and intuitive designs. When
          I'm not pushing pixels, you'll find me cooking, gardening or working
          out in the park. I am passionate about building excellent software
          that improves the lives of those around me. I specialize in creating
          software for clients ranging from individuals and small-businesses all
          the way to large enterprise corporations.
        </div>
      </div>
    </>
  );
};

export default AboutMe;
