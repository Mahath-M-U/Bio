import './Home.css'
import React from 'react'
import Button from './Button'
import { ReactComponent as InstaIcon } from '../Assets/instagram_Icon.svg'
import { ReactComponent as MailIcon } from '../Assets/mail_Icon.svg'
import { ReactComponent as TopBgImg } from '../Assets/bgImg2.svg'
import { ReactComponent as CenBgImg } from '../Assets/bgImg1.svg'
import { ReactComponent as BtBgImg } from '../Assets/dotLong.svg'

const Home = ({BgColor,FontColor,objColor,LiteColor}) => {
  return (
      <div className="H-Home" style={{background:BgColor}}>
          <div className="BG">
            <TopBgImg className="Bg-Top"/>
            <CenBgImg className="Bg-Cen"/>
            <BtBgImg className="Bg-Bt"/>
          </div>
        <div className="H-content">
          <div className="H-head" style={{color:FontColor}}>
            <div className="H-head-hi">Hi<span className="heading-dot" style={{color:objColor}}>.</span></div>
            <div className="H-sub-head">
              I am Mahath M U
            </div>
            <div className="H-ULine" style={{background:LiteColor}}></div>
          </div>
          <div className="H-disc" style={{color:FontColor}}>
          I'm a web developer. I have a strong interest in technology,
           which motivates me to attempt new things on a regular basis.
            I'm always on the lookout for new technologies, like as IoT , Reactjs, and so on...
          </div>
          <div className="H-buttons">
            <Button className="H-button"
              BgColor ={FontColor}
              FColor = {BgColor}
              Text = "Instagram"
              Icon ={InstaIcon}
              url = 'https://www.instagram.com/mahath.m.u/'
            /> 
            <Button className="H-button"
              BgColor ={objColor}
              FColor = {FontColor}
              Text = "Mail To Me"
              Icon ={MailIcon}
              url = 'mailto:mahathmundakkal@gamil.com?subject=inquiry&body=Hi Mahath,'
            /> 
          </div>
        </div>
      </div>
  );
}

export default Home;
