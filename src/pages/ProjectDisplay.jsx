import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/Proyectlist";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../Style/ProjectDisplay.css";

export const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <a href={project.url}>
        <img src={project.image} alt="Projecto" />
      </a>
      <div>
        <p className="descripcion">
          <b>Descripción : </b>
        </p>
        <span> {project.description}</span>
        <p className="tecnologias">
          <b>Tecnologias : </b>
        </p>
        <span> {project.skills}</span>
      </div>

      <a id="iconGit" href={project.github}>
        <GitHubIcon />
      </a>
    </div>
  );
};
