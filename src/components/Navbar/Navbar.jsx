import React from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom';

//npm start to run project!

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>Katherine McPhie</h1>
        <div className="info-bar">
          <p className="info-item">katherinemcphie@college.harvard.edu</p>
        </div>
        <div className="info-bar">
          <Link 
            className = "info-link"
            to = {{pathname: "https://instagram.com/katherinemcphie/})"}}
            target = "_blank"
          >
            Instagram
          </Link>
          <Link 
            className = "info-link"
            to = {{pathname: "https://github.com/kmcphie})"}}
            target = "_blank"
          >
            GitHub
          </Link>
          <Link 
            className = "info-link"
            to = {{pathname: "https://linkedin.com/in/katherine-mcphie/})"}}
            target = "_blank"
          >
            LinkedIn
          </Link>
        </div>
      </div>
      <div className="nav-background">
      <Link to = {{pathname: "/about"}}>About</Link>
      <Link to = {{pathname: "/education"}}>Education</Link>
      <Link to = {{pathname: "/experience"}}>Experience</Link>
      <Link to = {{pathname: "/projects"}}>Projects</Link>
      </div>
    </>
  );
}
