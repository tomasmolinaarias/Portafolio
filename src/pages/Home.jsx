import React,{useRef}from "react";
import "../Style/Home.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import cv from "../assets/document/CV_new.pdf";
export const Home = () => {
  const correoRef = useRef(null);
  const telefonoRef = useRef(null);

  const handleCopiarClick = (ref) => {
    const range = document.createRange();
    range.selectNode(ref.current);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Datos copiados al portapapeles");
  };

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
        <div className="yo">
        <ol className="list">
          <li className="item">
            <span>Hola a todos! Soy un apasionado del desarrollo de software, actualmente soy estudiante de Ingeniería en Informática en INACAP y también cursé el programa Full-Stack en JavaScript de Desafío Latam. Como participante activo en la Incubadora de Desafío Latam, siempre estoy en la búsqueda de desafíos y oportunidades para crecer como profesional. Mi enfoque es dar lo mejor de mí en este viaje de desarrollo de software. Valoraría un entorno laboral con horario flexible que me motive a mejorar constantemente.</span>
          </li>
          <br />
        </ol>
      </div>


      </div>
  
      <div className="skills">
        <h2>TECNOLOGIA</h2>
        <ol className="list">
          <li className="item">
            <h4>Lenguajes</h4>
            <span> JavaScript, Python, CSS, HTML. </span>
          </li>
          <hr />
          <li className="item">
            <h4>Frameworks y bibliotecas:</h4>
            <span>
              Node.js, Express, Docker, React, Django, Boostrap, Sass, Angular,
              Handlebars.
            </span>
          </li>
          <hr />
          <li className="item">
            <h4>Base de datos</h4>
            <span> MySQL, PostgreSQL, MongoDB.</span>
          </li>
          <hr />
          <li className="item">
            <h4>Herramientas</h4>
            <span> Git, GitHub.</span>
          </li>
          <hr />
          <li className="item">
            <h4>Sistema Operativo</h4>
            <span> Mac OS, Windows 10.</span>
          </li>
          <hr />
        </ol>
      </div>
      <div className="contacto">
        <h2>CONTACTO</h2>
        <ol className="list">
          <li className="item2">
            <h4> EMAIL :</h4>
            <span ref={correoRef}>victortomasmolinaarias@gmail.com</span>
            <button className='btn-copy' onClick={() => handleCopiarClick(correoRef)}><ContentCopyIcon/></button>
          </li>
          <br />
          <hr />
          <li className="item2">
            <h4>TELEFONO :</h4>
            <span ref={telefonoRef}>+56973751229</span>
            <button className='btn-copy' onClick={() => handleCopiarClick(telefonoRef)}><ContentCopyIcon/></button>
          </li>
          <hr />
          <li className="item2">
            <h4>CURRICULUM :</h4>

            <a href={cv} download>
              <button className="btn">DESCARGAR</button>
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
};
