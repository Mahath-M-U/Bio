import React,{useState} from 'react';
import './Card.css'
import { ReactComponent as GithubIcon } from '../../Assets/icon/gitHub_Icon.svg';
import {motion} from 'framer-motion/dist/es/index'

export const Card = ({pic,color})=>{
    const [focus, setFocus] = useState(false);
    return(
        <motion.div className="card" 
            onMouseEnter ={e=>{setFocus(true)}}
            onMouseLeave ={e=>{setFocus(false)}}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <motion.div className='pic-box'
                whileHover={{ scale: 1.1 }}
            >
                <img className="pic" src={pic} alt="smartshelter"/>
            </motion.div>
            {focus&&<motion.div className='card-btn'>
                <GithubIcon className="git-icon" style={{fill:color.DarkBlue}}/>
            </motion.div>}
            <motion.div className='card-info'>
                <motion.div className="card-info-txt">smart shelter</motion.div>
                <motion.div className='demo' 
                    style={{backgroundColor:color.LightBlue}}>Demo</motion.div>
            </motion.div>
        </motion.div>
    )
}