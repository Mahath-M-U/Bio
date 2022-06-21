import './Service.css'
import React from 'react'

import { ReactComponent as GithubIcon } from '../../Assets/icon/gitHub_Icon.svg';
import profileData from "../../profileData.json"
import {Card} from '../../component/workCard/Card'



const Service =({color})=>{
    return(
        <div className='service' style={{background:color.greywhite}} >
            <div className='cards'>
                {profileData.service.map((data)=>
                    <Card
                        key={data.id}
                        bgImg = {require(`../../Assets/svg/${data.bgImg}`)}
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
export default Service;