import './Portfolio.css'
import React,{useState,useCallback} from 'react'
import { FastAverageColor } from 'fast-average-color';
import {motion } from 'framer-motion/dist/es/index'
import Mobile from '../../component/mockup/Mobile'



import { ReactComponent as GithubIcon } from '../../Assets/icon/gitHub_Icon.svg';
import profileData from "../../profileData"
import {Card} from '../../component/workCard/Card'
import banerImg from '../../Assets/img/proPic.png';
    
const Portfolio =({color})=>{
    const fac = new FastAverageColor();

    const [title,setTitle] = useState(profileData.about.title)
    const [ discription,setDiscription] = useState(profileData.about.discription)
    const [banerImage ,setBanerImage] = useState(banerImg)
    const [subTitle,setSubTitle] = useState(profileData.about.tech)
    const [imgBgColor,setImgBgColor] = useState(color.LightBlue)

    // // reove duplicate from array
    // const jsonDuplicateRemover = (json) => {
    //     const unique = json.filter((item, index) => json.indexOf(item) === index);
    //     return unique;
    // }
    const uniqueData = [...new Map(profileData.portfolio.map(item => [item.tech,item])).values(),];

    const handleClick = useCallback((headTxt,discTxt,subHead,banerImg)=> {
            setTitle(headTxt)
            setDiscription(discTxt)
            setBanerImage(banerImg)
            setSubTitle(subHead)
            
            fac.getColorAsync(banerImg)
                .then(colo=>{
                    setImgBgColor(colo.hex)
                })
                .catch(
                    err=>{console.log(err)
                })
    }) 

    return(
        <div className='portfolio' style={{background:color.greywhite}} >
            <div className="p-baner" style={{backgroundImage:`linear-gradient(to right, ${color.LightBlue} 0%, ${color.greywhite} 100%)`}}>
                <div className="p-baner-content"
                    style={{color:color.DarkBlue}}>
                    <div className='p-title'>{title}</div>
                    <div className='p-subtitle' style={{color:color.grey}}>{subTitle}</div>
                    <div className='p-baner-discription'>{discription} </div>
                    <div className='baner-btn-box'>
                        <div className='baner-btn' 
                            style={{color:color.greywhite,backgroundColor:color.DarkBlue}} 
                            onClick={()=> window.open("https://github.com/")}>Github</div>
                            <div className='baner-txt-bnt'>Demo </div> 
                        </div>
                    <div class="filtter-btns">
                        {uniqueData.map((item,index)=>{
                            return(
                                <div className='filtter-btn' style={{backgroundColor:color.greywhite}} key={index}>{item.tech}</div>    
                            )
                            })
                    }
                    </div>
                </div>
                <div className='baner-img-box'>
                    <motion.div
                         className='baner-img-bg' 
                         style={{backgroundImage:`linear-gradient(to right, ${imgBgColor} 0%, ${color.DarkBlue} 100%)`}}
                         animate={{borderRadius:[
                            "70% 30% 30% 70% / 60% 40% 60% 40%",
                            "71% 29% 76% 24% / 68% 81% 19% 32% ",
                            "31% 69% 76% 24% / 68% 81% 19% 32% ",
                            "31% 69% 60% 40% / 27% 81% 19% 73% ",
                            "70% 30% 30% 70% / 60% 40% 60% 40%"
                        ]}}
                         transition={{ ease: "linear", duration: 3, repeat: Infinity }}>
                    </motion.div>
                    <div className = 'mockup'>
                        <Mobile
                            mockupImg={banerImage}/>
                    </div>
                    {/* <img  className="baner-img" src={banerImage} alt = "card-img"/> */}
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