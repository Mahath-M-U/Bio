import React from 'react'
import './Button.css'

const Button = ({BgColor,FColor,Text,Icon,url}) => {
    return (
        <div className="button" style={{background:BgColor}} 
          onClick={()=>{window.open(url, '_blank', 'noopener,noreferrer')}}>
            <Icon className="B-Icon" style={{fill:FColor}}/>
            <div className="B-txt" style={{color:FColor}}>{Text}</div>
        </div>
    );
    }

    export default Button;