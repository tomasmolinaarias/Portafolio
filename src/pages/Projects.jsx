import React from "react";
import { ProjectItem } from "../components/ProjectItem";
import { ProjectList } from "../helpers/Proyectlist";
import "../Style/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <div className="projectList">
        {ProjectList.map((e, idx) => {
          return (
            <ProjectItem key={idx} id={idx} name={e.name} image={e.image} />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
