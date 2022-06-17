import './Header.css';
import React from 'react'
import { ReactComponent as HeaderLogo } from '../../Assets/logo/headerLogo.svg';
import { ReactComponent as InstaIcon } from '../../Assets/icon/instagram_Icon.svg';
import { ReactComponent as LinkedinIcon } from '../../Assets/icon/linkedin_Icon.svg';
import { ReactComponent as GithubIcon } from '../../Assets/icon/gitHub_Icon.svg';
import { useNavigate } from 'react-router-dom';

const Header = ({LogoColor}) => {

  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="haderLogo">
        <HeaderLogo style={{fill:LogoColor}} onClick={()=>{navigate("/", {replace: true})}}/>
      </div>
      <div className="social">
          <LinkedinIcon className="social-Icon" style={{fill:LogoColor}}
             onClick={()=>{window.open('https://www.linkedin.com/in/mahath/', 'noopener,noreferrer')}} />
          <InstaIcon className="social-Icon" style={{fill:LogoColor}} 
            onClick={()=>{window.open('https://www.instagram.com/mahath.m.u/', 'noopener,noreferrer')}}/>
          <GithubIcon className="social-Icon" style={{fill:LogoColor}}
            onClick={()=>{window.open('https://github.com/Mahath-M-U/', 'noopener,noreferrer')}} />
        </div>
    </div>
  );
}
export default Header

