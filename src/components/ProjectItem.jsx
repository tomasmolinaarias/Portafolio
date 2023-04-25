import React from "react";
import { useNavigate } from "react-router-dom";
export const ProjectItem = ({ image, name, id }) => {
  const navegador = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        navegador("/project/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
    </div>
  );
};
