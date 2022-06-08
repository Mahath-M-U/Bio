import React from 'react'
import './Footer.css'
import { ReactComponent as Home } from '../Assets/home_Icon.svg';
import { ReactComponent as About } from '../Assets/about_Icon.svg';
import { ReactComponent as Works } from '../Assets/work_Icon.svg';
import { ReactComponent as Services } from '../Assets/services_icon.svg';
import { useNavigate } from 'react-router-dom';

const Footer =({IconColor,TabColor}) =>{

    const navigate = useNavigate();

    return (
        <div className="footer" style={{color:IconColor,backgroundColor: TabColor}}>
            <div className="NavBar">
                <ul className="icons">
                    <li className="icon" onClick={()=>{navigate("/", {replace: true})}}><Home style={{fill:IconColor}} /></li>
                    <li className="icon" onClick={()=>{navigate("/about", {replace: true})}}><About style={{fill:IconColor}}/></li>
                    <li className="icon" onClick={()=>{navigate("/works", {replace: true})}}><Works style={{fill:IconColor}}/></li>
                    <li className="icon" onClick={()=>{navigate("/services", {replace: true})}}><Services style={{fill:IconColor}}/></li>
                </ul>
                <ul className="texts">
                    <li className="text" onClick={()=>{navigate("/", {replace: true})}}>HOME</li>
                    <li className="text" onClick={()=>{navigate("/about", {replace: true})}}>ABOUT</li>
                    <li className="text" onClick={()=>{navigate("/works", {replace: true})}}>WORKS</li>
                    <li className="text" onClick={()=>{navigate("/services", {replace: true})}}>SERVICES</li>
                </ul>
            </div>
        </div>
    )
}
export default Footer;