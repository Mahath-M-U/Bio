import React,{useState} from 'react';
import './Card.css'
import {motion,AnimatePresence } from 'framer-motion/dist/es/index'
import { FastAverageColor } from 'fast-average-color';



export const Card = ({bgImg,bgColor,txtColor,lineColor,Icon,iconLink,headTxt,subHead,discTxt,handle})=>{
    const fac = new FastAverageColor();

    const [imgBgColor,setImgBgColor] = useState(lineColor)

    fac.getColorAsync(bgImg).then(res=>{
    setImgBgColor(res.hex)
        return res.hex;
    }).catch(err=>{
        console.log(err)
    })


    const cardHover = {
        rest: { scale: 1,ease: "easeOut", duration: 0.2, type: "tween" },
        hover: { scale: 1.1,transition: { duration: 0.2,type: "tween", ease: "easeIn"}}
      };
      const btnHover = {
        rest: { display: 'none',opacity:0,ease: "easeOut", duration: 0.2, type: "tween" },
        hover: {display: 'block',opacity:1,transition: { duration: 0.4,type: "tween", ease: "easeIn"}}
      };  
      const underLineHover = {
        rest: {width:'3rem',opacity:0,ease: "easeOut", duration: 0.2, type: "tween" },
        hover: {width:'4rem',opacity:1,transition: { duration: 0.5,type: "tween", ease: "easeIn"}}
      };
    return(
        <AnimatePresence >
            <motion.div className="card" onClick={()=>handle(headTxt,discTxt,subHead,bgImg)} 
                initial="rest" 
                whileHover="hover" 
                animate="rest"
                variants={cardHover}
                style={{color:txtColor,background:bgColor}}>

                <motion.div className='img-box' >
                    <motion.div 
                        className='card-img'
                        style={{backgroundImage:`linear-gradient(to top,${imgBgColor}29 30%, ${lineColor} 100%),url(${bgImg})`}}
                        />  
                </motion.div>
                <motion.div className='card-btn' 
                    whileTap={{ scale: 0.9 }}
                    variants={btnHover}
                    onClick={()=> window.open(iconLink)}>
                    <Icon 
                        className="git-icon" 
                        style={{fill:txtColor}}/>
                </motion.div>
                <motion.div className='card-info'>
                    <motion.div 
                        className="card-info-head">
                        {headTxt}
                    </motion.div> 
                    <motion.div 
                        className="underline"
                        style={{backgroundColor:imgBgColor}}  
                        variants={underLineHover}>
                    </motion.div>       
                </motion.div> 
            </motion.div>
        </AnimatePresence>
    )
}
