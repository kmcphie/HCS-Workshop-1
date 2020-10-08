import React from "react";
import "./About.css";
import HeadShot from "../../assets/kat_pic.png";

function AboutItem(props) {
  return (
    <div className = "intro-item">
      <h1>{props.title}</h1>
    </div>
  )
}

export default function AboutScreen() {
  const [activeTitle, setActiveTitle] = React.useState("BLANK");

  return (
    <div className="screen-background">
      <div className = "extra-info">
        <AboutItem 
          title = "About Me" 
          setActiveTitle = {setActiveTitle}></AboutItem>
      </div>
      <div className="intro-background">
        <div className="intro-item">
        Katherine McPhie studies Computer Science at Harvard University. She is a member of the 2020 virtual cohort for Google’s 
        Computer Science Summer Institute, and a Coolidge Scholar.

        Katherine has been profiled by Spectrum News, Teen Influence, L.A. Parent, Girls Life, Mother Nature News, Orange Coast Magazine,
         Irvine Weekly, and the Orange County Register. Diversity in Action magazine recently named her “20 Under 20: Young Innovators Who 
         Are Already Changing the World.” In 2019, she won a $10,000 Gloria Barron Prize for Young Heroes for her work in the tech-for-good 
         space.

        Katherine co-founded Open Sesame: Coding for Kids in 2018 to teach coding to children in homeless and domestic violence shelters.
         She has been honored by the California State Assembly and GO Campaign International. She earned the Presidential Volunteer 
         Service Award, the Rotary Youth Service Scholarship, the Prudential Spirit of Community Award, and was named a Disneyland 
         Dreamers and Doers Luminary.
          
        At Harvard, Katherine sings with the University Choir, and is a member of the Wind Ensemble, the Latter-day Saint Student 
        Association, and several tech clubs. She enjoys playing piano and trumpet, reading, spending time with family and friends, 
        and is active in her church community. 
        </div>
        <div className="intro-item">
          <img src = {HeadShot} className = "intro-picture"/>
        </div>
      </div>
      <div className = "extra-info">
        <AboutItem 
          title = "Learn more" 
          setActiveTitle = {setActiveTitle}></AboutItem>
      </div>
      <div onClick = {() => {
        setActiveTitle("katherinemcphie@college.harvard.edu");
      }}>Click here to see contact information...</div>
      <div className="extra-info">
        <p>{activeTitle}</p>
      </div>
    </div>
  );
}
