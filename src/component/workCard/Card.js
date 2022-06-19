import React from 'react';
import './Card.css'
import { ReactComponent as GithubIcon } from '../../Assets/icon/gitHub_Icon.svg';
import {motion,AnimatePresence } from 'framer-motion/dist/es/index'

export const Card = ({pic,color})=>{

    const cardHover = {
        rest: { scale: 1,backgroundColor:color.greywhite,ease: "easeOut", duration: 0.2, type: "tween" },
        hover: { scale: 1.1,backgroundColor:color.white,transition: { duration: 0.2,type: "tween", ease: "easeIn"}}
      };
      const btnHover = {
        rest: { display: 'none',opacity:0,ease: "easeOut", duration: 0.2, type: "tween" },
        hover: {display: 'block',opacity:1,transition: { duration: 0.4,type: "tween", ease: "easeIn"}}
      };  
      const backgroundHover = {
        rest: {opacity:.5,scale:1.8,ease: "easeOut", duration: 0.2, type: "tween" },
        hover: {opacity:1,scale:1,transition: { duration: 0.3,type: "tween", ease: "easeIn"}}
      }; 
    return(
        <AnimatePresence>
            <motion.div className="card" 
                transition={{ duration: .1}}
                initial="rest" whileHover="hover" animate="rest"
                variants={cardHover}
                style={{color:color.DarkBlue}}
            >
                <motion.div className='pic-box' >
                    <motion.img className="pic" src={pic} alt="smartshelter" variants={backgroundHover}/>
                </motion.div>
                <motion.div className='card-btn' whileTap={{ scale: 0.9 }} variants={btnHover}>
                    <GithubIcon className="git-icon" style={{fill:color.DarkBlue}}/>
                </motion.div>
                <motion.div className='card-info'>
                    <motion.div className="card-info-head"
                        >smart shelter</motion.div>
                    <motion.div className="underline"
                        animate={{ width:'6rem'}}
                        transition={{ duration: 3, times: [0, 0.2, 1] }}
                        style={{backgroundColor:color.LightBlue}}>
                        </motion.div>
                    <motion.div className="card-info-disc"
                        variants={btnHover}>
                        When a component is removed, there's no longer a chance to 
                        update its props.
                    </motion.div>
                    <motion.div className='demo-btn' 
                        style={{backgroundColor:color.LightBlue}}
                        whileTap={{ scale: 0.9 }}
                        variants={btnHover}
                        >Demo</motion.div>
            
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}