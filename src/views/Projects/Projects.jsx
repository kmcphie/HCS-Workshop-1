import React from "react";
import Project from "../../components/Project/Project"

export default function ProjectsScreen() {
  return (
    <div className="screen-background">
      Here are my projects!
      <Project title = "HCS-Workshop-1" link = "https://github.com/kmcphie/HCS-Workshop-1">This website was a project for a Harvard
      Computer Society Bootcamp</Project>
      <Project title = "Data Science Final Project" link = "https://kmcphie.shinyapps.io/Social_Connections_2024/">This is a final 
      project for the data science class that I am taking this semester.</Project>
    </div>
  );
}
