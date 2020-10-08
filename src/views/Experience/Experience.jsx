import React from "react";
import "./Experience.css";

function TimeLineItem(props) {
  return (
    <div onClick = {() => {
      props.setActiveTitle(props.title);
      props.setActiveDescription(props.description);}}
      className = "timeline-item">
      <h4>{props.title}</h4>
    </div>
  )
}

export default function ExperienceScreen() {
  const [activeTitle, setActiveTitle] = React.useState("Click on an experience to see more details!");
  const [activeDescription, setActiveDescription] = React.useState("");

  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <TimeLineItem 
            title = "Google Computer Science Summer Institute: Online"
            description = "Learned introductory project-based Javascript processing curriculum taught by Google engineers" 
            setActiveTitle = {setActiveTitle}
            setActiveDescription = {setActiveDescription}>
          </TimeLineItem>
          <TimeLineItem 
            title = "International Space Settlement Design Competition"
            description = "Won 2nd Place at Kennedy Space Center’s 4-day competition"
            setActiveTitle = {setActiveTitle}
            setActiveDescription = {setActiveDescription}>
          </TimeLineItem>
          <TimeLineItem 
            title = "Research Intern in Computational Mathematics at University of California, Irvine"
            description = "Modeled and analyzed behavior of unstructured proteins using MATLAB"
            setActiveTitle = {setActiveTitle}
            setActiveDescription = {setActiveDescription}>
          </TimeLineItem>
          <TimeLineItem 
            title = "Mathematics Intensive Summer Session (MISS) - California State University, Fullerton"
            description = "Earned top accolade of “MISS Mathematician” in free, intensive, competitive, 4-week full-day program"
            setActiveTitle = {setActiveTitle}
            setActiveDescription = {setActiveDescription}>
          </TimeLineItem>
          <TimeLineItem 
            title = "AppJam+ Regional Mobile App Development Competition"
            description = "Won 2nd place in Southern California with four teammates in semester-long creation of app"
            setActiveTitle = {setActiveTitle}
            setActiveDescription = {setActiveDescription}>
          </TimeLineItem>
        </div>
        <div className = "info-background">
          <div className="highlight-background">
            <h1>{activeTitle}</h1>
          </div>
          <div className="more-info">
            <h3>{activeDescription}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
