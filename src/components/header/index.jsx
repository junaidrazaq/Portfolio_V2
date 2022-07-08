import React from "react";
import "./header.css";
import CV from "../../assets/JunaidCV.docx";
import { FaLinkedin, FaGithub, FaGithubSquare } from "react-icons/fa";

const Header = () => {
  // :State
  const linkedInLink = "uk.linkedin.com/in/junaid-razaq-2714ab129";
  const githubWorkLink = "github.com/junaidrazaq";
  const githubCasualLink = "github.com/junaidrazaqnearu";

  // FN: Download CV Button
  const _onDownload = () => {
    const link = document.createElement("a");
    link.download = `JunaidCV`;
    link.href = CV;
    link.click();
  };

  // FN: Get In Touch Button
  const _onContact = () => {
    window.open("mailto:junaid.razaq@hotmail.com");
  };

  // FN: Links Buttons
  const _handleLinkPress = (link) => {
    window.open(`https://${link}`);
  };

  // RENDER
  return (
    <>
      {/* <div className="background_image" /> */}
      <div className="container header_container background_image">
        <h1>Hi, I'm Junaid Razaq</h1>

        <div className="header_social_media">
          <div // Github Work Link
            onClick={() => _handleLinkPress(githubCasualLink)}
            className="header_links_button"
          >
            <FaGithubSquare size={25} />
          </div>

          <div // LinkedIn Link
            className="header_links_button"
            onClick={() => _handleLinkPress(linkedInLink)}
          >
            <FaLinkedin size={25} />
          </div>

          <div // Github Casual Link
            onClick={() => _handleLinkPress(githubWorkLink)}
            className="header_links_button"
          >
            <FaGithub size={23} />
          </div>
        </div>

        <div>
          <h2>
            Take a look at some of the projects I have <br /> worked on over the
            last couple of years
          </h2>
        </div>

        <div className="header_buttons">
          <button onClick={() => _onDownload()}>Download CV</button>
          <button onClick={() => _onContact()}>Get in touch</button>
        </div>

        <div className="header_job_title">
          <h3 className="header_job_title_text">Web/Mobile Developer</h3>
        </div>
      </div>
    </>
  );
};

export default Header;
