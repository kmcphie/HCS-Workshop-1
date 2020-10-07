import React from "react";
import "./About.css";
import CutePic from "../../assets/kat_pic.png";

export default function AboutScreen() {
  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <img src = {CutePic} className = "intro-picture"/>
        </div>
        <div className="intro-item">
          Hi, I'm Katherine McPhie! I'm from Irvine, CA, and I'm a Harvard student studying Computer Science!
        </div>
      </div>
    </div>
  );
}
