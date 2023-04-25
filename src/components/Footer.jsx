import React from "react";
import "../Style/Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/tomasmolinaarias" target="blank">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/victormolinaarias" target="blank">
          <LinkedInIcon />
        </a>
        <a href="https://twitter.com/Tomas24385667" target="blank">
          <TwitterIcon />
        </a>
        <a href="https://www.instagram.com/_.v.t.m.a._/" target="blank">
          <InstagramIcon />
        </a>
      </div>
      <p>@VictorMolina</p>
    </div>
  );
};
