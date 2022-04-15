import React from "react";

import vukdrca from "../../shared/images/1609328418004.jfif";

const AboutMe = (props) => {
  return (
    <div className="container">
      <div className="content">
        <h1 className="title">About Me</h1>
        <div className="row">
          <div className="col">
            <img src={vukdrca} alt="vuk drca-img" />
          </div>
          <div className="col">
            <p>
              Hello, my name is Vuk Drca and I work as a freelancer in Web
              development. I work as both a front-end and back-end developer,
              but I especially like working with JavaScript. I enjoy creating
              simple, clean and functional websites which provide an enjoyable
              experience to the end user. I have a wide range of skills which
              can be easily applied to all kinds of projects.
            </p>
            <h2>How can I help you ?</h2>
            <p>
              I can help you create a website from scratch with all the
              functions you need. I can also help you to upgrade your existing
              site and solve any problems you have with it. All the websites I
              create perform equally well on the phone, tablet and computer. If
              your webpage is not responsive, I can help you solve that problem,
              too.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
