import React from "react";
import Navigation from "./Navigation";
import "./index.css";
import Landing from "./Landing";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Landing />
      <About />
      <Experience />
      <Skills />
    </div>
  );
}

export default App;
