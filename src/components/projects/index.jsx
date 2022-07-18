import Project from "./Project";
import React from "react";
import "./projects.css";

import NearU from "../../assets/Images/NearU.png";
import ZAPD from "../../assets/Images/Zapd.png";

const Projects = () => {
  // FN: On click, will send to project repo/demo
  const _onPress = (demo) => {
    window.open(demo, "_blank");
  };

  return (
    <>
      <div className="container projects_container">
        <h3 className="dark_text section_heading_text">
          Here's what I've been working on
        </h3>
        <div className="projects_container_grid">
          <Project
            heading="NearU"
            subHead="CoWorking Space App"
            body="Tech Stack: React Native, Laravel, Php, MySql, etc."
            src={NearU}
            onPress={_onPress}
            demo="https://nearu.io"
            divider
          />

          <Project
            heading="ZAP-D"
            subHead="Social Media App "
            body="Tech Stack: ReactJS, React Native and Firebase"
            src={ZAPD}
            onPress={_onPress}
            demo="https://zap-d.co"
          />
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
};

export default Projects;
