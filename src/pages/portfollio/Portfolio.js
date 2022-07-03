import './Portfolio.css'
import React,{useState,useCallback} from 'react'

import { ReactComponent as GithubIcon } from '../../Assets/icon/gitHub_Icon.svg';
import profileData from "../../profileData"
import {Card} from '../../component/workCard/Card'
import banerImg from '../../Assets/img/smartShelterIMG.png';




const Portfolio =({color})=>{
    const [title,setTitle] = useState(profileData.about.title)
    const [ discription,setDiscription] = useState(profileData.about.discription)
    const [banerImage ,setBanerImage] = useState(banerImg)
    const [subTitle,setSubTitle] = useState(profileData.about.tech)
    const handleClick = useCallback((headTxt,discTxt,subHead,banerImg)=> {
            setTitle(headTxt)
            setDiscription(discTxt)
            setBanerImage(banerImg)
            setSubTitle(subHead)
    }) 
    return(
        <div className='portfolio' style={{background:color.greywhite}} >
            <div className="p-baner" style={{backgroundImage:`linear-gradient(to right, ${color.LightBlue} 0%, ${color.greywhite} 100%)`}}>
                <div className="p-baner-content"
                    style={{color:color.DarkBlue}}>
                    <div className='p-title'>{title}</div>
                    <div className='p-subtitle' style={{color:color.grey}}>{subTitle}</div>
                    <div className='p-baner-discription'>{discription} </div>
                </div>
                <div className='baner-img-box'>
                    <img  className="baner-img" src={banerImage} alt = "card-img"/>
                </div>
                <div class="filtter-btns">
                    {profileData.portfolio.map((item,index)=>{
                        return(
                            <div className='filtter-btn' style={{backgroundColor:color.Blue}} key={index}>{item.tech}</div>
                        )
                        })
                }
                </div>
            </div>
            <div className='p-cards'>
                {profileData.portfolio.map((data)=>
                        <Card className="p-card" 
                            key={data.id}
                            bgImg = {require(`../../Assets/img/${data.bgImg}`)}
                            bgColor = {data.bgColor}
                            txtColor={color.DarkBlue}
                            lineColor={color.Blue}
                            Icon = {GithubIcon}
                            iconLink={data.iconLink}
                            headTxt={data.headTxt}
                            discTxt={data.discTxt}
                            subHead={data.tech}
                            handle = {handleClick}/>
                )}
            </div>
        </div>
    )
}
export default Portfolio;