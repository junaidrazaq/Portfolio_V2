import Project from "./Project";
import React from "react";
import "./projects.css";

import NearU from "../../assets/Images/NearU.png";
import ZAPD from "../../assets/Images/Zapd.png";

const Projects = () => {
  return (
    <div className="container projects_container">
      <h3 className="dark_text project_heading_text">
        Here's what I've been working on
      </h3>
      <div className="projects_container_grid">
        <Project
          heading="NearU"
          subHead="CoWorking Space App"
          body="Tech Stack: React Native, Laravel, Php, MySql, etc."
          src={NearU}
          divider
        />

        <Project
          heading="ZAP-D"
          subHead="Social Media App "
          body="Tech Stack: ReactJS, React Native and Firebase"
          src={ZAPD}
        />
      </div>
    </div>
  );
};

export default Projects;
