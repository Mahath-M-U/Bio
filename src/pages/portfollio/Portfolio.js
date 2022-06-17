import './Portfolio.css'
import React from 'react'

import workImg from '../../Assets/img/smartShelterIMG.png' 

import {Card} from '../../component/workCard/Card'



const Portfolio =({color})=>{
    return(
        <div className='portfolio' style={{background:color.greywhite}}>
            <div className='cards'>
                <Card
                pic = {workImg}
                color ={color}
                />
                                <Card
                pic = {workImg}
                color ={color}
                />
                                <Card
                pic = {workImg}
                color ={color}
                />
                                <Card
                pic = {workImg}
                color ={color}
                />
                                                <Card
                pic = {workImg}
                color ={color}
                />
            </div>
        </div>
    )
}
export default Portfolio;