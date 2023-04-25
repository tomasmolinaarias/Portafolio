import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Style/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
export const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const Location = useLocation();
  useEffect(() => {
    setExpandNavbar(false);
  }, [Location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <Button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </Button>
      </div>
      <div className="links">
        <Link to="/">inicio </Link>
        <Link to="/Projects">Proyectos</Link>
        <Link to="/Experience">Experiencias</Link>
      </div>
    </div>
  );
};
