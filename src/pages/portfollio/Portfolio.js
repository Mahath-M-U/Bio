import './Portfolio.css'
import React from 'react'

import img8051 from '../../Assets/img/8051LCDIMG.PNG' 
import imgrtr from '../../Assets/img/RTRIMG.png' 
import imgshelt from '../../Assets/img/smartShelterIMG.png' 
import imgwifi from '../../Assets/img/WiFiCarIMG.PNG' 

import {Card} from '../../component/workCard/Card'



const Portfolio =({color})=>{
    return(
        <div className='portfolio' style={{background:color.greywhite}}>
            <div className='cards'>
                <Card
                pic = {img8051}
                color ={color}
                />
                <Card
                pic = {imgrtr}
                color ={color}
                />
                <Card
                pic = {imgshelt}
                color ={color}
                />
                <Card
                pic = {imgwifi}
                color ={color}
                />
            </div>
        </div>
    )
}
export default Portfolio;