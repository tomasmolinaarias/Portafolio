import React from "react";
import "../Style/Home.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import cv from "../assets/document/CV_new.pdf";
export const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>VICTOR MOLINA</h2>
        <div className="prompt">
          <p>FULL-STACK </p>
          <a href="https://github.com/tomasmolinaarias" target="blank">
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/victormolinaarias"
            target="blank"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h2>TECNOLOGIA</h2>
        <ol className="list">
          <li className="item">
            <h4>Front-end</h4>
            <span>React.js, Handlebars.js, Bootstrap, HTML/CSS</span>
          </li>
          <hr />
          <li className="item">
            <h4>Back-end</h4>
            <span>Node.js, Express, PostgreSQL, MongoDB, SQL, Docker</span>
          </li>
          <hr />
          <li className="item">
            <h4>Lenguajes</h4>
            <span> JavaScript, Python</span>
          </li>
          <hr />
        </ol>
      </div>
      <div className="contacto">
        <h2>CONTACTO</h2>
        <ol className="list">
          <li className="item2">
            <h4> EMAIL :</h4>
            <span id="correo">victortomasmolinaarias@gmail.com</span>
          </li>
          <br />
          <hr />
          <li className="item2">
            <h4>PHONE :</h4>
            <span>+56973751229</span>
          </li>
          <hr />
          <li className="item2">
            <h4>CURRICULUM :</h4>

            <a href={cv} download>
              <button className="btn">DESCARGAR</button>
            </a>
          </li>
          <hr />
        </ol>
      </div>
    </div>
  );
};
