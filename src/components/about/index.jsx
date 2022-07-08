import React from "react";
import "./about.css";
import ProfilePic from "../../assets/Images/ProfilePic.png";

const About = () => {
  return (
    <div className="container about_container">
      <h1 className="heading_text">About Me</h1>

      <div className="about_skills_container_top">
        <h2 className="about_skills">HTML</h2>
        <h2 className="about_skills">CSS</h2>
        <h2 className="about_skills">JavaScript</h2>
        <h2 className="about_skills">ReactJS</h2>
        <h2 className="about_skills">React-native</h2>
        <h2 className="about_skills">GIT</h2>
        <h2 className="about_skills">xCode</h2>
        <h2 className="about_skills">Android Studio</h2>
      </div>

      <div className="about_content_container">
        <div className="about_img_container">
          <img className="about_image" src={ProfilePic} alt="project_image" />
        </div>
        <div className="about_text_container">
          <h2 className="about_text_heading">
            Hey! My name's Junaid Razaq and I'm a web/mobile developer.
          </h2>
          <h2 className="about_text_paragaph">
            I specialise in creating responsive web and mobile applications. I
            have utilised my skills in both commercial and non-commercial
            projects.
          </h2>
        </div>
      </div>

      <div className="about_skills_container_top">
        <h2 className="about_skills">NodeJS</h2>
        <h2 className="about_skills">SQL</h2>
        <h2 className="about_skills">React--testing-library</h2>
        <h2 className="about_skills">REST API</h2>
        <h2 className="about_skills">JEST</h2>
        <h2 className="about_skills">FireBase</h2>
        <h2 className="about_skills">xCode</h2>
        <h2 className="about_skills">Android Studio</h2>
      </div>
    </div>
  );
};

export default About;
