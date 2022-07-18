import React from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Header from "./components/header";
import Projects from "./components/projects";

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
