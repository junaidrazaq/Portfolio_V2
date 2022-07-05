import React from "react";
import "./header.css";
import CV from "../../assets/JunaidCV.docx";

const Header = () => {
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

  // RENDER
  return (
    <div className="container header_container">
      <h1> Junaid Razaq Porfolio</h1>

      <div>
        <h2>
          Take a look at some of the projects I have <br /> worked on over the
          last couple of years
        </h2>
      </div>

      <div className="header_job_title">
        <h3 className="light">Javascript Developer</h3>
      </div>

      <div className="header_buttons">
        <button onClick={() => _onDownload()}>Download CV</button>
        <button onClick={() => _onContact()}>Get in touch</button>
      </div>
    </div>
  );
};

export default Header;
