import React from 'react';
import './Card.css'
import {motion,AnimatePresence } from 'framer-motion/dist/es/index'

export const Card = ({pic,color,Icon,iconLink,demoLink,headTxt,discTxt})=>{

    const cardHover = {
        rest: { scale: 1,backgroundColor:color.greywhite,ease: "easeOut", duration: 0.2, type: "tween" },
        hover: { scale: 1.1,backgroundColor:color.white,transition: { duration: 0.1,type: "tween", ease: "easeIn"}}
      };
      const btnHover = {
        rest: { display: 'none',opacity:0,ease: "easeOut", duration: 0.2, type: "tween" },
        hover: {display: 'block',opacity:1,transition: { duration: 0.3,type: "tween", ease: "easeIn"}}
      };  
      const backgroundHover = {
        rest: {opacity:1,scale:1.8,ease: "easeOut", duration: 0.2, type: "tween" },
        hover: {opacity:.61,scale:1,transition: { duration: 0.3,type: "tween", ease: "easeIn"}}
      }; 
      const underLineHover = {
        rest: {width:'8rem',ease: "easeOut", duration: 0.2, type: "tween" },
        hover: {width:'4rem',transition: { duration: 0.5,type: "tween", ease: "easeIn"}}
      };
    return(
        <AnimatePresence>
            <motion.div className="card" 
                transition={{ duration: .1}}
                initial="rest" 
                whileHover="hover" 
                animate="rest"
                variants={cardHover}
                style={{color:color.DarkBlue}}
            >
                <motion.div className='pic-box' >
                    <motion.img 
                        className="pic" 
                        src={pic} 
                        alt="smartshelter" 
                        variants={backgroundHover}/>
                </motion.div>
                <motion.div className='card-btn' 
                    whileTap={{ scale: 0.9 }}
                    variants={btnHover}
                    onClick={()=> window.open(iconLink,)}>
                    <Icon 
                        className="git-icon" 
                        style={{fill:color.DarkBlue}}/>
                </motion.div>
                <motion.div className='card-info'>
                    <motion.div 
                        className="card-info-head">
                        {headTxt}
                    </motion.div>
                    <motion.div 
                        className="underline"
                        style={{backgroundColor:color.LightBlue}}
                        variants={underLineHover}>
                    </motion.div>
                    <motion.div 
                        className="card-info-disc"
                        variants={btnHover}>
                        {discTxt}
                    </motion.div>
                    <motion.div 
                        className='demo-btn' 
                        style={{backgroundColor:color.LightBlue}}
                        whileTap={{ scale: 0.9 }}
                        variants={btnHover}
                        onClick={()=> window.open(demoLink)}>
                        Demo
                    </motion.div>
            
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}