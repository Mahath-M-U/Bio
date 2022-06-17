import './About.css'
import React from 'react'


const About = ({BgColor,FontColor,objColor,LiteColor}) => {
  return (
    <div className="A-About" style={{background:BgColor}}>
      <div className="A-content">
        <div className="A-head" style={{color:FontColor}}>
          About
        </div>
          <div className="A-ULine"style={{background:LiteColor}}>
          </div>
          <div className="A-disc" style={{color:FontColor}}>
            I am Mahath,I tech enthusiast lernig 
          </div>
      </div>
      <div className="BgObj">
        <div className="dots-Obj">
            <div className="dot-rows">
              <div className="dot"style={{background:objColor}}></div>
              <div className="dot"style={{background:objColor}}></div>
              <div className="dot"style={{background:objColor}}></div>
              <div className="dot"style={{background:objColor}}></div>
            </div>
            <div className="dot-rows">
              <div className="dot"style={{background:objColor}}></div>
              <div className="dot"style={{background:FontColor}}></div>
              <div className="dot"style={{background:FontColor}}></div>
              <div className="dot"style={{background:objColor}}></div>
            </div>
            <div className="dot-rows">
              <div className="dot"style={{background:objColor}}></div>
              <div className="dot"style={{background:FontColor}}></div>
              <div className="dot"style={{background:FontColor}}></div>
              <div className="dot"style={{background:objColor}}></div>
            </div>
            <div className="dot-rows">
              <div className="dot"style={{background:objColor}}></div>
              <div className="dot"style={{background:objColor}}></div>
              <div className="dot"style={{background:objColor}}></div>
              <div className="dot"style={{background:objColor}}></div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;
