import './About.css'
import React from 'react'
import Mobile from '../../component/mockup/Mobile'


const About = ({BgColor,FontColor,objColor,LiteColor}) => {
  return (
    <div className="A-About" style={{background:BgColor}}>
      <Mobile/>
    </div>
  );
}

export default About;
