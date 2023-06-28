import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div>
        <LinkedInIcon />
      </div>
      <p> Mobile: 0413938895 </p>
      <p> Email: stevegao1227@gmail.com </p>
      <p> &copy; SteveGao.com </p>
    </div>
  );
}

export default Footer;
