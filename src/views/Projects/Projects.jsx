import React from "react";
import Project from "../../components/Project/Project"

export default function ProjectsScreen() {
  return (
    <div className="screen-background">
      <Project 
        title = "HCS-Workshop-1" 
        link = "https://github.com/kmcphie/HCS-Workshop-1"
        description = "This website was created as part of a Harvard Computer Society bootcamp. Click here to view its GitHub repository."
      ></Project>
      <Project 
        title = "Social Connectedness in the Harvard Class of 2024" 
        link = "https://kmcphie.shinyapps.io/Social_Connections_2024/"
        description = "This is the final project for the data science class that I am taking this semester. Click here to see it."
      ></Project>
    </div>
  );
}