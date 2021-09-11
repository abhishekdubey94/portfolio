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
          <div style={{ padding: "5px 2px", justifyContent: "center" }}>
            I'm a Software Enginer based in Bengaluru, India. I enjoy turning
            complex problems into simple, beautiful and intuitive designs. I am
            passionate about building excellent software that improves the lives
            of those around me. I'm a strong team player who is able to quickly
            learn and apply new technologies. When I'm not coding, you'll find
            me cooking, playing badminton or working out.
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
