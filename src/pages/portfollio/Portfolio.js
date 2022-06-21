import './Portfolio.css'
import React from 'react'

import img8051 from '../../Assets/img/8051LCDIMG.PNG' 
import imgrtr from '../../Assets/img/RTRIMG.png' 
import imgshelt from '../../Assets/img/smartShelterIMG.png' 
import imgwifi from '../../Assets/img/WiFiCarIMG.PNG'

 
import { ReactComponent as GithubIcon } from '../../Assets/icon/gitHub_Icon.svg';
import profileData from "../../Assets/json/profileData.json"
import {Card} from '../../component/workCard/Card'



const Portfolio =({color})=>{
    return(
        <div className='portfolio' style={{background:color.greywhite}}>
            <div className='cards'>
                {profileData.portfolio.map((data)=>
                    <Card
                    pic = {imgrtr}
                    color ={color}
                    Icon = {GithubIcon}
                    iconLink={data.iconLink}
                    demoLink={data.demoLink}
                    headTxt={data.headTxt}
                    discTxt={data.discTxt}/>
                )}
            </div>
        </div>
    )
}
export default Portfolio;