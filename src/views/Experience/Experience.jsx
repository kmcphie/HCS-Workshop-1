import React from "react";
import "./Experience.css";

function TimeLineItem(props) {
  return (
    <div className = "timeline-item">
      <h1>{props.title}</h1>
    </div>
  )
}

export default function ExperienceScreen() {
  const [activeTitle, setActiveTitle] = React.useState("BLANK");

  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <TimeLineItem 
            title = "Major Life Event 1" 
            setActiveTitle = {setActiveTitle}></TimeLineItem>
          <TimeLineItem 
            title = "Major Life Event 2"
            setActiveTitle = {setActiveTitle}></TimeLineItem>
        </div>
        <div onClick = {() => {
          setActiveTitle("hcs");
        }}>Click me</div>
        <div className="highlight-background">
          <h1>{activeTitle}</h1>
        </div>
      </div>
    </div>
  );
}
