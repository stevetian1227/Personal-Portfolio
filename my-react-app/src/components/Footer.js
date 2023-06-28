import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <LinkedInIcon />
        <GitHubIcon />
      </div>
      <p> Mobile: 0413938895 </p>
      <p> Email: stevegao1227@gmail.com </p>
      <p> &copy; SteveGao.com </p>
    </div>
  );
}

export default Footer;
