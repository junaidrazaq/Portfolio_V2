import Project from "./Project";
import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <div className="container projects_container">
      <h1 className="project_header">My Projects</h1>

      <div className="projects_container_grid">
        <Project
          heading="NearU"
          subHead="CoWorking Space App"
          body="Tech Stack: React Native, Laravel, Php, MySql, etc."
        />

        <Project
          heading="ZAP-D"
          subHead="Social Media App "
          body="Tech Stack: ReactJS, React Native and Firebase"
        />

        <Project
          heading="Calculator"
          subHead="Calculator App"
          body="Tech Stack: ReactJS, React Native and Firebase"
        />

        <Project
          heading="Next"
          subHead="Calculator App"
          body="Tech Stack: ReactJS, React Native and Firebase"
        />
      </div>
    </div>
  );
};

export default Projects;
