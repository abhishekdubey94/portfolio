import React from "react";
import Typewriter from "typewriter-effect";
import "./Intro.css";

const Intro = () => {
  return (
    <>
      <div className="intro-container">
        <div className="intro">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "Hello, My name is <strong>Abhishek Dubey</strong>.<br>"
                )
                .pauseFor(1000)
                .typeString("I am a <strong>Software Engineer</strong>.")
                .start();
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Intro;
