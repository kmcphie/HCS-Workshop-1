import React from "react";
import "./Experience.css";

function TimeLineItem(props) {
  return (
    <div className = "timeline-item">
      <h4>{props.title}</h4>
    </div>
  )
}

export default function ExperienceScreen() {
  const [activeTitle, setActiveTitle] = React.useState("");

  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <TimeLineItem 
            title = "Google Computer Science Summer Institute: Online" 
            setActiveTitle = {setActiveTitle}>
          </TimeLineItem>
          <TimeLineItem 
            title = "International Space Settlement Design Competition"
            setActiveTitle = {setActiveTitle}>
          </TimeLineItem>
          <TimeLineItem 
            title = "Research Intern in Computational Mathematics at University of California, Irvine"
            setActiveTitle = {setActiveTitle}>
          </TimeLineItem>
          <TimeLineItem 
            title = "Mathematics Intensive Summer Session at California State University, Fullerton"
            setActiveTitle = {setActiveTitle}>
          </TimeLineItem>
          <TimeLineItem 
            title = "AppJam+ Regional Mobile App Development Competition"
            setActiveTitle = {setActiveTitle}>
          </TimeLineItem>
          <div onClick = {() => {
            setActiveTitle("hcs");
          }}>Click here for more information</div>
        </div>
        <div className="highlight-background">
          <p>{activeTitle}</p>
        </div>
      </div>
    </div>
  );
}
