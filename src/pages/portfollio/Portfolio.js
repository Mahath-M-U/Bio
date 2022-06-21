import './Portfolio.css'
import React from 'react'

import { ReactComponent as GithubIcon } from '../../Assets/icon/gitHub_Icon.svg';
import profileData from "../../profileData.json"
import {Card} from '../../component/workCard/Card'



const Portfolio =({color})=>{
    return(
        <div className='portfolio' style={{background:color.greywhite}} >
            <div className='cards'>
                {profileData.portfolio.map((data)=>
                    <Card
                        key={data.id}
                        bgImg = {require(`../../Assets/img/${data.bgImg}`)}
                        color ={color}
                        Icon = {GithubIcon}
                        iconLink={data.iconLink}
                        demoLink={data.demoLink}
                        headTxt={data.headTxt}
                        discTxt={data.discTxt}
                        hoverFlag/>
                    
                )}
            </div>
        </div>
    )
}
export default Portfolio;