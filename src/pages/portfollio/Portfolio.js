import './Portfolio.css'
import React,{useState,useCallback} from 'react'

import { ReactComponent as GithubIcon } from '../../Assets/icon/gitHub_Icon.svg';
import profileData from "../../profileData"
import {Card} from '../../component/workCard/Card'
import banerImg from '../../Assets/img/proPic.png';
    
const Portfolio =({color})=>{
    const uniqueData = [...new Map(profileData.portfolio.map(item =>[item.tech]))];
    const [banerData,setBanerData] = useState([
        profileData.about.title,
        profileData.about.discription,
        profileData.about.tech,
        banerImg,
    ])
    const [filt,setFilt] = useState(uniqueData.map((item)=>item[0]))
    const handleClick = useCallback((headTxt,discTxt,subHead,banerImg)=> {
            setBanerData([headTxt,discTxt,subHead,banerImg])    
    }) 
    const handleFilter = useCallback((query)=>{
        setFilt([query])

    },[])

    return(
        <div className='portfolio' style={{background:color.greywhite}} >
            <div className="p-baner"
                style={{backgroundColor:color.greywhite}}>
                <div className="p-baner-content"
                    style={{
                        backgroundImage:`linear-gradient(to right, ${color.LightBlue} 0%,
                                         ${color.greywhite}00 100%),url(${banerData[3]})`,
                        color:color.DarkBlue, 
                        }}>
                    <div className='p-title'>{banerData[0]}</div>
                    <div className='p-subtitle' style={{color:color.DarkBlue}}>{banerData[2]}</div>
                    <div className='p-baner-discription'>{banerData[1]} </div>
                    <div className='baner-btn-box'>
                        <div className='baner-btn' 
                            style={{color:color.greywhite,backgroundColor:color.DarkBlue}} 
                            onClick={()=> window.open(`https://github.com/`)}>Demo</div>
                            <div className='baner-txt-bnt'
                            onClick={()=> window.open(`https://github.com/`)}>Github </div> 
                        </div>
                    <div class="filtter-btns">
                        {uniqueData.map((item,index)=>{
                            return(
                                <div className='filtter-btn'
                                 style={{backgroundColor:color.greywhite}} key={index}
                                 onClick = {()=>handleFilter(item[0])}>{item[0]}</div>    
                            )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='p-cards'>
                {profileData.portfolio.map((data)=>{
                    return(
                        filt.includes(data.tech)?<Card className="p-card" 
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
                            handle = {handleClick}/>:<></>
                        )}
                )}
            </div>
        </div>
    )
}
export default Portfolio;