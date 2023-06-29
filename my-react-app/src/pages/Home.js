import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, my name is Steve</h2>
        <div className="prompt">
          <p>
            A software developer with a passion for learning, developing and
            creating.
          </p>
          <LinkedInIcon />
          <GithubIcon />
          <EmailIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-end</h2>
            <span>
              React, HTML, CSS, Bootstrap, Flutter, MaterialUI, TailwindCSS
            </span>
          </li>
          <li className="item">
            <h2>Back-end</h2>
            <span>NodeJS, .Net, ExpressJS, MySQL, MangoDB, MSSQL</span>
          </li>
          <li className="item">
            <h2>Language</h2>
            <span>Python, Java, C, C++, C#, R, JavaScript</span>
          </li>
          <li className="item">
            <h2>Cloud</h2>
            <span>AWS</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
