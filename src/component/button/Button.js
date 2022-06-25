import React from 'react'
import './Button.css'
import {motion } from 'framer-motion/dist/es/index'


const Button = ({BgColor,FColor,Text,Icon,url}) => {
    return (
        <motion.div
          className="button"
          whileTap={{ scale: 0.9 }}
          style={{background:BgColor}} 
          onClick={()=>{window.open(url, '_blank', 'noopener,noreferrer')}}>
            <Icon className="B-Icon" style={{fill:FColor}}/>
            <div className="B-txt" style={{color:FColor}}>{Text}</div>
        </motion.div>
    );
    }

    export default Button;