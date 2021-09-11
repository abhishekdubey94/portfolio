import "./App.css";
import React from "react";
import Intro from "./components/intro/Intro";
import AboutMe from "./components/aboutMe/AboutMe";
import ContactMe from "./components/contactMe/ContactMe";

function App() {
  return (
    <div className="App">
      <Intro />
      <AboutMe />
      <ContactMe />
    </div>
  );
}

export default App;
