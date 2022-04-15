import React from "react";
import CV from "../../others/CV-Vuk-Drča.pdf"
import { AiOutlineGithub, AiFillLinkedin, AiOutlineCloudDownload } from "react-icons/ai";

const Footer = (props) => {
  return (
    <footer>
      <div className="container">
        <div>
          <a href={CV} target="_blank">
            <AiOutlineCloudDownload />
          </a>
          <a href="https://github.com/DrcaVuk" target="_blank">
            <AiOutlineGithub />
          </a>
          <a href="https://www.linkedin.com/in/vuk-drca-7a1579185/" target="_blank">
            <AiFillLinkedin />
          </a>
        </div>
      </div>
      <div className="container">
        <p>
          Copyright © myworlds.win 2022. All Rights Reserved. Developed by Vuk
          Drca
        </p>
      </div>
    </footer>
  );
};

export default Footer;
