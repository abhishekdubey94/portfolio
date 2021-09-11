import React from "react";
import Typewriter from "typewriter-effect";
import "./Intro.css";

const Intro = () => {
  return (
    <>
      <div className="intro-container">
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
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
            options={{ loop: true }}
          />
        </div>
      </div>
    </>
  );
};

export default Intro;
